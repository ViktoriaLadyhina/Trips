const datas =
    [
        {
            id: 15_0,
            districtPath: "mayen_koblenz",
            path: "city",
            translations: {
                ru: {
                    name: "Города окружного подчинения района Майен‑Кобленц",
                    center: [{ text: "Три города входят в район Майен-Кобленц, но управляется самостоятельно на уровне района (города окружного подчинения)." },],
                    communities: [
                        { id: 1, name: "Майен", hasInfo: false }, // 456
                        { id: 2, name: "Андерах", hasInfo: false, gerb: "Germany/rheinland-pfalz/mayen-koblenz/andernach/gerb.gif", }, // 457
                        { id: 3, name: "Бендорф", hasInfo: false } // 458
                    ]
                }
            }
        },
                //     case "name":
    // case "capital":
    // case "geography":
    // case "area":
    // case "code":
    // case "population":
        {
            id: 15_1,
            path: "mendig", // 459
            districtPath: "mayen_koblenz",
            gerb: "Germany/rheinland-pfalz/mayen-koblenz/Mendig/gerb.gif",
            translations: {
                ru: {
                    name: "Мендиг",
                    capital: [{ bold: "Административный центр:", text: " город Мендиг." }],
                    geography: [{ text: "Объединённая община в составе района Майен-Кобленц земли Рейнланд-Пфальц." }],
                    area: [{ bold: "Площадь:", text: " около 75 кв. км (по состоянию на 2024 г.)" }],
                    density: [{ bold: "Плотность населения:", text: " примерно 185 человек/кв.км (по состоянию на 2024 г.)" }],
                    population: [{ bold: "Население:", text: " примерно 13 900 чел. (по состоянию на 2024 г.)" }],

                    communities: [
                        { id: 1, name: "Белль", hasInfo: false }, // 466
                        { id: 2, name: "Мендиг", hasInfo: false }, // 467
                        { id: 3, name: "Риден", hasInfo: false }, // 468
                        { id: 4, name: "Тюр", hasInfo: false }, // 469
                        { id: 5, name: "Фолькесфельд", hasInfo: false } // 470
                    ],
                }
            }
        },
        {
            id: 15_2,
            path: "pellenz", // 451
            districtPath: "mayen_koblenz",
            gerb: "Germany/rheinland-pfalz/mayen-koblenz/Pellenz/gerb.gif",
            translations: {
                ru: {
                    communities: [
                        { id: 1, name: "Крец", hasInfo: false },
                        { id: 2, name: "Круфт", hasInfo: false },
                        { id: 3, name: "Никених", hasInfo: false },
                        { id: 4, name: "Плайдт", hasInfo: false },
                        { id: 5, name: "Заффиг", hasInfo: false }
                    ]
                },
            }
        },
        {
            id: 15_3,
            path: "vallendar", // 460
            gerb: "Germany/rheinland-pfalz/mayen-koblenz/Vallendar/gerb.gif",
            translations: {
                ru: {
                    name: "Валлендар",
                    center: [{ bold: "Административный центр:", text: " Валлендар." }],
                    description: [{ text: "Объединённая община в составе района Майен-Кобленц земли Рейнланд-Пфальц." }],
                    area: [{ bold: "Площадь:", text: " около 38 кв. км (по состоянию на 2024 г.)" }],
                    density: [{ bold: "Плотность населения:", text: " примерно 400 человек/кв.км (по состоянию на 2024 г.)" }],
                    population: [{ bold: "Население:", text: " примерно 15 200 чел. (по состоянию на 2024 г.)" }],
                    com: [{ text: "Район подразделяется на " }, { bold: "4 общины:" }],
                    communities: [
                        { id: 1, name: "Нидервёрт", hasInfo: false }, // 476
                        { id: 2, name: "Урбар", hasInfo: false }, // 477
                        { id: 3, name: "Валлендар", hasInfo: false }, // 478
                        { id: 4, name: "Вайтерсбург", hasInfo: false } // 479
                    ]
                }
            }
        },
        {
            id: 15_4,
            path: "weisenthurm", // 455
            gerb: "Germany/rheinland-pfalz/mayen-koblenz/Weißenthurm/gerb.gif",
            translations: {
                ru: {
                    communities: [
                        { id: 1, name: "Бассенхайм", hasInfo: false }, // 480
                        { id: 2, name: "Кальтененгерс", hasInfo: false }, // 481
                        { id: 3, name: "Кеттиг", hasInfo: false }, // 482
                        { id: 4, name: "Мюльхайм-Керлих", hasInfo: false }, // 483
                        { id: 5, name: "Санкт-Зебастиан", hasInfo: false }, // 484
                        { id: 6, name: "Урмитц", hasInfo: false }, // 485
                        { id: 7, name: "Вайсентхурм", hasInfo: false } // 486
                    ]
                }
            }
        },
        // ---- не сделано и плюс города
        {
            id: 15_5,
            path: "maifeld", // 452
            districtPath: "mayen_koblenz",
            gerb: "Germany/rheinland-pfalz/mayen-koblenz/Maifeld/gerb.gif",
            translations: {
                ru: {
                    communities: [
                        { id: 1, name: "Айниг", hasInfo: false }, // 487
                        { id: 2, name: "Гаппенах", hasInfo: false }, // 488
                        { id: 3, name: "Геринг", hasInfo: false }, // 489
                        { id: 4, name: "Гиршнах", hasInfo: false }, // 490
                        { id: 5, name: "Кальт", hasInfo: false }, // 491
                        { id: 6, name: "Кербен", hasInfo: false }, // 492
                        { id: 7, name: "Коллиг", hasInfo: false }, // 493
                        { id: 8, name: "Лонниг", hasInfo: false }, // 494
                        { id: 9, name: "Мертлох", hasInfo: false }, // 495
                        { id: 10, name: "Мюнстермайфельд", hasInfo: false }, // 496
                        { id: 11, name: "Наунхайм", hasInfo: false }, // 497
                        { id: 12, name: "Охтендунг", hasInfo: false }, // 498
                        { id: 13, name: "Пиллиг", hasInfo: false }, // 499
                        { id: 14, name: "Польх", hasInfo: false }, // 500
                        { id: 15, name: "Рюбер", hasInfo: false }, // 501
                        { id: 16, name: "Тримбс", hasInfo: false }, // 502
                        { id: 17, name: "Веллинг", hasInfo: false }, // 503
                        { id: 18, name: "Виршем", hasInfo: false } // 504
                    ]
                }
            }
        },
        {
            id: 15_6,
            path: "rhein_mosel", // 453
            districtPath: "mayen_koblenz",
            gerb: "Germany/rheinland-pfalz/mayen-koblenz/Rhein-Mosel/gerb.gif",
            translations: {
                ru: {
                    communities: [
                        { id: 1, name: "Алькен", hasInfo: false }, // 505
                        { id: 2, name: "Брай", hasInfo: false }, // 506
                        { id: 3, name: "Броденбах", hasInfo: false }, // 507
                        { id: 4, name: "Бурген", hasInfo: false }, // 508
                        { id: 5, name: "Диблих", hasInfo: false }, // 509
                        { id: 6, name: "Хаценпорт", hasInfo: false }, // 510
                        { id: 7, name: "Коберн-Гондорф", hasInfo: false }, // 511
                        { id: 8, name: "Лемен", hasInfo: false }, // 512
                        { id: 9, name: "Лёф", hasInfo: false }, // 513
                        { id: 10, name: "Маккен", hasInfo: false }, // 514
                        { id: 11, name: "Нёртерсхаузен", hasInfo: false }, // 515
                        { id: 12, name: "Оберфель", hasInfo: false }, // 516
                        { id: 13, name: "Ренс", hasInfo: false }, // 517
                        { id: 14, name: "Шпай", hasInfo: false }, // 518
                        { id: 15, name: "Вальдеш", hasInfo: false }, // 519
                        { id: 16, name: "Виннинген", hasInfo: false }, // 520
                        { id: 17, name: "Волькен", hasInfo: false } // 521
                    ]
                }
            }
        },
        {
            id: 15_7,
            path: "vordereifel", // 454
            districtPath: "mayen_koblenz",
            gerb: "Germany/rheinland-pfalz/mayen-koblenz/Vordereifel/gerb.gif",
            translations: {
                ru: {
communities: [
    { id: 1, name: "Ахт", hasInfo: false }, // 522
    { id: 2, name: "Аншау", hasInfo: false }, // 523
    { id: 3, name: "Арфт", hasInfo: false }, // 524
    { id: 4, name: "Баар", hasInfo: false }, // 525
    { id: 5, name: "Бермель", hasInfo: false }, // 526
    { id: 6, name: "Боос", hasInfo: false }, // 527
    { id: 7, name: "Дитшайд", hasInfo: false }, // 528
    { id: 8, name: "Эттринген", hasInfo: false }, // 529
    { id: 9, name: "Хаустен", hasInfo: false }, // 530
    { id: 10, name: "Херресбах", hasInfo: false }, // 531
    { id: 11, name: "Хиртен", hasInfo: false }, // 532
    { id: 12, name: "Кериг", hasInfo: false }, // 533
    { id: 13, name: "Кирхвальд", hasInfo: false }, // 534
    { id: 14, name: "Коттенхайм", hasInfo: false }, // 535
    { id: 15, name: "Лангенфельд", hasInfo: false }, // 536
    { id: 16, name: "Лангшайд", hasInfo: false }, // 537
    { id: 17, name: "Линд", hasInfo: false }, // 538
    { id: 18, name: "Луксем", hasInfo: false }, // 539
    { id: 19, name: "Монреаль", hasInfo: false }, // 540
    { id: 20, name: "Мюнк", hasInfo: false }, // 541
    { id: 21, name: "Нахтсхайм", hasInfo: false }, // 542
    { id: 22, name: "Ройдельстерц", hasInfo: false }, // 543
    { id: 23, name: "Санкт-Йоханн", hasInfo: false }, // 544
    { id: 24, name: "Зибенбах", hasInfo: false }, // 545
    { id: 25, name: "Вирнебург", hasInfo: false }, // 546
    { id: 26, name: "Вайлер", hasInfo: false }, // 547
    { id: 27, name: "Вельшенбах", hasInfo: false } // 548
]
                },
            }
        },

        {
            id: 22_1,
            path: "hermeskeil", // 549
            gerb: "Germany/rheinland-pfalz/trier_saarburg/hermeskeil/gerb.png",
            translations: {
                ru: {
                    communities: [
                        { id: 1, name: "Бешайд", hasInfo: false }, // 555
                        { id: 2, name: "Бойрен", hasInfo: false }, // 556
                        { id: 3, name: "Дамфлос", hasInfo: false }, // 557
                        { id: 4, name: "Гайсфельд", hasInfo: false }, // 558
                        { id: 5, name: "Гримбург", hasInfo: false }, // 559
                        { id: 6, name: "Гузенбург", hasInfo: false }, // 560
                        { id: 7, name: "Хермескайль", hasInfo: false }, // 561
                        { id: 8, name: "Хинцерт-Пёлерт", hasInfo: false }, // 562
                        { id: 9, name: "Наурат", hasInfo: false }, // 563
                        { id: 10, name: "Нойхюттен", hasInfo: false }, // 564
                        { id: 11, name: "Рашайд", hasInfo: false }, // 565
                        { id: 12, name: "Райнсфельд", hasInfo: false }, // 566
                        { id: 13, name: "Цюш", hasInfo: false } // 567
                    ]
                },
            }
        },
        {
            id: 22_2,
            path: "konz", // 550
            gerb: "Germany/rheinland-pfalz/trier_saarburg/konz/gerb.png",
            translations: {
                ru: {
                    communities: [
                        { id: 1, name: "Канцем", hasInfo: false }, // 568
                        { id: 2, name: "Конц", hasInfo: false }, // 569
                        { id: 3, name: "Ниттель", hasInfo: false }, // 570
                        { id: 4, name: "Обербиллиг", hasInfo: false }, // 571
                        { id: 5, name: "Онсдорф", hasInfo: false }, // 572
                        { id: 6, name: "Пеллинген", hasInfo: false }, // 573
                        { id: 7, name: "Таверн", hasInfo: false }, // 574
                        { id: 8, name: "Теммельс", hasInfo: false }, // 575
                        { id: 9, name: "Вассерлиш", hasInfo: false }, // 576
                        { id: 10, name: "Ваверн", hasInfo: false }, // 577
                        { id: 11, name: "Веллен", hasInfo: false }, // 578
                        { id: 12, name: "Вильтинген", hasInfo: false } // 579
                    ]
                }
            }
        },
        {
            id: 22_3,
            path: "ruwer", // 551
            gerb: "Germany/rheinland-pfalz/trier_saarburg/ruwer/gerb.png",
            translations: {
                ru: {
                    communities: [
                        { id: 1, name: "Бонерат", hasInfo: false }, // 580
                        { id: 2, name: "Фаршвайлер", hasInfo: false }, // 581
                        { id: 3, name: "Густерат", hasInfo: false }, // 582
                        { id: 4, name: "Гутвайлер", hasInfo: false }, // 583
                        { id: 5, name: "Херль", hasInfo: false }, // 584
                        { id: 6, name: "Хинценбург", hasInfo: false }, // 585
                        { id: 7, name: "Хольцерат", hasInfo: false }, // 586
                        { id: 8, name: "Казель", hasInfo: false }, // 587
                        { id: 9, name: "Корлинген", hasInfo: false }, // 588
                        { id: 10, name: "Лоршайд", hasInfo: false }, // 589
                        { id: 11, name: "Мертесдорф", hasInfo: false }, // 590
                        { id: 12, name: "Моршайд", hasInfo: false }, // 591
                        { id: 13, name: "Ольмут", hasInfo: false }, // 592
                        { id: 14, name: "Осбург", hasInfo: false }, // 593
                        { id: 15, name: "Плувиг", hasInfo: false }, // 594
                        { id: 16, name: "Риверис", hasInfo: false }, // 595
                        { id: 17, name: "Шёндорф", hasInfo: false }, // 596
                        { id: 18, name: "Зоммерау", hasInfo: false }, // 597
                        { id: 19, name: "Том", hasInfo: false }, // 598
                        { id: 20, name: "Вальдрах", hasInfo: false } // 599
                    ]
                }
            }
        },
        {
            id: 22_4,
            path: "saarburg_kell", // 552
            gerb: "Germany/rheinland-pfalz/trier_saarburg/saarburg_kell/gerb.png",
            translations: {
                ru: {
                    communities: [
                        { id: 1, name: "Айль", hasInfo: false }, // 600
                        { id: 2, name: "Бальдринген", hasInfo: false }, // 601
                        { id: 3, name: "Фиш", hasInfo: false }, // 602
                        { id: 4, name: "Фройденбург", hasInfo: false }, // 603
                        { id: 5, name: "Граймерат", hasInfo: false }, // 604
                        { id: 6, name: "Хеддерт", hasInfo: false }, // 605
                        { id: 7, name: "Хентерн", hasInfo: false }, // 606
                        { id: 8, name: "Ирш", hasInfo: false }, // 607
                        { id: 9, name: "Кастель-Штадт", hasInfo: false }, // 608
                        { id: 10, name: "Келль-ам-Зее", hasInfo: false }, // 609
                        { id: 11, name: "Кирф", hasInfo: false }, // 610
                        { id: 12, name: "Лампаден", hasInfo: false }, // 611
                        { id: 13, name: "Мандерн", hasInfo: false }, // 612
                        { id: 14, name: "Маннебах", hasInfo: false }, // 613
                        { id: 15, name: "Мерцкирхен", hasInfo: false }, // 614
                        { id: 16, name: "Окфен", hasInfo: false }, // 615
                        { id: 17, name: "Пальцем", hasInfo: false }, // 616
                        { id: 18, name: "Пашель", hasInfo: false }, // 617
                        { id: 19, name: "Саарбург", hasInfo: true, path: "saarburg_city" }, // 618
                        { id: 20, name: "Шиллинген", hasInfo: false }, // 619
                        { id: 21, name: "Шоден", hasInfo: false }, // 620
                        { id: 22, name: "Шёмерих", hasInfo: false }, // 621
                        { id: 23, name: "Зерриг", hasInfo: false }, // 622
                        { id: 24, name: "Табен-Родт", hasInfo: false }, // 623
                        { id: 25, name: "Трассем", hasInfo: false }, // 624
                        { id: 26, name: "Фирхерренборн", hasInfo: false }, // 625
                        { id: 27, name: "Вальдвайлер", hasInfo: false }, // 626
                        { id: 28, name: "Винхеринген", hasInfo: false }, // 627
                        { id: 29, name: "Церф", hasInfo: false } // 628
                    ]
                }
            }
        },
        {
            id: 22_5,
            path: "schweich", // 553
            gerb: "Germany/rheinland-pfalz/trier_saarburg/schweich/gerb.png",
            translations: {
                ru: {
                    communities: [
                        { id: 1, name: "Беконд", hasInfo: false }, // 629
                        { id: 2, name: "Детцем", hasInfo: false }, // 630
                        { id: 3, name: "Энш", hasInfo: false }, // 631
                        { id: 4, name: "Фелль", hasInfo: false }, // 632
                        { id: 5, name: "Фёрен", hasInfo: false }, // 633
                        { id: 6, name: "Кен", hasInfo: false }, // 634
                        { id: 7, name: "Клюссерат", hasInfo: false }, // 635
                        { id: 8, name: "Кёверих", hasInfo: false }, // 636
                        { id: 9, name: "Лайвен", hasInfo: false }, // 637
                        { id: 10, name: "Лонген", hasInfo: false }, // 638
                        { id: 11, name: "Лонгуйх", hasInfo: false }, // 639
                        { id: 12, name: "Меринг", hasInfo: false }, // 640
                        { id: 13, name: "Наурат", hasInfo: false }, // 641
                        { id: 14, name: "Пёлих", hasInfo: false }, // 642
                        { id: 15, name: "Риоль", hasInfo: false }, // 643
                        { id: 16, name: "Шлайх", hasInfo: false }, // 644
                        { id: 17, name: "Швайх", hasInfo: false }, // 645
                        { id: 18, name: "Тёрних", hasInfo: false }, // 646
                        { id: 19, name: "Thörnich", hasInfo: false } // 647
                       
                    ]
                }
            }
        },
        {
            id: 22_6,
            path: "trier_land", // 554
            gerb: "Germany/rheinland-pfalz/trier_saarburg/trier_land/gerb.png",
            translations: {
                ru: {
                    name: "Трир-Ланд",
                    center: [{ bold: "Административный центр:", text: " город Трир." }],
                    description: [{ text: "Объединённая община в составе района Трир-Саарбург земли Рейнланд-Пфальц." }],
                    area: [{ bold: "Площадь:", text: " ~175,49 км² (по состоянию на 2024 г.)" }],
                    density: [{ bold: "Плотность населения:", text: " ~127 человек/км² (по состоянию на 2024 г.)" }],
                    population: [{ bold: "Население:", text: " ~22 197 человек (по состоянию на 2024 г.)" }],
                    com: [{ text: "Район подразделяется на " }, { bold: "11 общин:" }],
                    communities: [
                        { id: 1, name: "Ах", hasInfo: false },
                        { id: 2, name: "Франценхайм", hasInfo: false },
                        { id: 3, name: "Хоквайлер", hasInfo: false },
                        { id: 4, name: "Игель", hasInfo: false },
                        { id: 5, name: "Кордель", hasInfo: false },
                        { id: 6, name: "Лангзур", hasInfo: false },
                        { id: 7, name: "Невель", hasInfo: false },
                        { id: 8, name: "Ралинген", hasInfo: false },
                        { id: 9, name: "Трирвайлер", hasInfo: false },
                        { id: 10, name: "Вельшбиллиг", hasInfo: false },
                        { id: 11, name: "Цеммер", hasInfo: false }
                    ]
                },
                uk: {
                    name: "Трір-Ланд",
                    center: [{ bold: "Адміністративний центр:", text: " місто Трір." }],
                    description: [{ text: "Об’єднана громада у складі району Трір-Саарбург землі Рейнланд-Пфальц." }],
                    area: [{ bold: "Площа:", text: " близько 175,49 км² (станом на 2024 рік)." }],
                    density: [{ bold: "Щільність населення:", text: " близько 127 осіб/км² (станом на 2024 рік)." }],
                    population: [{ bold: "Населення:", text: " близько 22 197 осіб (станом на 2024 рік)." }],
                    com: [{ text: "Громада включає " }, { bold: "11 населених пунктів:" }],
                    communities: [
                        { id: 1, name: "Ах", hasInfo: false },
                        { id: 2, name: "Франценхайм", hasInfo: false },
                        { id: 3, name: "Хоквайлер", hasInfo: false },
                        { id: 4, name: "Ігель", hasInfo: false },
                        { id: 5, name: "Кордель", hasInfo: false },
                        { id: 6, name: "Лангзур", hasInfo: false },
                        { id: 7, name: "Невель", hasInfo: false },
                        { id: 8, name: "Ралінген", hasInfo: false },
                        { id: 9, name: "Трірвайлер", hasInfo: false },
                        { id: 10, name: "Вельшбілліг", hasInfo: false },
                        { id: 11, name: "Цеммер", hasInfo: false }
                    ]
                },
                de: {
                    name: "Trier-Land",
                    path: "trier_land",
                    districtPath: "trier_saarburg",
                    center: [{ bold: "Verwaltungssitz:", text: " Stadt Trier." }],
                    description: [{ text: "Verbandsgemeinde im Landkreis Trier-Saarburg, Rheinland-Pfalz." }],
                    area: [{ bold: "Fläche:", text: " ca. 175,49 km² (Stand 2024)." }],
                    density: [{ bold: "Bevölkerungsdichte:", text: " ca. 127 Einwohner/km² (Stand 2024)." }],
                    population: [{ bold: "Einwohner:", text: " ca. 22 197 (Stand 2024)." }],
                    com: [{ text: "Die Verbandsgemeinde umfasst " }, { bold: "11 Ortsgemeinden:" }],
                    communities: [
                        { id: 1, name: "Aach", hasInfo: false },
                        { id: 2, name: "Franzenheim", hasInfo: false },
                        { id: 3, name: "Hockweiler", hasInfo: false },
                        { id: 4, name: "Igel", hasInfo: false },
                        { id: 5, name: "Kordel", hasInfo: false },
                        { id: 6, name: "Langsur", hasInfo: false },
                        { id: 7, name: "Neumagen-Dhron", hasInfo: false },
                        { id: 8, name: "Ralingen", hasInfo: false },
                        { id: 9, name: "Trierweiler", hasInfo: false },
                        { id: 10, name: "Welschbillig", hasInfo: false },
                        { id: 11, name: "Zemmer", hasInfo: false }
                    ]
                }
            }
        }
    ]

export default datas