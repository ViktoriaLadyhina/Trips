const datas = {
    id: 11,
    name: 'Oblast Sumy',
    country: "Ukraine",
    hasInfo: true,
    path: 'sumska',
    desc: {
        capital: [
            { bold: 'Verwaltungszentrum:' },
            { text: ' die Stadt Sumy. Hier konzentriert sich ein großer Teil des industriellen Potenzials der Region: ein Großteil der Industrieproduktion der Oblast wird hier hergestellt. Sumy ist eine der ältesten Städte Slobodschukrains mit reicher Geschichte und Traditionen. Die Einwohner sind stolz auf architektonische Denkmäler, Theater und Museen, und die Stadt selbst ist als „Stadt der Brunnen“ bekannt.' }
        ],
        geography: [
            { bold: 'Geographische Lage:' },
            { text: ' Die Oblast Sumy liegt im Nordosten der Ukraine: im Norden und Osten grenzt sie an die Regionen Brjansk, Kursk und Belgorod in Russland, im Süden und Südosten an die Regionen Poltawa und Charkiw der Ukraine, im Westen an die Region Tschernihiw.' },
            { text: ' Die Fläche der Region beträgt 23,8 Tsd. km². Von Westen nach Osten erstreckt sich die Oblast über 170 km, von Norden nach Süden über 200 km.' }
        ],
        population: [
            { bold: 'Bevölkerung:' },
            { text: ' Nach Angaben von 2023 leben etwa 1.034.000 Menschen in der Region. Die Mehrheit sind Ukrainer; es gibt auch Russen, Weißrussen und Vertreter anderer Nationalitäten.' }
        ],
        economy: [
            { bold: 'Wirtschaft:' },
            { text: ' Die Region Sumy verfügt über eine entwickelte Industrie:' },
            { text: 'Maschinenbau — einer der führenden Industriezweige, vertreten durch das Unternehmen „Sumy NPO“.' },
            { text: 'Chemische Industrie — Fabrik „SumyKhimProm“.' },
            { text: 'Lebensmittelindustrie und Landwirtschaft spielen ebenfalls eine wichtige Rolle.' },
            { text: 'In Schostka arbeitet eine der ältesten Schießpulverfabriken Europas.' },
            { text: 'In Sumy gibt es eine Fabrik zur Herstellung von Gasturbinen, eine der bedeutendsten im Land.' }
        ],
        notablePeople: {
            title: 'Bekannte Persönlichkeiten',
            items: [
                { bold: 'Pantelejmon Kulisch', text: ' — Schriftsteller.' },
                { bold: 'Alexander Dowshenko', text: ' — Filmregisseur.' },
                { bold: 'Walerij Tschkalow', text: ' — Testpilot.' }
            ]
        },
        interestingFacts: {
            title: 'Interessante Fakten',
            items: [
                { text: 'Die Stadt Sumy wurde 1655 von Kosaken gegründet, die vor der polnischen Herrschaft flohen.' },
                { text: 'Im Gebiet fließt der längste Fluss des Linken Ufers der Ukraine — der Sejm.' },
                { text: '1659 fand in Konotop die berühmte Schlacht von Konotop statt, in der die Kosaken die russische Armee besiegten.' },
                { text: 'In Achtyrka ist eine ungewöhnliche achteckige Kirche erhalten geblieben.' },
                { text: 'Im 18. Jahrhundert besuchte Katharina II. den Palast von Krolewets.' },
                { text: 'Die Region ist für ihre Tonbergwerke bekannt, in denen hochwertige Keramikton abgebaut wird.' },
                { text: 'Die Oblast Sumy gilt als eine der ökologisch saubersten Regionen der Ukraine.' }
            ]
        },
        culture: [
            { bold: 'Kultur und Traditionen:' },
            { text: ' Sumy ist reich an historischen Ereignissen und Volkslegenden. Besonders bekannt ist das Bild der Konotoper Hexen — Figuren der ukrainischen Folklore, umgeben von zahlreichen Überlieferungen, die in der Erzählung von Hryhorij Kvitka-Osnovjanenko „Die Hexe von Konotop“ dargestellt werden. Diese Geschichten, voller Humor und Mystik, sind Teil des kulturellen Gedächtnisses und ein Symbol der Eigenständigkeit der Region.' }
        ]
    },
    symbols: {
        title: "Heraldik",
        items: [
            {
                bold: "Wappen:",
                text: `
        Die Elemente des Wappens sind auf einem heraldischen Schild mit blauem Feld und gelbem Rand angeordnet. Blau neben Gelb ist in Sumy traditionell.<br>
        Im blauen Feld befindet sich ein goldener Helm mit silbernen Details, darunter ein heraldisch gebogener goldener Ährenkolben mit 25 Körnern, links ein goldenes Achtyrka-Kreuz.<br>
        Der goldene Helm im oberen Teil des Wappens symbolisiert den historischen Ursprung unserer Länder seit der Kiewer Rus.<br>
        Der goldene Ährenkolben, gebogen in Form des Buchstabens „S“ mit 25 Körnern, symbolisiert den historischen Weg der Bildung der Oblast Sumy sowie die Landwirtschaft — die Haupttätigkeit der Einwohner und Charakterzüge: Fleiß, Gastfreundschaft, Häuslichkeit, Liebe zum Heimatland.<br>
        Das goldene Kreuz weist auf Spiritualität hin, die von Generation zu Generation weitergegeben wird.<br>
        Die Anordnung dieser Elemente unter dem goldenen Helm symbolisiert die Bereitschaft und Fähigkeit der Bewohner, ihr Heimatland und die geistigen sowie materiellen Werte zu schützen, was sich in der gesamten Geschichte gezeigt hat — von Kämpfen gegen Nomadenstämme bis zu heldenhaften Kapiteln des Zweiten Weltkriegs.<br>
        Diese drei Elemente symbolisieren auch die drei Teile der Oblast Sumy: Helm — Gebiete, die von der Oblast Tschernihiw abgetrennt wurden; Ähre — Gebiete, die von der Oblast Charkiw abgetrennt wurden; Kreuz — Gebiete, die von der Oblast Poltawa abgetrennt wurden.<br>
        Die blau-gelben Farben unterstreichen, dass die Region ein integraler Bestandteil des Staates Ukraine ist.
      `,
                img: "Ukraine/sumska/gerb.gif"
            },
            {
                bold: "Flagge:",
                text: `
        Die Flagge der Oblast Sumy ist ein blaues Tuch mit dem Verhältnis von Breite zu Länge 2:3.<br>
        Im Zentrum befindet sich das Wappen der Region, dessen Größe in Höhe des Flaggentuchs im Verhältnis 2:3 steht.
      `,
                img: "Ukraine/sumska/flag.gif"
            }
        ]
    },
    briefHistory: {
        title: 'Kurze Geschichte',
        items: [
            { bold: 'Urzeiten:' },
            { text: ' Die Besiedlung des heutigen Gebiets der Oblast Sumy begann vor etwa 15.000 Jahren. Archäologische Funde in der Nähe von Schostka, Konotop und Sumy zeugen vom Leben der prähistorischen Mammutjäger. In der Bronze- und frühen Eisenzeit lebten hier landwirtschaftlich und viehzuchtlich orientierte Stämme, die zahlreiche Siedlungen und Grabhügel hinterließen. Später entwickelten sich auf diesen Gebieten frühslawische Kulturen, und im 7.–10. Jahrhundert lebten die Seweren in Sumy.' },
            { bold: 'Kiewer Rus:' },
            { text: ' In dieser Zeit gehörte das Gebiet zur mächtigsten Staaten Europas. Trotz ständiger Überfälle von Nomaden war das Gebiet dicht besiedelt und hatte über 80 Städte und Siedlungen, darunter Romny, Vyr, Putivl und Hluchiw. Über die Ereignisse auf diesen Gebieten berichtet das „Wort vom Fürsten Igor“. ' },
            { bold: '16.–17. Jahrhundert:' },
            { text: ' Sumy war mehrfach Schauplatz von Kämpfen verschiedener Staaten. 1606 begann in Putivl der Bauernaufstand unter der Führung von Iwan Bolotnikow, einer der engsten Gefährten war der Putivler Jurij Beszubzew. Später gehörten diese Gebiete zur Hetmanat. 1659 fand bei Konotop die berühmte Schlacht statt, in der die Truppen des Hetmans Iwan Wyhowski die russische Armee besiegten.' },
            { bold: 'Anfang 18. Jahrhundert:' },
            { text: ' Während des Nordischen Krieges befand sich die Bevölkerung von Sumy im Zentrum des Konflikts zwischen Hetman Iwan Mazepa und Zar Peter I. Die Tragödie bestand darin, dass ein Teil der Bevölkerung den Hetman unterstützte, andere den Zar. Dies führte zu grausamen Repressionen: in Lebedyn wurden Mazepas Anhänger hingerichtet, in Sumy wurde ein Manifest zu seiner Verurteilung verkündet. Nach der Zerstörung von Baturyn wurde Hluchiw neue Hauptstadt der Hetmanat-Ukraine, was Sumy zu einem wichtigen politischen Zentrum machte.' },
            { bold: '19. Jahrhundert:' },
            { text: ' Die Region wurde zu einem Zentrum der industriellen Entwicklung. Besonders bedeutend war die Zuckerproduktion: Sumy wurde als „Zuckerhauptstadt“ bezeichnet, die Namen Tereschtschenko und Charitonenko wurden zum Symbol erfolgreichen Unternehmertums. Sumy zeichnete sich auch durch ein hohes Bildungs- und Kulturlevel aus: in Sumy, Hluchiw und anderen Städten wurden Schulen, Bibliotheken und Volksschulen eröffnet.' },
            { bold: '20. Jahrhundert:' },
            { text: ' 1932–1933 erlitt die Region stark unter dem Holodomor, der Tausende Menschenleben forderte. Während des Zweiten Weltkriegs befand sich Sumy in der Zone heftiger Kämpfe und der Nazi-Besatzung. Zehntausende Zivilisten starben, Tausende wurden nach Deutschland verschleppt. Aber hier entwickelte sich eine starke Partisanenbewegung. Die Truppen von Sydor Kowpak, Alexander Saburov und vielen anderen operierten in der ganzen Region, führten Überfälle hinter feindlichen Linien durch und zerstörten Kommunikation und Eisenbahnen. Ihr Kampf wurde zum Symbol von Mut und Widerstand.' },
            { bold: 'Gegenwart:' },
            { text: ' Sumy bewahrt weiterhin ein reiches historisches Erbe, und das Gedenken an die heldenhafte Vergangenheit — von den alten slawischen Städten bis zum Partisanenkampf — ist ein wichtiger Teil der kulturellen Identität der Region.' },
            { bold: 'Heute:' },
            { text: 'Im Februar 2022 erlebte die Region Sumy als eine der ersten den Angriff der umfassenden Invasion Russlands. Grenzstädte und Dörfer wurden heftig beschossen und zerstört, viele Siedlungen, die nur wenige Kilometer von der Grenze entfernt liegen, wurden nahezu dem Erdboden gleichgemacht.' },
            { text: 'Die Bewohner waren gezwungen, ihre Häuser zu verlassen, um sich vor der ständigen Bedrohung zu retten. Trotz der Tragödie und enormer Verluste zeigte die Region eine erstaunliche Standhaftigkeit: die lokalen Gemeinden schlossen sich zusammen, um durchzuhalten und Leben zu bewahren.' },
            { text: 'Besondere Erwähnung verdient die Stadt Achtyrka, die 2022 den Titel „Stadt-Held der Ukraine“ erhielt für den massenhaften Heldenmut der Einwohner und die Standhaftigkeit bei der Verteidigung der Stadt.' },
            { text: 'Diese neueste Seite der Geschichte der Region Sumy ist ein Symbol für den Mut und die Unerschütterlichkeit ihres Volkes.' }]
    },
    discriptRegions: [
        {
            title: "Landkreise der Oblast Sumy",
            items: [
                { id: 1, name: "Sumsky", hasInfo: false, path: "sumskyi" },
                { id: 2, name: "Akhtyrsky", hasInfo: false, path: "akhtyrskyi" },
                { id: 3, name: "Konotopsky", hasInfo: false, path: "konotopskyi" },
                { id: 4, name: "Romensky", hasInfo: false, path: "romenskyi" },
                { id: 5, name: "Shostkynsky", hasInfo: false, path: "shostkynskyi" }
            ]
        },
        {
            title: "Städte mit regionaler Unterstellung",
            items: [
                { id: 1, name: "Sumy", hasInfo: false, path: "sumy" },
                { id: 2, name: "Lebedyn", hasInfo: false, path: "lebedyn" },
                { id: 3, name: "Romny", hasInfo: false, path: "romny" },
                { id: 4, name: "Shostka", hasInfo: false, path: "shostka" },
                { id: 5, name: "Akhtyrka", hasInfo: false, path: "akhtyrka" },
                { id: 6, name: "Glukhiv", hasInfo: false, path: "gluhov" },
                { id: 7, name: "Konotop", hasInfo: false, path: "konotop" }
            ]
        }
    ],
    meta: {
        title: "Oblast Sumy — Informationen über die Region",
        description: "Oblast Sumy: Städte, Geschichte, Kultur, Wirtschaft und interessante Fakten.",
        ogTitle: "Oblast Sumy — Informationen über die Region",
        ogDescription: "Detaillierte Informationen über die Oblast Sumy: Geschichte, Kultur, Städte und Sehenswürdigkeiten.",
        ogImage: "/Ukraine/Sumy/sumy-map.jpg"
    }
}

export default datas