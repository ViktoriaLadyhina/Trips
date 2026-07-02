export const normalize = str => {
  if (!str) return "";

  // приведение к нижнему регистру, удаление HTML, спецсимволов, лишних пробелов
  let text = str
    .toLowerCase()
    .replace(/<[^>]*>/g, "")
    .replace(/ё/g, "е")
    .replace(/ä/g, "a")
    .replace(/ö/g, "o")
    .replace(/ü/g, "u")
    .replace(/\s+/g, " ")
    .replace(/[.,!?;:()[\]{}"]/g, "")
    .trim();

  // простейший стемминг для русского языка (удаляем окончания)
  const stemWord = word =>
    word.replace(/(ы|и|а|е|у|ой|ей|ий|ой|ах|ях|ов|ев|ами|ями)$/i, '');

  return text
    .split(" ")
    .map(stemWord)
    .join(" ");
};