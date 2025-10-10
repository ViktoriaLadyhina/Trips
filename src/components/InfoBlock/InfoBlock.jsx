const BASE_PHOTO_URL = import.meta.env.VITE_BASE_PHOTO_URL;

const safeText = (value) => (typeof value === "string" ? value : "");

const InfoBlock = ({ data = [], className }) => {
  if (!data) return null;

  // 🔹 Обработка блоков с title и items (например, symbols, facts)
  if (data.title && data.items) {
    return (
      <div className={className}>
        {data.title && <h2 className={`${className}-title`}>{data.title}</h2>}
        {data.items.map((item, index) => (
          <div key={`${className}-${index}`} className={`${className}-item`}>
            {item.img && (
              <img
                src={`${BASE_PHOTO_URL}${safeText(item.img)}`}
                alt={safeText(item.bold) || "image"}
                className={`${className}-img`}
              />
            )}
            <div className="content">
              {/* поддержка HTML внутри текста */}
              <p
                className={`${className}-text`}
                dangerouslySetInnerHTML={{
                  __html: `${item.bold ? `<span class="${className}-bold">${safeText(item.bold)}</span> ` : ""}${safeText(item.text)}`
                }}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }

  // 🔹 Обработка обычных массивов [{bold, text}, {link, ...}]
  const mergedData = [];
  for (let i = 0; i < data.length; i++) {
    if (
      data[i].bold &&
      i + 1 < data.length &&
      data[i + 1].text &&
      !data[i + 1].bold &&
      !data[i + 1].link
    ) {
      mergedData.push({
        bold: safeText(data[i].bold),
        text: safeText(data[i + 1].text),
      });
      i++;
    } else {
      mergedData.push({
        bold: safeText(data[i].bold),
        text: safeText(data[i].text),
        link: safeText(data[i].link),
      });
    }
  }

  return (
    <div className={className}>
      {mergedData.map((item, index) => {
        const baseKey = `${className}-${index}-${item.text?.slice(0, 10)}`;

        // 🔹 Отображение ссылки
        if (item.link) {
          return (
            <a
              key={baseKey}
              href={safeText(item.link)}
              target="_blank"
              rel="noopener noreferrer"
              className={`${className}-text`}
              dangerouslySetInnerHTML={{
                __html: `${item.bold ? `<span class="${className}-bold">${safeText(item.bold)}</span> ` : ""}${safeText(item.text)}`,
              }}
            />
          );
        }

        // 🔹 Обычный текст
        return (
          <div
            key={baseKey}
            className={`${className}-text`}
            dangerouslySetInnerHTML={{
              __html: `${item.bold ? `<span class="${className}-bold">${safeText(item.bold)}</span> ` : ""}${safeText(item.text)}`,
            }}
          />
        );
      })}
    </div>
  );
};

export default InfoBlock;