const datas = [
    {
        id: 1,
        name: 'Brühl',
        path: "bruhl",
        district: "koln",
        desc: {
            general: [
                { text: 'Stadt im Bundesland Nordrhein-Westfalen' }
            ],
            population: [
                { bold: 'Einwohnerzahl:' },
                { text: ' 44.260 Menschen (2010)' }
            ],
            area: [
                { bold: 'Fläche:' },
                { text: ' 36,12 km²' }
            ],
            postalCode: [
                { bold: 'Postleitzahl:' },
                { text: ' 50321' }
            ],
            phone: [
                { bold: 'Telefonvorwahl:' },
                { text: ' +49 2232' }
            ],
            officialSite: [
                { bold: 'Offizielle Website von Brühl', link: 'https://www.bruehl.de' }
            ],
        },
        interestingFacts: {
            title: 'Interessante Fakten',
            items: [
                { text: 'Brühl wird „Brühl bei Köln“ genannt, da die Stadt nur 15 km von Köln entfernt liegt.' },
                { text: 'Gute Erreichbarkeit: Die Straßenbahn Nr. 18 und Regionalzüge verbinden Brühl mit Köln und Bonn.' },
                { text: 'Phantasialand – einer der größten Freizeitparks Deutschlands, befindet sich in Brühl.' }
            ]
        },
        notablePeople: {
            title: 'Bekannte Persönlichkeiten',
            items: [
                { bold: 'Steffi Graf', text: ' berühmte Tennisspielerin, geboren in Brühl. 1988 wurde sie Ehrenbürgerin der Stadt.' },
                { bold: 'Max Ernst', text: ' surrealistischer Maler, der in Brühl geboren wurde.' }
            ]
        },
        briefHistory: {
            title: 'Kurze Geschichte',
            items: [
                { text: 'Die erste Erwähnung von Brühl stammt aus dem Jahr 1180, als der Kölner Erzbischof Philipp von Heinsberg ein Herrenhaus errichtete.' },
                { text: 'Im Jahr 1285 erhielt die Stadt Stadtrechte vom Erzbischof Siegfried von Westerburg.' },
                { text: 'Ab 1469 wurde Brühl für mehr als 150 Jahre zur offiziellen Residenz der Kölner Erzbischöfe.' }
            ]
        },
        meta: {
            title: "Brühl – Stadt in Nordrhein-Westfalen",
            description: "Brühl: Geschichte, Sehenswürdigkeiten, berühmte Persönlichkeiten und interessante Fakten der Stadt.",
            ogTitle: "Brühl – Informationen zur Stadt",
            ogDescription: "Detaillierte Informationen über Brühl: Kultur, Geschichte, berühmte Einwohner und interessante Fakten.",
            ogImage: "/nrw/bruehl.jpg"
        }
    },
    {
        id: 2,
        name: 'Köln',
        path: "koln",
        district: "city",
        desc: {
            general: [
                { text: 'Köln ist die größte Stadt des Bundeslandes Nordrhein-Westfalen und die viertgrößte Stadt Deutschlands.' },
                { text: 'Köln ist ein wichtiger Wirtschafts-, Kultur- und Verkehrszentrum Deutschlands: Hier befindet sich der größte Binnenhafen Europas sowie ein bedeutender Bahn- und Autobahnknotenpunkt.' }
            ],
            population: [
                { bold: 'Einwohnerzahl:' },
                { text: ' etwa 1.013.684 (2025)' }
            ],
            area: [
                { bold: 'Fläche:' },
                { text: ' ca. 405 km²' }
            ],
            postalCode: [
                { bold: 'Postleitzahlen:' },
                { text: ' 50667–51149' }
            ],
            phone: [
                { bold: 'Telefonvorwahl:' },
                { text: ' +49 0221' }
            ],
            officialSite: [
                { bold: 'Offizielle Website von Köln', link: 'https://www.stadt-koeln.de/' }
            ]
        },
        geography: {
            title: 'Geographie',
            items: [
                { text: 'Die Stadt liegt am Rhein, der sie in linkes und rechtes Ufer teilt.' },
                { text: 'Das linke Ufer ist das historische Zentrum und Wohnviertel mit alten Gassen, Geschäften, Museen und Cafés, das rechte Ufer ist Industriegebiet und neue Viertel einschließlich Geschäftsbereiche und moderne Architektur.' },
                { text: 'Die Rheinpromenade ist ein beliebter Ort für Bewohner und Touristen: Hier kann man spazieren, Rad fahren, in Cafés entspannen und die Stadtpanorama genießen.' },
                { text: 'Südwestliche Stadtteile wie Lindenthal, Bayenthal und Marienburg sind bekannt für ihre gemütliche Wohnatmosphäre und grünen Straßen. Für Spaziergänge am Fluss eignet sich Rodenkirchen ideal.' },
                { text: 'Östliche Stadtteile, einschließlich Mülheim, Kalk und Deutz, sind mit dem Zentrum durch eine Hängebrücke verbunden, die einen atemberaubenden Blick über die Stadt bietet.' },
                { text: 'Die Stadt liegt in der Kölner Bucht, umgeben von Höhenzügen: im Osten Sauerland und Bergisches Land, im Südwesten Eifel, im Südosten Rheinisches Schiefergebirge.' }
            ]
        },
        notablePeople: {
            title: 'Berühmte Persönlichkeiten aus Köln',
            items: [
                { bold: 'Konrad Adenauer', text: ' – erster Bundeskanzler der BRD, von 1917–1933 Oberbürgermeister von Köln.' },
                { bold: 'Nikolaus August Otto', text: ' – Ingenieur, Erfinder des ersten Verbrennungsmotors (1874), Mitbegründer der Fabrik Kloeckner Humboldt Deutz AG.' },
                { bold: 'Georg Simon Ohm', text: ' – Physiker, entdeckte das Gesetz des elektrischen Widerstands (1827), lehrte in Köln.' },
                { bold: 'August Sander', text: ' – Fotograf, Autor der Serie „Menschen des 20. Jahrhunderts“.' },
                { bold: 'Karlheinz Stockhausen', text: ' – Komponist, einer der Pioniere der elektronischen Musik, arbeitete im WDR-Studio.' },
                { bold: 'Max Ernst', text: ' – surrealistischer Künstler, geboren in Köln.' },
                { bold: 'Heinrich Böll', text: ' – Schriftsteller, Nobelpreisträger für Literatur (1972), lebte und arbeitete in Köln.' },
                { bold: 'Günter Grass', text: ' – Schriftsteller, Nobelpreisträger für Literatur (1999), zeitweise mit Köln verbunden.' }
            ]
        },
        interestingFacts: {
            title: 'Interessante Fakten',
            items: [
                { text: 'Der Kölner Dom ist eine der größten gotischen Kathedralen Europas, mit Türmen, die fast aus jedem Stadtteil sichtbar sind.' },
                { text: 'Der Kölner Karneval ist der größte in Deutschland und einer der buntesten in Europa.' },
                { text: 'Die Stadt wird als „blaue Hauptstadt“ Deutschlands bezeichnet wegen der Offenheit und Toleranz der Einwohner.' },
                { text: 'Köln ist ein Zentrum der deutschen Medienindustrie: Hier befinden sich Fernsehsender, Radiostationen, Verlage und Tonstudios.' },
                { text: 'Internationale Messen wie Anuga, Photokina und Art Cologne ziehen Besucher aus aller Welt an.' },
                { text: 'In Köln befindet sich der größte Binnenhafen Europas, und der Güterbahnhof Eifeltor ist der größte Containerterminal Deutschlands.' },
                { text: 'Die Hängebrücke über den Rhein im Stadtteil Deutz ist eine einzigartige Sehenswürdigkeit und Aussichtsplattform mit Panoramablick auf die Stadt.' }
            ]
        },
        briefHistory: {
            title: 'Geschichte',
            items: [
                { text: 'Köln ist die älteste der großen Städte Deutschlands, seine Geschichte reicht über zweitausend Jahre zurück. An der Stelle der heutigen Stadt existierte im 1. Jahrhundert n. Chr. eine kleine Siedlung des germanischen Stammes der Ubier.' },
                { text: 'Im Jahr 50 n. Chr. wurde sie in die römische Kolonie Colonia Agrippina zu Ehren der Kaiserin Agrippina, der Frau von Claudius, die am Rhein geboren wurde, umgewandelt. Der Name entwickelte sich schließlich zu „Köln“. Auch heute sind im Stadtzentrum Spuren der Römerzeit sichtbar – Fundamente von Gebäuden, Teile von Mauern und antike Straßen.' },
                { text: 'Mit den Römern kam auch das Christentum nach Köln. 785 gründete Karl der Große das Erzbistum Köln und übertrug die weltliche Macht dem Erzbischof. Die Erzbischöfe wurden zu mächtigen Fürsten des Heiligen Römischen Reiches.' },
                { text: '1164 wurden die Reliquien der Heiligen Drei Könige nach Köln gebracht. Zu deren Aufbewahrung begann der Bau einer grandiosen Kathedrale, der größten nördlich der Alpen. Der Grundstein wurde 1248 gelegt, der Bau erst 1880 abgeschlossen. Gleichzeitig entstanden im Stadtzentrum 12 romanische Kirchen, die noch heute das Bild der Altstadt prägen.' },
                { text: 'Die Bürger waren jedoch schnell müde von der Herrschaft der Erzbischöfe. 1288 vertrieben sie diese aus der Stadt, und die Residenz verlegte sich nach Bonn. In der Umgebung von Brühl wurden später die Schlösser Augustusburg und Falkenlust errichtet – heute UNESCO-Weltkulturerbe.' },
                { text: '1396 erhielt Köln eine Stadtverfassung und gründete einen Rat mit Bürgermeister, 1475 erhielt die Stadt offiziell den Status einer Freien Reichsstadt. Das mittelalterliche Köln erlebte eine Blütezeit: es wurde zu einer der größten und reichsten Städte Deutschlands, wichtigen Mitglied der Hanse und Zentrum des Messehandels. 1388 wurde hier die zweitälteste Universität Deutschlands gegründet.' },
                { text: 'Die Ära der Freiheit endete 1794, als Köln kampflos an französische Truppen übergeben wurde. Die Universität wurde geschlossen, kirchliches Eigentum säkularisiert. 1815 übergab der Wiener Kongress die Stadt an Preußen. Köln behielt seine Bedeutung und wurde zu einer der größten Städte Preußens.' },
                { text: '1822 wurde die erste Brücke über den Rhein seit römischer Zeit gebaut, bald durch eine dauerhafte Eisenbahn- und Fußgängerbrücke ersetzt. 1823 fand der erste Karneval statt, der später zum Markenzeichen der Stadt wurde.' },
                { text: 'Das 19. Jahrhundert brachte Industrialisierung. Fabriken wurden eröffnet, Maschinenbau entwickelte sich, wichtige Entdeckungen in Physik und Technik entstanden. Die Stadt wurde zum Knotenpunkt von Bahn- und Schiffsverkehr. 1881 wurden die mittelalterlichen Mauern abgerissen und an ihrer Stelle ein Boulevardsring angelegt. Ende des Jahrhunderts wurde der prächtige Kölner Dom fertiggestellt.' },
                { text: 'Der Erste Weltkrieg unterbrach die Entwicklung, doch bald erwachte die Stadt wieder. Die Universität öffnete erneut, eine umfassende Stadtplanung begann, ein moderner Messekomplex entstand im Stadtteil Deutz. In den 1920er Jahren wurde Köln zu einem Zentrum für Medien und Kultur: große Rundfunkanstalten, Ausstellungen und Fabriken entstanden, Fotografen und Künstler arbeiteten hier.' },
                { text: 'Von 1933 bis 1945 stand Köln unter der Herrschaft der Nazis und wurde ein Zentrum des Wehrkreises. Im Zweiten Weltkrieg wurde die Stadt fast vollständig zerstört: über 80 % der Altstadt wurden zu Trümmern. Erst 1959 erreichte die Bevölkerung wieder das Vorkriegsniveau, und die Wiederaufbauarbeiten wurden erst in den 1980er Jahren abgeschlossen.' },
                { text: 'In der zweiten Hälfte des 20. Jahrhunderts festigte Köln endgültig seine Position als Kultur- und Medienzentrum. Internationale Kunst- und Fotomessen wurden veranstaltet, Galerien eröffnet, Fernsehen und Radio florierten. In der Stadt lebten und arbeiteten bedeutende Schriftsteller, Musiker und Künstler, und Köln wurde zu einem Anziehungspunkt für kreative Kräfte aus der ganzen Welt.' }
            ]
        },
        meta: {
            title: "Köln – größte Stadt Nordrhein-Westfalens",
            description: "Köln: Geschichte, Geographie, Sehenswürdigkeiten, berühmte Persönlichkeiten und interessante Fakten der größten Stadt Nordrhein-Westfalens.",
            ogTitle: "Köln – Stadtinformation",
            ogDescription: "Detaillierte Informationen über Köln: Kultur, Geschichte, berühmte Einwohner und interessante Fakten.",
            ogImage: "/nrw/koeln.jpg"
        }
    },
    {
        id: 3,
        name: 'Frechen',
        path: "frechen",
        district: "koln",
        desc: {
            general: [
                { text: 'Frechen ist eine Stadt im Bundesland Nordrhein-Westfalen, die zum Rhein-Erft-Kreis gehört und nur etwa 10 km westlich von Köln liegt.' },
                { text: 'Die Stadt ist bekannt für ihre historische Töpfertradition, industrielle Entwicklung und ihre Nähe zur Rhein-Ruhr-Region.' }
            ],
            population: [
                { bold: 'Einwohnerzahl:' },
                { text: ' etwa 52.000 Menschen (2025)' }
            ],
            area: [
                { bold: 'Fläche:' },
                { text: ' ca. 45,1 km²' }
            ],
            postalCode: [
                { bold: 'Postleitzahl:' },
                { text: ' 50226' }
            ],
            phone: [
                { bold: 'Telefonvorwahl:' },
                { text: ' +49 02234' }
            ],
            officialSite: [
                { bold: 'Offizielle Website der Stadt Frechen', link: 'https://www.frechen.de/' }
            ]
        },
        geography: {
            title: 'Geografie',
            items: [
                { text: 'Frechen liegt am westlichen Stadtrand von Köln und ist Teil der Metropolregion Rhein-Ruhr.' },
                { text: 'Die Höhe über dem Meeresspiegel variiert zwischen 58 und 158 Metern, die Stadt befindet sich an den Hängen der Ville-Höhen.' },
                { text: 'Wichtige Verkehrsachsen wie die Autobahnen A1, A4 und A61 verlaufen in der Nähe und verbinden Frechen mit Köln, Bonn und Aachen.' },
                { text: 'Die Stadt ist von Grünflächen, kleinen Wäldern und ehemaligen Industriegruben umgeben, die teilweise zu Naherholungsgebieten umgestaltet wurden.' }
            ]
        },
        notablePeople: {
            title: 'Bekannte Persönlichkeiten aus Frechen',
            items: [
                { bold: 'Ayo', text: ' – deutsch-nigerianische Sängerin und Songwriterin, geboren in Frechen.' },
                { bold: 'Kirsten Bolm', text: ' – Leichtathletin und deutsche Meisterin im Hürdenlauf.' },
                { bold: 'Wayne Carpendale', text: ' – Schauspieler und Fernsehmoderator.' },
                { bold: 'Pierre Vogel', text: ' – bekannter islamischer Prediger, aufgewachsen in Frechen.' },
                { bold: 'Hannah Meul', text: ' – Profikletterin und Mitglied des deutschen Nationalteams.' },
                { bold: 'Marcel Heller', text: ' – deutscher Fußballspieler, der in der Bundesliga aktiv war.' },
                { bold: 'Sonja Bertram', text: ' – Theater- und Fernsehschauspielerin.' }
            ]
        },
        interestingFacts: {
            title: 'Interessante Fakten',
            items: [
                { text: 'Frechen ist als „Stadt der Keramik“ bekannt: Lokale Handwerker wurden für ihre Tonwaren berühmt, insbesondere für die Bartmannskrüge.' },
                { text: 'Das Keramion-Museum beherbergt eine einzigartige Sammlung von Keramiken und moderner Kunst – das Gebäude selbst gilt als architektonisches Meisterwerk des Modernismus.' },
                { text: 'Im Mittelalter wurde Frechener Keramik in ganz Europa exportiert, insbesondere nach England und in die Niederlande.' },
                { text: 'Frechen verfügt über eine gut ausgebaute Verkehrsinfrastruktur und gilt als attraktiver Wohnort für Pendler nach Köln.' },
                { text: 'Viele ehemalige Braunkohletagebaue in der Umgebung wurden in Natur- und Erholungsgebiete umgewandelt.' }
            ]
        },
        briefHistory: {
            title: 'Geschichte',
            items: [
                { text: 'Frechen wurde erstmals im Jahr 877 urkundlich erwähnt und ist damit einer der ältesten Orte der Region.' },
                { text: 'Im Mittelalter, im Jahr 1257, fand in Frechen eine Schlacht zwischen Konrad von Hochstaden (Erzbischof von Köln) und den Bewohnern der Stadt statt. Dies zeigt, dass Frechen schon damals ein wichtiger Ort mit politischer und strategischer Bedeutung war.' },
                { text: 'Seit dem 16. Jahrhundert ist die Stadt für ihre Töpferproduktion bekannt – insbesondere für die Herstellung der „Bartmannskrüge“, die in ganz Europa exportiert wurden.' },
                { text: 'Im 18. und 19. Jahrhundert begann der Braunkohleabbau in der Umgebung, wodurch Frechen zu einem industriellen Zentrum wurde.' },
                { text: 'Nach dem Zweiten Weltkrieg entwickelte sich Frechen zu einem wichtigen Industrie- und Wohnvorort von Köln.' },
                { text: 'Am 2. September 1951 erhielt Frechen das offizielle Stadtrecht, woraufhin die Dörfer Bachem, Hücheln und Buschbell eingemeindet wurden.' },
                { text: 'Im Jahr 1975 wurden im Zuge der kommunalen Neugliederung die Ortsteile Grefrath, Habbelrath, Königsdorf und Neufreimersdorf eingemeindet.' },
                { text: 'Heute ist Frechen eine moderne Stadt mit historischem Stadtkern, Keramikmuseum und guter Infrastruktur – ein beliebter Wohnort für Kölner.' }
            ]
        },
        meta: {
            title: "Frechen – die Stadt der Keramik vor den westlichen Toren Kölns",
            description: "Frechen: Geschichte, Geografie, bekannte Persönlichkeiten und interessante Fakten über die Keramikstadt in Nordrhein-Westfalen.",
            ogTitle: "Frechen – Stadtinformationen",
            ogDescription: "Detaillierte Informationen über Frechen: Kultur, Geschichte, bekannte Persönlichkeiten und interessante Fakten.",
            ogImage: "/nrw/frechen.jpg"
        }
    }
]

export default datas