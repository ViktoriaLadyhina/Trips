const BASE_PHOTO_URL = import.meta.env.VITE_BASE_PHOTO_URL;

const safeText = (value) => (typeof value === "string" ? value : "");

const InfoBlock = ({ data = [], className }) => {
  if (!data) return null;

  // 🔹 если передана строка, просто выводим текст
  if (typeof data === "string") {
    return (
      <div
        className={className}
        dangerouslySetInnerHTML={{ __html: safeText(data) }}
      />
    );
  }

  // 🔹 блоки с title и items (symbols, facts, features и т.д.)
  if (data.title && data.items) {
    const isList = data.isList; // 🔹 ты сама решаешь, будет список или нет

    return (
      <div className={className}>
        {data.title && <h2 className={`${className}-title`}>{data.title}</h2>}

        {isList ? (
          <ul className={`${className}`}>
            {data.items.map((item, index) => (
              <li key={`${className}-li-${index}`} className={`${className}-item`}>
                {item.bold && (
                  <span className={`${className}-bold`}>{safeText(item.bold)} </span>
                )}
                {safeText(item.text)}
              </li>
            ))}
          </ul>
        ) : (
          data.items.map((item, index) => (
            <div key={`${className}-${index}`} className={`${className}-item`}>
              {item.img && (
                <img
                  src={`${BASE_PHOTO_URL}${safeText(item.img)}`}
                  alt={safeText(item.bold) || "image"}
                  className={`${className}-img`}
                />
              )}
              <div className="content">
                <p
                  className={`${className}-text`}
                  dangerouslySetInnerHTML={{
                    __html: `${item.bold ? `<span class="${className}-bold">${safeText(item.bold)}</span> ` : ""}${safeText(item.text)}`,
                  }}
                />
              </div>
            </div>
          ))
        )}
      </div>
    );
  }

  // 🔹 обычный массив [{bold, text}, {link, ...}]
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

        // 🔹 если есть ссылка
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

        // 🔹 обычный текст
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