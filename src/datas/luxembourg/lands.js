const datas = [
    {
        id: 7,
        hasInfo: true,
        path: 'luxembourg_canton', // 26
        translations: {
            de: {
                name: 'Kanton Luxemburg',

// INSERT INTO entity_meta (entity_id, block_key, language, content) VALUES
// (26, 'capital', 'de', '<strong>Verwaltungszentrum:</strong> Stadt Luxemburg'),
// (26, 'population', 'de', '<strong>Bevölkerung:</strong> etwa 200.000 Einwohner.'),
// (26, 'area', 'de', '<strong>Fläche:</strong> etwa 240 km².'),
// (26, 'geography', 'de',
// '<strong>Geographie:</strong> Der Kanton Luxemburg liegt im zentralen Teil des Landes und ist die am stärksten urbanisierte Region Luxemburgs.
// <br>Die Landschaft vereint die Täler der Flüsse Alzette und Pétrusse, hügeliges Gelände und eine stark entwickelte städtische Infrastruktur. Die Region spielt eine Schlüsselrolle als politisches, wirtschaftliches und verkehrstechnisches Zentrum des Landes.'),
// (26, 'economy', 'de',
// '<strong>Wirtschaft:</strong> Der Kanton Luxemburg ist das wichtigste wirtschaftliche Zentrum des Landes. Hier befinden sich Finanzinstitutionen, internationale Unternehmen und Einrichtungen der Europäischen Union.
// <br>Die Hauptsektoren sind das Bankwesen, IT, Dienstleistungen und der internationale Handel.'),
// (26, 'cities', 'de', '<strong>Wichtige Ortschaften:</strong> Luxemburg, Strassen, Bertrange, Hesperingen, Walferdingen, Niederanven.'),
// (26, 'rivers', 'de', '<strong>Flüsse:</strong> Alzette, Pétrusse.'),
// (26, 'tourism', 'de', '<strong>Tourismus und Erholung:</strong> Die Region ist bekannt für das historische Zentrum der Stadt Luxemburg, das zum UNESCO-Weltkulturerbe gehört, sowie für Festungen, Brücken und Panoramablicke.');

            }
        }
    },
    {
        id: 8,
        hasInfo: true,
        path: 'mersch', // 28
        translations: {
            ru: {
                cities: {
                    title: "Основные населённые пункты",
                    items: [
                        { id: 1, name: 'Мерш', hasInfo: false, path: "mersch_com" }, // 153
                        { id: 2, name: 'Линтген', hasInfo: false, path: "lintgen" }, // 154
                        { id: 3, name: 'Ларошетт', hasInfo: false, path: "larochette" }, // 155
                        { id: 4, name: 'Фишбах', hasInfo: false, path: "fischbach" }, // 156
                        { id: 6, name: 'Хеффинген', hasInfo: false, path: "heffingen" }, // 157
                        { id: 7, name: 'Номмерн', hasInfo: false, path: "nommern" }, // 158
                        { id: 8, name: 'Ансембург', hasInfo: true, path: "ansembourg" } // 159
                    ]
                },
            },
            uk: {
                name: 'Кантон Мерш',
                cities: {
                    title: "Основні населені пункти",
                    items: [
                        { id: 1, name: 'Мерш', hasInfo: false, path: "mersch" },
                        { id: 2, name: 'Лінтген', hasInfo: false, path: "lintgen" },
                        { id: 3, name: 'Ларошетт', hasInfo: false, path: "larochette" },
                        { id: 4, name: 'Фішбах', hasInfo: false, path: "fischbach" },
                        { id: 5, name: 'Хелперкнапп', hasInfo: false, path: "helperknapp" },
                        { id: 6, name: 'Хеффінген', hasInfo: false, path: "heffingen" },
                        { id: 7, name: 'Номмерн', hasInfo: false, path: "nommern" },
                        { id: 8, name: 'Ансембург', hasInfo: true, path: "ansembourg" }
                    ]
                },
            },
            de: {
                name: 'Kanton Mersch',
                cities: {
                    title: "Wichtige Ortschaften",
                    items: [
                        { id: 1, name: 'Mersch', hasInfo: false, path: "mersch" },
                        { id: 2, name: 'Lintgen', hasInfo: false, path: "lintgen" },
                        { id: 3, name: 'Larochette', hasInfo: false, path: "larochette" },
                        { id: 4, name: 'Fischbach', hasInfo: false, path: "fischbach" },
                        { id: 5, name: 'Helperknapp', hasInfo: false, path: "helperknapp" },
                        { id: 6, name: 'Heffingen', hasInfo: false, path: "heffingen" },
                        { id: 7, name: 'Nommern', hasInfo: false, path: "nommern" },
                        { id: 8, name: 'Ansemburg', hasInfo: true, path: "ansembourg" }
                    ]
                },
            }
        }
    }

]

export default datas