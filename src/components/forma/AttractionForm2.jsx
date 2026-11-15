import { useEffect, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { getAttractionPhotos, addAttraction2 } from "../../api/api";

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
            ]
        }
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "items"
    });


    const onSubmit = async (data) => {
        try {
            await addAttraction2({
                attractionId,
                ...data
            });

            alert("Данные блока сохранены");
        } catch (error) {
            console.error("Ошибка сохранения блока:", error);
            alert("Не удалось сохранить данные блока");
        }
    };

    useEffect(() => {
        const loadPhotos = async () => {
            try {
                const photoData = await getAttractionPhotos(attractionId);
                setPhotos(photoData.photos ?? []);
            } catch (error) {
                console.error("Ошибка загрузки фотографий:", error);
            }
        };

        if (attractionId) {
            loadPhotos();
        }
    }, [attractionId]);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <p>ID достопримечательности: {attractionId}</p>

            <h3>Заголовок блока</h3>
            <label> Заголовок (RU): <input type="text" {...register("item_title_ru")} /> </label>
            <label> Заголовок (UK): <input type="text" {...register("item_title_uk")} /> </label>
            <label> Заголовок (DE): <input type="text" {...register("item_title_de")} /> </label>


            <h3>Описание блока</h3>
            {fields.map((field, index) => (
                <div key={field.id}>
                    <h4>Элемент {index + 1}</h4>
                    <label> Описание (RU): <textarea rows={10} {...register(`items.${index}.item_ru`)}
                        />
                    </label>

                    <label>
                        Опис (UK):
                        <textarea
                            rows={10}
                            {...register(`items.${index}.item_uk`)}
                        />
                    </label>

                    <label>
                        Beschreibung (DE):
                        <textarea
                            rows={10}
                            {...register(`items.${index}.item_de`)}
                        />
                    </label>

                    <label>
                        Выбрать фотографию:
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
                        <button
                            type="button"
                            onClick={() => remove(index)}
                        >
                            Удалить элемент
                        </button>
                    )}
                </div>
            ))}

            <button
                type="button"
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

            <button type="submit">Сохранить данные в БД</button>
        </form>
    );
}

export default AttractionForm2;
