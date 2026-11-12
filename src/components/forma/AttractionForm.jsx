import { useState, useEffect } from "react";
import { checkAdminSession, adminLogin, addAttraction, getCityDistricts, addCityDistrict } from "../../api/api";
import datas from "../../datas/minimalIndex.js";
import { useSelector } from "react-redux";
import { useForm, useFieldArray } from "react-hook-form";
import './AttractionForm.scss';

// import { pathData } from "./pathData";

const AttractionForm = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const lang = useSelector((state) => state.language.lang);

  const [cityDistricts, setCityDistricts] = useState([]);
  const [isLoadingDistricts, setIsLoadingDistricts] = useState(false);
  const [isNewDistrict, setIsNewDistrict] = useState(false);
  const [selectedDistrictIds, setSelectedDistrictIds] = useState([]);

  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      type: "attraction",
      path: "",
      parent_id: "",
      is_active: 1
    }
  });

  const selectedCityId = watch("parent_id");

  useEffect(() => {
    checkAdminSession()
      .then((data) => {
        setIsAdmin(data.isAdmin);
      })
      .catch((error) => {
        console.error("Session check error:", error);
        setIsAdmin(false);
      })
      .finally(() => {
        setIsChecking(false);
      });
  }, []);

  useEffect(() => {
    if (!selectedCityId) {
      setCityDistricts([]);
      return;
    }

    setIsLoadingDistricts(true);

    getCityDistricts(selectedCityId)
      .then((data) => {
        setCityDistricts(data);
      })
      .catch((error) => {
        console.error("Error loading city districts:", error);
        setCityDistricts([]);
      })
      .finally(() => {
        setIsLoadingDistricts(false);
      });
  }, [selectedCityId]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError("");

    try {
      await adminLogin(password);
      setIsAdmin(true);
    } catch (error) {
      setLoginError("Неверный пароль или ошибка сервера");
    }
  };

  if (isChecking) { return <div>Checking session...</div>; }
  if (isAdmin === false) {
    return (
      <form onSubmit={handleLogin}>
        <h1>Вход администратора</h1>

        <label>
          Пароль:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <button type="submit">Войти</button>

        {loginError && <p>{loginError}</p>}
      </form>
    );
  }


  const onSubmit = async (data) => {
    try {
      const districtIds = [...selectedDistrictIds];

      if (isNewDistrict) {
        const district = await addCityDistrict({
          parent_id: data.parent_id,
          name_ru: data.district_name_ru,
          name_uk: data.district_name_uk,
          name_de: data.district_name_de
        });

        districtIds.push(district.id);
      }

      data.cityDistrict_ids = districtIds;

      const result = await addAttraction(data);
      alert(`Достопримечательность добавлена. ID: ${result.id}`);
    } catch (error) {
      console.error("Ошибка добавления:", error);
      alert("Не удалось добавить достопримечательность");
    }
  };


  return (
    <form className='forma' onSubmit={handleSubmit(onSubmit)}>
      <h1>Добавить достопримечательность</h1>

      <div className='field'>
        {/* патч */}
        <label>Path: <span className='note'>(в path используем только подчёркивания _, без дефисов -)</span>

          <input
            type="text"
            {...register("path", { required: true })}
            placeholder="Например, museum_bonn"
          />
        </label>
      </div>
      <div className='field'>

        {/* Выбор города */}
        <label> Город:
          <select {...register("parent_id", { valueAsNumber: true })}>
            <option value="">Выбери город</option>
            {Object.entries(datas.cities)
              .sort(([, a], [, b]) =>
                a[lang].localeCompare(b[lang], lang)
              )
              .map(([key, city]) => (
                <option key={key} value={city.id}>
                  {city[lang]}
                </option>
              ))}
          </select>
        </label>


        {/* Выбор районов города */}
        <div>
          <p>Районы города:</p>

          {cityDistricts.map((district) => (
            <label key={district.id}>
              <input
                type="checkbox"
                checked={selectedDistrictIds.includes(district.id)}
                onChange={(event) => {
                  if (event.target.checked) {
                    setSelectedDistrictIds((prev) => [
                      ...prev,
                      district.id
                    ]);
                  } else {
                    setSelectedDistrictIds((prev) =>
                      prev.filter((id) => id !== district.id)
                    );
                  }
                }}
              />
              {district.name}
            </label>
          ))}

          <label>
            <input
              type="checkbox"
              checked={isNewDistrict}
              onChange={(event) => setIsNewDistrict(event.target.checked)}
            />
            Такого района нет
          </label>
        </div>

        {isNewDistrict && (
          <>
            <label>
              Название района (RU):
              <input {...register("district_name_ru")} />
            </label>

            <label>
              Назва району (UK):
              <input {...register("district_name_uk")} />
            </label>

            <label>
              Stadtteilname (DE):
              <input {...register("district_name_de")} />
            </label>
          </>
        )}

      </div>
      <div className='field'>
        {/* Название */}
        <label> Название (RU): <input type="text" {...register("name_ru", { required: true })} placeholder="Например, Форт Тюнген" /> </label>
        <label> Название (UK): <input type="text" {...register("name_uk", { required: true })} placeholder="Наприклад, Форт Тюнген" /> </label>
        <label> Название (DE): <input type="text" {...register("name_de", { required: true })} placeholder="Например, Fort Thüngen" /> </label>

      </div>
      <div className='field'>
        {/* Короткое описание */}
        <label> Краткое описание (RU): <textarea {...register("short_description_ru", { required: true })} placeholder="Краткое описание на русском" /> </label>
        <label> Короткий опис (UK): <textarea {...register("short_description_uk", { required: true })} placeholder="Короткий опис українською" /> </label>
        <label> Kurzbeschreibung (DE): <textarea {...register("short_description_de", { required: true })} placeholder="Kurzbeschreibung auf Deutsch" /> </label>

      </div>

      <button type="submit">Отправить данные в БД</button>
    </form>
  )
}

