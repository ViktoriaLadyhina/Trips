const datas = [
    {
        id: 1,
        name: "Trier",
        path: "trier",
        district: "city",
        desc: {
            general: [
                { text: 'Trier ist die älteste Stadt Deutschlands, im Westen des Landes im Bundesland Rheinland-Pfalz gelegen, nahe der Grenze zu Luxemburg. Die Stadt wurde vor über 2000 Jahren von den Römern gegründet und gilt als eines der wichtigsten Zentren des antiken Erbes in Europa.' },
                { text: 'Trier ist ein kulturelles und touristisches Zentrum der Moselregion, bekannt für seine römischen Denkmäler, Weinanbau-Traditionen und die Universität.' }
            ],
            population: [
                { bold: 'Bevölkerung:' },
                { text: ' etwa 112–113 Tausend (Daten ~2023-2024).' }
            ],
            area: [
                { bold: 'Fläche:' },
                { text: ' ~117 km²' }
            ],
            postalCode: [
                { bold: 'Postleitzahl:' },
                { text: ' 54290-54296' }
            ],
            phone: [
                { bold: 'Telefonvorwahl:' },
                { text: ' +49 0651' }
            ],
            officialSite: [
                { bold: 'Offizielle Stadtwebseite', link: 'https://www.trier.de/' }
            ]
        },
        geography: {
            title: 'Geographie',
            items: [
                { text: 'Trier liegt im Tal der Mosel, umgeben von Hügeln und Weinbergen. Die Nähe zu Luxemburg, Frankreich und Belgien macht die Stadt Teil der grenzüberschreitenden Großregion (Großregion). Das Klima ist gemäßigt-mild und günstig für den Weinbau.' },
            ]
        },
        notablePeople: {
            title: 'Berühmte Persönlichkeiten aus Trier',
            items: [
                { bold: 'Karl Marx', text: ' – Philosoph, Ökonom und Soziologe, geboren 1818 in Trier. Er ist der bekannteste Sohn der Stadt, sein Geburtshaus ist heute ein Museum.' },
                { bold: 'Antiochus von Trier', text: ' – römischer Staatsmann der Spätantike.' },
                { bold: 'Oswald Matthias Ungers', text: ' – bekannter deutscher Architekt und Architekturtheoretiker.' },
            ]
        },
        interestingFacts: {
            title: 'Interessante Fakten',
            items: [
                { text: 'Trier gilt offiziell als die älteste Stadt Deutschlands.' },
                { text: 'In der Stadt befindet sich die Porta Nigra – das größte erhaltene römische Stadttor nördlich der Alpen.' },
                { text: 'Neun römische Denkmäler von Trier sind in die UNESCO-Welterbeliste aufgenommen.' },
            ]
        },
        briefHistory: {
            title: 'Geschichte',
            items: [
                { text: 'Trier gilt als die älteste Stadt Deutschlands. Seine Geschichte umfasst mehr als zweitausend Jahre und beginnt lange vor der Entstehung germanischer Staaten.' },
                { bold: 'Antike und römische Periode.', text: 'Die Stadt wurde 16 v. Chr. von den Römern unter dem Namen Augusta Treverorum gegründet – „Stadt des Augustus bei den Trevern“, einem keltischen Stamm, der dieses Gebiet bewohnte. Bereits im 1.–2. Jahrhundert n. Chr. wurde Trier zu einem wichtigen Verwaltungs- und Handelszentrum des Römischen Reiches nördlich der Alpen.' },
                { text: 'Im 3.–4. Jahrhundert erreichte Trier seine Blütezeit. Es wurde zu einer der Residenzen römischer Kaiser und fungierte faktisch als Hauptstadt der westlichen Provinzen des Reiches. Zu dieser Zeit lebten bis zu 80 000 Menschen in der Stadt, was sie zu einer der größten Städte Europas machte.' },
                { text: 'Zu dieser Zeit gehören die bekanntesten römischen Denkmäler von Trier: Porta Nigra, Kaiserthermen, Amphitheater, Konstantin-Basilika und Römische Brücke über die Mosel. Viele dieser Bauwerke sind bis heute erhalten und stehen unter UNESCO-Schutz.' },
                { bold: 'Frühes Christentum.', text: 'Trier spielte eine Schlüsselrolle bei der Verbreitung des Christentums in der Region. Bereits im 4. Jahrhundert befand sich hier einer der ältesten Bischofssitze nördlich der Alpen. Der Überlieferung nach wird in Trier der Heilige Rock aufbewahrt – eine Reliquie, die mit Jesus Christus verbunden ist, was die Stadt zu einem wichtigen Wallfahrtsort machte.' },
                { bold: 'Frühmittelalter.', text: 'Nach dem Fall des Römischen Reiches erlebte Trier Perioden des Niedergangs und der Zerstörung, verschwand aber nicht. Im 5.–6. Jahrhundert kam die Stadt unter die Herrschaft der Franken und erlangte allmählich ihre Bedeutung als religiöses Zentrum zurück.' },
                { text: 'Im Mittelalter wurde der Erzbischof von Trier Kurfürst des Heiligen Römischen Reiches, was die Stadt nicht nur kirchlich, sondern auch politisch einflussreich machte. Die Erzbischöfe von Trier hatten enorme Macht und kontrollierten weite Gebiete entlang der Mosel.' },
                { bold: 'Spätmittelalter und Neuzeit.', text: 'Im 14.–17. Jahrhundert litt Trier mehrfach unter Kriegen, Epidemien und wirtschaftlichem Niedergang. Besonders schwer waren die Folgen des Dreißigjährigen Krieges, als die Bevölkerung der Stadt stark schrumpfte.' },
                { text: 'Ende des 18. Jahrhunderts wurde Trier von französischen Revolutionsarmeen besetzt und Teil Frankreichs. In dieser Zeit wurden Verwaltungsreformen durchgeführt, die kirchliche Macht der Kurfürsten aufgehoben und Klöster säkularisiert.' },
                { bold: 'Preußische Periode und 19. Jahrhundert.', text: 'Nach dem Wiener Kongress 1815 kam Trier zum Königreich Preußen. Die Stadt wurde provinziell, behielt aber kulturelle Bedeutung. In dieser Zeit wurde 1818 Karl Marx in Trier geboren, einer der bekanntesten Söhne der Stadt.' },
                { text: 'Das 19. Jahrhundert war geprägt von schrittweiser Industrialisierung, Infrastrukturentwicklung und Bevölkerungswachstum.' },
                { bold: '20. Jahrhundert und Gegenwart.', text: 'Im 20. Jahrhundert erlebte Trier beide Weltkriege. Während des Zweiten Weltkriegs wurde die Stadt bombardiert, doch ein Großteil des historischen Erbes blieb erhalten.' },
                { text: 'Nach dem Krieg wurde Trier Teil des Bundeslandes Rheinland-Pfalz. In den Nachkriegsjahrzehnten entwickelte sich die Stadt aktiv als Universitäts-, Tourismus- und Kulturzentrum.' },
                { bold: 'Trier heute.', text: 'Heute ist Trier eine Stadt, in der römisches, mittelalterliches und modernes Erbe in einem Raum koexistieren. Das historische Zentrum und die römischen Denkmäler ziehen Touristen aus aller Welt an, und der Status einer Universitätsstadt verleiht der Stadt eine lebendige und internationale Atmosphäre.' },
            ]
        },
        meta: {
            title: "Trier – älteste Stadt Deutschlands mit reicher Geschichte",
            description: "Trier: Geschichte, Geographie, Sehenswürdigkeiten, berühmte Einwohner und interessante Fakten über die älteste Stadt Deutschlands.",
            ogTitle: "Trier – Informationen über die Stadt",
            ogDescription: "Detaillierte Informationen über Trier: Kultur, Geschichte, berühmte Einwohner und interessante Fakten.",
            ogImage: "https://our-travels.info/new/foto/Germany/rheinland-pfalz/trier-city/portaNigra_trier/001.JPG"
        }
    },
]

export default datas