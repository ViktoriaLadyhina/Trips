const datas = [

    //iserlohn
    {
        id: "dechenhohle_iserlohn",
        type: ["nature"], rating: "popular",
        path: "dechenhohle_iserlohn",
        countryPath: "germany", regionsPath: "nrw", districtPath: "arnsberg", cityPath: "iserlohn",
        fotoCard: "Germany/nrw/arnsberg/Märkischer-Kreis/iserlohn/dechenhohle/001.jpg",
        coord: { lat: 51.36556, lng: 7.64472 },
        translations: {
            ru: {
                name: "Пещера Дехенхёле",
                location: "Изерлон, Германия",
                officialSite: [{ bold: "Официальный сайт", link: "https://www.dechenhoehle.de/" }],
                short_description: "Пещера Дехенхёле (Dechenhöhle) – одна из самых красивых и посещаемых сталактитовых пещер Германии, расположенная в северной части Зауэрланда в районе Изерлон Грюне (Северный Рейн Вестфалия). Пещера впечатляет обилием сталактитов и сталагмитов и предлагает посетителям 400 м специально устроенного маршрута по освещённым залам с удивительными природными образованиями. ",
                full_description: {
                    title: "Описание и история",
                    items: [
                        { bold: "Пещера Дехенхёле (Dechenhöhle) ", text: "находится в карстовых известняках Рейнского массива и является частью большого подземного комплекса длиной более 20 км. Внутри можно увидеть сложные образования – от «Органной залы» до «Пальмовой колонны», высотой около 3 м. Пещера освещена электричеством, с 2015 года применяется LED подсветка для лучшего восприятия цвета и структуры сталактитов. " },
                        { text: "Пещера доступна только в составе экскурсии: это около 400 м благоустроенного маршрута с объяснениями гида. Температура внутри стабильна и около 10 °C, что делает посещение интересным в любое время года. " },
                        { text: "С момента открытия пещера Дехенхёле быстро стала популярной: уже в том же 1868 году её посетили тысячи людей. Названа пещера в честь геолога Heinrich von Dechen (1800–1889), признанного за вклад в изучение геологии Рейна и Вестфалии.  " },
                        { text: "До 1983 года пещера находилась в собственности железнодорожных компаний из за своего обнаружения во время строительства путей; затем управление перешло к региональным туристическим и муниципальным организациям. " }
                    ]
                },
                tickets_and_entry: {
                    title: "Практическая информация",
                    items: [
                        { bold: "Адрес: ", text: "Dechenhöhle 5, 58644 Iserlohn Grüne, Германия." },
                        { bold: "Как добраться: ", text: "пешком или автобусом от остановки Dechenhöhle; имеется свой железнодорожный остановочный пункт Letmathe Dechenhöhle на региональных маршрутах RE16 / RB91. " },
                        { bold: "Экскурсии и часы: ", text: "экскурсии с марта по ноябрь регулярно, зимой – в выходные и праздничные дни. Отдельные специальные мероприятия доступны по запросу." },
                        { bold: "Стоимость: ", text: "<br>взрослые ≈ 10 €, <br>дети 3-15 лет ≈ 6,50-6 €, <br>льготные цены для групп. " }
                    ]
                },
                interestingFacts: {
                    title: "Интересные факты",
                    items: [
                        { text: "Пещера расположена в самом известном пещерном районе Германии – Grüner Tal (Грюне Тал). " },
                        { text: "Dechenhöhle – единственная пещера в Германии с собственной железнодорожной остановкой. " },
                        { text: "Общая протяжённость известных ходов превышает 20 км, хотя для посетителей открыто около 400 м. " },
                        { text: "Внутри регулярно проходят событийные экскурсии: «Пещерные огни», концерты, рождественские прогулки, мастер классы. " }
                    ]
                },
                construction_period: "Пещеру обнаружили 10 июня 1868 года во время работ по строительству железной дороги. Двое железнодорожных рабочих, потеряв молот, забрались в узкую скалистую трещину, которая привела к пространству с уникальными сталактитовыми образованиями. ",
                meta: {
                    title: "Пещера Дехенхёле (Dechenhöhle), Iserlohn – сталактитовые образования, экскурсии в Германии",
                    description: "Посетите Dechenhöhle – одну из красивейших сталактитовых пещер Германии в Изерлоне. Узнайте об истории открытия, уникальных образованиях, музейных экспозициях и экскурсиях. Великолепный природный туризм для всей семьи.",
                    ogTitle: "Dechenhöhle – подземное чудо Sauerland",
                    ogDescription: "Откройте для себя мистическую Dechenhöhle в Германии: сталактиты, истории ледниковых животных, музей и пещерные экскурсии для всех возрастов.",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/arnsberg/Märkischer-Kreis/iserlohn/dechenhohle/001.jpg"
                }
            },
            ua: {
                name: "Печера Дехенхёле",
                location: "Ізерлон, Німеччина",
                officialSite: [{ bold: "Офіційний сайт", link: "https://www.dechenhoehle.de/" }],
                short_description: "Печера Дехенхёле (Dechenhöhle) – одна з найкрасивіших та найвідвідуваніших сталактитових печер Німеччини, розташована в північній частині Саарланду в районі Ізерлон-Грюне (Північний Рейн-Вестфалія). Печера вражає багатством сталактитів та сталагмітів і пропонує відвідувачам 400 м спеціально облаштованого маршруту по освітлених залах з унікальними природними утвореннями.",
                full_description: {
                    title: "Опис та історія",
                    items: [
                        { bold: "Печера Дехенхёле (Dechenhöhle) ", text: "розташована в карстових вапняках Рейнського масиву і є частиною великого підземного комплексу довжиною понад 20 км. Усередині можна побачити складні утворення – від «Органного залу» до «Пальмової колони», висотою близько 3 м. Печера освітлюється електрикою, з 2015 року використовується LED-підсвітка для кращого сприйняття кольору та структури сталактитів." },
                        { text: "Печера доступна лише в складі екскурсії: близько 400 м облаштованого маршруту з поясненнями гіда. Температура всередині стабільна і близько 10 °C, що робить відвідування цікавим у будь-яку пору року." },
                        { text: "З моменту відкриття печера Дехенхёле швидко стала популярною: вже в 1868 році її відвідали тисячі людей. Печера названа на честь геолога Heinrich von Dechen (1800–1889), визнаного за внесок у вивчення геології Рейну та Вестфалії." },
                        { text: "До 1983 року печера перебувала у власності залізничних компаній через її відкриття під час будівництва колій; згодом управління перейшло до регіональних туристичних та муніципальних організацій." }
                    ]
                },
                tickets_and_entry: {
                    title: "Практична інформація",
                    items: [
                        { bold: "Адреса: ", text: "Dechenhöhle 5, 58644 Iserlohn Grüne, Німеччина." },
                        { bold: "Як дістатися: ", text: "пішки або автобусом від зупинки Dechenhöhle; є власна залізнична зупинка Letmathe Dechenhöhle на регіональних маршрутах RE16 / RB91." },
                        { bold: "Екскурсії та години роботи: ", text: "екскурсії регулярно з березня по листопад, взимку – у вихідні та святкові дні. Окремі спеціальні заходи доступні за запитом." },
                        { bold: "Вартість: ", text: "<br>дорослі ≈ 10 €, <br>діти 3–15 років ≈ 6,50–6 €, <br>пільгові ціни для груп." }
                    ]
                },
                interestingFacts: {
                    title: "Цікаві факти",
                    items: [
                        { text: "Печера розташована в найвідомішому печерному районі Німеччини – Grüner Tal (Грюне Тал)." },
                        { text: "Dechenhöhle – єдина печера в Німеччині з власною залізничною зупинкою." },
                        { text: "Загальна протяжність відомих ходів перевищує 20 км, хоча для відвідувачів відкрито близько 400 м." },
                        { text: "Всередині регулярно проводяться тематичні екскурсії: «Печерні вогні», концерти, різдвяні прогулянки, майстер-класи." }
                    ]
                },
                construction_period: "Печеру відкрили 10 червня 1868 року під час робіт з будівництва залізниці. Двоє залізничних робітників, втративши молоток, забралися у вузьку скелясту тріщину, яка привела до простору з унікальними сталактитовими утвореннями.",
                meta: {
                    title: "Печера Дехенхёле (Dechenhöhle), Ізерлон – сталактитові утворення, екскурсії в Німеччині",
                    description: "Відвідайте Dechenhöhle – одну з найкрасивіших сталактитових печер Німеччини в Ізерлоні. Дізнайтеся про історію відкриття, унікальні утворення, музейні експозиції та екскурсії. Чудовий природний туризм для всієї родини.",
                    ogTitle: "Dechenhöhle – підземне диво Sauerland",
                    ogDescription: "Відкрийте для себе містичну Dechenhöhle в Німеччині: сталактити, історії льодовикових тварин, музей та печерні екскурсії для всіх вікових груп.",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/arnsberg/Märkischer-Kreis/iserlohn/dechenhohle/001.jpg"
                }
            },
            de: {
                name: "Dechenhöhle",
                location: "Iserlohn, Deutschland",
                officialSite: [{ bold: "Offizielle Webseite", link: "https://www.dechenhoehle.de/" }],
                short_description: "Die Dechenhöhle ist eine der schönsten und meistbesuchten Tropfsteinhöhlen Deutschlands, gelegen im nördlichen Sauerland im Gebiet Iserlohn-Grüne (Nordrhein-Westfalen). Die Höhle beeindruckt durch ihre Vielzahl an Stalaktiten und Stalagmiten und bietet den Besuchern einen 400 m langen, speziell angelegten Rundgang durch beleuchtete Hallen mit einzigartigen Naturformationen.",
                full_description: {
                    title: "Beschreibung und Geschichte",
                    items: [
                        { bold: "Die Dechenhöhle ", text: "liegt in den Karstkalken des Rheinischen Schiefergebirges und ist Teil eines großen unterirdischen Komplexes von über 20 km Länge. Im Inneren sind komplexe Formationen zu sehen – von der „Orgelhalle“ bis zur „Palmen-Säule“, ca. 3 m hoch. Die Höhle ist elektrisch beleuchtet, seit 2015 wird LED-Beleuchtung verwendet, um Farbe und Struktur der Tropfsteine besser zur Geltung zu bringen." },
                        { text: "Die Höhle ist nur im Rahmen einer Führung zugänglich: etwa 400 m ausgebauter Weg mit Erläuterungen des Guides. Die Temperatur im Inneren ist stabil bei ca. 10 °C, was den Besuch zu jeder Jahreszeit interessant macht." },
                        { text: "Seit ihrer Entdeckung wurde die Dechenhöhle schnell populär: bereits 1868 besuchten Tausende von Menschen die Höhle. Sie ist nach dem Geologen Heinrich von Dechen (1800–1889) benannt, der für seine Beiträge zur Geologie des Rheins und Westfalens anerkannt wurde." },
                        { text: "Bis 1983 gehörte die Höhle den Eisenbahnunternehmen aufgrund ihrer Entdeckung während des Gleisbaus; anschließend ging die Verwaltung an regionale Tourismus- und kommunale Organisationen über." }
                    ]
                },
                tickets_and_entry: {
                    title: "Praktische Informationen",
                    items: [
                        { bold: "Adresse: ", text: "Dechenhöhle 5, 58644 Iserlohn Grüne, Deutschland." },
                        { bold: "Anfahrt: ", text: "zu Fuß oder mit dem Bus von der Haltestelle Dechenhöhle; eigene Bahnstation Letmathe Dechenhöhle an den Regionalstrecken RE16 / RB91." },
                        { bold: "Führungen und Öffnungszeiten: ", text: "Führungen regelmäßig von März bis November, im Winter an Wochenenden und Feiertagen. Einzelne Sonderveranstaltungen auf Anfrage." },
                        { bold: "Eintrittspreise: ", text: "<br>Erwachsene ≈ 10 €, <br>Kinder 3–15 Jahre ≈ 6,50–6 €, <br>ermäßigte Preise für Gruppen." }
                    ]
                },
                interestingFacts: {
                    title: "Interessante Fakten",
                    items: [
                        { text: "Die Höhle liegt in der bekanntesten Höhlenregion Deutschlands – Grüner Tal." },
                        { text: "Die Dechenhöhle ist die einzige Höhle in Deutschland mit eigenem Bahnanschluss." },
                        { text: "Die Gesamtlänge der bekannten Gänge beträgt über 20 km, für Besucher sind etwa 400 m zugänglich." },
                        { text: "Regelmäßig finden thematische Führungen statt: „Höhlenlichter“, Konzerte, Weihnachtsführungen, Workshops." }
                    ]
                },
                construction_period: "Die Höhle wurde am 10. Juni 1868 während des Eisenbahnbaus entdeckt. Zwei Eisenbahnarbeiter, die einen Hammer verloren hatten, kletterten in einen engen Felsenriss, der zu einem Raum mit einzigartigen Tropfsteinformationen führte.",
                meta: {
                    title: "Dechenhöhle, Iserlohn – Tropfsteinformationen, Führungen in Deutschland",
                    description: "Besuchen Sie die Dechenhöhle – eine der schönsten Tropfsteinhöhlen Deutschlands in Iserlohn. Erfahren Sie mehr über die Entdeckungsgeschichte, einzigartige Formationen, Museumsausstellungen und Führungen. Hervorragender Naturtourismus für die ganze Familie.",
                    ogTitle: "Dechenhöhle – unterirdisches Wunder im Sauerland",
                    ogDescription: "Entdecken Sie die mystische Dechenhöhle in Deutschland: Stalaktiten, Geschichten von eiszeitlichen Tieren, Museum und Höhlenführungen für alle Altersgruppen.",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/arnsberg/Märkischer-Kreis/iserlohn/dechenhohle/001.jpg"
                }
            }
        }
    },
]

export default datas;