export default AttractionForm

//     <div className='forma'>

//       {/* // -------------- Тип достопримечательности */}
//       <div className="type">
//         <label><span className="required">*</span>Тип достопримечательности</label>
//         <select {...register("type", { required: "Выберите тип" })}>
//           <option value="">Выберите тип</option>
//           <option value="museum">Музеи</option>
//           <option value="cathedral">Соборы, церкви и монастыри</option>
//           <option value="palace_or_castle">Дворцы и замки</option>
//           <option value="amusement_park">Парки развлечений</option>
//           <option value="historical_building">Исторические сооружения</option>
//           <option value="historical_area">Исторические районы</option>
//           <option value="technical_structure">Технические сооружения</option>
//           <option value="nature">Природа</option>
//           <option value="monument_or_fountain">Памятники и фонтаны</option>
//           <option value="square">Площади</option>
//           <option value="landmark">Знаковые места</option>
//           <option value="viewpoint">Смотровые площадки</option>
//         </select>
//         <p className='note'>Если ничего не подходит, а надо, то добавляем в файл src/components/AttractionsFilters (в объекте attractionTypes). И не забываем обновить форму</p>
//       </div>

//       {/* // -------------- Рейтинг */}
//       <div className="type">
//         <label><span className="required">*</span>Рейтинг</label>
//         <select {...register("rating", { required: "Выберите рейтинг" })}>
//           <option value="">Выберите рейтинг</option>
//           <option value="top">Топовый</option>
//           <option value="popular">Популярный</option>
//           <option value="local">Локальный</option>
//         </select>
//         <p className='note'>Рейтинг выбирается строго по таблице</p>
//       </div>

//       {/* // -------------- Местоположение */}
//       <div className="field">
//         <label>Район города</label>
//         <input type="text" placeholder="Например: район Altstadt-Nord (округ Innenstadt)" {...register("cityDistrict")} />
//       </div>

//       {/* // -------------- Координаты */}
//       <div className="coord">
//         <h3>Координаты</h3>

//         <div className="coord__row">
//           <div className="field">
//             <label>Широта (lat)</label>
//             <input type="number" step="any" placeholder="50.93845" {...register("coord.lat", { valueAsNumber: true })} />
//           </div>

