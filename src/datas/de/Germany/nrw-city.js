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
    },
    {
        id: 4,
        name: 'Lüdenscheid',
        path: "luedenscheid",
        district: "arnsberg",
        desc: {
            general: [
                { text: 'Lüdenscheid liegt im Nordwesten des Sauerlandes im Bundesland Nordrhein-Westfalen. Administrativ gehört die Stadt zur Region Arnsberg und untersteht dem Märkischen Kreis.' },
            ],
            population: [
                { bold: 'Einwohnerzahl:' },
                { text: ' Die Stadt zählt 71.212 Einwohner (Stand: 31. Dezember 2024).' }
            ],
            area: [
                { bold: 'Fläche:' },
                { text: ' Die Fläche der Kommune beträgt rund 86,7 km². Ein großer Teil davon ist von Park- und Waldflächen sowie Grünzonen bedeckt; danach folgen landwirtschaftliche Flächen, bebaute Gebiete, Straßen, Gewässer und sonstige Flächen.' },
                { text: ' Die Stadt ist in 16 statistische Bezirke unterteilt.' }
            ],
            postalCode: [
                { bold: 'Postleitzahlen:' },
                { text: ' 58507–58515' }
            ],
            phone: [
                { bold: 'Telefonvorwahl:' },
                { text: ' +49 2351' }
            ],
            officialSite: [
                { bold: 'Offizielle Website der Stadt Lüdenscheid', link: 'www.luedenscheid.de' }
            ],
            education: [
                { bold: 'Bildungssystem' },
                { text: ' in der Stadt ist vielfältig: Innerhalb der Kommune gibt es zahlreiche Grundschulen, mehrere Förder- und Sonderschulen, Realschulen, Berufsschulen sowie drei Gymnasien. <b>Zeppelin-Gymnasium</b> ist eines der ältesten Bildungseinrichtungen der Region: Seine Ursprünge reichen bis ins späte Mittelalter (ca. 1450) zurück, während das heutige Hauptgebäude aus dem späten 19. Jahrhundert (ca. 1890) stammt.' },
                { text: ' Neben den Gymnasien gibt es in der Stadt Berufsfachschulen für Techniker, Pflegeschulen, ein Abendgymnasium, Musikschulen sowie Zweigstellen von Hochschulen (z. B. Fachhochschule Südwestfalen). Außerdem befindet sich in Lüdenscheid das Deutsche Institut für angewandte Lichttechnik.' }
            ],
            culture: [
                { bold: 'Kulturelles Leben' },
                { text: ' – In der Stadt finden zahlreiche Festivals, Ausstellungen, Licht-Routen und andere Veranstaltungen statt: Laternenwanderungen, Lichtinstallationen und vieles mehr.' }
            ],
        },
        geography: {
            title: 'Relief und Höhenlage',
            items: [
                { text: 'In der städtischen und touristischen Kommunikation wird der Beiname „Bergstadt“ häufig verwendet – eine historische Bezeichnung für die hügelige Landschaft und die handwerkliche Tradition. Lüdenscheid ist tatsächlich eine „Bergstadt“: Sie liegt auf einer Wasserscheide zwischen den Flüssen Lenne und Volme mit tief eingeschnittenen Tälern. Das Gelände ist stark gegliedert, Straßen verlaufen häufig bergauf und bergab. Die durchschnittliche Höhe der Stadt liegt bei etwa 380–425 m über dem Meeresspiegel.' },
                { bold: 'Geologie und Alter der Gesteine.', text: ' Die Böden der Region stammen aus dem Devon (spätes Paläozoikum, vor mehreren hundert Millionen Jahren): In den Gesteinsschichten findet man Fossilien von Meeresorganismen (Muscheln, Seelilien), was mit geologischen Erkenntnissen übereinstimmt, dass dieses Gebiet in früheren Erdzeitaltern Meeresboden war und sich später durch tektonische bzw. vulkanische Prozesse hob. Die heutige Landschaft entstand im Verlauf langwieriger geologischer Prozesse, einschließlich glazialer und postglazialer Veränderungen.' },
            ]
        },
        notablePeople: {
            title: 'Bekannte Persönlichkeiten aus Lüdenscheid',
            items: [
                { bold: 'Marianne Rosenberg (geb. 1955)', text: ' – Deutsche Sängerin, Songwriterin und Ikone der Pop- und Schlagerszene der 1970er–2000er Jahre. Geboren in Lüdenscheid. Bekannt durch Hits wie „Er gehört zu mir“, „Marleen“ u. a.' },
                { bold: 'Peter Schweitzer (geb. 1942)', text: ' – Deutscher Industrieller, der mit der Entwicklung der Lichttechnikindustrie in der Region verbunden ist, einer der Pioniere der LED-Beleuchtung.' },
                { bold: 'Rolf Fitschner (geb. 1949)', text: ' – Deutscher Ingenieur und Erfinder auf dem Gebiet der Lichttechnologien, Mitbegründer der Bildungsinitiativen von PHÄNOMENTA.' },
                { bold: 'Felix Schütz (geb. 1987)', text: ' – Deutscher Eishockeyspieler, Stürmer der deutschen Nationalmannschaft, Teilnehmer an Olympischen Spielen und Weltmeisterschaften, geboren in Lüdenscheid.' },
                { bold: 'Karl Josef Thiel (1918–2001)', text: ' – Deutscher Bildhauer und Künstler, Schöpfer zahlreicher öffentlicher Skulpturen und Denkmäler in der Region Sauerland.' },
                { bold: 'Friedrich Hellwig (1870–1950)', text: ' – Historiker und Heimatforscher, einer der ersten, die die industrielle Entwicklung des Sauerlandes erforschten; lebte und arbeitete in Lüdenscheid.' },
                { bold: 'Gerd Josten (1939–2006)', text: ' – Deutscher Architekt und Stadtplaner, beteiligte sich am Wiederaufbau des historischen Stadtkerns von Lüdenscheid nach dem Zweiten Weltkrieg.' },
                { bold: 'Anneliese Ebert (1924–2010)', text: ' – Schriftstellerin und Pädagogin, Autorin von Büchern über Alltagsleben und Traditionen der Region Mecklenburg–Sauerland, lebte über 40 Jahre in Lüdenscheid.' },
                { bold: 'Werner Kowalski (1901–1943)', text: ' – Deutscher Kommunist, Widerstandskämpfer gegen das NS-Regime und Publizist. Geboren am 28. Dezember 1901 in Lüdenscheid, gestorben am 1. Juli 1943 in Frankreich. An seinem Wohnhaus in Lüdenscheid sind Stolpersteine angebracht.' },
                { bold: 'Carl Berg (1851–1906)', text: ' – Einer der Pioniere der Aluminiumindustrie; lieferte Aluminiumteile für die ersten „Zeppelin“-Luftschiffe. Geboren am 4. Februar 1851 in Lüdenscheid.' },
            ]
        },
        interestingFacts: {
            title: 'Interessante Fakten',
            items: [
                { bold: '„Stadt des Lichts“', text: ' – Lüdenscheid trägt den Beinamen „Stadt des Lichts“ aufgrund seiner stark entwickelten Licht- und Beleuchtungsindustrie. Charakteristisch für die Stadt sind Lichtinstallationen, die „Lichtrouten“ und künstlerische Beleuchtung von Gebäuden.' },
                { bold: 'Wissenschaft, Technik und Interaktivität', text: ' – Eine der bekanntesten Sehenswürdigkeiten ist der Wissenschafts- und Erlebnispark PHÄNOMENTA mit rund 200 interaktiven Stationen und einem markanten Turm mit Foucaults Pendel.' },
                { bold: '„Knopfstädten“', text: ' – Früher war Lüdenscheid ein wichtiges Zentrum der Herstellung von Metallknöpfen, Medaillen und anderen kleinen Metallwaren. Im Stadtmuseum sind Sammlungen historischer Knöpfe ausgestellt.' },
                { bold: 'Einzigartige Stadtarchitektur', text: ' – Der historische Stadtgrundriss mit ringförmigen Straßen um die alte Erlöserkirche (Erlöserkirche) ist aus der Luft noch gut erkennbar.' },
                { bold: 'Industrielle Transformation', text: ' – Das Gebiet von Lüdenscheid war seit jeher industriell geprägt: zunächst durch Metallurgie und Osmund-Produktion (eine spezielle Eisenart) für Draht, später durch Knopfherstellung, danach Lichttechnik, Kunststoffe und moderne Metallverarbeitung.' },
                { bold: 'Technikdenkmäler', text: ' – Zum Beispiel der Bremecker Hammer – ein historisches Hammerwerk und Schmiedemuseum, in dem bis heute Vorführungen mit Wasserrad und Schmiedetechniken aus dem 18.–19. Jahrhundert stattfinden.' },
                { bold: 'Viel Wald und Natur', text: ' – Trotz seiner industriellen und technologischen Prägung ist die Stadt von Wäldern und den Bergen des Sauerlandes umgeben und bietet zahlreiche Wanderwege und Erholungsgebiete.' },
            ]
        },
        briefHistory: {
            title: 'Geschichte',
            items: [
                { text: 'Das Gebiet war bereits seit dem Mesolithikum besiedelt; archäologische Funde belegen zahlreiche Siedlungsplätze (z. B. die Fundstätte Brockhausen mit Tausenden Feuersteinwerkzeugen). In verschiedenen Teilen wurden Spuren neolithischer Siedlungen gefunden; Funde aus der Bronzezeit sind seltener.' },
                { text: 'Frühe Eisenzeit: Um 800–1000 v. Chr. gab es in der Region Schmieden und Metallverarbeitung; eine ständige Besiedlung ist ab dem 1. Jahrtausend v. Chr. nachweisbar.' },
                { text: 'Lüdenscheid wird bereits im 9. Jahrhundert als sächsische Siedlung erwähnt, gelegen an der Straße von Köln zu den heutigen Orten Wipperfürth, Halver, Werdohl und Arnsberg; in dieser Zeit entstand auch die erste Kirche. Erstmals urkundlich erwähnt wurde Lüdenscheid im Jahr 1067.' },
                { text: 'Im 11.–13. Jahrhundert wurden hier Befestigungsanlagen errichtet; 1114–1115 wird eine Burg erwähnt, die mit Kaiser Heinrich V. und Konflikten mit den Grafen von Arnsberg und den Kölner Erzbischöfen in Verbindung steht. 1268 wird Lüdenscheid als Stadt erwähnt, 1425 erhielt es Marktprivilegien und 1533 das Recht, Jahrmärkte abzuhalten.' },
                { text: 'Im Mittelalter befand sich auf dem Stadtgebiet ein sogenanntes Femegericht (Veme) mit regionaler Bedeutung.' },
                { text: 'Im 17.–18. Jahrhundert erlebte die Stadt mehrere Brände (1656, 1723 u. a.), Besetzungen und Machtwechsel (Siebenjähriger Krieg, napoleonische Zeit). Nach dem Wiener Kongress wurde Lüdenscheid endgültig Teil des preußischen Verwaltungssystems.' },
                { text: 'Die Industrialisierung im 19. Jahrhundert führte zu einem starken Bevölkerungswachstum und industriellen Aufschwung: Ende des 19. und Anfang des 20. Jahrhunderts expandierte die Stadt. 1898 wurden in der Fabrik von Carl Berg Aluminiumteile für die „Zeppelin“-Luftschiffe gefertigt – ein bedeutendes Kapitel der Stadtgeschichte.' },
                { text: 'Im 20. Jahrhundert war Lüdenscheid in die Ereignisse beider Weltkriege involviert, erlebte nach 1945 Zuwanderung von Flüchtlingen und den wirtschaftlichen Aufschwung der jungen Bundesrepublik Deutschland.' },
                { text: 'Mit der Eingemeindung umliegender Orte (z. B. 1969) stieg die Bevölkerungszahl deutlich an. In den 1970er Jahren war die Stadt Austragungsort der Internationalen Kunststoffausstellung IKA (1971–1973), was die industrielle und kulturelle Bedeutung der Region stärkte.' },
                { text: '1975 wurde Lüdenscheid Sitz des neu gebildeten Märkischen Kreises (Ergebnis der Verwaltungsreformen). In dieser Phase des wirtschaftlichen Wohlstands entstanden zahlreiche öffentliche und kulturelle Gebäude: Kulturhaus, neues Stadtmuseum, Bibliothek. Im Stadtzentrum wurde ein großes Wellenbad gebaut.' },
            ]
        },
        meta: {
            title: "Lüdenscheid – Stadt des Lichts und der Technologie im Herzen des Sauerlandes",
            description: "Lüdenscheid: Geschichte, Geografie, bekannte Persönlichkeiten und interessante Fakten über die „Stadt des Lichts“ in Nordrhein-Westfalen.",
            ogTitle: "Lüdenscheid – Informationen über die Stadt",
            ogDescription: "Detaillierte Informationen über Lüdenscheid: Kultur, Geschichte, bedeutende Persönlichkeiten und spannende Fakten über die Stadt des Lichts und der Innovation.",
            ogImage: "/nrw/luedenscheid.jpg"
        }
    },
]

export default datas