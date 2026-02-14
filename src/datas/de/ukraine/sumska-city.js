const datas = [
    {
        id: 1,
        name: 'Sumy',
        path: "sumy",
        district: "sumska",
        desc: {
            general: [
                { text: 'Sumy ist eine Stadt von regionaler Bedeutung sowie das administrative, wirtschaftliche und kulturelle Zentrum der Oblast Sumy. Die Stadt wurde am 26. Juli 1655 gegründet. Sie liegt an den Ufern des Flusses Psel und seiner Nebenflüsse Sumka und Strilka. Administrativ ist die Stadt in zwei Bezirke gegliedert – Kowpakiwskyj und Saritschnyj, die 1973 gegründet wurden.' },
                { text: 'Sumy bildet das wirtschaftliche und kulturelle Zentrum der Region.'},
            ],
            population: [
                { bold: 'Einwohnerzahl:' },
                { text: ' ca. 270.000 Menschen (2025)' }
            ],
            area: [
                { bold: 'Fläche:' },
                { text: ' etwa 145 km²' }
            ],
            postalCode: [
                { bold: 'Postleitzahl:' },
                { text: ' 40000–40030' }
            ],
            phone: [
                { bold: 'Telefonvorwahl:' },
                { text: ' +380 542' }
            ],
            officialSite: [
                { bold: 'Offizielle Website der Stadt', link: 'https://smr.gov.ua/' }
            ],
            geography: [
                { bold: 'Geografische Lage:' },
                { text: 'Sumy liegt in der Waldsteppenzone im Nordosten der Ukraine. Die Stadt und ihr Bezirk grenzen: im Süden an die Bezirke Trostjanez und Lebedyn; im Südosten an den Bezirk Krasnopillja; im Westen an den Bezirk Bilopillja; im Norden an die Oblast Kursk der Russischen Föderation.' },
            ],
            culture: [
                { bold: 'Legende zur Namensherkunft.' },
                { text: 'Es gibt mehrere Versionen zur Herkunft des Stadtnamens. Eine davon ist mit Funden alter Jagdtaschen verbunden. Auf dem Stadtwappen, das 1781 genehmigt wurde, sind drei schwarze Taschen mit Bändern und goldenen Knöpfen auf einem rechteckigen Schild abgebildet, die Reichtum und die handelswirtschaftliche Bedeutung der Stadt symbolisieren.' }
            ]
        },
        interestingFacts: {
            title: 'Interessante Fakten',
            items: [
                { text: 'Sumy wird aufgrund der großen Anzahl an Grünanlagen, Rosen und Springbrunnen als „Stadt der Parks“ bezeichnet.' },
                { text: 'Der Tag der Stadt wird am 2. September gefeiert – zum Gedenken an die Befreiung von der deutschen Besatzung im Jahr 1943.' },
                { text: 'Der Maschinenbaukonzern NPO Sumy im. H. W. Frunse, Sumychimprom und andere Industrieunternehmen sind in der Ukraine und darüber hinaus bekannt.' },
                { text: 'In der Stadt gibt es das Akademische Theater für Drama und musikalische Komödie H. O. Schtschepkin, ein Jugendtheater, eine Philharmonie, das A.-P.-Tschechow-Museum sowie das regionale Heimatmuseum.' }
            ]
        },
        notablePeople: {
            title: 'Berühmte Persönlichkeiten',
            items: [
                { bold: 'Hryhorij Skoworoda', text: ' – Philosoph und Dichter, dessen Ideen das kulturelle Leben der Region geprägt haben' },
                { bold: 'Pjotr Iljitsch Tschaikowski', text: ' – Komponist, der durch historische Besuche mit der Stadt verbunden war' },
                { bold: 'Anton Pawlowitsch Tschechow', text: ' – Schriftsteller, dem in Sumy ein Museum gewidmet ist' },
                { bold: 'Iwan Herassymowytsch Charytonenko', text: ' – Mäzen, Gründer einer Zuckerfabrik und Wohltäter der Stadt' },
                { bold: 'Taras Schewtschenko', text: ' – Dichter und Künstler, der sich zeitweise in der Region aufhielt' },
            ]
        },
        briefHistory: {
            title: 'Kurze Geschichte',
            items: [
                { text: 'An den Ufern des Psel siedelten Menschen bereits seit Beginn unserer Zeitrechnung. Im 2.–6. Jahrhundert lebten hier slawische Stämme. Reste ihrer Siedlungen und Gräber wurden im nordwestlichen Teil der Stadt, in der Pawlowa-Straße, entdeckt.' },
                { text: 'Im 8.–10. Jahrhundert existierte auf dem Gebiet des ehemaligen Dorfes Topolje eine Siedlung der Sewerjanen, und im Gebiet Luka sind Überreste einer Befestigung aus der Zeit der Kiewer Rus erhalten geblieben.' },
                { text: 'Ein genaues Gründungsdatum der Stadt ist nicht bekannt. Einige Historiker nennen das Jahr 1652, als die ersten Siedler aus dem Städtchen Stawyschtsche hier ankamen. Die am weitesten anerkannte Version nennt jedoch das Jahr 1655, als 100 Siedler unter der Führung von Herasym Kondratjew die Stadt am Fluss Sumka gründeten.' },
                { text: 'Herasym Kondratjew nahm an Kämpfen gegen Tataren und Türken sowie an den Krimfeldzügen teil und kümmerte sich zugleich um die geistige Entwicklung der Stadt: Er gründete das männliche Mariä-Entschlafens-Kloster im Dorf Imela und das weibliche Johannes-der-Täufer-Kloster im Dorf Luka sowie mehrere Holzkirchen – die Verklärungskirche, die Nikolaikirche und die Kirche der Geburt der Gottesmutter.' },
                { text: 'Das Sumyer Kosakenregiment (1652–1658) schützte die südlichen Grenzen Russlands. In den Jahren 1656–1658 wurde unter der Leitung des russischen Wojewoden K. J. Arsenjew die Festung Sumy aus Eichenstämmen errichtet, mit unterirdischem Zugang zum Wasser, Erdwällen und Gräben. Ein Erdwall zwischen Psel und Sumka vervollständigte die Verteidigungslinie im Süden.' },
                { text: 'In den Jahren 1659, 1662 und 1668 widerstand die Festung den Belagerungen der Tataren. Die Festung Sumy wurde zu einem wichtigen Zentrum militärischer Auseinandersetzungen und später zu einem Sammelpunkt russischer Truppen während der Krimfeldzüge.' },
                { text: 'Im 18. Jahrhundert entwickelte sich Sumy zu einem bedeutenden Handelszentrum. Auf den Jahrmärkten wurden Zucker, Getreide und handwerkliche Erzeugnisse verkauft. Ende des 18. Jahrhunderts war die Stadt bereits als Ort mit entwickeltem Handwerk und Handel bekannt; 1732 zählte sie über 7.700 Einwohner.' },
                { text: 'Im 19. Jahrhundert entwickelten sich Industrie und Architektur aktiv weiter: Fabriken (Seifen-, Kerzen- und Lederfabriken) wurden eröffnet, steinerne Gebäude und Marktreihen im Stil des reifen Klassizismus errichtet. 1878 wurde Sumy in die Eisenbahnlinie Ljubotyn – Sumy – Woroshba aufgenommen, was die wirtschaftlichen Verbindungen stärkte.' },
                { text: 'Das 20. Jahrhundert war geprägt vom Wachstum von Kultur und Bildung: Theater, Philharmonie, Musik- und Kunstschulen sowie Parks wurden eröffnet. Dank der Initiativen lokaler Mäzene und der Stadtverwaltung wurde Sumy zur „Stadt der Parks“.' }
            ]
        },
        meta: {
            title: "Sumy – Stadt in der Oblast Sumy",
            description: "Sumy: Geschichte, Legende zur Namensherkunft, Industrie, Kultur und interessante Fakten.",
            ogTitle: "Sumy – Informationen über die Stadt",
            ogDescription: "Detaillierte Informationen über Sumy: Geschichte, Legenden, bekannte Persönlichkeiten, Kultur und Wirtschaft.",
            ogImage: "https://our-travels.info/foto/Ukraine/sumy/sumy.jpg"
        }
    },
]
export default datas