//           <div className="field">
//             <label>Долгота (lng)</label>
//             <input type="number" step="any" placeholder="6.96260" {...register("coord.lng", { valueAsNumber: true })} />
//           </div>
//         </div>
//       </div>

//       {/* // -------------- Вложенные достопримечательности */}
//       <div className='subObjects'>
//         <label><span className="note">Заполняем только, если есть вложенные достопримечательности</span>. Это связь с дочерними дост-тями</label>
//         {sabInputFields.map((field, index) => (
//           <input key={field.id} type="text" {...register(`subObjectsInputs.${index}.value`)} placeholder="вставляем id вложенной достопримечательности" />
//         ))}
//         <button type="button" onClick={() => append_sabInput("")}> Добавить абзац</button>
//         <span className='note'>(если вложенных достопримечательностей больше, чем одна)</span>
//       </div>

//       {/* // -------------- Перечень дочерних достопримечательностей */}
//       <div className='description'>
//         <label><span className="note">Заполняем только, если есть вложенные достопримечательности.</span>Перечень дочерних достопримечательностей</label>
//         {sabDickripInputFields.map((item, i) => (
//           <div key={item.id} className='subobject-item'>
//             {i === 0 && (
//               <textarea className='description-textarea' {...register(`shortDescriptionSubObjects.title`)} rows={2} placeholder="Пример: В старом городе Люденшайда расположены такие достопримечательности:" />
//             )}
//             <input type="text" {...register(`shortDescriptionSubObjects.items.${i}.bold`)} placeholder="Название достопримечательности, например: Церковь Спасителя" />
//             <input type="text" {...register(`shortDescriptionSubObjects.items.${i}.text`)} placeholder="Краткое описание достопримечательности" />
//           </div>
//         ))}

//         <button type="button" onClick={() => append_sabDiscripInput({ bold: "", text: "" })}>
//           Добавить достопримечательность
//         </button>
//       </div>

//       {/* // -------------- Является ли эта достопримечательность дочерней? */}
//       <div className='unesco'>
//         <label>Является ли эта достопримечательность дочерней?</label>
//         <div>
//           <label><input type="radio" value="true" {...register("isChildAttraction")} /> Да </label>
//           <label><input type="radio" value="false" {...register("isChildAttraction")} /> Нет </label>
//         </div>
//       </div>

//       {/* кнопка "Подробнее" - показываем только если дочерняя */}
//       {watchedFields.isChildAttraction === "true" && (
//         <div className="show-more-question">
//           <label><span className="required">*</span>Нужна ли кнопка "Подробнее"?</label>
//           <p className='note'>в том смысле, что нужен ли переход на отдельную страницу. Если описания мало, то можно описать прямо в карточке</p>
//           <div>
//             <label> <input type="radio" value="true" {...register("showMore")} /> Да </label>
//             <label> <input type="radio" value="false" {...register("showMore")} /> Нет </label>
//           </div>
//         </div>
//       )}

//       {/* // -------------- Фото  */}
//       <div className='foto'>
//         <label><span className="required">*</span>Фотография</label>
//         <input type="text" {...register("foto", { required: "Поле Фотография обязательно" })} placeholder="Путь к фото в формате Country/region/city/attraction/001.jpg" />
//         <p className='note'>Если нужно добавить фото в фотогелерею, то работаем в файле src/datas/fotos/страна(de.js или ua.js). Указать патч города, потом патч дост-ти</p>
//       </div>

//       {/* // -------------- Официальный сайт */}
//       <div className='official-site'>
//         <label><input type="checkbox" {...register("hasOfficialSite")} />Есть ли официальный сайт</label>
//         <input type="text" {...register("officialSiteLink")} placeholder="Ссылка на официальный сайт" />
//       </div>

//       {/* // -------------- ЮНЕСКО  */}
//       <label>
//         <input type="checkbox" {...register("isUnesco")} />
//         Объект входит в список ЮНЕСКО
//       </label>

//       {isUnesco && (
//         <div className="unesco-fields">
//           <label><input type="number" {...register("unesco.year")} placeholder="Год" /></label>

