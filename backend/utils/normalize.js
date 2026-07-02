function normalize(str) {
  if (!str) return "";

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

  const stemWord = word =>
    word.replace(/(ы|и|а|е|у|ой|ей|ий|ой|ах|ях|ов|ев|ами|ями)$/i, '');

  return text
    .split(" ")
    .map(stemWord)
    .join(" ");
}

module.exports = { normalize };