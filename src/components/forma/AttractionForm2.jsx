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
            practical_info_ru: "", practical_info_uk: "", practical_info_de: ""
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


            const hasItemTitle = titleLanguages.some(Boolean);
            const hasPracticalInfo = practicalInfoLanguages.some(Boolean);

            if (hasItemTitle && !titleLanguages.every(Boolean)) {
                alert("Заполните заголовок блока на русском, украинском и немецком языках либо оставьте все три поля пустыми.");
                return;
            }

            if (hasPracticalInfo && !practicalInfoLanguages.every(Boolean)) {
                alert("Заполните практическую информацию на русском, украинском и немецком языках либо оставьте все три поля пустыми.");
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
                    "Practical information must be filled in all languages": "Заполните практическую информацию на русском, украинском и немецком языках либо оставьте все три поля пустыми."
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
                        <label> Описание (RU): <textarea rows={10} {...register(`items.${index}.item_ru`)} /> </label>
                        <label> Опис (UK): <textarea rows={10} {...register(`items.${index}.item_uk`)} /> </label>
                        <label> Beschreibung (DE): <textarea rows={10} {...register(`items.${index}.item_de`)} /> </label>

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
                                        {photo.title?.ru || photo.path}
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
                <label> Практическая информация (RU): <textarea rows={10} {...register("practical_info_ru")} /> </label>
                <label> Практична інформація (UK): <textarea rows={10} {...register("practical_info_uk")} /> </label>
                <label> Praktische Informationen (DE): <textarea rows={10} {...register("practical_info_de")} /> </label>
            </div>

            <button type="submit">Сохранить данные в БД</button>
        </form>
    );
}

export default AttractionForm2;