//           <label><input type="text" {...register("unesco.type")} placeholder="Тип" /></label>
//           <label><input type="text" {...register("unesco.criteria")} placeholder="Критерии" /></label>
//           <label><input type="text" {...register("unesco.epoch")} placeholder="Эпоха" /></label>
//           <label><input type="text" {...register("unesco.series")} placeholder="Серия" /></label>
//         </div>
//       )}

//       {/* // -------------- Полное описание */}
//       <div className="description">
//         <label><span className="required">*</span>Описание и история</label>
//         <p className='note'>Каждый следующий абзац - в новое поле (кнопка "Добавить поле")</p>
//         {fullFields.map((fullFields, i) => (
//           <div key={fullFields.id} placeholder="Текст абзаца" rows={3}>
//             <input type="text" {...register(`full_description.${i}.bold`)} placeholder="Жирный текст (bold)" className='description-bold' />
//             <textarea type="textarea" {...register(`full_description.${i}.text`, i === 0 ? { required: "Поле Описание обязательно" } : {})} placeholder="Текст абзаца" rows={3} className='description-textarea' />

//             <div className="move-buttons">
//               <button type="button" disabled={i === 0} onClick={() => moveFull(i, i - 1)}> ⬆ </button>
//               <button type="button" disabled={i === fullFields.length - 1} onClick={() => moveFull(i, i + 1)}> ⬇ </button>
//             </div>
//           </div>
//         ))}
//         <button type="button" onClick={() => appendFull({ bold: "", text: "" })}> Добавить абзац</button>
//       </div>

//       {/* // -------------- Практическая информация */}
//       <div className="description">
//         <label>Практическая информация</label>
//         <p className='note'>Здесь добавляем адресс, цены на билеты, режим роботы</p>
//         {ticketFields.map((ticketFields, i) => (
//           <div key={ticketFields.id} placeholder="Текст абзаца" rows={3}>
//             <input type="text" {...register(`ticketItems.${i}.bold`)} placeholder="Жирный текст (bold)" className='description-bold' />
//             <textarea type="textarea" {...register(`ticketItems.${i}.text`)} placeholder="Текст абзаца" rows={3} className='description-textarea' />

//             <div className="move-buttons">
//               <button type="button" disabled={i === 0} onClick={() => moveTicket(i, i - 1)}> ⬆ </button>
//               <button type="button" disabled={i === ticketFields.length - 1} onClick={() => moveTicket(i, i + 1)}> ⬇ </button>
//             </div>
//           </div>
//         ))}
//         <button type="button" onClick={() => appendTicket({ bold: "", text: "" })}> Добавить абзац</button>
//       </div>

//       {/* // -------------- Реликвии и ценности */}
//       <div className="description">
//         <label>Реликвии <span className='note'>(если есть)</span></label>
//         {relicsFields.map((relicsFields, i) => (
//           <div key={relicsFields.id} placeholder="Текст абзаца" rows={3}>
//             <input type="text" {...register(`relics.${i}.bold`)} placeholder="Жирный текст (bold)" className='description-bold' />
//             <textarea type="textarea" {...register(`relics.${i}.text`)} placeholder="Текст абзаца" rows={3} className='description-textarea' />

//             <div className="move-buttons">
//               <button type="button" disabled={i === 0} onClick={() => moveRelics(i, i - 1)}> ⬆ </button>
//               <button type="button" disabled={i === relicsFields.length - 1} onClick={() => moveRelics(i, i + 1)}> ⬇ </button>
//             </div>
//           </div>
//         ))}
//         <button type="button" onClick={() => appendRelics({ bold: "", text: "" })}> Добавить абзац</button>
//       </div>

//       {/* // -------------- Объекты (например экспозиции) */}
//       <div className="description">
//         <label>Объекты <span className='note'>(например экспозиции в музее, не путать с дочерними объектами)</span></label>
//         <input value={watch("subObjectsTitle.title")} {...register("subObjectsTitle.title")} placeholder="Название, например -  Экспозиции" />
//         {obFields.map((obFields, i) => (
//           <div key={obFields.id}>
//             <input type="text" {...register(`subObjectsTitle.items.${i}.bold`)} placeholder="Жирный текст (bold)" className='description-bold' />
//             <textarea type="textarea" {...register(`subObjectsTitle.items.${i}.text`)} placeholder="Текст абзаца" rows={3} className='description-textarea' />

