const datas = [
    {
        id: 1_1,
        name: "Siegen-Wittgenstein",
        path: "siegen_Wittgenstein",
        districtPath: "arnsberg",
        center: [{ bold: "Kreisstadt:", text: " Stadt Siegen." }],
        area: [{ bold: "Fläche:", text: " 1.132,9 km² (Stand 2023)." }],
        population: [{ bold: "Einwohnerzahl:", text: " 274.379 Personen (Stand 31.12.2023)." }],
        density: [{ bold: "Bevölkerungsdichte:", text: " 242,7 Personen/km² (Stand 2023)." }],
        code: [{ bold: "Amtlicher Regionalschlüssel:", text: " 05 9 70." }],
        description: [
            { text: "Der Kreis Siegen-Wittgenstein gehört zum Land Nordrhein-Westfalen und untersteht dem Regierungsbezirk Arnsberg." }
        ],
        com: [{ text: "Der Kreis ist unterteilt in " }, { bold: "11 Gemeinden:" }],
        communities: [
            { id: 1, name: "Bad Berleburg", hasInfo: false },
            { id: 2, name: "Bad Laasphe", hasInfo: false },
            { id: 3, name: "Burbach", hasInfo: false },
            { id: 4, name: "Wilnsdorf", hasInfo: false },
            { id: 5, name: "Siegen", hasInfo: false },
            { id: 6, name: "Kreuztal", hasInfo: false },
            { id: 7, name: "Netphen", hasInfo: false },
            { id: 8, name: "Freudenberg", hasInfo: false },
            { id: 9, name: "Neunkirchen", hasInfo: false },
            { id: 10, name: "Hilchenbach", hasInfo: false },
            { id: 11, name: "Erndtebrück", hasInfo: false }
        ],
        gerb: "Germany/nrw/arnsberg/Siegen-Wittgenstein/gerb.png"
    },
    {
        id: 1_2,
        name: "Soest",
        path: "soest",
        districtPath: "arnsberg",
        center: [{ bold: "Kreisstadt:", text: " Stadt Soest." }],
        area: [{ bold: "Fläche:", text: " 1.328,6 km² (Stand 2023)." }],
        population: [{ bold: "Einwohnerzahl:", text: " etwa 300.297 Personen (Stand 2023)." }],
        density: [{ bold: "Bevölkerungsdichte:", text: " 226 Personen/km²." }],
        code: [{ bold: "Amtlicher Regionalschlüssel:", text: " 05 9 74." }],
        description: [
            { text: "Der Kreis Soest gehört zum Land Nordrhein-Westfalen und untersteht dem Regierungsbezirk Arnsberg." }
        ],
        com: [{ text: "Der Kreis ist unterteilt in " }, { bold: "14 Gemeinden:" }],
        communities: [
            { id: 1, name: "Anröchte", hasInfo: false },
            { id: 2, name: "Bad Sassendorf", hasInfo: false },
            { id: 3, name: "Warstein", hasInfo: false },
            { id: 4, name: "Welver", hasInfo: false },
            { id: 5, name: "Werl", hasInfo: false },
            { id: 6, name: "Wickede", hasInfo: false },
            { id: 7, name: "Geseke", hasInfo: false },
            { id: 8, name: "Soest", hasInfo: false },
            { id: 9, name: "Lippetal", hasInfo: false },
            { id: 10, name: "Lippstadt", hasInfo: false },
            { id: 11, name: "Möhnesee", hasInfo: false },
            { id: 12, name: "Rüthen", hasInfo: false },
            { id: 13, name: "Ense", hasInfo: false },
            { id: 14, name: "Erwitte", hasInfo: false }
        ],
        gerb: "Germany/nrw/arnsberg/Soest/gerb.png"
    },
    {
        id: 1_3,
        name: "Märkischer",
        districtPath: "arnsberg",
        path: "merkischer",
        center: [{ bold: "Kreisstadt:", text: " Stadt Lüdenscheid." }],
        area: [{ bold: "Fläche:", text: " 1.058,95 km² (Stand 2023)." }],
        population: [{ bold: "Einwohnerzahl:", text: " 408.899 Personen (Stand 31.12.2023)." }],
        density: [{ bold: "Bevölkerungsdichte:", text: " 390 Personen/km²." }],
        code: [{ bold: "Amtlicher Regionalschlüssel:", text: " 05 9 62." }],
        description: [
            { text: "Der Märkische Kreis gehört zum Land Nordrhein-Westfalen und untersteht dem Regierungsbezirk Arnsberg." }
        ],
        com: [{ text: "Der Kreis ist unterteilt in " }, { bold: "15 Gemeinden:" }],
        communities: [
            { id: 1, name: "Altena", hasInfo: true, path: "altena" },
            { id: 2, name: "Balve", hasInfo:  false},
            { id: 3, name: "Werdohl", hasInfo: false },
            { id: 4, name: "Iserlohn", hasInfo: true, path: "iserlohn" },
            { id: 5, name: "Kierspe", hasInfo: false },
            { id: 6, name: "Lüdenscheid", hasInfo: true, path: 'luedenscheid' },
            { id: 7, name: "Meinerzhagen", hasInfo: false },
            { id: 8, name: "Menden", hasInfo: false },
            { id: 9, name: "Nachrodt-Wiblingwerde", hasInfo: false },
            { id: 10, name: "Neuenrade", hasInfo: false },
            { id: 11, name: "Plettenberg", hasInfo: false },
            { id: 12, name: "Halver", hasInfo: false },
            { id: 13, name: "Herscheid", hasInfo: false },
            { id: 14, name: "Hemer", hasInfo: false },
            { id: 15, name: "Schalksmühle", hasInfo: false }
        ],
        gerb: "Germany/nrw/arnsberg/Märkischer-Kreis/gerb.png"
    },
    {
        id: 1_4,
        name: "Olpe",
        path: "olpe",
        districtPath: "arnsberg",
        center: [{ bold: "Kreisstadt:", text: " Stadt Olpe." }],
        area: [{ bold: "Fläche:", text: " 710,7 km² (Stand 2023)." }],
        population: [{ bold: "Einwohnerzahl:", text: " 134.439 Personen (Stand 31.12.2022)." }],
        density: [{ bold: "Bevölkerungsdichte:", text: " 188,8 Personen/km²." }],
        code: [{ bold: "Amtlicher Regionalschlüssel:", text: " 05 9 66." }],
        description: [
            { text: "Der Kreis Olpe gehört zum Land Nordrhein-Westfalen und untersteht dem Regierungsbezirk Arnsberg." }
        ],
        com: [{ text: "Der Kreis ist unterteilt in " }, { bold: "7 Gemeinden:" }],
        communities: [
            { id: 1, name: "Attendorn", hasInfo: false },
            { id: 2, name: "Wenden", hasInfo: false },
            { id: 3, name: "Drolshagen", hasInfo: false },
            { id: 4, name: "Kirchhundem", hasInfo: false },
            { id: 5, name: "Lennestadt", hasInfo: false },
            { id: 6, name: "Olpe", hasInfo: false },
            { id: 7, name: "Finnentrop", hasInfo: false }
        ],
        gerb: "Germany/nrw/arnsberg/Olpe/gerb.png"
    },
    {
        id: 1_5,
        name: "Unna",
        path: "unna",
        districtPath: "arnsberg",
        center: [{ bold: "Kreisstadt:", text: " Stadt Unna." }],
        area: [{ bold: "Fläche:", text: " 543,2 km² (Stand 31.12.2023)." }],
        population: [{ bold: "Einwohnerzahl:", text: " 396.283 Personen (Stand 31.12.2023)." }],
        density: [{ bold: "Bevölkerungsdichte:", text: " 730,3 Personen/km²." }],
        code: [{ bold: "Amtlicher Regionalschlüssel:", text: " 05 9 78." }],
        description: [
            { text: "Der Kreis Unna gehört zum Land Nordrhein-Westfalen und untersteht dem Regierungsbezirk Arnsberg." }
        ],
        com: [{ text: "Der Kreis ist unterteilt in " }, { bold: "10 Gemeinden:" }],
        communities: [
            { id: 1, name: "Bönen", hasInfo: false },
            { id: 2, name: "Bergkamen", hasInfo: false },
            { id: 3, name: "Werne", hasInfo: false },
            { id: 4, name: "Selm", hasInfo: false },
            { id: 5, name: "Kamen", hasInfo: false },
            { id: 6, name: "Lünen", hasInfo: false },
            { id: 7, name: "Unna", hasInfo: false },
            { id: 8, name: "Fröndenberg", hasInfo: false },
            { id: 9, name: "Holzwickede", hasInfo: false },
            { id: 10, name: "Schwerte", hasInfo: false }
        ],
        gerb: "Germany/nrw/arnsberg/Unna/gerb.png"
    },
    {
        id: 1_6,
        name: "Hochsauerland",
        path: "hochsauerland",
        districtPath: "arnsberg",
        center: [{ bold: "Kreisstadt:", text: " Stadt Meschede." }],
        area: [{ bold: "Fläche:", text: " 1.960,2 km² (Stand 31.12.2023)." }],
        population: [{ bold: "Einwohnerzahl:", text: " 261.193 Personen (Stand 31.12.2023)." }],
        density: [{ bold: "Bevölkerungsdichte:", text: " 133,2 Personen/km²." }],
        code: [{ bold: "Amtlicher Regionalschlüssel:", text: " 05 9 58." }],
        description: [
            { text: "Der Hochsauerlandkreis gehört zum Land Nordrhein-Westfalen und untersteht dem Regierungsbezirk Arnsberg." }
        ],
        com: [{ text: "Der Kreis ist unterteilt in " }, { bold: "12 Gemeinden:" }],
        communities: [
            { id: 1, name: "Arnsberg", hasInfo: false },
            { id: 2, name: "Bestwig", hasInfo: false },
            { id: 3, name: "Brilon", hasInfo: false },
            { id: 4, name: "Winterberg", hasInfo: false },
            { id: 5, name: "Sundern", hasInfo: false },
            { id: 6, name: "Marsberg", hasInfo: false },
            { id: 7, name: "Medebach", hasInfo: false },
            { id: 8, name: "Meschede", hasInfo: false },
            { id: 9, name: "Olsberg", hasInfo: false },
            { id: 10, name: "Hallenberg", hasInfo: false },
            { id: 11, name: "Schmallenberg", hasInfo: false },
            { id: 12, name: "Eslohe", hasInfo: false }
        ],
        gerb: "Germany/nrw/arnsberg/Hochsauerlandkreis/gerb.png"
    },
    {
        id: 1_7,
        name: "Ennepe-Ruhr",
        path: "ennepe_ruhr",
        districtPath: "arnsberg",
        center: [
            { bold: "Kreisstadt:" },
            { text: " Stadt Schwelm." }
        ],
        area: [
            { bold: "Fläche:" },
            { text: " 408,44 km² (Stand 31.12.2023)." }
        ],
        population: [
            { bold: "Einwohnerzahl:" },
            { text: " 314.167 Personen (Stand 31.12.2024)." }
        ],
        density: [
            { bold: "Bevölkerungsdichte:" },
            { text: " 766,9 Personen/km²." }
        ],
        code: [
            { bold: "Amtlicher Regionalschlüssel:" },
            { text: " 05 9 54." }
        ],
        description: [
            { text: "Der Ennepe-Ruhr-Kreis gehört zum Land Nordrhein-Westfalen und untersteht dem Regierungsbezirk Arnsberg." }
        ],
        com: [
            { text: "Der Kreis ist unterteilt in " },
            { bold: "9 Gemeinden:" }
        ],
        communities: [
            { id: 1, name: "Breckerfeld", hasInfo: false },
            { id: 2, name: "Ennepetal", hasInfo: false },
            { id: 3, name: "Gevelsberg", hasInfo: false },
            { id: 4, name: "Hattingen", hasInfo: false },
            { id: 5, name: "Herdecke", hasInfo: false },
            { id: 6, name: "Schwelm", hasInfo: false },
            { id: 7, name: "Sprockhövel", hasInfo: false },
            { id: 8, name: "Wetter (Ruhr)", hasInfo: false },
            { id: 9, name: "Witten", hasInfo: false }
        ],
        gerb: "Germany/nrw/arnsberg/Ennepe-Ruhr-Kreis/gerb.png"
    },
    {
        id: 4_1,
        name: "Aachen",
        path: "aachen",
        districtPath: "koln",
        center: [{ bold: "Zentrum des Bezirks:", text: " Stadt Aachen." }],
        area: [{ bold: "Fläche:", text: " 707,15 km² (Stand 2023)" }],
        population: [{ bold: "Bevölkerung:", text: " 564 444 Einwohner (Stand 2023)" }],
        density: [{ bold: "Bevölkerungsdichte:", text: " 800 Einwohner/km² (2023)" }],
        code: [{ bold: "Offizieller Bezirkscode:", text: " 05 3 34." }],
        description: [{ text: "Der Bezirk Aachen gehört zum Bundesland Nordrhein-Westfalen und untersteht dem Regierungsbezirk Köln." }],
        com: [{ text: "Der Bezirk ist unterteilt in " }, { bold: "10 Gemeinden:" }],
        communities: [
            { id: 1, name: "Alsdorf", hasInfo: false },
            { id: 2, name: "Aachen", hasInfo: false },
            { id: 3, name: "Baesweiler", hasInfo: false },
            { id: 4, name: "Würselen", hasInfo: false },
            { id: 5, name: "Simmerath", hasInfo: false },
            { id: 6, name: "Monschau", hasInfo: true, path: 'monschau' },
            { id: 7, name: "Roetgen", hasInfo: false },
            { id: 8, name: "Herzogenrath", hasInfo: false },
            { id: 9, name: "Stolberg", hasInfo: false },
            { id: 10, name: "Eschweiler", hasInfo: false }
        ],
        gerb: "Germany/nrw/koln/Aachen/gerb.png"
    },
    {
        id: 4_2,
        name: "Düren",
        path: "duren",
        districtPath: "koln",
        center: [{ bold: "Zentrum des Bezirks:", text: " Stadt Düren." }],
        area: [{ bold: "Fläche:", text: " 941,15 km² (Stand 2023)" }],
        population: [{ bold: "Bevölkerung:", text: " 278 462 Einwohner (Stand 2023)" }],
        density: [{ bold: "Bevölkerungsdichte:", text: " 300 Einwohner/km² (2023)" }],
        code: [{ bold: "Offizieller Bezirkscode:", text: " 05 3 58." }],
        description: [
            { text: "Der Bezirk Düren gehört zum Bundesland Nordrhein-Westfalen und untersteht dem Regierungsbezirk Köln." }
        ],
        com: [{ text: "Der Bezirk ist unterteilt in " }, { bold: "15 Gemeinden:" }],
        communities: [
            { id: 1, name: "Aldenhoven", hasInfo: false },
            { id: 2, name: "Düren", hasInfo: false },
            { id: 3, name: "Inden", hasInfo: false },
            { id: 4, name: "Jülich", hasInfo: false },
            { id: 5, name: "Kreuzau", hasInfo: false },
            { id: 6, name: "Langerwehe", hasInfo: false },
            { id: 7, name: "Linnich", hasInfo: false },
            { id: 8, name: "Merzenich", hasInfo: false },
            { id: 9, name: "Nörvenich", hasInfo: false },
            { id: 10, name: "Nideggen", hasInfo: false },
            { id: 11, name: "Niederzier", hasInfo: false },
            { id: 12, name: "Titz", hasInfo: false },
            { id: 13, name: "Vettweiß", hasInfo: false },
            { id: 14, name: "Heimbach", hasInfo: false },
            { id: 15, name: "Hürtgenwald", hasInfo: false }
        ],
        gerb: "Germany/nrw/koln/Düren/gerb.png"
    },
    {
        id: 4_3,
        name: "Oberbergischer",
        path: "oberbergischer",
        districtPath: "koln",
        center: [
            { bold: "Kreisstadt:" },
            { text: " Gummersbach." }
        ],
        area: [
            { bold: "Fläche:" },
            { text: " 918,53 km² (Stand 2023)" }
        ],
        population: [
            { bold: "Einwohner:" },
            { text: " 275.735 (Stand: 31. Dezember 2023)" }
        ],
        density: [
            { bold: "Bevölkerungsdichte:" },
            { text: " ca. 300 Einwohner/km² (2023)" }
        ],
        code: [
            { bold: "Amtlicher Kreisschlüssel:" },
            { text: " 05 3 74." }
        ],
        description: [
            { text: "Oberbergischer Kreis gehört zum Land Nordrhein-Westfalen und untersteht dem Regierungsbezirk Köln." }
        ],
        com: [
            { text: "Der Kreis gliedert sich in " },
            { bold: "13 Gemeinden:" }
        ],
        communities: [
            { id: 1, name: "Bergneustadt", hasInfo: false },
            { id: 2, name: "Waldbröl", hasInfo: false },
            { id: 3, name: "Wiehl", hasInfo: false },
            { id: 4, name: "Wipperfürth", hasInfo: false },
            { id: 5, name: "Gummersbach", hasInfo: false },
            { id: 6, name: "Lindlar", hasInfo: false },
            { id: 7, name: "Marienheide", hasInfo: false },
            { id: 8, name: "Morsbach", hasInfo: false },
            { id: 9, name: "Nümbrecht", hasInfo: false },
            { id: 10, name: "Radevormwald", hasInfo: false },
            { id: 11, name: "Reichshof", hasInfo: false },
            { id: 12, name: "Hückeswagen", hasInfo: false },
            { id: 13, name: "Engelskirchen", hasInfo: false }
        ],
        gerb: "Germany/nrw/koln/Oberbergischer/gerb.png"
    },
    {
        id: 4_4,
        name: "Euskirchen",
        path: "euskirchen",
        districtPath: "koln",
        center: [
            { bold: "Zentrum des Bezirks:" },
            { text: " Stadt Euskirchen." }
        ],
        area: [
            { bold: "Fläche:" },
            { text: " 1.249,2 km² (Stand 2023)" }
        ],
        population: [
            { bold: "Bevölkerung:" },
            { text: " 188.773 Einwohner (Stand 2023)" }
        ],
        density: [
            { bold: "Bevölkerungsdichte:" },
            { text: " 151,1 Einwohner/km² (2023)" }
        ],
        code: [
            { bold: "Offizieller Bezirkscode:" },
            { text: " 05 3 66." }
        ],
        description: [
            { text: "Der Bezirk uskirchen gehört zum Bundesland Nordrhein-Westfalen und untersteht dem Regierungsbezirk Köln." }
        ],
        com: [
            { text: "Der Bezirk ist unterteilt in " },
            { bold: "11 Gemeinden:" }
        ],
        communities: [
            { id: 1, name: "Euskirchen", hasInfo: false },
            { id: 2, name: "Mechernich", hasInfo: false },
            { id: 3, name: "Zülpich", hasInfo: false },
            { id: 4, name: "Bad Münstereifel", hasInfo: false },
            { id: 5, name: "Weilerswist", hasInfo: false },
            { id: 6, name: "Schleiden", hasInfo: false },
            { id: 7, name: "Kall", hasInfo: false },
            { id: 8, name: "Blankenheim", hasInfo: false },
            { id: 9, name: "Hellenthal", hasInfo: false },
            { id: 10, name: "Nettersheim", hasInfo: false },
            { id: 11, name: "Dahlem", hasInfo: false }
        ],
        gerb: "Germany/nrw/koln/Euskirchen/gerb.png"
    },
    {
        id: 4_5,
        name: "Rhein-Sieg",
        path: "rhein_sieg",
        districtPath: "koln",
        center: [{ bold: "Kreisstadt:", text: " Siegburg." }],
        area: [{ bold: "Fläche:", text: " 1.153,00 km² (Stand 2023)" }],
        population: [{ bold: "Einwohner:", text: " ca. 620.000 (Stand 2023)" }],
        density: [{ bold: "Bevölkerungsdichte:", text: " ca. 538 Einwohner/km² (2023)" }],
        code: [{ bold: "Amtlicher Kreisschlüssel:", text: " 05 3 82." }],
        description: [{ text: "Rhein-Sieg-Kreis gehört zum Bundesland Nordrhein-Westfalen und untersteht dem Regierungsbezirk Köln." }],
        com: [{ text: "Der Kreis gliedert sich in " }, { bold: "19 Städte und Gemeinden:" }],
        communities: [
            { id: 1, name: "Eitorf", hasInfo: false },
            { id: 2, name: "Alfter", hasInfo: false },
            { id: 3, name: "Bad Honnef", hasInfo: false },
            { id: 4, name: "Bornheim", hasInfo: false },
            { id: 5, name: "Wachtberg", hasInfo: false },
            { id: 6, name: "Windeck", hasInfo: false },
            { id: 7, name: "Siegburg", hasInfo: false },
            { id: 8, name: "Königswinter", hasInfo: true, path: "konigswinter" },
            { id: 9, name: "Lohmar", hasInfo: false },
            { id: 10, name: "Meckenheim", hasInfo: false },
            { id: 11, name: "Much", hasInfo: false },
            { id: 12, name: "Niederkassel", hasInfo: false },
            { id: 13, name: "Neunkirchen-Seelscheid", hasInfo: false },
            { id: 14, name: "Rheinbach", hasInfo: false },
            { id: 15, name: "Ruppichteroth", hasInfo: false },
            { id: 16, name: "Troisdorf", hasInfo: false },
            { id: 17, name: "Sankt Augustin", hasInfo: false },
            { id: 18, name: "Swisttal", hasInfo: false },
            { id: 19, name: "Hennef (Sieg)", hasInfo: false }
        ],
        gerb: "Germany/nrw/koln/Rhein-Sieg-Kreis/gerb.png"
    },
    {
        id: 6,
        name: "Rhein-Erft",
        path: "rhein_erft",
        districtPath: "koln",
        center: [{ bold: "Kreisstadt:", text: " Bergheim." }],
        area: [{ bold: "Fläche:", text: " 704,70 km² (Stand 2023)" }],
        population: [{ bold: "Einwohner:", text: " 480.989 Einwohner (Stand 2023)" }],
        density: [{ bold: "Bevölkerungsdichte:", text: " ca. 679 Einwohner/km² (2022–2023)" }],
        code: [{ bold: "Amtlicher Kreisschlüssel:", text: " 05 3 62." }],
        description: [
            { text: "Rhein-Erft-Kreis gehört zum Land Nordrhein-Westfalen und untersteht dem Regierungsbezirk Köln." }
        ],
        com: [{ text: "Der Kreis gliedert sich in " }, { bold: "10 Städte / Gemeinden:" }],
        communities: [
            { id: 1, name: "Bedburg", hasInfo: false },
            { id: 2, name: "Bergheim", hasInfo: false },
            { id: 3, name: "Brühl", hasInfo: true, path: "bruhl" },
            { id: 4, name: "Elsdorf", hasInfo: false },
            { id: 5, name: "Erftstadt", hasInfo: false },
            { id: 6, name: "Frechen", hasInfo: true, path: 'frechen' },
            { id: 7, name: "Hürth", hasInfo: false },
            { id: 8, name: "Kerpen", hasInfo: false },
            { id: 9, name: "Pulheim", hasInfo: false },
            { id: 10, name: "Wesseling", hasInfo: false }
        ],
        gerb: "Germany/nrw/koln/Rhein-Erft-Kreis/gerb.png"
    },
    {
        id: 4_7,
        name: "Rheinisch-Bergischer",
        path: "rheinisch_bergischer",
        districtPath: "koln",
        center: [
            { bold: "Kreisstadt:" },
            { text: " Bergisch Gladbach." }
        ],
        area: [
            { bold: "Fläche:" },
            { text: " 437,07 km² (Stand 2023)" }
        ],
        population: [
            { bold: "Einwohner:" },
            { text: " 283.000 (Stand 2023)" }
        ],
        density: [
            { bold: "Bevölkerungsdichte:" },
            { text: " ca. 648 Einwohner/km² (2023)" }
        ],
        code: [
            { bold: "Amtlicher Kreisschlüssel:" },
            { text: " 05 3 78." }
        ],
        description: [
            { text: "Rheinisch-Bergischer Kreis gehört zum Bundesland Nordrhein‑Westfalen und untersteht dem Regierungsbezirk Köln." }
        ],
        com: [
            { text: "Der Kreis gliedert sich in " },
            { bold: "8 Städte / Gemeinden:" }
        ],
        communities: [
            { id: 1, name: "Bergisch Gladbach", hasInfo: false },
            { id: 2, name: "Burscheid", hasInfo: false },
            { id: 3, name: "Wermelskirchen", hasInfo: false },
            { id: 4, name: "Kürten", hasInfo: false },
            { id: 5, name: "Leichlingen", hasInfo: false },
            { id: 6, name: "Overath", hasInfo: false },
            { id: 7, name: "Odenthal", hasInfo: false },
            { id: 8, name: "Rösrath", hasInfo: false }
        ],
        gerb: "Germany/nrw/koln/Rheinisch-Bergischer/gerb.png"
    },
    {
        id: 4_8,
        name: "Heinsberg",
        path: "heinsberg",
        districtPath: "koln",
        center: [
            { bold: "Kreisstadt:" },
            { text: " Heinsberg." }
        ],
        area: [
            { bold: "Fläche:" },
            { text: " 627,7 km² (Stand 2023)" }
        ],
        population: [
            { bold: "Einwohner:" },
            { text: " 250.000 (Stand 2023)" }
        ],
        density: [
            { bold: "Bevölkerungsdichte:" },
            { text: " ca. 398 Einwohner/km² (2023)" }
        ],
        code: [
            { bold: "Amtlicher Kreisschlüssel:" },
            { text: " 05 3 70." }
        ],
        description: [
            { text: "Kreis Heinsberg gehört zum Bundesland Nordrhein‑Westfalen und untersteht dem Regierungsbezirk Köln." }
        ],
        com: [
            { text: "Der Kreis gliedert sich in " },
            { bold: "10 Städte / Gemeinden:" }
        ],
        communities: [
            { id: 1, name: "Waldfeucht", hasInfo: false },
            { id: 2, name: "Wassenberg", hasInfo: false },
            { id: 3, name: "Wegberg", hasInfo: false },
            { id: 4, name: "Geilenkirchen", hasInfo: false },
            { id: 5, name: "Gangelt", hasInfo: false },
            { id: 6, name: "Selfkant", hasInfo: false },
            { id: 7, name: "Übach-Palenberg", hasInfo: false },
            { id: 8, name: "Heinsberg", hasInfo: false },
            { id: 9, name: "Hückelhoven", hasInfo: false },
            { id: 10, name: "Erkelenz", hasInfo: false }
        ],
        gerb: "Germany/nrw/koln/Heinsberg/gerb.png"
    }
]
export default datas