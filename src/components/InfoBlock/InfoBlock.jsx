const BASE_PHOTO_URL = import.meta.env.VITE_BASE_PHOTO_URL;

const InfoBlock = ({ data = [], className }) => {
  if (!data) return null;

  // Если есть title и items — это "symbols" или подобные блоки
  if (data.title && data.items) {
    return (
      <div className={className}>
        <h2 className={`${className}-title`}>{data.title}</h2>
        {data.items.map((item, index) => (
          <div key={`${className}-${index}`} className={`${className}-item`}>
            {item.img && (
              <img
                src={`${BASE_PHOTO_URL}${item.img}`}
                alt={item.bold || 'image'}
                className={`${className}-img`}
              />
            )}
            <p className={`${className}-text`}>
              {item.bold && <span className={`${className}-bold`}>{item.bold} </span>}
              {item.text}
            </p>
          </div>
        ))}
      </div>
    );
  }

  // Иначе предполагаем стандартный массив [{bold, text}]
  const mergedData = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].bold && i + 1 < data.length && data[i + 1].text && !data[i + 1].bold && !data[i + 1].link) {
      mergedData.push({ bold: data[i].bold, text: data[i + 1].text });
      i++;
    } else {
      mergedData.push(data[i]);
    }
  }

  return (
    <div className={className}>
      {mergedData.map((item, index) => {
        const baseKey = `${className}-${index}-${item.text?.slice(0, 10)}`;

        switch (true) {
          case !!item.link:
            return (
              <a
                key={baseKey}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${className}-text`}
              >
                {item.bold && <span className={`${className}-bold`}>{item.bold} </span>}
                {item.text}
              </a>
            );

          case !!item.bold:
            return (
              <span key={baseKey} className={`${className}-text`}>
                <span className={`${className}-bold`}>{item.bold} </span>
                {item.text}
              </span>
            );

          default:
            return (
              <div key={baseKey} className={`${className}-text`}>
                {item.text}
              </div>
            );
        }
      })}
    </div>
  );
};

export default InfoBlock;
