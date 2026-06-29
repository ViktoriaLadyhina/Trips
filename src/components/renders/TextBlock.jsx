import { fixHtmlImages } from "../../utils/photo";

export const TextBlock = ({ block, langData, classPrefix }) => {
  const html = langData?.[block.block_key]; 

  if (!html) return null;

  return (
    <section
      className={`${classPrefix}__${block.block_key}`}
      dangerouslySetInnerHTML={{
        __html: fixHtmlImages(html)
      }}
    />
  );
};