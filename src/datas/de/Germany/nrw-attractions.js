const datas = [
    {
        id: "bruhel_palaces",
        name: "Brühler Schlösser: Ensemble Augustusburg und Falkenlust",
        type: "Schloss",
        path: 'bruehl-palaces',
        regionsPath: "nrw",
        districtPath: "koln",
        cityPath: "bruehl",
        fotoCard: "Germania/Nordrhein/Bruhl/001.jpg",
        location: "Brühl, Deutschland",
        officialSite: [
            { bold: 'Offizielle Website der Brühler Schlösser', link: 'https://www.schlossbruehl.de/en/' },
        ],
        unesco_status: {
            included: true,
            year: 1984
        },
        tickets_and_entry: {
            title: "Tickets und Eintritt",
            items: [
                { bold: "Der Eintritt in den Park und die Gärten ist", text: " frei, ein Besuch ist das ganze Jahr über möglich." },
                { bold: "Der Besuch der Schlösser Augustusburg und Falkenlust ist", text: " kostenpflichtig, Führungen finden nach Plan statt." },
                { bold: "Preise für 2025:", text: " Augustusburg — 11 € für Erwachsene, kostenlos für Besucher bis 25 Jahre; Falkenlust — 8 €; Kombiticket — 17 €." }
            ]
        },
        architectural_style: ["Barock", "Rokoko"],
        construction_period: "1723–Mitte des 18. Jahrhunderts",
        architects: ["Johann Conrad Schlaun", "Balthasar Neumann", "Dominique Girard", "François de Cuvilliés"],
        founder: "Clemens August von Wittelsbach",
        historical_figures: ["Clemens August", "Joseph Clemens", "Karl Albrecht", "Karl VII.", "Maria Theresia", "Karl VI."],
        short_description: "Die Brühler Schlösser sind ein herausragendes Ensemble des Barock und Rokoko in der Stadt Brühl bei Köln. Sie wurden im Auftrag des Kurfürsten Clemens August errichtet und 1984 in die UNESCO-Welterbeliste aufgenommen. Neben den architektonischen Meisterwerken ist das Ensemble berühmt für seinen französischen Garten mit prächtigem Parterre, Spiegelbecken, Brunnen sowie ausgedehnten Landschaftsgärten im englischen Stil.",
        full_description: {
            title: 'Beschreibung und Geschichte',
            items: [
                { text: "Im Jahr 1984 wurden die Brühler Schlösser als eines der besten deutschen Beispiele der Rokoko-Architektur und als Ensemble, in dem Architektur und Gartenkunst eine Einheit bilden, in die UNESCO-Welterbeliste aufgenommen." },
                { text: "Ihr Besitzer, Kurfürst Clemens August, stammte aus dem berühmten Haus Wittelsbach – einer Dynastie, die Deutschland Kurfürsten, Könige, Kaiser und Erzbischöfe gab. Sein Onkel, der Kölner Erzbischof-Kurfürst Joseph Clemens, plante ursprünglich, in Brühl eine Sommerresidenz zu errichten. Diese Idee griff der Neffe auf, als er 1723 sein Amt antrat. Unter der Leitung von Johann Conrad Schlaun begann man auf den Ruinen einer von den Franzosen zerstörten Festung mit dem Bau. Ursprünglich waren ein repräsentatives Schloss für Empfänge und ein kleiner Pavillon für die Falkenjagd vorgesehen, doch sein älterer Bruder Karl Albrecht hielt das Projekt für überholt, und Clemens August ließ sich von seinen Ratschlägen überzeugen." },
                { text: "Clemens August strebte nach dem Besten und holte führende Architekten, Bildhauer und Gärtner an seinen Hof. Die Arbeiten am Ensemble dauerten sein Leben lang. Schon nach wenigen Jahren konnte Schloss Augustusburg mit den bayerischen Residenzen Karl Albrechts konkurrieren, und das „Jagdschlösschen“ Falkenlust wurde zur Lieblingszuflucht des Kurfürsten." },
                { text: "Seit dem späten 16. Jahrhundert dominierte in Europa der Barock – ein üppiger, theatralischer Stil mit reicher Stuckdekoration und dekorativen Effekten. Die Monarchen wetteiferten in Pracht und wollten einander übertreffen. In Brühl mündete dieser Wettstreit in einen „kühnen Cocktail“ aus Barock und Rokoko, der später als eines der besten Beispiele deutscher Architektur anerkannt wurde. Besonders berühmt wurde die Prunktreppe des großen Architekten Balthasar Neumann." },
                { text: "Die Gärten und Parks, die die Brühler Schlösser umgeben, wurden 1728 nach dem Entwurf von Dominique Girard angelegt, einem Schüler von André Le Nôtre – dem Meister der Gartenkunst von Versailles. Das barocke Parterre mit kunstvollen Broderien, Spiegelbecken, Brunnen, akkurat geschnittenen Hecken und Blumenrabatten schmückt das Ensemble jedes Jahr von Mai bis Oktober. Lindenalleen, Boskette und die Wege nach Falkenlust erzeugen eine räumliche Verbindung zwischen Schloss und Jagdpavillon." },
                { text: "Ab Mitte des 19. Jahrhunderts, etwa ab 1842, wurde der Park teilweise nach englischen Vorbildern der Gartenkunst von Peter Joseph Lenné umgestaltet. Waldbereiche, unterbrochene Wiesen, geschwungene Wege, Inselteiche und natürliche Wasserflächen fügten romantische, naturhafte Elemente hinzu, die mit der formalen Symmetrie des Barocks kontrastierten." },
                { text: "Die Innenräume des Schlosses beeindrucken durch ihren Reichtum: Säle mit Gemälden, Skulpturen und Antiquitäten. Hier befindet sich auch der Kaiserthron, den Clemens August für seinen älteren Bruder Karl VII. in Auftrag gab, der 1742 gekrönt wurde. Dieser Thron erinnert an die komplexe dynastische Geschichte: Kaiser Karl VI. Habsburg, ohne männlichen Erben, erließ noch zu Lebzeiten die „Pragmatische Sanktion“, die es erlaubte, den Thron an seine Tochter Maria Theresia zu übertragen." },
                { text: "Das Leben von Clemens August verlief erfolgreich, was zahlreiche Porträts des Schlossherrn zeigen: beim Ball, im Ornat des Kölner Erzbischofs, im Rittergewand des Hochmeisters des Deutschen Ordens oder mit seinem Lieblingsfalken bei der Jagd. Die Nachfolger des Kurfürsten vollendeten das Ensemble. Doch Ende des 18. Jahrhunderts besetzten Truppen der Französischen Revolution das Rheinland. Die Schlösser, Symbole des unabhängigen Absolutismus, wurden geplündert und beschädigt." },
                { text: "Nach dem Sturz Napoleons fiel Brühl an Preußen. Die Schlösser dienten als königliche und später kaiserliche Residenz am Rhein. Später überstanden sie Kriege, neue Zerstörungen und Restaurierungen im 20. Jahrhundert. Heute ist das Ensemble Augustusburg und Falkenlust als Museum zugänglich und gehört dank der UNESCO zu den deutschen „Wundern der Welt“." }
            ]
        },
        interestingFacts: {
            title: 'Interessante Fakten',
            items: [
                { text: "Falkenlust wurde als Pavillon für die Falkenjagd gebaut." },
                { text: "Die Prunktreppe von Augustusburg gilt als Meisterwerk von Balthasar Neumann." },
                { text: "Der Garten erinnert an Versailles und wurde von Dominique Girard entworfen." },
                { text: "Im Schloss befindet sich der Kaiserthron, der für Karl VII. angefertigt wurde." },
                { text: "Von der Parkanlage führt eine Lindenallee nach Falkenlust." },
                { text: "Im 19. Jahrhundert gestaltete Peter Joseph Lenné Teile des Parks im englischen Stil um." }
            ]
        },
        related_objects: ["Augustusburg", "Falkenlust"],
        categories: ["Architektur", "UNESCO", "Museum", "Schloss", "Gärten und Parks"],
        meta: {
            title: "Die Brühler Schlösser und der prächtige Park: Architektur und Natur des 18. Jahrhunderts",
            description: "Das Ensemble der Schlösser Augustusburg und Falkenlust in Brühl – ein Meisterwerk des Barock und Rokoko, ergänzt durch französische und englische Gärten, Brunnen, Alleen und Spiegelbecken. Geschichte, Stil, interessante Fakten.",
            ogTitle: "Brühler Schlösser: Architektur, Gärten und Legenden",
            ogDescription: "Entdecken Sie die Brühler Schlösser – ihre Pracht, Innenräume, den Park mit Parterre, Alleen und englischem Landschaftsgarten, ihre kulturelle Bedeutung und ihren UNESCO-Status.",
            ogImage: "/nrw/bruehl-palaces.jpg"
        }
    },
    {
        id: "max_ernst_museum",
        name: "Max-Ernst-Museum",
        type: "Museum",
        path: "max-ernst-museum",
        regionsPath: "nrw",
        districtPath: "koln",
        cityPath: "bruehl",
        fotoCard: "Germania/Nordrhein/Bruhl/002.jpg",
        location: "Brühl, Deutschland",
        officialSite: [
            { bold: 'Offizielle Webseite des Max-Ernst-Museums', link: 'https://maxernstmuseum.lvr.de/en/startseite_1.html' }
        ],
        unesco_status: {
            included: false
        },
        tickets_and_entry: {
            title: "Tickets und Eintritt",
            items: [
                { bold: "Eintritt ins Museum:", text: " Erwachsene — 5 €, Ermäßigungen für Familien mit Kindern vorgesehen." },
                { bold: "Öffnungszeiten:", text: " Dienstag–Sonntag, 11:00–18:00." }
            ]
        },
        short_description: "Das Max-Ernst-Museum in Brühl ist das einzige Museum weltweit, das dem Leben und Werk des Künstlers Max Ernst (1891–1976) gewidmet ist. Das Museum wurde 2005 eröffnet und befindet sich auf dem Gelände eines Palastkomplexes im Klassizismus des 19. Jahrhunderts.",
        full_description: {
            title: "Beschreibung und Geschichte",
            items: [
                { text: "Das Max-Ernst-Museum in Brühl (Max Ernst Museum Brühl des LVR) ist das einzige Museum weltweit, das dem Leben und Werk des Künstlers Max Ernst (1891–1976) gewidmet ist. Es befindet sich in einem Gebäude, das von den Architekten Thomas van den Valentijn und Seyed Mohammad Oreizi entworfen wurde, und wurde im September 2005 eröffnet. Das Museum liegt auf dem Gelände eines Palastkomplexes im Klassizismus des 19. Jahrhunderts. maxernstmuseum.lvr.de" },
                { text: "Die Sammlung des Museums umfasst über 70 Jahre Schaffens von Max Ernst und enthält etwa 2040 Exponate, darunter Gemälde, Skulpturen, Objekte, Fotografien und Papierarbeiten. Besonderes Augenmerk liegt auf seiner dadaistischen und surrealistischen Phase. Das Museum veranstaltet regelmäßig Sonderausstellungen, in denen zeitgenössische Künstler gezeigt werden, die die Traditionen von Dadaismus und Surrealismus fortsetzen." },
                { text: "Der Bau des Max-Ernst-Museums zog sich lange hin: Die Fertigstellung verzögerte sich um fünf Monate, und für das Projekt wurden 14 Millionen Euro ausgegeben." },
                { text: "Max Ernst wurde 1891 in Brühl geboren. Er gilt als Pionier des Dadaismus und als einer der Begründer des Surrealismus." },
                { text: "Früher gab es in Brühl bereits ein Atelier-Museum von Ernst, das in einem Skandal endete: Die Stadt verkaufte eines der vom Künstler geschenkten Gemälde, um die Unterhaltskosten zu decken. Ernst war verärgert, aber der jahrelange Streit endete mit Versöhnung, und das Bild kehrte als Exponat zurück, das vorübergehend vom Kölner Museum Ludwig bereitgestellt wurde." }
            ]
        },
        interestingFacts: {
            title: "Interessante Fakten",
            items: [
                { text: "Das Max-Ernst-Museum ist das einzige Museum weltweit, das vollständig dem Werk von Ernst gewidmet ist." },
                { text: "Die Finanzierung des Museums erfolgt durch den LVR-Fonds gemeinsam mit den Stadt- und Regionalbehörden." }
            ]
        },
        construction_period: "2000–2005",
        founder: "LVR-Fonds (Stadt- und Regionalbehörden)",
        categories: ["Museum", "Kunst", "Dadaismus", "Surrealismus"],
        meta: {
            title: "Max-Ernst-Museum in Brühl: Leben und Werk des Künstlers",
            description: "Das einzige Museum weltweit, das Max Ernst gewidmet ist. Sammlung, Geschichte, Dadaismus, Surrealismus, Sonderausstellungen.",
            ogTitle: "Max-Ernst-Museum — Brühl, Deutschland",
            ogDescription: "Entdecken Sie das Max-Ernst-Museum in Brühl, seine Sammlung und Ausstellungen, die dem Dadaismus und Surrealismus gewidmet sind.",
            ogImage: "/nrw/bruehl/max-ernst-museum.jpg"
        }
    },
    {
        id: "keramion_frechen",
        name: "KERAMION – Zentrum für moderne und historische Keramik",
        type: "Museum",
        path: "keramion",
        regionsPath: "nrw",
        districtPath: "koln",
        cityPath: "frechen",
        fotoCard: "../../Gallery/Germany/Frechen/frechen_keramion.jpg",
        location: "Frechen, Deutschland",
        officialSite: [
            { bold: 'Offizielle Website von KERAMION', link: 'https://keramion.de/' }
        ],
        unesco_status: {
            included: false
        },
        tickets_and_entry: {
            title: "Eintrittspreise (gültig für 2025)",
            items: [
                { bold: "Eintritt für Erwachsene:", text: " 7,00 €" },
                { bold: "Ermäßigt:", text: " 5,00 €" },
                { bold: "Familienkarte:", text: " 14,00 € (2 Erwachsene + bis zu 3 Kinder)" },
                { bold: "Kinder bis 16 Jahre:", text: " kostenlos" }
            ]
        },
        visiting_hours: {
            title: "Öffnungszeiten",
            items: [
                { text: "Dienstag – Sonntag: 11:00–17:00" },
                { text: "Montag: geschlossen" }
            ]
        },
        short_description: "Das KERAMION in Frechen ist ein Museum, das historische und moderne Keramik vereint; es befindet sich in einem futuristisch gestalteten runden Gebäude, das 1971 vom Architekturbüro Peter Neufert im Auftrag des Sammlers Dr. Gottfried Cremer errichtet wurde.",
        full_description: {
            title: "Beschreibung und Geschichte",
            items: [
                { text: "Das KERAMION in Frechen ist ein Zentrum für moderne und historische Keramik, gegründet im Jahr 2002. Es vereinte die private Sammlung von Dr. Gottfried Cremer mit dem städtischen historischen Keramikmuseum." },
                { text: "Das Museumsgebäude wurde 1970–1971 nach Plänen des Architekten Peter Neufert und des Ingenieurs Stefan Polónyi speziell für die Präsentation der einzigartigen Sammlung von Dr. Cremer errichtet. Die Architektur erinnert an eine Töpferscheibe mit einer kuppelförmigen Lichtkuppel." },
                { text: "Die Sammlung umfasst etwa 5.000 Werke – von historischer Keramik aus Frechen (einschließlich der berühmten Bartmannkrüge aus dem 16.–19. Jahrhundert) bis hin zu modernen Arbeiten von über 500 Künstlern aus Deutschland und dem Ausland." },
                { text: "Neben der Dauerausstellung organisiert das Museum regelmäßig Sonderausstellungen, kreative Projekte, Workshops und Bildungsprogramme." }
            ]
        },
        interestingFacts: {
            title: "Interessante Fakten",
            items: [
                { text: "Das KERAMION-Gebäude gilt als architektonisches Wahrzeichen: die runde Form mit kuppelförmiger Lichtkuppel, Glassegmenten und Fassadenverkleidung macht das Museum leicht erkennbar." },
                { text: "In der historischen Ausstellung sind die berühmten Bartmannkrüge vertreten – bärtige Krüge, die zum Symbol der Keramikproduktion in Frechen wurden." },
                { text: "Die Sammlung von Cremer ist eine der größten privaten Sammlungen zeitgenössischer Keramik in Deutschland." }
            ]
        },
        construction_period: "Das Museumsgebäude wurde 1970–1971 errichtet. Das Museum wurde 2002 eröffnet.",
        founder: "Dr. Gottfried Cremer und die Stadt Frechen",
        categories: ["Museum", "Kunst", "Keramik", "Sammlung historisch und modern"],
        meta: {
            title: "KERAMION – moderne und historische Keramik in Frechen",
            description: "KERAMION: Dauerausstellung und Sonderausstellungen von Keramik, Geschichte der Produktion und zeitgenössische künstlerische Perspektiven.",
            ogTitle: "KERAMION – Zentrum für moderne und historische Keramik, Frechen",
            ogDescription: "Erfahren Sie mehr über die Sammlung von Cremer, die historische Keramik aus Frechen und die Ausstellungen im KERAMION.",
            ogImage: "../../Gallery/Germany/Frechen/frechen_keramion.jpg"
        }
    },
    {
        id: "burg_bachem_frechen",
        name: "Burg Bachem – historische Wasserburg in Frechen",
        type: "Schloss",
        path: "burg-bachem",
        regionsPath: "nrw",
        districtPath: "koln",
        cityPath: "frechen",
        fotoCard: "../../Gallery/Germany/Frechen/Burg-Bachem_3.jpg",
        location: "Frechen, Deutschland",
        officialSite: [
            { bold: "Offizielle Website Burg Bachem", link: "https://www.burg-bachem.de/" }
        ],
        unesco_status: {
            included: false
        },
        tickets_and_entry: {
            title: "Eintritt und Zugang",
            items: [
                { bold: "Zugang:", text: "Das Schloss ist eine private Residenz, das Schlossgelände und der See sind für Spaziergänge zugänglich." },
                { bold: "Besuchszeiten:", text: "Das Betreten des Sees und der Alleen ist tagsüber möglich." }
            ]
        },
        visiting_hours: {
            title: "Besuchszeiten",
            items: [
                { text: "Zugang zum See und den Alleen ist tagsüber möglich." }
            ]
        },
        short_description: "Burg Bachem in Frechen – der größte und am besten erhaltene Schlosskomplex der Stadt, umgeben von einem Graben mit steinerner Brücke. Das Schloss ist ein bedeutendes Denkmal der Geschichte und Architektur des Stadtteils Bachem.",
        full_description: {
            title: "Beschreibung und Geschichte",
            items: [
                { text: "Burg Bachem wird erstmals im 13. Jahrhundert in Dokumenten erwähnt. Im Laufe der Jahrhunderte wurde der Komplex mehrfach umgebaut und modernisiert, besonders bis zum 18. Jahrhundert, um den Anforderungen der Zeit gerecht zu werden." },
                { text: "Im 19. und 20. Jahrhundert verursachte der Braunkohletagebau in unmittelbarer Nähe des Schlosses erhebliche strukturelle Schäden, und verschiedene zeitweilige Nutzungen mit zerstörerischen Eingriffen verschlechterten den Zustand des Gebäudes weiter." },
                { text: "Mitte der 1970er Jahre führte der derzeitige Eigentümer eine umfassende Restaurierung des Schlosskomplexes durch, brachte ihn wieder in Nutzung und stoppte den weiteren Verfall." },
                { text: "Fast vierzig Jahre später wurde das Hauptgebäude erneut unter Berücksichtigung moderner Anforderungen an Komfort und Sicherheit rekonstruiert. Heute verfügt das Schloss über sieben Wohnräume: sechs werden vorübergehend komplett möbliert vermietet, und einer dient dem Eigentümer als Wohnraum." },
                { text: "Der Bachemer Bach, der in der Nähe fließt, versorgte das Schloss früher mit Wasser für die Schutzgräben. Der See und die Alleen werden von den Einheimischen aktiv für Spaziergänge, Hundespaziergänge und Erholung in der Natur genutzt und verbinden historischen Wert mit moderner Funktionalität." }
            ]
        },
        interestingFacts: {
            title: "Interessante Fakten",
            items: [
                { text: "Das Schloss ist ein historisches Denkmal und ein wichtiger Teil der Stadtarchitektur von Frechen." },
                { text: "Der See und die Alleen rund um das Schloss sind ein beliebter Ort für Spaziergänge bei den Einheimischen." },
                { text: "Der Bachemer Bach versorgte das Schloss früher mit Wasser für die Schutzgräben." }
            ]
        },
        construction_period: "Vermutlich Anfang des 13. Jahrhunderts, mit späteren Umbauten und umfassender Restaurierung in den 1970er Jahren",
        founder: "Ursprünglich im Besitz lokaler Adelsfamilien",
        categories: ["Schloss", "historisch", "Wasserburg", "Freizeit und Natur"],
        meta: {
            title: "Burg Bachem in Frechen – historische Wasserburg und See",
            description: "Burg Bachem: Geschichte, Wassergräben, Spazierbereiche und Erholung am kleinen See in Frechen.",
            ogTitle: "Burg Bachem – Frechen, Deutschland",
            ogDescription: "Entdecken Sie die historische Wasserburg Burg Bachem und den See mit Spazierwegen in Frechen.",
            ogImage: "../../Gallery/Germany/Frechen/Burg-Bachem_3.jpg"
        }
    },
    {
        id: "phantasialand",
        name: "Phantasialand",
        type: "Freizeitpark",
        path: "phantasialand",
        regionsPath: "nrw",
        districtPath: "koln",
        cityPath: "bruehl",
        fotoCard: "../../Gallery/Germany/Bruhl/Full/001.jpg",
        location: "Brühl, Deutschland",
        officialSite: [
            { bold: 'Offizielle Website von Phantasialand', link: 'https://www.phantasialand.de/en/' }
        ],
        unesco_status: {
            included: false
        },
        tickets_and_entry: {
            title: "Tickets und Eintritt",
            items: [
                { bold: "Ticketpreise:", text: " abhängig von Saison und Alter der Besucher. Es wird empfohlen, Tickets im Voraus über die offizielle Website zu kaufen." },
                { bold: "Öffnungszeiten:", text: " Hauptsaison (28. März – 15. November) von 9:00 bis 18:00 Uhr, Attraktionen öffnen um 10:00 Uhr. Sommerzeit (Juli – August) bis 19:00 Uhr. Wintersaison Wintertraum (16. November – 26. Januar) von 11:00 bis 20:00 Uhr. Geschlossen am 24., 25. Dezember und 1. Januar." }
            ]
        },
        short_description: "Phantasialand in Brühl ist einer der meistbesuchten Themenparks Europas mit über 30 Attraktionen und 6 einzigartigen Themenbereichen. Geöffnet seit 1967, empfängt jährlich etwa 2 Millionen Besucher. Der Park ist bekannt für seine beeindruckenden Achterbahnen und Wasserfahrgeschäfte sowie die Liebe zum Detail in der Gestaltung jeder Zone, was unvergessliche Erlebnisse für Besucher jeden Alters schafft.",
        full_description: {
            title: "Beschreibung und Geschichte",
            items: [
                { text: "Phantasialand, eröffnet am 30. April 1967, liegt in Brühl, etwa 20 km südwestlich von Köln, Nordrhein-Westfalen." },
                { text: "Der Park ist in sechs Themenbereiche unterteilt: Berlin, Africa, Mexico, China Town, Fantasy und Mystery. Im Park gibt es über 30 Attraktionen, darunter 8 Achterbahnen und 4 Wasserfahrgeschäfte." },
                { text: "Phantasialand bietet zwei Themenhotels: Hotel Matamba (Afrika) und Hotel Ling Bao (China), die ein einzigartiges Übernachtungserlebnis und einfachen Zugang zum Park bieten." }
            ]
        },
        interestingFacts: {
            title: "Interessante Fakten",
            items: [
                { text: "Phantasialand aktualisiert regelmäßig seine Attraktionen, um den Besuchern neue Erlebnisse zu bieten." },
                { text: "Der Park ist bekannt für seine Liebe zum Detail in der Gestaltung der Themenbereiche und schafft eine einzigartige Atmosphäre in jedem von ihnen." },
                { text: "Phantasialand entwickelt aktiv die Infrastruktur weiter, einschließlich neuer Hotels, Theater und Konzertsäle." }
            ]
        },
        popular_attractions: {
            title: "Beliebte Attraktionen",
            items: [
                { bold: "Taron", text: " – leistungsstarke Stahlachterbahn (2016)" },
                { bold: "F.L.Y.", text: " – erste fliegende Achterbahn der Welt" },
                { bold: "Chiapas", text: " – Wasserachterbahn mit 53° Neigungswinkel und 76 km/h Geschwindigkeit" },
                { bold: "Black Mamba", text: " – invertierte Achterbahn durch den afrikanischen Dschungel" },
            ]
        },
        construction_period: "1967 – heute",
        founder: "eröffnet 1967, Gründer – Gottlieb Löffelhardt und Richard Schmidt",
        categories: ["Freizeitpark", "Attraktionen", "Familienurlaub", "Achterbahnen", "Wasserfahrgeschäfte"],
        meta: {
            title: "Phantasialand in Brühl: Themenpark mit Attraktionen und Hotels",
            description: "Phantasialand – einer der meistbesuchten Parks Europas mit über 30 Attraktionen, Themenbereichen und einzigartigen Hotels.",
            ogTitle: "Phantasialand – Brühl, Deutschland",
            ogDescription: "Entdecken Sie Phantasialand in Brühl: Attraktionen, Themenbereiche, Hotels und Unterhaltung für die ganze Familie.",
            ogImage: "../../Gallery/Germany/Bruhl/Full/001.jpg"
        },
        theme_zones: [{ bold: "Themenbereiche:", text: ' "Berlin", "Africa", "Mexico", "China Town", "Fantasy", "Mystery"' }],
    }
];
export default datas;