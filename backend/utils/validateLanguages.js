const languages = ["ru", "uk", "de"];

function validateLanguages(values) {
    const filledLanguages = languages.filter(
        (language) =>
            typeof values[language] === "string" &&
            values[language].trim() !== ""
    );

    if (filledLanguages.length === 0) {
        return "empty";
    }

    if (filledLanguages.length !== languages.length) {
        return "incomplete";
    }

    return "valid";
}

module.exports = validateLanguages;