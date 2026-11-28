import { useState, useEffect, useRef } from "react";
import { checkAdminSession, adminLogin, addAttraction, getCityDistricts, addCityDistrict } from "../../api/api";
import { attractionTypes, featureOptions, topOptions, statusOptions } from "../attractionsFilters/AttractionsFilters.jsx";
import datas from "../../datas/minimalIndex.js";
import { useSelector } from "react-redux";
import { useForm, useFieldArray } from "react-hook-form";
import './AttractionForm.scss';
import AttractionForm2 from "./AttractionForm2.jsx";

const AttractionForm = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const [createdAttractionId, setCreatedAttractionId] = useState(null);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const lang = useSelector((state) => state.language.lang);

  const [cityDistricts, setCityDistricts] = useState([]);
  const [isLoadingDistricts, setIsLoadingDistricts] = useState(false);
  const [isNewDistrict, setIsNewDistrict] = useState(false);
  const [districtsOpen, setDistrictsOpen] = useState(false);
  const [typesOpen, setTypesOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);

  const districtRef = useRef(null);
  const typesRef = useRef(null);
  const featuresRef = useRef(null);

  const { register, handleSubmit, watch, setValue, control } = useForm({
    defaultValues: {
      type: "attraction",
      path: "",
      parent_id: "",
      is_active: 1,
      cityDistrict_ids: [],
      attribute_types: [],
      attribute_features: [],
      attribute_rating: "",
      attribute_status: "",
      mapOpen: "", map: "",
      routes: "",
      photos: [
        {
          path: "",
          sort_order: 1,
          title_ru: "", title_uk: "", title_de: "",
          is_main: 0
        }
      ],
      officialSite: "", officialSite_title_ru: "", officialSite_title_uk: "", officialSite_title_de: "",
      full_description_ru: "", full_description_uk: "", full_description_de: "",
    }
  });

  const selectedCityId = watch("parent_id");
  const selectedDistrictIds = watch("cityDistrict_ids") || [];
  const selectedTypes = watch("attribute_types") || [];
  const selectedFeatures = watch("attribute_features") || [];
  const {
    fields: photoFields, //список блоков фотографий для отображения.
    append: appendPhoto, // добавляет новый блок.
    remove: removePhoto // удаляет блок.
  } = useFieldArray({ control, name: "photos" });

  // Закрытие выпадающих списков при клике вне них
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (districtRef.current && !districtRef.current.contains(event.target)) {
        setDistrictsOpen(false);
      }

      if (typesRef.current && !typesRef.current.contains(event.target)) {
        setTypesOpen(false);
      }

      if (featuresRef.current && !featuresRef.current.contains(event.target)) {
        setFeaturesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Проверка сессии администратора при монтировании компонента
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

  // Загрузка районов города при изменении выбранного города
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

  // Обработчик входа администратора
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

  // Обработчик отправки формы
  const onSubmit = async (data) => {
    try {
      const districtIds = [...(data.cityDistrict_ids || [])];

      if (isNewDistrict) {
        const district = await addCityDistrict({
          parent_id: data.parent_id,
          district_path: data.district_path,
          name_ru: data.district_name_ru,
          name_uk: data.district_name_uk,
          name_de: data.district_name_de
        });

        districtIds.push(district.id);
      }

      data.cityDistrict_ids = districtIds;

      const result = await addAttraction(data);
      setCreatedAttractionId(result.id);
      alert(`Достопримечательность добавлена. ID: ${result.id}`);
    } catch (error) {
      console.error("Ошибка добавления:", error);
      alert("Не удалось добавить достопримечательность");
    }
  };


  return (
    <>
      <form className='forma' onSubmit={handleSubmit(onSubmit)}>
        <h1>Добавить достопримечательность</h1>

        <div className='field'>
          {/* патч */}
          <label>Path: <span className='note'>(в path используем только подчёркивания _, без дефисов -)</span>
            <input type="text" {...register("path", { required: true })} placeholder="Например, museum_bonn" /> </label>
        </div>

        <h2>Местоположение</h2>
        <div className='field'>
          {/* Выбор города */}
          <label> <span className="city-label">Город:</span>
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
          <div className="district-field">
            <label>Районы города:</label>

            <div className="district-select" ref={districtRef}>
              <div
                className="district-select__control"
                onClick={() => setDistrictsOpen(prev => !prev)}
              >
                <span>Выберите районы города</span>
                <span className={`district-select__arrow ${districtsOpen ? 'open' : ''}`} />
              </div>

              {districtsOpen && (
                <div className="district-select__dropdown">
                  {cityDistricts.map((district) => (
                    <label
                      key={district.id}
                      className="district-select__option"
                    >
                      <input
                        type="checkbox"
                        checked={selectedDistrictIds.includes(district.id)}
                        onChange={(event) => {
                          if (event.target.checked) {
                            setValue(
                              "cityDistrict_ids",
                              [...selectedDistrictIds, district.id],
                              { shouldDirty: true }
                            );
                          } else {
                            setValue(
                              "cityDistrict_ids",
                              selectedDistrictIds.filter((id) => id !== district.id),
                              { shouldDirty: true }
                            );
                          }
                        }}
                      />
                      {district.name}
                    </label>
                  ))}

                  <label className="district-select__option">
                    <input type="checkbox" checked={isNewDistrict} onChange={(event) => setIsNewDistrict(event.target.checked)} />
                    Такого района нет
                  </label>
                </div>
              )}
            </div>
          </div>

          {isNewDistrict && (
            <>
              <label> Path района: <span className="note">(только подчёркивания _, без дефисов -)</span>
                <input type="text" {...register("district_path", { required: true })} placeholder="Например, bergheim_paffendorf" /> </label>
              <label> Название района (RU): <input {...register("district_name_ru", { required: true })} /> </label>
              <label> Назва району (UK): <input {...register("district_name_uk", { required: true })} /> </label>
              <label> Stadtteilname (DE): <input {...register("district_name_de", { required: true })} /> </label>
            </>
          )}
        </div>

        <h2>Название достопримечательности</h2>
        <div className='field'>
          {/* Название */}
          <label> Название (RU): <input type="text" {...register("name_ru", { required: true })} placeholder="Например, Форт Тюнген" /> </label>
          <label> Название (UK): <input type="text" {...register("name_uk", { required: true })} placeholder="Наприклад, Форт Тюнген" /> </label>
          <label> Название (DE): <input type="text" {...register("name_de", { required: true })} placeholder="Например, Fort Thüngen" /> </label>
        </div>

        <h2>Короткое описание достопримечательности</h2>
        <div className='field'>
          {/* Короткое описание */}
          <label> Краткое описание (RU): <textarea {...register("short_description_ru", { required: true })} placeholder="Краткое описание на русском" /> </label>
          <label> Короткий опис (UK): <textarea {...register("short_description_uk", { required: true })} placeholder="Короткий опис українською" /> </label>
          <label> Kurzbeschreibung (DE): <textarea {...register("short_description_de", { required: true })} placeholder="Kurzbeschreibung auf Deutsch" /> </label>
        </div>

        <h2>Атрибуты достопримечательности <br />(тип, особенности, метки на карты, маршруты)</h2>
        {/* Выбор типов достопримечательности */}
        <div className="district-field">
          <label>Типы достопримечательности:</label>
          <div className="district-select" ref={typesRef}>
            <div
              className="district-select__control"
              onClick={() => setTypesOpen(prev => !prev)}
            >
              <span>Выберите типы достопримечательности</span>
              <span className={`district-select__arrow ${typesOpen ? 'open' : ''}`} />
            </div>

            {typesOpen && (
              <div className="district-select__dropdown">
                {attractionTypes
                  .filter((option) => option.value !== "all")
                  .map((option) => (
                    <label key={option.value} className="district-select__option">
                      <input
                        type="checkbox"
                        checked={selectedTypes.includes(option.value)}
                        onChange={(event) => {
                          if (event.target.checked) {
                            setValue(
                              "attribute_types",
                              [...selectedTypes, option.value],
                              { shouldDirty: true }
                            );
                          } else {
                            setValue(
                              "attribute_types",
                              selectedTypes.filter((type) => type !== option.value),
                              { shouldDirty: true }
                            );
                          }
                        }}
                      />
                      {option.ru}
                    </label>
                  ))}
              </div>
            )}
          </div>
        </div>

        {/* Выбор особенности */}
        <div className="district-field">
          <label>Особенности:</label>
          <div className="district-select" ref={featuresRef}>
            <div
              className="district-select__control"
              onClick={() => setFeaturesOpen(prev => !prev)}
            >
              <span>Выберите особенности</span>
              <span className={`district-select__arrow ${featuresOpen ? 'open' : ''}`} />
            </div>

            {featuresOpen && (
              <div className="district-select__dropdown">
                {featureOptions
                  .filter((option) => option.value !== "all")
                  .map((option) => (
                    <label key={option.value} className="district-select__option">
                      <input
                        type="checkbox"
                        checked={selectedFeatures.includes(option.value)}
                        onChange={(event) => {
                          if (event.target.checked) {
                            setValue(
                              "attribute_features",
                              [...selectedFeatures, option.value],
                              { shouldDirty: true }
                            );
                          } else {
                            setValue(
                              "attribute_features",
                              selectedFeatures.filter((feature) => feature !== option.value),
                              { shouldDirty: true }
                            );
                          }
                        }}
                      />
                      {option.ru}
                    </label>
                  ))}
              </div>
            )}
          </div>
        </div>

        {/* Рейтинг достопримечательности */}
        <div className="district-field">
          <label htmlFor="attribute_rating">Рейтинг достопримечательности: <span className="note">(обязательно)</span></label>
          <select
            id="attribute_rating"
            {...register("attribute_rating", { required: true })}
            required
          >
            <option value="" disabled>Выберите рейтинг</option>
            {topOptions
              .filter((option) => option.value !== "all")
              .map((option) => (
                <option key={option.value} value={option.value}>
                  {option.ru}
                </option>
              ))}
          </select>
        </div>

        {/* Статус сохранности */}
        <div className="district-field">
          <label htmlFor="attribute_status">Статус сохранности:</label>
          <select
            id="attribute_status"
            {...register("attribute_status")}
          >
            <option value="">Не выбран</option>
            {statusOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.ru}
              </option>
            ))}
          </select>
        </div>


        {/* Дополнительные атрибуты карты и маршрутов */}
        <div className="district-field">
          <label htmlFor="mapOpen">Идентификатор открываемой карты: <span className='note'>(страница дост-ти, на которой будет открыта карта, вставить патч)</span></label>
          <input id="mapOpen" type="text" {...register("mapOpen")} />
        </div>

        <div className="district-field">
          <label htmlFor="map">Идентификатор карты для маркера: <span className='note'>(вставить патч дост-ти на странице котрой открыта карта, метка на карте, вложенной в дост-ть)</span></label>
          <input id="map" type="text" {...register("map")} />
        </div>

        <div className="district-field">
          <label htmlFor="routes">Идентификатор маршрута: <span className='note'>(вставить патч маршрута, в котором есть эта дост-ть)</span></label>
          <input id="routes" type="text" {...register("routes")} />
        </div>

        {/* Фотографии достопримечательности */}
        <div className="field">
          <h2>Фотографии</h2>

          {photoFields.map((photo, index) => (
            <div className="photo-field" key={photo.id}>
              <h3>Фотография {index + 1}</h3>
              <label>  Путь к фотографии:
                <input type="text" {...register(`photos.${index}.path`)}
                  placeholder="Например, Germany/nrw/arnsberg/Märkischer-Kreis/iserlohn/dechenhohle/001.jpg"
                />
              </label>

              <label>  Порядок отображения:
                <input type="number" min="1" {...register(`photos.${index}.sort_order`, { valueAsNumber: true })} />
              </label>

              <label> Подпись (RU): <input type="text" {...register(`photos.${index}.title_ru`)} placeholder="Например, Пещера Дехенхёле, 2026" />  </label>
              <label> Підпис (UK): <input type="text" {...register(`photos.${index}.title_uk`)} placeholder="Наприклад, Печера Дехенхёле, 2026" />  </label>
              <label> Bildtitel (DE): <input type="text" {...register(`photos.${index}.title_de`)} placeholder="Zum Beispiel: Dechenhöhle, 2026" />  </label>

              <label> Главное фото
                <input type="checkbox" value="1" {...register(`photos.${index}.is_main`)} />
              </label>

              {photoFields.length > 1 && (
                <button type="button" onClick={() => removePhoto(index)} > Удалить фотографию </button>
              )}
            </div>
          ))}

          <button
            type="button"
            onClick={() =>
              appendPhoto({
                path: "",
                sort_order: photoFields.length + 1,
                title_ru: "",
                title_uk: "",
                title_de: "",
                is_main: 0
              })
            }
          >
            Добавить ещё
          </button>
        </div>


        {/* Официальный сайт */}
        <h2>Ссылки на достопримечательности</h2>
        <div className="field">
          <label htmlFor="officialSite">URL сайта:</label>
          <input id="officialSite" type="url"  {...register("officialSite")} placeholder="https://example.com" />

          <label htmlFor="officialSite_title_ru">Подпись ссылки (RU):</label>
          <input id="officialSite_title_ru" type="text" {...register("officialSite_title_ru")} placeholder="Сайт прихода" />

          <label htmlFor="officialSite_title_uk">Підпис посилання (UK):</label>
          <input id="officialSite_title_uk" type="text" {...register("officialSite_title_uk")} placeholder="Сайт парафії" />

          <label htmlFor="officialSite_title_de">Linktext (DE):</label>
          <input id="officialSite_title_de" type="text" {...register("officialSite_title_de")} placeholder="Website der Pfarrei" />
        </div>

        {/* Полное описание */}
        <h2>Полное описание</h2>
        <div className="field">
          <label htmlFor="full_description_ru">Описание (RU):</label>
          <textarea
            id="full_description_ru"
            {...register("full_description_ru")}
            rows={10}
            placeholder={"Описание\n\n**Название достопримечательности** — описание достопримечательности.\n\nИстория"}
          />

          <label htmlFor="full_description_uk">Опис (UK):</label>
          <textarea
            id="full_description_uk"
            {...register("full_description_uk")}
            rows={10}
            placeholder={"Опис\n\n**Назва пам'ятки** — опис пам'ятки.\n\nІсторія"}
          />

          <label htmlFor="full_description_de">Beschreibung (DE):</label>
          <textarea
            id="full_description_de"
            {...register("full_description_de")}
            rows={10}
            placeholder={"Beschreibung\n\n**Name der Sehenswürdigkeit** — Beschreibung der Sehenswürdigkeit.\n\nGeschichte"}
          />
        </div>

        <button type="submit">Отправить данные в БД</button>
      </form>

      {/* {createdAttractionId && (
        <AttractionForm2 attractionId={createdAttractionId} />
      )} */}

      <AttractionForm2 attractionId={1374} />
    </>
  )
}

export default AttractionForm