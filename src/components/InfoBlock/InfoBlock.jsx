const InfoBlock = ({ data = [], className }) => {
  const mergedData = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i].bold && i + 1 < data.length && data[i + 1].text && !data[i + 1].bold && !data[i + 1].link) {
      // объединяем bold + следующий text
      mergedData.push({ bold: data[i].bold, text: data[i + 1].text });
      i++; // пропускаем следующий элемент
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
                className={`${className}__text`}
              >
                {item.bold && <span className={`${className}__bold`}>{item.bold} </span>}
                {item.text}
              </a>
            );

          case !!item.bold:
            return (
              <span key={baseKey} className={`${className}__text`}>
                <span className={`${className}__bold`}>{item.bold} </span>
                {item.text}
              </span>
            );

          default:
            return (
              <div key={baseKey} className={`${className}__text`}>
                {item.text}
              </div>
            );
        }
      })}
    </div>
  );
};

export default InfoBlock;