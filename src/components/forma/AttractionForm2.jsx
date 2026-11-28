import { useEffect, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { getAttractionPhotos, addAttraction2 } from "../../api/api";
import './AttractionForm.scss';

function AttractionForm2({ attractionId }) {
    const [photos, setPhotos] = useState([]);

    const { register, handleSubmit, control } = useForm({
        defaultValues: {
            item_title_ru: "", item_title_uk: "", item_title_de: "",
            items: [
                {
                    item_ru: "", item_uk: "", item_de: "",
                    image_id: null
                }
            ],
            practical_info_ru: "", practical_info_uk: "", practical_info_de: "",
            interestingFacts_ru: "", interestingFacts_uk: "", interestingFacts_de: "",
            sculptors_ru: "", sculptors_uk: "", sculptors_de: "",
            architects_ru: "", architects_uk: "", architects_de: "",
            founder_ru: "", founder_uk: "", founder_de: "",
            construction_period_ru: "", construction_period_uk: "", construction_period_de: "",
        }
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "items"
    });

    const onSubmit = async (data) => {
        try {

            const allItems = data.items || [];

            for (const item of allItems) {
                const itemLanguages = [
                    item.item_ru, item.item_uk, item.item_de
                ].map((value) => typeof value === "string" ? value.trim() : ""
                );

                const hasItemContent = itemLanguages.some(Boolean);

                if (hasItemContent && !itemLanguages.every(Boolean)) {
                    alert(
                        "Заполните описание элемента на русском, украинском и немецком языках либо оставьте все три поля пустыми."
                    );
                    return;
                }
            }

            const filledItems = allItems.filter((item) =>
                [item.item_ru, item.item_uk, item.item_de].some(
                    (value) => typeof value === "string" && value.trim() !== ""
                )
            );

            const titleLanguages = [
                data.item_title_ru, data.item_title_uk, data.item_title_de
            ].map((value) => typeof value === "string" ? value.trim() : ""
            );

            const practicalInfoLanguages = [
                data.practical_info_ru, data.practical_info_uk, data.practical_info_de
            ].map((value) => typeof value === "string" ? value.trim() : ""
            );

            const interestingFactsLanguages = [
                data.interestingFacts_ru, data.interestingFacts_uk, data.interestingFacts_de
            ].map((value) => typeof value === "string" ? value.trim() : "");


            const sculptorsLanguages = [
                data.sculptors_ru, data.sculptors_uk, data.sculptors_de
            ].map((value) => typeof value === "string" ? value.trim() : "");

            const architectsLanguages = [
                data.architects_ru, data.architects_uk, data.architects_de
            ].map((value) => typeof value === "string" ? value.trim() : "");

            const founderLanguages = [
                data.founder_ru, data.founder_uk, data.founder_de
            ].map((value) => typeof value === "string" ? value.trim() : "");

            const constructionPeriodLanguages = [
                data.construction_period_ru, data.construction_period_uk, data.construction_period_de
            ].map((value) => typeof value === "string" ? value.trim() : "");


            const hasItemTitle = titleLanguages.some(Boolean);
            const hasPracticalInfo = practicalInfoLanguages.some(Boolean);
            const hasInterestingFacts = interestingFactsLanguages.some(Boolean);
            const hasSculptors = sculptorsLanguages.some(Boolean);
            const hasArchitects = architectsLanguages.some(Boolean);
            const hasFounder = founderLanguages.some(Boolean);
            const hasConstructionPeriod = constructionPeriodLanguages.some(Boolean);

            if (hasItemTitle && !titleLanguages.every(Boolean)) {
                alert("Заполните заголовок блока на русском, украинском и немецком языках либо оставьте все три поля пустыми.");
                return;
            }
            if (hasPracticalInfo && !practicalInfoLanguages.every(Boolean)) {
                alert("Заполните практическую информацию на русском, украинском и немецком языках либо оставьте все три поля пустыми.");
                return;
            }
            if (hasInterestingFacts && !interestingFactsLanguages.every(Boolean)) {
                alert("Заполните интересные факты на русском, украинском и немецком языках либо оставьте все три поля пустыми.");
                return;
            }
            if (hasSculptors && !sculptorsLanguages.every(Boolean)) {
                alert("Заполните сведения о скульпторе на русском, украинском и немецком языках либо оставьте все три поля пустыми.");
                return;
            }
            if (hasArchitects && !architectsLanguages.every(Boolean)) {
                alert("Заполните сведения об архитекторах на русском, украинском и немецком языках либо оставьте все три поля пустыми.");
                return;
            }
            if (hasFounder && !founderLanguages.every(Boolean)) {
                alert("Заполните сведения об основателе на русском, украинском и немецком языках либо оставьте все три поля пустыми.");
                return;
            }
            if (hasConstructionPeriod && !constructionPeriodLanguages.every(Boolean)) {
                alert("Заполните период основания на русском, украинском и немецком языках либо оставьте все три поля пустыми.");
                return;
            }

            await addAttraction2({
                ...data,
                attractionId,
                items: filledItems,
            });

            alert("Данные блока сохранены");

        } catch (error) {
            console.error("Failed to save attraction content:", error);

            if (!error.status) {
                alert("Не удалось связаться с сервером. Проверьте подключение к интернету и попробуйте ещё раз.");
            } else if (error.status === 401) {
                alert("Ваша сессия завершилась. Войдите в систему заново.");
            } else if (error.status === 400) {
                const validationMessages = {
                    "Invalid attraction ID": "Некорректный ID достопримечательности.",
                    "Invalid content fields": "Проверьте поля заголовка и описания блока.",
                    "Attraction not found": "Достопримечательность не найдена в базе данных.",
                    "Item title must be filled in all languages": "Заполните заголовок блока на русском, украинском и немецком языках.",
                    "Invalid item fields": "Проверьте поля описания элемента.",
                    "Item description must be filled in all languages": "Заполните описание элемента на русском, украинском и немецком языках либо оставьте все три поля пустыми.",
                    "Invalid image ID": "Выбрана некорректная фотография.",
                    "Photo not found for this attraction": "Выбранная фотография не принадлежит этой достопримечательности.",
                    "Invalid practical information fields": "Проверьте поля практической информации.",
                    "Practical information must be filled in all languages": "Заполните практическую информацию на русском, украинском и немецком языках либо оставьте все три поля пустыми.",
                    "Invalid interesting facts fields": "Проверьте поля интересных фактов.",
                    "Interesting facts must be filled in all languages": "Заполните интересные факты на русском, украинском и немецком языках либо оставьте все три поля пустыми.",
                };

                alert(
                    validationMessages[error.message] ||
                    "Проверьте введённые данные и попробуйте ещё раз."
                );
            } else if (error.status === 500) {
                alert("Произошла ошибка на сервере. Данные не удалось сохранить.");
            } else {
                alert("Не удалось сохранить данные блока. Попробуйте ещё раз.");
            }
        }

    };

    useEffect(() => {
        const loadPhotos = async () => {
            try {
                const photoData = await getAttractionPhotos(attractionId);
                setPhotos(photoData.photos ?? []);
            } catch (error) {
                console.error("Failed to load attraction photos:", error);
            }
        };

        if (attractionId) {
            loadPhotos();
        }
    }, [attractionId]);

    return (
        <form className='forma' onSubmit={handleSubmit(onSubmit)}>
            <p>ID достопримечательности: {attractionId}</p>

            <h3>Заголовок блока</h3>
            <div className="field">
                <label> Заголовок (RU): <input type="text" {...register("item_title_ru")} /> </label>
                <label> Заголовок (UK): <input type="text" {...register("item_title_uk")} /> </label>
                <label> Заголовок (DE): <input type="text" {...register("item_title_de")} /> </label>
            </div>

            <h3>Описание блока</h3>
            <div className="field">
                {fields.map((field, index) => (
                    <div key={field.id}>
                        <h4>Элемент {index + 1}</h4>
                        <label> Описание (RU): <textarea rows={6} {...register(`items.${index}.item_ru`)} placeholder={"**Временные выставки (Sonderausstellungen)**\nВ замке регулярно ..."}/> </label>
                        <label> Опис (UK): <textarea rows={6} {...register(`items.${index}.item_uk`)} placeholder={"**Тимчасові виставки (Sonderausstellungen)**\nУ замку регулярно ..."}/> </label>
                        <label> Beschreibung (DE): <textarea rows={6} {...register(`items.${index}.item_de`)} placeholder={"**Sonderausstellungen**\nIm Schloss finden regelmäßig ..."}/> </label>

                        <label> Выбрать фотографию:
                            <select
                                {...register(`items.${index}.image_id`, {
                                    setValueAs: (value) =>
                                        value === "" ? null : Number(value)
                                })}
                            >
                                <option value="">Без фотографии</option>
                                {photos.map((photo) => (
                                    <option key={photo.id} value={photo.id}>
                                        {`${photo.sort_order} – ${photo.title?.ru || photo.path}`}
                                    </option>
                                ))}
                            </select>
                        </label>

                        {fields.length > 1 && (
                            <button type="button" onClick={() => remove(index)} > Удалить элемент</button>
                        )}
                    </div>
                ))}

                <button type="button"
                    onClick={() =>
                        append({
                            item_ru: "",
                            item_uk: "",
                            item_de: "",
                            image_id: null
                        })
                    }
                >
                    Добавить ещё
                </button>
            </div>

            <h3>Практическая информация</h3>
            <div className="field">
                <label> Практическая информация (RU): <textarea rows={10} {...register("practical_info_ru")} placeholder={"**Адрес:** 5, Park Dräi Eechelen, L-1499 Luxembourg, Luxembourg\n\n**Часы работы:**\n- Вторник – воскресенье: 10:00–18:00.\n- Среда: 10:00–20:00.\n- Понедельник: выходной.\n\n**Стоимость:**\n- Стандартный билет — 7 €.\n- Комбинированный билет — 12 €.\n\n**Доступность:** описание доступности объекта."}/> </label>
                <label> Практична інформація (UK): <textarea rows={10} {...register("practical_info_uk")} placeholder={"**Адреса:** 5, Park Dräi Eechelen, L-1499 Luxembourg, Luxembourg\n\n**Години роботи:**\n- Вівторок – неділя: 10:00–18:00.\n- Середа: 10:00–20:00.\n- Понеділок: вихідний.\n\n**Вартість:**\n- Стандартний квиток — 7 €.\n- Комбінований квиток — 12 €.\n\n**Доступність:** опис доступності об'єкта."}/> </label>
                <label> Praktische Informationen (DE): <textarea rows={10} {...register("practical_info_de")} placeholder={"**Adresse:** 5, Park Dräi Eechelen, L-1499 Luxembourg, Luxembourg\n\n**Öffnungszeiten:**\n- Dienstag–Sonntag: 10:00–18:00.\n- Mittwoch: 10:00–20:00.\n- Montag: geschlossen.\n\n**Eintrittspreise:**\n- Standardticket — 7 €.\n- Kombiticket — 12 €.\n\n**Barrierefreiheit:** Beschreibung der Zugänglichkeit."}/> </label>
            </div>

            <h3>Интересные факты</h3>
            <div className="field">
                <label> Интересные факты (RU): <textarea rows={6} {...register("interestingFacts_ru")} placeholder={"- Первый интересный факт.\n- Второй интересный факт."} /> </label>
                <label> Цікаві факти (UK): <textarea rows={6} {...register("interestingFacts_uk")} placeholder={"- Перший цікавий факт.\n- Другий цікавий факт."} /> </label>
                <label> Interessante Fakten (DE): <textarea rows={6} {...register("interestingFacts_de")} placeholder={"- Erste interessante Tatsache.\n- Zweite interessante Tatsache."} /> </label>
            </div>


            <h3>Скульптор</h3>
            <div className="field">
                <label> Скульптор (RU): <textarea rows={1} {...register("sculptors_ru")} placeholder="**Скульпторы:** Имя и фамилия скульптора." /> </label>
                <label> Скульптор (UK): <textarea rows={1} {...register("sculptors_uk")} placeholder="**Скульптори:** Ім'я та прізвище скульптора." /> </label>
                <label> Bildhauer (DE): <textarea rows={1} {...register("sculptors_de")} placeholder="**Bildhauer:** Vor- und Nachname des Bildhauers." /> </label>
            </div>

            <h3>Архитекторы</h3>
            <div className="field">
                <label> Архитекторы (RU): <textarea rows={1} {...register("architects_ru")} placeholder="**Архитекторы:** Имена и фамилии архитекторов." /> </label>
                <label> Архітектори (UK): <textarea rows={1} {...register("architects_uk")} placeholder="**Архітектори:** Імена та прізвища архітекторів." /> </label>
                <label> Architekten (DE): <textarea rows={1} {...register("architects_de")} placeholder="**Architekten:** Namen der Architekten." /> </label>
            </div>

            <h3>Основатель</h3>
            <div className="field">
                <label> Основатель (RU): <textarea rows={1} {...register("founder_ru")} placeholder="**Основатель:** Зигфрид Люксембургский" /> </label>
                <label> Засновник (UK): <textarea rows={1} {...register("founder_uk")} placeholder="**Засновник:** Ім'я та прізвище засновника." /> </label>
                <label> Gründer (DE): <textarea rows={1} {...register("founder_de")} placeholder="**Gründers:** Vor- und Nachname des Gründers." /> </label>
            </div>

            <h3>Период основания</h3>
            <div className="field">
                <label> Период основания (RU): <textarea rows={2} {...register("construction_period_ru")} placeholder="**Период формирования:** с 963 года, основные укрепления создавались и расширялись в XII–XIX веках" /> </label>
                <label> Період заснування (UK): <textarea rows={2} {...register("construction_period_uk")} placeholder="**Період формування:** з 963 року, основні укріплення створювалися та розширювалися у XII–XIX століттях." /> </label>
                <label> Gründungszeitraum (DE): <textarea rows={2} {...register("construction_period_de")} placeholder="**Entstehungszeitraum:** seit 963, die wichtigsten Befestigungsanlagen wurden im 12.–19. Jahrhundert errichtet und erweitert." /> </label>
            </div>


            <button type="submit">Сохранить данные в БД</button>
        </form>
    );
}

export default AttractionForm2;
