import { fixHtmlImages } from "../../utils/photo";
import { PhotoBlock } from "./PhotoBlock";

export const ItemBlock = ({
    block,
    classPrefix,
    lang
}) => {
    if (!block?.content) return null;

    return (
        <section className={`${classPrefix}__item`}>
            {block.image && (
                <div className={`${classPrefix}__item-image`}>
                    <PhotoBlock
                        photo={block.image}
                        lang={lang}
                    />
                </div>
            )}

            <div
                className={`${classPrefix}__item-content`}
                dangerouslySetInnerHTML={{
                    __html: fixHtmlImages(block.content)
                }}
            />
        </section>
    );
};