import React, { useState } from 'react'
import './AttractionForm.scss';

const AttractionForm = () => {
    // ---- Еще сделать ----
    // short_description_subObjects - только если есть дочерние объекты
    // проверки на обязательные поля при копировании

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [country, setCountry] = useState("");
    const [region, setRegion] = useState("");
    const [district, setDistrict] = useState("");
    const [city, setCity] = useState("");
    const [foto, setFoto] = useState("");
    const [location, setLocation] = useState("");
    const [isUnesco, setIsUnesco] = useState(false);
    const [hasOfficialSite, setHasOfficialSite] = useState(false);
    const [officialSiteLink, setOfficialSiteLink] = useState("");
    const [unescoYear, setUnescoYear] = useState("");
    const [subObjectsInputs, setSubObjectsInputs] = useState([""]);
    const [isChildAttraction, setIsChildAttraction] = useState(false);
    const [needsShowMore, setNeedsShowMore] = useState(false);
    const [shortDescription, setShortDescription] = useState("");
    const [sections, setSections] = useState({
        description: [{ bold: "", text: "" }],
        tickets: [{ bold: "", text: "" }],
        relics: [{ bold: "", text: "" }],
        interestingFacts: [{ bold: "", text: "" }],
        subObjectsSection: [{ bold: "", text: "" }],
        shortDescriptionSubObjects: [{ text: "", name: "" }],
    });
    const [constructionPeriod, setConstructionPeriod] = useState("");
    const [architects, setArchitects] = useState("");
    const [founder, setFounder] = useState("");
    const [meta, setMeta] = useState({
        title: "",
        description: "",
        ogTitle: "",
        ogDescription: "",
        ogImage: ""
    });

    const [copied, setCopied] = useState(false);

    const path = id; // патч копируется из id

    // Формируем массив для сабобъекта
    const subObjects = subObjectsInputs.map(s => s.trim()).filter(Boolean);

    // проверяем пуст ли массив, чтобы не добавлять пустой блок в объект
    const normalizeSection = (items = []) =>
        items
            .filter(item => item.bold || item.text)
            .map(item => {
                const obj = {};
                if (item.bold) obj.bold = item.bold;
                if (item.text) obj.text = item.text;
                return obj;
            });
    const ticketItems = normalizeSection(sections.tickets);
    const relicsItems = normalizeSection(sections.relics);
    const interestingFactsItems = normalizeSection(sections.interestingFacts);
    const subObjectsItems = normalizeSection(sections.subObjectsSection);

    //Отдельно, только для перечня дочерних объектов
    // Добавление нового поля. 
    const addShortDescSubObjectField = () => {
        setSections(prev => ({
            ...prev,
            shortDescriptionSubObjects: [
                ...prev.shortDescriptionSubObjects,
                { name: "" }
            ]
        }));
    };
    // Обновление полей
    const updateShortDescSubObjectField = (index, key, value) => {
        setSections(prev => {
            const newItems = [...prev.shortDescriptionSubObjects];
            newItems[index][key] = value;
            return { ...prev, shortDescriptionSubObjects: newItems };
        });
    };

    const attractionObject = {
        id: id,
        name: name,
        type,
        path: path,
        countryPath: country,
        regionPath: region,
        districtPath: district,
        cityPath: city,
        fotoCard: foto,
        ...(location.length > 0 && { location }),
        ...(isUnesco && unescoYear && {
            unesco_status: {
                included: true,
                year: Number(unescoYear)
            }
        }),
        ...(hasOfficialSite && officialSiteLink && {
            officialSite: [
                {
                    bold: "Официальный сайт",
                    link: officialSiteLink
                }
            ]
        }),
        ...(subObjects.length > 0 && { subObjects }),
        ...(isChildAttraction && { hiddenFromList: true }),
        ...(isChildAttraction && needsShowMore && { showMore: true }),
        short_description: shortDescription,
// ...(sections.shortDescriptionSubObjects.some(i => i.name || i.text) && {
//     short_description_subObjects: {
//         text:
//             sections.shortDescriptionSubObjects.find(i => i.text)?.text || "",
//         items: sections.shortDescriptionSubObjects
//             .map(i => i.name)
//             .filter(Boolean),
//     },
// }),
        full_description: {
            title: "Описание и история",
            items: sections.description
                .filter(item => item.bold || item.text) // фильтруем пустые поля
                .map(item => {
                    const obj = {};
                    if (item.bold) obj.bold = item.bold;
                    if (item.text) obj.text = item.text;
                    return obj;
                }),
        },
        ...(subObjectsItems.length > 0 && {
            sub_objects: {
                items: subObjectsItems
            }
        }),
        ...(ticketItems.length > 0 && {
            tickets_and_entry: {
                title: "Практическая информация",
                items: ticketItems
            }
        }),
        ...(relicsItems.length > 0 && {
            relics: {
                title: "Реликвии и ценности",
                items: relicsItems
            }
        }),
        ...(interestingFactsItems.length > 0 && {
            interesting_facts: {
                title: "Интересные факты",
                items: interestingFactsItems
            }
        }),
        ...(constructionPeriod.length > 0 && { construction_period: constructionPeriod }),
        ...(architects.length > 0 && { architects: architects }),
        ...(founder.length > 0 && { founder: founder }),
        meta: {
            title: meta.title,
            description: meta.description,
            ogTitle: meta.ogTitle,
            ogDescription: meta.ogDescription,
            ogImage: meta.ogImage
        }
};

// для ввода нескольких дочерних объектов
// Добавление нового поля
const addSubObjectField = () => setSubObjectsInputs([...subObjectsInputs, ""]);
// Обновление значения конкретного поля дочерних объектов
const updateSubObjectField = (index, value) => {
    const newInputs = [...subObjectsInputs];
    newInputs[index] = value;
    setSubObjectsInputs(newInputs);
}

// создание блока описания или истории, практической информации
const addField = (sectionName) => {
    setSections(prev => ({
        ...prev,
        [sectionName]: [...prev[sectionName], { bold: "", text: "" }]
    }));
};

// Обновить конкретное поле блока описания или истории, практической информации
const updateField = (sectionName, index, key, value) => {
    setSections(prev => {
        const newSection = [...prev[sectionName]];
        newSection[index][key] = value;
        return { ...prev, [sectionName]: newSection };
    });
};

// очищение формы
const clearAll = () => {
    setId("");
    setName("");
    setType("");
    setCountry("");
    setRegion("");
    setDistrict("");
    setCity("");
    setFoto("");
    setLocation("");
    setIsUnesco(false);
    setHasOfficialSite(false);
    setOfficialSiteLink("");
    setUnescoYear("");
    setSubObjectsInputs([""]);
    setIsChildAttraction(false);
    setNeedsShowMore(false);
    setShortDescription("");
    setSections({
        description: [{ bold: "", text: "" }],
        tickets: [{ bold: "", text: "" }],
        relics: [{ bold: "", text: "" }],
        interestingFacts: [{ bold: "", text: "" }],
        subObjectsSection: [{ bold: "", text: "" }],
        shortDescriptionSubObjects: [{ text: "", name: "" }]
    });
    setConstructionPeriod("");
    setArchitects("");
    setFounder("");
    setMeta({
        title: "",
        description: "",
        ogTitle: "",
        ogDescription: "",
        ogImage: ""
    });
};

// форматирование правильного вывода объекта в виде JS модуля
const toJSModule = (obj) => {
    const formatValue = (value, indent = 0) => {
        // const space = "\t".repeat(indent);

        if (Array.isArray(value)) {

            // массив строк → выводим в одной строке
            if (value.every(v => typeof v === "string")) {
                return `[${value.map(v => `"${v}"`).join(", ")}]`;
            }

            // массив объектов → проверяем для items
            return `[\n${value
                .map(item => {
                    if (typeof item === "object" && item !== null &&
                        Object.keys(item).every(k => ["bold", "text"].includes(k))) {
                        return `\t\t{ ${Object.entries(item).map(([k, v]) => `${k}: "${v}"`).join(", ")} }`;
                    }
                    return JSON.stringify(item);
                })
                .join(",\n")}\n\t]`;
        }

        if (typeof value === "object" && value !== null) {
            return `{\n${Object.entries(value)
                .map(([k, v]) => `\t${k}: ${formatValue(v, indent + 1)}`)
                .join(",\n")}\n}`;
        }

        return JSON.stringify(value);
    };

    return `${formatValue(obj)};`;
};

// Просмотр результата в виде JS модуля
const jsFileContent = toJSModule(attractionObject);

// проверка на заполнение полей
const requiredFields = [
    { key: "id", label: "ID", value: id },
    { key: "name", label: "Название", value: name },
    { key: "type", label: "Тип", value: type },
    { key: "foto", label: "Фото", value: foto },
    { key: "country", label: "Патч - Страна", value: country },
    { key: "region", label: "Патч - Регион", value: region },
    { key: "district", label: "Патч - Район", value: district },
    { key: "city", label: "Патч - Город", value: city },
    { key: "shortDescription", label: "Короткое описание", value: shortDescription },
    { key: "description", label: "Описание и история", value: sections.description.some(i => i.text?.trim()) },
    // мета
    { key: "meta_title", label: "Мета-наименование для поисковиков", value: meta.title },
    { key: "meta_description", label: "Мета-описание для поисковиков", value: meta.description },
    { key: "meta_ogTitle", label: "Мета-название для соцсетей", value: meta.ogTitle },
    { key: "meta_ogDescription", label: "Мета-описание для соцсетей", value: meta.ogDescription },
    { key: "meta_ogImage", label: "Мета-фото для соцсетей", value: meta.ogImage },
];

const isEmpty = (value) => {
    if (Array.isArray(value)) return value.length === 0;
    if (typeof value === "string") return value.trim() === "";
    if (typeof value === "object") return !value || Object.keys(value).length === 0;
    return !value;
};

const validateFields = () => {
    const emptyFields = requiredFields.filter(f => isEmpty(f.value));

    if (emptyFields.length > 0) {
        alert(
            "Пожалуйста, заполните обязательные поля:\n" +
            emptyFields.map(f => `– ${f.label}`).join("\n")
        );
        return false;
    }

    // проверка дочернего объекта
    if (isChildAttraction && needsShowMore === null) {
        alert("Укажите, нужна ли кнопка «Подробнее»");
        return false;
    }

    return true;
};

// функция копирования в буфер обмена
const copyToClipboard = async () => {
    try {
        await navigator.clipboard.writeText(jsFileContent);
        setCopied(true);

        setTimeout(() => setCopied(false), 1500);
    } catch (err) {
        console.error("Ошибка копирования:", err);
    }
};
const handleCopy = () => {
    if (!validateFields()) return;
    copyToClipboard();
};

// зашита от показа формы в продакшене
if (import.meta.env.MODE !== "development") {
    return null;
}

return (

    <div className='forma'>
        <div>
            <h2>Добавить достопримечательность</h2>

            {/* // -------------- ID */}
            <div className='id'>
                <label><span className="required">*</span>ID</label>
                <input
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
                <span className='note'>Пишем латынью, не надо вставлять тире, но можно нижнее подчеркивание</span>
            </div>

            {/* // -------------- Название */}
            <div className='name'>
                <label><span className="required">*</span>Название</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            {/* // -------------- Тип достопримечательности */}
            <div className="type">
                <label><span className="required">*</span>Тип достопримечательности</label>
                <select value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="">Выберите тип</option>
                    <option value="museum">Музеи</option>
                    <option value="cathedral">Соборы и церкви</option>
                    <option value="palace_or_castle">Дворцы и замки</option>
                    <option value="amusement_park">Парки развлечений</option>
                    <option value="historical_building">Исторические здания</option>
                    <option value="technical_structure">Технические сооружения</option>
                    <option value="nature">Природа</option>
                </select>
                <p className='note'>Если ничего не подходит, а надо, то добавляем в файл src/components/AttractionsFilters (в объекте attractionTypes). И не забываем обновить форму</p>
            </div>

            {/* // -------------- Патчи */}
            <div className='path'>
                <h3><span className="required">*</span>Патчи</h3>

                <div className="country">
                    <label>Страна</label>
                    <select value={country} onChange={e => setCountry(e.target.value)}>
                        <option value="">Выберите страну</option>
                        <option value="germany">Германия</option>
                        <option value="ukraine">Украина</option>
                    </select>
                    <p className='note'>Если добавляем новую страну, то вставляем объект с новой страной в src/datas/языки/Country.js. Потом обновляем src/datas/языки/index.js и форму. Так же нужно внести добавления в src/datas/fotos/index.js (чтобы работала фотогалерея)</p>
                </div>

                <div className="region">
                    <label>Область/Земля</label>
                    <select value={region} onChange={e => setRegion(e.target.value)} disabled={!country}>
                        <option value="">Выберите землю/область</option>
                        {country === "germany" && (
                            <>
                                <option value="nrw">Северный Рейн-Вестфалия</option>
                            </>
                        )}
                        {country === "ukraine" && (
                            <>
                                <option value="sumska">Сумская область</option>
                            </>
                        )}
                    </select>
                    <p className='note'>Если добавляем новую область/землю, то создаем новый файл в src/datas/языки/страна(например ukraine)/название (например kievska).js. Потом обновляем src/datas/языки/index.js и форму</p>
                </div>

                <div className="district">
                    <label>Район/Край</label>
                    <select value={district} onChange={e => setDistrict(e.target.value)} disabled={!region}>
                        <option value="">Выберите район/край</option>
                        {country === "germany" && region === "nrw" && (
                            <>
                                <option value="arnsberg">Арнсберг</option>
                                <option value="koln">Кельн</option>
                                <option value="city">Город обласного значения</option>
                            </>
                        )}
                        {country === "ukraine" && region === "sumska" && (
                            <>
                                <option value="city">Город обласного значения</option>
                            </>
                        )}
                    </select>
                    <p className='note'>Если добавляем новый район/край, то добавляем объект в файл в src/datas/языки/страна(например germany)/регион(область/земля)(например bavarska).js. Потом обновляем src/datas/языки/index.js и форму</p>
                </div>

                <div className="city">
                    <label>Город</label>
                    <select value={city} onChange={e => setCity(e.target.value)} disabled={!district}>
                        <option value="">Выберите город</option>
                        {country === "germany" && district === "arnsberg" && (
                            <>
                                <option value="luedenscheid">Люденшайд</option>
                            </>
                        )}
                        {country === "germany" && district === "koln" && (
                            <>
                                <option value="bruhl">Брюль</option>
                                <option value="frechen">Фрехен</option>
                                <option value="konigswinter">Кёнигсвинтер</option>
                            </>
                        )}
                        {country === "germany" && district === "city" && (
                            <>
                                <option value="koln">Кельн</option>
                            </>
                        )}
                        {country === "ukraine" && district === "city" && (
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
                <input
                    type="text"
                    value={foto}
                    onChange={(e) => setFoto(e.target.value)}
                    placeholder="Путь к фото в формате Country/region/city/attraction/001.jpg"
                />
                <p className='note'>Если нужно добавить фото в фотогелерею, то работаем в файле src/datas/fotos/страна(de.js или ua.js). Указать патч города, потом патч дост-ти</p>
            </div>

            {/* // -------------- Местонахождение */}
            <div className='name'>
                <label>Местонахождение</label>
                <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Пример: Кёльн, Германия"
                />
            </div>

            {/* // -------------- Официальный сайт */}
            <div className='official-site'>
                <label>
                    <input
                        type="checkbox"
                        checked={hasOfficialSite}
                        onChange={e => setHasOfficialSite(e.target.checked)}
                    />
                    Есть ли официальный сайт
                </label>
                {hasOfficialSite && (
                    <input
                        type="text"
                        placeholder="Ссылка на официальный сайт"
                        value={officialSiteLink}
                        onChange={e => setOfficialSiteLink(e.target.value)}
                    />
                )}
            </div>

            {/* // -------------- Вложенные достопримечательности */}
            <div className='subObjects'>
                <label><span className="note">Заполняем только, если есть вложенные достопримечательности</span>. Это связь с дочерними достопримечательностями</label>
                {subObjectsInputs.map((value, index) => (
                    <input
                        key={index}
                        value={value}
                        placeholder="вставляем id вложенной достопримечательности"
                        onChange={e => updateSubObjectField(index, e.target.value)}
                    />
                ))}
                <button type="button" onClick={addSubObjectField}>Добавить поле</button><span className='note'>(если вложенных достопримечательностей больше, чем одна)</span>
            </div>

            <div className="child-question">
                <label><span className="required">*</span>Является ли эта достопримечательность дочерней?</label>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="isChild"
                            value="yes"
                            checked={isChildAttraction === true}
                            onChange={() => setIsChildAttraction(true)}
                        />
                        Да
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="isChild"
                            value="no"
                            checked={isChildAttraction === false}
                            onChange={() => setIsChildAttraction(false)}
                        />
                        Нет
                    </label>
                </div>
            </div>

            {/* Следующий вопрос показываем только если дочерняя */}
            {isChildAttraction && (
                <div className="show-more-question">
                    <label><span className="required">*</span>Нужна ли кнопка "Подробнее"?</label>
                    <p className='note'>в том смысле, что нужен ли переход на отдельную страницу. Если описания мало, то можно описать прямо в карточке</p>
                    <div>
                        <label>
                            <input
                                type="radio"
                                name="showMore"
                                value="yes"
                                checked={needsShowMore === true}
                                onChange={() => setNeedsShowMore(true)}
                            />
                            Да
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="showMore"
                                value="no"
                                checked={needsShowMore === false}
                                onChange={() => setNeedsShowMore(false)}
                            />
                            Нет
                        </label>
                    </div>
                </div>
            )}

            {/* // -------------- ЮНЕСКО  */}
            <div className="unesco">
                <label>Входит ли эта достопримечательность в список ЮНЕСКО?</label>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            name="isChild"
                            value="yes"
                            checked={isUnesco === true}
                            onChange={(e) => setIsUnesco(e.target.checked)}
                        />
                        Объект входит в список ЮНЕСКО
                    </label>
                    <label>
                        <input
                            type="number"
                            placeholder="Год включения"
                            value={unescoYear}
                            onChange={(e) => setUnescoYear(e.target.value)}
                        />
                    </label>
                </div>
            </div>

            {/* // -------------- Короткое описание */}
            <div className='short_description'>
                <label><span className="required">*</span>Короткое описание</label>
                <p className='note'>Это описание для карточки в списке</p>
                <textarea className='short_description-textarea'
                    value={shortDescription}
                    onChange={(e) => setShortDescription(e.target.value)}
                    rows={4}
                />
            </div>

            <div className='description'>
                <label><span className="required">* Заполняем только, если есть вложенные достопримечательности</span>. Перечень дочерних достопримечательностей</label>
                {sections.shortDescriptionSubObjects.map((item, i) => (
                    <div key={i} className='subobject-item'>
                        {/* Длинный текст — placeholder / пояснение, один раз */}
                        {i === 0 && (
                            <textarea className='description-textarea'
                                value={item.text}
                                onChange={e => updateShortDescSubObjectField(i, "text", e.target.value)}
                                rows={2}
                                placeholder="Пример: В старом городе Люденшайда расположены такие достопримечательности:"
                            />
                        )}

                        {/* Название одной достопримечательности — добавляем новые поля только для name */}
                        <input
                            value={item.name}
                            onChange={e => updateShortDescSubObjectField(i, "name", e.target.value)}
                            placeholder="Вставлять только названия, например: Церковь Спасителя"
                        />
                    </div>
                ))}
                <button type="button" onClick={addShortDescSubObjectField}>Добавить поле</button>
            </div>


            {/* // -------------- Практическая информация */}
            <div className='description'>
                <label>Практическая информация</label>
                <p className='note'>Здесь добавляем адресс, цены на билеты, режим роботы</p>
                {sections.tickets.map((item, i) => (
                    <div key={i}>
                        <input className='description-bold' value={item.bold} onChange={e => updateField("tickets", i, "bold", e.target.value)} placeholder="Текст, выделенный жирным" />
                        <textarea className='description-textarea' value={item.text} onChange={e => updateField("tickets", i, "text", e.target.value)} rows={4} />
                    </div>
                ))}
                <button onClick={() => addField("tickets")}>Добавить поле</button>
            </div>

            {/* // -------------- Описание и история */}
            <div className='description'>
                <label><span className="required">*</span>Описание и история</label>
                <p className='note'>Каждый следующий абзац - в новое поле (кнопка "Добавить поле")</p>
                {sections.description.map((item, i) => (
                    <div key={i}>
                        <input className='description-bold' value={item.bold} onChange={e => updateField("description", i, "bold", e.target.value)} placeholder="Текст, выделенный жирным" />
                        <textarea className='description-textarea' value={item.text} onChange={e => updateField("description", i, "text", e.target.value)} rows={4} />
                    </div>
                ))}
                <button onClick={() => addField("description")}>Добавить поле</button>
            </div>

            {/* // -------------- Объекты (например экспозиции в музее, не путать с дочерними объектами) */}
            <div className='description'>
                <label>Объекты (например экспозиции в музее, не путать с дочерними объектами)</label>
                {sections.subObjectsSection.map((item, i) => (
                    <div key={i}>
                        <input className='description-bold' value={item.bold} onChange={e => updateField("subObjectsSection", i, "bold", e.target.value)} placeholder="Текст, выделенный жирным" />
                        <textarea className='description-textarea' value={item.text} onChange={e => updateField("subObjectsSection", i, "text", e.target.value)} rows={4} />
                    </div>
                ))}
                <button onClick={() => addField("subObjectsSection")}>Добавить поле</button>
            </div>

            {/* // -------------- Реликвии и ценности */}
            <div className='description'>
                <label>Реликвии <span className='note'>(если есть)</span></label>
                {sections.relics.map((item, i) => (
                    <div key={i}>
                        <input className='description-bold' value={item.bold} onChange={e => updateField("relics", i, "bold", e.target.value)} placeholder="Текст, выделенный жирным" />
                        <textarea className='description-textarea' value={item.text} onChange={e => updateField("relics", i, "text", e.target.value)} rows={4} />
                    </div>
                ))}
                <button onClick={() => addField("relics")}>Добавить поле</button>
            </div>

            {/* // -------------- Интересные факты */}
            <div className='description'>
                <label>Интересные факты</label>
                <p className='note'>Каждый новый факт - в новое поле (кнопка "Добавить поле")</p>
                {sections.interestingFacts.map((item, i) => (
                    <div key={i}>
                        <input className='description-bold' value={item.bold} onChange={e => updateField("interestingFacts", i, "bold", e.target.value)} placeholder="Текст, выделенный жирным" />
                        <textarea className='description-textarea' value={item.text} onChange={e => updateField("interestingFacts", i, "text", e.target.value)} rows={4} />
                    </div>
                ))}
                <button onClick={() => addField("interestingFacts")}>Добавить поле</button>
            </div>

            {/* // -------------- Период основания */}
            <div className='name'>
                <label>Период основания</label>
                <input
                    type="text"
                    value={constructionPeriod}
                    onChange={(e) => setConstructionPeriod(e.target.value)}
                />
            </div>

            {/* // -------------- Архитекторы */}
            <div className='name'>
                <label>Архитекторы</label>
                <input
                    type="text"
                    value={architects}
                    onChange={(e) => setArchitects(e.target.value)}
                />
            </div>

            {/* // -------------- Основатель */}
            <div className='name'>
                <label>Основататель</label>
                <input
                    type="text"
                    value={founder}
                    onChange={(e) => setFounder(e.target.value)}
                />
            </div>

            {/* // -------------- Мета-данные */}
            <div className='meta'>
                <h3><span className="required">*</span>Мета-данные</h3>
                <label>Мета-наименование для поисковиков</label>
                <input
                    value={meta.title}
                    onChange={(e) =>
                        setMeta({ ...meta, title: e.target.value })
                    }
                />
                <label>Мета-описание для поисковиков</label>
                <input
                    value={meta.description}
                    onChange={(e) =>
                        setMeta({ ...meta, description: e.target.value })
                    }
                />
                <label>Мета-название для соцсетей</label>
                <input
                    value={meta.ogTitle}
                    onChange={(e) =>
                        setMeta({ ...meta, ogTitle: e.target.value })
                    }
                />
                <label>Мета-описание для соцсетей</label>
                <input
                    value={meta.ogDescription}
                    onChange={(e) =>
                        setMeta({ ...meta, ogDescription: e.target.value })
                    }
                />
                <label>Мета-фото для соцсетей</label>
                <input
                    value={meta.ogImage}
                    onChange={(e) =>
                        setMeta({ ...meta, ogImage: e.target.value })
                    }
                    placeholder="Полный путь к фото"
                />
            </div>

            {/* // -------------- Предпросмотр и кнопки */}
            <div className='prev'>
                <h4>Предпросмотр:</h4>
                <pre>{jsFileContent}</pre>
            </div>

            <div className='clear-copy'>
                <p><button type="button" onClick={clearAll}>Очистить всё</button></p>
                <p><button type="button" onClick={handleCopy}>{copied ? "Скопировано ✅" : "Скопировать в буфер"}</button></p>
            </div>


        </div>
    </div>

)
}

export default AttractionForm