//             <div className="move-buttons">
//               <button type="button" disabled={i === 0} onClick={() => move_ob(i, i - 1)}> ⬆ </button>
//               <button type="button" disabled={i === obFields.length - 1} onClick={() => move_ob(i, i + 1)}> ⬇ </button>
//             </div>
//           </div>
//         ))}
//         <button type="button" onClick={() => append_ob({ bold: "", text: "" })}> Добавить абзац</button>
//       </div>

//       {/* // -------------- Интересные факты */}
//       <div className="description">
//         <label>Интересные факты</label>
//         {intFactsFields.map((intFactsFields, i) => (
//           <div key={intFactsFields.id} placeholder="Текст абзаца" rows={3}>
//             <input type="text" {...register(`interestingFacts.${i}.bold`)} placeholder="Жирный текст (bold)" className='description-bold' />
//             <textarea type="textarea" {...register(`interestingFacts.${i}.text`)} placeholder="Текст абзаца" rows={3} className='description-textarea' />

//             <div className="move-buttons">
//               <button type="button" disabled={i === 0} onClick={() => move_intFacts(i, i - 1)}> ⬆ </button>
//               <button type="button" disabled={i === intFactsFields.length - 1} onClick={() => move_intFacts(i, i + 1)}> ⬇ </button>
//             </div>
//           </div>
//         ))}
//         <button type="button" onClick={() => append_intFacts({ bold: "", text: "" })}> Добавить абзац</button>
//       </div>

//       {/* // -------------- Период основания */}
//       <div className='id'>
//         <label>Период основания</label>
//         <input type="text" {...register("constructionPeriod")} />
//       </div>

//       {/* // -------------- Архитектор */}
//       <div className='id'>
//         <label>Архитектор</label>
//         <input type="text" {...register("architects")} />
//       </div>

//       {/* // -------------- Основатель */}
//       <div className='id'>
//         <label>Основатель</label>
//         <input type="text" {...register("founder")} />
//       </div>

//       {/* // -------------- Мета-данные */}
//       <div className='meta'>
//         <label><span className="required">*</span>Мета-наименование для поисковиков</label>
//         <input type="text" {...register("meta.title", { required: "Поле Мета-наименование для поисковиков обязательно" })} />
//       </div>
//       <div className='meta'>
//         <label><span className="required">*</span>Мета-описание для поисковиков</label>
//         <textarea type="text" {...register("meta.description", { required: "Поле Мета-описание для поисковиков обязательно" })} className='meta-textarea' />
//       </div>
//       <div className='meta'>
//         <label><span className="required">*</span>Мета-название для соцсетей</label>
//         <input type="text" {...register("meta.ogTitle", { required: "Поле Мета-название для соцсетей обязательно" })} />
//       </div>
//       <div className='meta'>
//         <label><span className="required">*</span>Мета-описание для соцсетей</label>
//         <textarea type="text" {...register("meta.ogDescription", { required: "Поле Мета-описание для соцсетей обязательно" })} className='meta-textarea' />
//       </div>
//       <div className='meta'>
//         <label><span className="required">*</span>Ключевые слова</label>
//         <textarea type="text" {...register("meta.keywords", { required: "Поле Мета-ключевые слова обязательно" })} className='meta-textarea' />
//       </div>
//       <div className='meta'>
//         <label><span className="required">*</span>Мета-фото для соцсетей</label>
//         <input type="text" {...register("meta.ogImage", { required: "Поле Мета-фото для соцсетей обязательно" })} placeholder="Полный путь к фото - https://our-travels.info/new/foto/Germany/nrw/koln/Rhein-Erft-Kreis/frechen/burg-bachem/Burg-Bachem_3.jpg" />
//       </div>

//     </div >

//   )