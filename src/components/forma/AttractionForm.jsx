import { useForm, useFieldArray } from "react-hook-form";
import './AttractionForm.scss';
import { useState } from "react";

const AttractionForm = () => {
  const { register, control, watch, reset, formState: { errors }, trigger } = useForm({
    defaultValues: {
      id: "",
      name: "",
      type: "",
      country: "",
      region: "",
      district: "",
      city: "",
      foto: "",
      location: "",
      hasOfficialSite: false,
      officialSiteLink: "",
      isUnesco: false,
      unescoYear: "",
      isChildAttraction: false,
      shortDescriptionSubObjects: [{ text: "", name: "" }],
      showMore: false,
      short_description: "",
      short_description2: "",
      full_description: [{ bold: "", text: "" }],
      ticketItems: [{ bold: "", text: "" }],
      relics: [{ bold: "", text: "" }],
      subObjectsTitle: { title: "", items: [{ bold: "", text: "" }] },
      interestingFacts: [{ bold: "", text: "" }],
      subObjectsInputs: [{ value: "" }],
      constructionPeriod: "",
      architects: "",
      founder: "",
      meta: {
        title: "",
        description: "",
        ogTitle: "",
        ogDescription: "",
        ogImage: ""
      }
    }
  });

  const [showSecondDescription, setShowSecondDescription] = useState(false);
  const [copied, setCopied] = useState(false);

  const watchedFields = watch();

  const { fields: fullFields, append: appendFull, move: moveFull } = useFieldArray({ control, name: "full_description" });
  const { fields: ticketFields, append: appendTicket, move: moveTicket } = useFieldArray({ control, name: "ticketItems" });
  const { fields: relicsFields, append: appendRelics, move: moveRelics } = useFieldArray({ control, name: "relics" });
  const { fields: intFactsFields, append: append_intFacts, move: move_intFacts } = useFieldArray({ control, name: "interestingFacts" });
  const { fields: sabInputFields, append: append_sabInput } = useFieldArray({ control, name: "subObjectsInputs" });
  const { fields: sabDickripInputFields, append: append_sabDiscripInput } = useFieldArray({ control, name: "shortDescriptionSubObjects" });
  const { fields: obFields, append: append_ob, move: move_ob } = useFieldArray({ control, name: "subObjectsTitle.items" });
  //fields — текущее состояние массива
  //append — добавление нового абзаца
  //remove — удаление абзаца

  // перезаписываем короткое описание в полное при условиях - пользователь сам не запонил полное, стоит выбрано, что подробнее не нужно
  const isFullDescriptionEmpty =
    !watchedFields.full_description?.some(
      item => item?.bold || item?.text
    );
  const shouldAutoFillDescription =
    watchedFields.showMore === "false" &&
    watchedFields.short_description?.trim() &&
    isFullDescriptionEmpty;

  const previewObject = {
    id: watchedFields.id,
    name: watchedFields.name,
    type: [watchedFields.type],
    path: watchedFields.id,
    countryPath: watchedFields.country,
    regionsPath: watchedFields.region,
    districtPath: watchedFields.district,
    cityPath: watchedFields.city,
    fotoCard: watchedFields.foto,
    ...(watchedFields.location.length > 0 && { location: watchedFields.location }),
    ...(watchedFields.hasOfficialSite && watchedFields.officialSiteLink && {
      officialSite: [
        { bold: "Официальный сайт", link: watchedFields.officialSiteLink }]
    }),
    ...(watchedFields.isUnesco && watchedFields.unescoYear && {
      unesco_status: {
        included: true,
        year: Number(watchedFields.unescoYear)
      }
    }),
    ...(watchedFields.subObjectsInputs?.filter(o => o.value?.trim()).length > 0 && {
      subObjects: watchedFields.subObjectsInputs
        .filter(o => o.value?.trim())
        .map(o => o.value)
    }),
    ...(watchedFields.shortDescriptionSubObjects?.some(f => f.text?.trim() || f.name?.trim()) && {
      short_description_subObjects: {
        text: watchedFields.shortDescriptionSubObjects[0].text?.trim() || "",
        items: watchedFields.shortDescriptionSubObjects
          .map(f => f.name?.trim())
          .filter(n => n) // убираем пустые
      }
    }),
    ...(watchedFields.isChildAttraction === "true" && { hiddenFromList: true }),
    ...(watchedFields.showMore === "true" && { showMore: true }),
    short_description: watchedFields.short_description,
    ...(watchedFields.short_description2.length > 0 && { short_description2: watchedFields.short_description2 }),
    full_description: {
      title: "Описание и история",
      items: shouldAutoFillDescription
        ? [
          {
            text: watchedFields.short_description
          }
        ]
        : watchedFields.full_description
          .filter(item => item.bold?.trim() || item.text?.trim())
          .map(item => ({
            ...(item.bold?.trim() && { bold: item.bold }),
            ...(item.text?.trim() && { text: item.text })
          }))
    },
    ...(watchedFields.ticketItems?.some(item => item.bold.trim() || item.text.trim()) && {
      tickets_and_entry: {
        title: "Практическая информация",
        items: watchedFields.ticketItems
          ?.filter(item => item.bold.trim() || item.text.trim())
          .map(item => ({
            ...(item.bold.trim() && { bold: item.bold }),
            ...(item.text.trim() && { text: item.text })
          }))
      }
    }),
    ...(watchedFields.relics?.some(item => item.bold.trim() || item.text.trim()) && {
      relics: {
        title: "Реликвии и ценности",
        items: watchedFields.relics
          ?.filter(item => item.bold.trim() || item.text.trim())
          .map(item => ({
            ...(item.bold.trim() && { bold: item.bold }),
            ...(item.text.trim() && { text: item.text })
          }))
      }
    }),
    ...(watchedFields.subObjectsTitle.title.length > 0 && {
      sub_objects: {
        title: watchedFields.subObjectsTitle.title || "Экспозиции",
        items: watchedFields.subObjectsTitle.items
          .filter(item => item?.bold?.trim() || item?.text?.trim())
          .map(item => ({
            ...(item.bold.trim() && { bold: item.bold }),
            ...(item.text.trim() && { text: item.text })
          }))
      }
    }),
    ...(watchedFields.interestingFacts?.some(item => item.bold.trim() || item.text.trim()) && {
      interestingFacts: {
        title: "Интересные факты",
        items: watchedFields.interestingFacts
          .filter(item => item?.bold?.trim() || item?.text?.trim())
          .map(item => ({
            ...(item?.bold?.trim() && { bold: item.bold }),
            ...(item?.text?.trim() && { text: item.text })
          }))
      }
    }),
    ...(watchedFields.constructionPeriod.length > 0 && { construction_period: watchedFields.constructionPeriod }),
    ...(watchedFields.architects.length > 0 && { architects: watchedFields.architects }),
    ...(watchedFields.founder.length > 0 && { founder: watchedFields.founder }),
    meta: {
      title: watchedFields.meta.title,
      description: watchedFields.meta.description,
      ogTitle: watchedFields.meta.ogTitle,
      ogDescription: watchedFields.meta.ogDescription,
      ogImage: watchedFields.meta.ogImage,
    }
  };

  const clearAll = () => {
    reset(); // сброс всех полей к defaultValues
    setCopied(false);
  };

  // функции копирования и валидации незаполненных обязательных полей
  const collectErrors = (obj, parentKey = "") => {
    let result = [];

    for (const [key, value] of Object.entries(obj)) {
      const fullKey = parentKey ? `${parentKey}.${key}` : key;

      if (value?.message) {
        result.push(`${fullKey}: ${value.message}`);
      } else if (Array.isArray(value)) {
        value.forEach((item, index) => {
          if (item) {
            result.push(
              ...collectErrors(item, `${fullKey}[${index}]`)
            );
          }
        });
      } else if (typeof value === "object" && value !== null) {
        result.push(...collectErrors(value, fullKey));
      }
    }

    return result;
  };

  const handleCopy = async () => {
    const valid = await trigger();

    if (!valid) {
      const allErrors = collectErrors(errors).join("\n");

      alert(`Пожалуйста, заполните обязательные поля:\n${allErrors}`);
      return;
    }

    navigator.clipboard.writeText(toJsModuleString(previewObject));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };


  // Правильный вывод объекта
const toJsModuleString = (obj, indent = 0) => {
  const space = "  ".repeat(indent);

  if (Array.isArray(obj)) {
    // Если все элементы строки
    if (obj.every(v => typeof v === "string")) {
      return `[${obj.map(v => `"${v}"`).join(", ")}]`;
    }

    const arrayItems = obj.map(item => {
      // Если элемент — "простой объект", вывести в одну строку
      if (
        typeof item === "object" &&
        item !== null &&
        Object.values(item).every(v => typeof v === "string" || typeof v === "number")
      ) {
        const inner = Object.entries(item)
          .map(([k, v]) => `${k}: "${v}"`)
          .join(", ");
        return `${space}  { ${inner} }`;
      }
      return `${space}  ${toJsModuleString(item, indent + 1)}`;
    });

    return `[\n${arrayItems.join(",\n")}\n${space}]`;
  }

  if (typeof obj === "object" && obj !== null) {
    const entries = Object.entries(obj)
      .filter(([, value]) => value !== undefined && value !== null)
      .map(([key, value]) => {
        if (typeof value === "string") return `${key}: "${value}"`;
        return `${key}: ${toJsModuleString(value, indent + 1)}`;
      });
    return `{\n${space}  ${entries.join(`,\n${space}  `)}\n${space}}`;
  }

  return obj;
};





  return (
    <div className='forma'>
      {/* // -------------- ID */}
      <div className='id'>
        <label><span className="required">*</span>ID</label>
        <span className='note'>Пишем латынью, не надо вставлять тире, но можно нижнее подчеркивание</span>
        <input type="text" {...register("id", { required: "Поле ID обязательно" })} />
      </div>

      {/* // -------------- Название */}
      <div className='name'>
        <label><span className="required">*</span>Название</label>
        <input type="text" {...register("name", { required: "Поле Название обязательно" })} />
      </div>

      {/* // -------------- Тип достопримечательности */}
      <div className="type">
        <label><span className="required">*</span>Тип достопримечательности</label>
        <select {...register("type", { required: "Выберите тип" })}>
          <option value="">Выберите тип</option>
          <option value="museum">Музеи</option>
          <option value="cathedral">Соборы и церкви</option>
          <option value="palace_or_castle">Дворцы и замки</option>
          <option value="amusement_park">Парки развлечений</option>
          <option value="historical_building">Исторические здания</option>
          <option value="technical_structure">Технические сооружения</option>
          <option value="nature">Природа</option>
          <option value="monument_or_fountain">Памятники и фонтаны</option>
          <option value="square">Площадь</option>
        </select>
        <p className='note'>Если ничего не подходит, а надо, то добавляем в файл src/components/AttractionsFilters (в объекте attractionTypes). И не забываем обновить форму</p>
      </div>


      {/* // -------------- Патчи */}
      <div className='path'>
        <h3><span className="required">*</span>Патчи</h3>

        <div className="country">
          <label>Страна</label>
          <select {...register("country", { required: "Выберите страну" })}>
            <option value="">Выберите страну</option>
            <option value="germany">Германия</option>
            <option value="ukraine">Украина</option>
          </select>
          <p className='note'>Если добавляем новую страну, то вставляем объект с новой страной в src/datas/языки/Country.js. Потом обновляем src/datas/языки/index.js и форму. Так же нужно внести добавления в src/datas/fotos/index.js (чтобы работала фотогалерея)</p>
        </div>

        <div className="region">
          <label>Область/Земля</label>
          <select {...register("region", { required: "Выберите землю/область" })} disabled={!watchedFields.country}>
            <option value="">Выберите землю/область</option>
            {watchedFields.country === "germany" && (
              <>
                <option value="nrw">Северный Рейн-Вестфалия</option>
                <option value="rheinland-pfalz">Рейнланд-Пфальц</option>
              </>
            )}
            {watchedFields.country === "ukraine" && (
              <>
                <option value="sumska">Сумская область</option>
              </>
            )}
          </select>
          <p className='note'>Если добавляем новую область/землю, то создаем новый файл в src/datas/языки/страна(например ukraine)/название (например kievska).js. Потом обновляем src/datas/языки/index.js и форму</p>
        </div>

        <div className="district">
          <label>Район/Край</label>
          <select {...register("district", { required: "Выберите район/край" })} disabled={!watchedFields.region}>
            <option value="">Выберите район/край</option>
            {watchedFields.country === "germany" && watchedFields.region === "nrw" && (
              <>
                <option value="arnsberg">Арнсберг</option>
                <option value="koln">Кельн</option>
                <option value="city">Город обласного значения</option>
              </>
            )}
            {watchedFields.country === "germany" && watchedFields.region === "rheinland-pfalz" && (
              <>
                <option value="city">Город обласного значения</option>
              </>
            )}
            {watchedFields.country === "ukraine" && watchedFields.region === "sumska" && (
              <>
                <option value="city">Город обласного значения</option>
              </>
            )}
          </select>
          <p className='note'>Если добавляем новый район/край, то добавляем объект в файл в src/datas/языки/страна(например germany)/регион(область/земля)(например bavarska).js. Потом обновляем src/datas/языки/index.js и форму</p>
        </div>

        <div className="city">
          <label>Город</label>
          <select {...register("city", { required: "Выберите город" })} disabled={!watchedFields.district}>
            <option value="">Выберите город</option>
            {watchedFields.country === "germany" && watchedFields.district === "arnsberg" && (
              <>
                <option value="luedenscheid">Люденшайд</option>
              </>
            )}
            {watchedFields.country === "germany" && watchedFields.district === "koln" && (
              <>
                <option value="bruhl">Брюль</option>
                <option value="frechen">Фрехен</option>
                <option value="konigswinter">Кёнигсвинтер</option>
              </>
            )}
            {watchedFields.country === "germany" && watchedFields.district === "city" && (
              <>
                <option value="koln">Кельн</option>
                <option value="trier">Трир</option>
              </>
            )}
            {watchedFields.country === "ukraine" && watchedFields.district === "city" && (
              <>
                <option value="sumy">Сумы</option>
              </>
            )}
          </select>
          <p className='note'>Если добавляем новый город, то добавляем объект в файл в src/datas/языки/страна(например germany)/регион(область/земля)-city.js (например bavarska-city.js). Потом обновляем src/datas/языки/index.js и форму</p>
        </div>
      </div>

      {/* // -------------- Фото  */}
      <div className='foto'>
        <label><span className="required">*</span>Фотография</label>
        <input type="text" {...register("foto", { required: "Поле Фотография обязательно" })} placeholder="Путь к фото в формате Country/region/city/attraction/001.jpg" />
        <p className='note'>Если нужно добавить фото в фотогелерею, то работаем в файле src/datas/fotos/страна(de.js или ua.js). Указать патч города, потом патч дост-ти</p>
      </div>

      {/* // -------------- Местонахождение  */}
      <div className='foto'>
        <label>Местонахождение</label>
        <input type="text" {...register("location")} placeholder="Пример: Кёльн, Германия" />
      </div>

      {/* // -------------- Официальный сайт */}
      <div className='official-site'>
        <label><input type="checkbox" {...register("hasOfficialSite")} />Есть ли официальный сайт</label>
        <input type="text" {...register("officialSiteLink")} placeholder="Ссылка на официальный сайт" />
      </div>

      {/* // -------------- ЮНЕСКО  */}
      <div className='unesco'>
        <label>Входит ли эта достопримечательность в список ЮНЕСКО?</label>
        <div>
          <label><input type="checkbox" {...register("isUnesco")} />Объект входит в список ЮНЕСКО</label>
          <label><input type="Number" {...register("unescoYear")} /></label>
        </div>
      </div>

      {/* // -------------- Вложенные достопримечательности */}
      <div className='subObjects'>
        <label><span className="note">Заполняем только, если есть вложенные достопримечательности</span>. Это связь с дочерними дост-тями</label>
        {sabInputFields.map((field, index) => (
          <input key={field.id} type="text" {...register(`subObjectsInputs.${index}.value`)} placeholder="вставляем id вложенной достопримечательности" />
        ))}
        <button type="button" onClick={() => append_sabInput("")}> Добавить абзац</button>
        <span className='note'>(если вложенных достопримечательностей больше, чем одна)</span>
      </div>

      {/* // -------------- Перечень дочерних достопримечательностей */}
      <div className='description'>
        <label><span className="note"> Заполняем только, если есть вложенные достопримечательности.</span> Перечень дочерних достопримечательностей</label>
        {sabDickripInputFields.map((item, i) => (
          <div key={item.id} className='subobject-item'>
            {i === 0 && (<textarea className='description-textarea' type="text" {...register(`shortDescriptionSubObjects.${i}.text`)} rows={2} placeholder="Пример: В старом городе Люденшайда расположены такие достопримечательности:" />)}
            <input type="text" {...register(`shortDescriptionSubObjects.${i}.name`)} placeholder="Вставлять только названия, например: Церковь Спасителя" />
          </div>
        ))}
        <button type="button" onClick={() => append_sabDiscripInput({ name: "" })}> Добавить название</button>
      </div>

      {/* // -------------- Является ли эта достопримечательность дочерней? */}
      <div className='unesco'>
        <label>Является ли эта достопримечательность дочерней?</label>
        <div>
          <label><input type="radio" value="true" {...register("isChildAttraction")} /> Да </label>
          <label><input type="radio" value="false" {...register("isChildAttraction")} /> Нет </label>
        </div>
      </div>

      {/* кнопка "Подробнее" - показываем только если дочерняя */}
      {watchedFields.isChildAttraction === "true" && (
        <div className="show-more-question">
          <label><span className="required">*</span>Нужна ли кнопка "Подробнее"?</label>
          <p className='note'>в том смысле, что нужен ли переход на отдельную страницу. Если описания мало, то можно описать прямо в карточке</p>
          <div>
            <label> <input type="radio" value="true" {...register("showMore")} /> Да </label>
            <label> <input type="radio" value="false" {...register("showMore")} /> Нет </label>
          </div>
        </div>
      )}

      {/* // -------------- Короткое описание */}
      <div className='short_description'>
        <label><span className="required">*</span>Короткое описание</label>
        <p className='note'>Это описание для карточки в списке</p>
        <textarea type="textarea" {...register("short_description", { required: "Короткое описание обязательно" })} rows={3} className='short_description-textarea' />
        {showSecondDescription && (
          <textarea {...register("short_description2")} placeholder="Доп. абзац" rows={3} className='short_description-textarea' />
        )}
        <button type="button" onClick={() => setShowSecondDescription(true)}>Добавить абзац</button>
      </div>

      {/* // -------------- Полное описание */}
      <div className="description">
        <label><span className="required">*</span>Описание и история</label>
        <p className='note'>Каждый следующий абзац - в новое поле (кнопка "Добавить поле")</p>
        {fullFields.map((fullFields, i) => (
          <div key={fullFields.id} placeholder="Текст абзаца" rows={3}>
            <input type="text" {...register(`full_description.${i}.bold`)} placeholder="Жирный текст (bold)" className='description-bold' />
            <textarea type="textarea" {...register(`full_description.${i}.text`, i === 0 ? { required: "Поле Описание обязательно" } : {})} placeholder="Текст абзаца" rows={3} className='description-textarea' />

            <div className="move-buttons">
              <button type="button" disabled={i === 0} onClick={() => moveFull(i, i - 1)}> ⬆ </button>
              <button type="button" disabled={i === fullFields.length - 1} onClick={() => moveFull(i, i + 1)}> ⬇ </button>
            </div>
          </div>
        ))}
        <button type="button" onClick={() => appendFull({ bold: "", text: "" })}> Добавить абзац</button>
      </div>

      {/* // -------------- Практическая информация */}
      <div className="description">
        <label>Практическая информация</label>
        <p className='note'>Здесь добавляем адресс, цены на билеты, режим роботы</p>
        {ticketFields.map((ticketFields, i) => (
          <div key={ticketFields.id} placeholder="Текст абзаца" rows={3}>
            <input type="text" {...register(`ticketItems.${i}.bold`)} placeholder="Жирный текст (bold)" className='description-bold' />
            <textarea type="textarea" {...register(`ticketItems.${i}.text`)} placeholder="Текст абзаца" rows={3} className='description-textarea' />

            <div className="move-buttons">
              <button type="button" disabled={i === 0} onClick={() => moveTicket(i, i - 1)}> ⬆ </button>
              <button type="button" disabled={i === ticketFields.length - 1} onClick={() => moveTicket(i, i + 1)}> ⬇ </button>
            </div>
          </div>
        ))}
        <button type="button" onClick={() => appendTicket({ bold: "", text: "" })}> Добавить абзац</button>
      </div>

      {/* // -------------- Реликвии и ценности */}
      <div className="description">
        <label>Реликвии <span className='note'>(если есть)</span></label>
        {relicsFields.map((relicsFields, i) => (
          <div key={relicsFields.id} placeholder="Текст абзаца" rows={3}>
            <input type="text" {...register(`relics.${i}.bold`)} placeholder="Жирный текст (bold)" className='description-bold' />
            <textarea type="textarea" {...register(`relics.${i}.text`)} placeholder="Текст абзаца" rows={3} className='description-textarea' />

            <div className="move-buttons">
              <button type="button" disabled={i === 0} onClick={() => moveRelics(i, i - 1)}> ⬆ </button>
              <button type="button" disabled={i === relicsFields.length - 1} onClick={() => moveRelics(i, i + 1)}> ⬇ </button>
            </div>
          </div>
        ))}
        <button type="button" onClick={() => appendRelics({ bold: "", text: "" })}> Добавить абзац</button>
      </div>

      {/* // -------------- Объекты (например экспозиции) */}
      <div className="description">
        <label>Объекты <span className='note'>(например экспозиции в музее, не путать с дочерними объектами)</span></label>
        <input value={watch("subObjectsTitle.title")} {...register("subObjectsTitle.title")} placeholder="Название, например -  Экспозиции" />
        {obFields.map((obFields, i) => (
          <div key={obFields.id}>
            <input type="text" {...register(`subObjectsTitle.items.${i}.bold`)} placeholder="Жирный текст (bold)" className='description-bold' />
            <textarea type="textarea" {...register(`subObjectsTitle.items.${i}.text`)} placeholder="Текст абзаца" rows={3} className='description-textarea' />

            <div className="move-buttons">
              <button type="button" disabled={i === 0} onClick={() => move_ob(i, i - 1)}> ⬆ </button>
              <button type="button" disabled={i === obFields.length - 1} onClick={() => move_ob(i, i + 1)}> ⬇ </button>
            </div>
          </div>
        ))}
        <button type="button" onClick={() => append_ob({ bold: "", text: "" })}> Добавить абзац</button>
      </div>

      {/* // -------------- Интересные факты */}
      <div className="description">
        <label>Интересные факты</label>
        {intFactsFields.map((intFactsFields, i) => (
          <div key={intFactsFields.id} placeholder="Текст абзаца" rows={3}>
            <input type="text" {...register(`interestingFacts.${i}.bold`)} placeholder="Жирный текст (bold)" className='description-bold' />
            <textarea type="textarea" {...register(`interestingFacts.${i}.text`)} placeholder="Текст абзаца" rows={3} className='description-textarea' />

            <div className="move-buttons">
              <button type="button" disabled={i === 0} onClick={() => move_intFacts(i, i - 1)}> ⬆ </button>
              <button type="button" disabled={i === intFactsFields.length - 1} onClick={() => move_intFacts(i, i + 1)}> ⬇ </button>
            </div>
          </div>
        ))}
        <button type="button" onClick={() => append_intFacts({ bold: "", text: "" })}> Добавить абзац</button>
      </div>

      {/* // -------------- Период основания */}
      <div className='id'>
        <label>Период основания</label>
        <input type="text" {...register("constructionPeriod")} />
      </div>

      {/* // -------------- Архитектор */}
      <div className='id'>
        <label>Архитектор</label>
        <input type="text" {...register("architects")} />
      </div>

      {/* // -------------- Основатель */}
      <div className='id'>
        <label>Основатель</label>
        <input type="text" {...register("founder")} />
      </div>

      {/* // -------------- Мета-данные */}
      <div className='meta'>
        <label><span className="required">*</span>Мета-наименование для поисковиков</label>
        <input type="text" {...register("meta.title", { required: "Поле Мета-наименование для поисковиков обязательно" })} />
      </div>
      <div className='meta'>
        <label><span className="required">*</span>Мета-описание для поисковиков</label>
        <textarea type="text" {...register("meta.description", { required: "Поле Мета-описание для поисковиков обязательно" })} className='meta-textarea' />
      </div>
      <div className='meta'>
        <label><span className="required">*</span>Мета-название для соцсетей</label>
        <input type="text" {...register("meta.ogTitle", { required: "Поле Мета-название для соцсетей обязательно" })} />
      </div>
      <div className='meta'>
        <label><span className="required">*</span>Мета-описание для соцсетей</label>
        <textarea type="text" {...register("meta.ogDescription", { required: "Поле Мета-описание для соцсетей обязательно" })} className='meta-textarea' />
      </div>
      <div className='meta'>
        <label><span className="required">*</span>Мета-фото для соцсетей</label>
        <input type="text" {...register("meta.ogImage", { required: "Поле Мета-фото для соцсетей обязательно" })} placeholder="Полный путь к фото - https://our-travels.info/new/foto/Germany/nrw/koln/Rhein-Erft-Kreis/frechen/burg-bachem/Burg-Bachem_3.jpg" />
      </div>


      {/* // -------------- Предпросмотр и кнопки */}
      <div className='prev'>
        <h4>Предпросмотр:</h4>
        <pre>{toJsModuleString(previewObject)+","}</pre>
      </div>

      <div className='clear-copy'>
        <p><button type="button" onClick={clearAll}>Очистить всё</button></p>
        <p><button type="button" onClick={handleCopy}>{copied ? "Скопировано ✅" : "Скопировать в буфер"}</button></p>
      </div>

    </div >

  )
}

export default AttractionForm