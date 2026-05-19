// ============================================================
//  STATIC DATA
// ============================================================

const staticAdhkarData = {
    morning: {
        title: 'Morning', trackProgress: true,
        items: [
            { id: 'm1', arabic: "اللَّهُ لَا إِلَـٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَنْ ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ", transliteration: "Allahu la ilaha illa Huwa, Al-Hayyul-Qayyum. La ta'khudhuhu sinatun wa la nawm. Lahu ma fis-samawati wa ma fil-'ard. Man dhal-ladhi yashfa'u 'indahu illa bi-idhnihi. Ya'lamu ma bayna aydihim wa ma khalfahum. Wa la yuhituna bi shay'in min 'ilmihi illa bima sha'. Wasi'a kursiyyuhus-samawati wal-'ard. Wa la ya'uduhu hifdhuhuma. Wa Huwal-'Aliyyul-'Adheem.", translation: "Ayat al-Kursi [Al-Baqarah: 255]", count: 1, read: 0, virtue_ar: "من قالها حين يصبح أجير من الجن حتى يمسي، ومن قالها حين يمسي أجير منهم حتى يصبح.", virtue_en: "Whoever recites this in the morning will be protected from the jinn until the evening, and whoever recites it in the evening will be protected until the morning. [Al-Hakim]" },
            { id: 'm2', isComplex: true, parts: [ { title_ar: "سورة الإخلاص:", arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ", title_en: "Surah Al-Ikhlas:", transliteration: "Qul huwa Allahu ahad. Allahu assamad. Lam yalid wa lam yoolad. Wa lam yakun lahu kufuwan ahad." }, { title_ar: "سورة الفلق:", arabic: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِن شَرِّ مَا خَلَقَ ۝ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ", title_en: "Surah Al-Falaq:", transliteration: "Qul a'udhu birabbi alfalaq. Min sharri ma khalaq. Wa min sharri ghasiqin idha waqab. Wa min sharri annaffathati fee al'uqad. Wa min sharri hasidin idha hasad." }, { title_ar: "سورة الناس:", arabic: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَٰهِ النَّاسِ ۝ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَالنَّاسِ", title_en: "Surah An-Nas:", transliteration: "Qul a'udhu birabbi annas. Maliki annas. Ilahi annas. Min sharri alwaswasi alkhannas. Alladhee yuwaswisu fee sudoori annas. Mina aljinnati wannas." } ], translation: "The three chapters of protection (Al-Mu'awwidhat).", count: 3, read: 0, virtue_ar: "قال رسول الله صلى الله عليه وسلم: 'قل هو الله أحد والمعوذتين حين تمسي وحين تصبح ثلاث مرات تكفيك من كل شيء.'", virtue_en: "The Messenger of Allah (ﷺ) said: 'Recite them three times in the morning and evening; they will suffice you against everything.' [Abu Dawud, Tirmidhi]" },
            { id: 'm3', arabic: "رَضِيتُ بِاللَّهِ رَبًّا، وَبِالإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ نَبِيًّا", transliteration: "Raditu billahi Rabba, wa bil-Islami dina, wa bi Muhammadin sallallahu 'alayhi wa sallama nabiyya.", translation: "I am pleased with Allah as my Lord, with Islam as my religion and with Muhammad (ﷺ) as my Prophet.", count: 3, read: 0, virtue_ar: "قال رسول الله صلى الله عليه وسلم: 'من قالها ثلاثاً حين يصبح وحين يمسي كان حقاً على الله أن يرضيه يوم القيامة.'", virtue_en: "The Messenger of Allah (ﷺ) said: 'Allah has promised that anyone who says this three times every morning or evening will be pleased on the Day of Resurrection.' [Ahmad, Tirmidhi]" },
            { id: 'm4', arabic: "اللَّهُمَّ إِنِّي أَصْبَحْتُ أُشْهِدُكَ، وَأُشْهِدُ حَمَلَةَ عَرْشِكَ، وَمَلَائِكَتَكَ، وَجَمِيعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللَّهُ، لَا إِلَهَ إِلَّا أَنْتَ، وَحْدَكَ لَا شَرِيكَ لَكَ، وَأَنَّ مُحَمَّدًا عَبْدُكَ وَرَسُولُكَ", transliteration: "Allahumma inni asbahtu ush-hiduka, wa ush-hidu hamalata 'arshika, wa mala'ikataka, wa jami'a khalqika, annaka Antallah, la ilaha illa Anta, wahdaka la sharika lak, wa anna Muhammadan 'abduka wa rasuluk.", translation: "O Allah, I have reached the morning and I call You, the bearers of Your Throne, Your angels, and all of Your creation to witness that You are Allah, none has the right to be worshipped but You, alone, without partner.", count: 4, read: 0, virtue_ar: "من قالها حين يصبح أو يمسي أربع مرات أعتقه الله من النار.", virtue_en: "Whoever says this four times in the morning or evening, Allah will grant him salvation from the Hellfire. [Abu Dawud]" },
            { id: 'm5', arabic: "اللَّهُمَّ مَا أَصْبَحَ بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ، فَمِنْكَ وَحْدَكَ لَا شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ", transliteration: "Allahumma ma asbaha bi min ni'matin aw bi ahadin min khalqika, fa minka wahdaka la sharika lak, falakal-hamdu wa lakash-shukr.", translation: "O Allah, whatever blessing has been received by me or any of Your creation this morning is from You alone. For You is all praise and for You is all thanks.", count: 1, read: 0, virtue_ar: "من قالها حين يصبح فقد أدى شكر يومه، ومن قالها حين يمسي فقد أدى شكر ليلته.", virtue_en: "Whoever recites this in the morning has completed the thankfulness of the day. [Abu Dawud]" },
            { id: 'm6', arabic: "حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ، عَلَيْهِ تَوَكَّلْتُ، وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ", transliteration: "HasbiyAllahu la ilaha illa Huwa, 'alayhi tawakkaltu, wa Huwa Rabbul-'Arshil-'Adheem.", translation: "Allah is sufficient for me. There is none worthy of worship but Him. I have placed my trust in Him, He is Lord of the Majestic Throne.", count: 7, read: 0, virtue_ar: "من قالها حين يصبح وحين يمسي سبع مرات كفاه الله ما أهمه من أمر الدنيا والآخرة.", virtue_en: "Whoever says this seven times in the morning or evening, Allah will grant whatever he desires from this world or the next. [Ibn As-Sunni]" },
            { id: 'm7', arabic: "اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ", transliteration: "Allahumma bika asbahna, wa bika amsayna, wa bika nahya, wa bika namut, wa ilaykan-nushur.", translation: "O Allah, by You we have reached the morning, by You we live and by You we die, and to You is the resurrection.", count: 1, read: 0, virtue_ar: "دعاء شامل يبدأ به المسلم يومه بالتوكل على الله.", virtue_en: "A comprehensive supplication acknowledging Allah's power over life, death, and our daily affairs, starting the day with complete reliance on Him." },
            { id: 'm8', arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْبُخْلِ وَالْجُبْنِ، وَضَلَعِ الدَّيْنِ، وَغَلَبَةِ الرِّجَالِ", transliteration: "Allahumma inni a'udhu bika minal-hammi wal-hazan, wal-'ajzi wal-kasal, wal-bukhli wal-jubn, wa dala'id-dayn, wa ghalabatir-rijal.", translation: "O Allah, I seek refuge in You from anxiety and sorrow, weakness and laziness, miserliness and cowardice, the burden of debts and from being overpowered by men.", count: 1, read: 0, virtue_ar: "دعاء نبوي للوقاية من الهموم والمشاكل النفسية والجسدية.", virtue_en: "A powerful prayer taught by the Prophet (ﷺ) to seek refuge from common ailments of the heart and soul. [Bukhari, Muslim]" },
            { id: 'm9', arabic: "اللَّهُمَّ أَنْتَ رَبِّي، لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي، فَاغْفِرْ لِي، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ", transliteration: "Allahumma Anta Rabbi la ilaha illa Anta, khalaqtani wa ana 'abduk, wa ana 'ala 'ahdika wa wa'dika mastata't, a'udhu bika min sharri ma sana't, abu'u laka bini'matika 'alayya, wa abu'u laka bidhanbi faghfirli fa'innahu la yaghfirudh-dhunuba illa Anta.", translation: "The Master of seeking forgiveness (Sayyid al-Istighfar).", count: 1, read: 0, virtue_ar: "قال صلى الله عليه وسلم: 'من قاله موقناً به حين يمسي فمات من ليلته دخل الجنة.'", virtue_en: "The Prophet (ﷺ) said: 'Whoever says it during the day with firm faith and dies before the evening will be from the people of Paradise.' [Bukhari]" },
            { id: 'm10', arabic: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ، اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ", transliteration: "Allahumma salli 'ala Muhammadin wa 'ala aali Muhammadin kamaa sallayta 'ala Ibraheema wa 'ala aali Ibraheema, innaka Hameedun Majeed.", translation: "O Allah, bestow Your favor on Muhammad and on the family of Muhammad as You have bestowed Your favor on Ibrahim and on the family of Ibrahim.", count: 10, read: 0, virtue_ar: "قال صلى الله عليه وسلم: 'من صلى عليّ حين يصبح عشراً وحين يمسي عشراً أدركته شفاعتي يوم القيامة.'", virtue_en: "The Prophet (ﷺ) said: 'Whoever sends blessings upon me ten times in the morning and evening will have my intercession on the Day of Resurrection.' [At-Tabarani]" },
            { id: 'm11', arabic: "أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ", transliteration: "Astaghfirullaha wa atubu ilayh.", translation: "I seek the forgiveness of Allah and repent to Him.", count: 100, read: 0, virtue_ar: "قال رسول الله صلى الله عليه وسلم: 'والله إني لأستغفر الله وأتوب إليه في اليوم أكثر من سبعين مرة.'", virtue_en: "The Prophet (ﷺ) himself used to say this more than seventy times a day. [Bukhari]" }
        ]
    },
    evening: {
        title: 'Evening', trackProgress: true,
        items: [
            { id: 'e1', arabic: "اللَّهُ لَا إِلَـٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَنْ ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ", transliteration: "Allahu la ilaha illa Huwa, Al-Hayyul-Qayyum...", translation: "Ayat al-Kursi [Al-Baqarah: 255]", count: 1, read: 0, virtue_ar: "من قالها حين يمسي أجير من الجن حتى يصبح.", virtue_en: "Whoever recites this in the evening will be protected from the jinn until the morning. [Al-Hakim]" },
            { id: 'e2', isComplex: true, parts: [ { title_ar: "سورة الإخلاص:", arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ", title_en: "Surah Al-Ikhlas:", transliteration: "Qul huwa Allahu ahad. Allahu assamad. Lam yalid wa lam yoolad. Wa lam yakun lahu kufuwan ahad." }, { title_ar: "سورة الفلق:", arabic: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِن شَرِّ مَا خَلَقَ ۝ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ", title_en: "Surah Al-Falaq:", transliteration: "Qul a'udhu birabbi alfalaq..." }, { title_ar: "سورة الناس:", arabic: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَٰهِ النَّاسِ ۝ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَالنَّاسِ", title_en: "Surah An-Nas:", transliteration: "Qul a'udhu birabbi annas..." } ], translation: "The three chapters of protection (Al-Mu'awwidhat).", count: 3, read: 0, virtue_ar: "قال رسول الله صلى الله عليه وسلم: 'قل هو الله أحد والمعوذتين حين تمسي وحين تصبح ثلاث مرات تكفيك من كل شيء.'", virtue_en: "The Messenger of Allah (ﷺ) said: 'Recite them three times in the morning and evening; they will suffice you against everything.' [Abu Dawud, Tirmidhi]" },
            { id: 'e3', arabic: "رَضِيتُ بِاللَّهِ رَبًّا، وَبِالإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ نَبِيًّا", transliteration: "Raditu billahi Rabba, wa bil-Islami dina, wa bi Muhammadin sallallahu 'alayhi wa sallama nabiyya.", translation: "I am pleased with Allah as my Lord, with Islam as my religion and with Muhammad (ﷺ) as my Prophet.", count: 3, read: 0, virtue_ar: "من قالها ثلاثاً حين يمسي كان حقاً على الله أن يرضيه يوم القيامة.", virtue_en: "Allah has promised that anyone who says this three times every evening will be pleased on the Day of Resurrection. [Ahmad, Tirmidhi]" },
            { id: 'e4', arabic: "اللَّهُمَّ إِنِّي أَمْسَيْتُ أُشْهِدُكَ، وَأُشْهِدُ حَمَلَةَ عَرْشِكَ، وَمَلَائِكَتَكَ، وَجَمِيعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللَّهُ، لَا إِلَهَ إِلَّا أَنْتَ، وَحْدَكَ لَا شَرِيكَ لَكَ، وَأَنَّ مُحَمَّدًا عَبْدُكَ وَرَسُولُكَ", transliteration: "Allahumma inni amsaytu ush-hiduka...", translation: "O Allah, I have reached the evening and I call You, the bearers of Your Throne, Your angels, and all of Your creation to witness that You are Allah, none has the right to be worshipped but You.", count: 4, read: 0, virtue_ar: "من قالها حين يمسي أربع مرات أعتقه الله من النار.", virtue_en: "Whoever says this four times in the evening, Allah will grant him salvation from the Hellfire. [Abu Dawud]" },
            { id: 'e5', arabic: "اللَّهُمَّ مَا أَمْسَى بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ، فَمِنْكَ وَحْدَكَ لَا شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ", transliteration: "Allahumma ma amsa bi min ni'matin aw bi ahadin min khalqika, fa minka wahdaka la sharika lak, falakal-hamdu wa lakash-shukr.", translation: "O Allah, whatever blessing has been received by me or any of Your creation this evening is from You alone. For You is all praise and for You is all thanks.", count: 1, read: 0, virtue_ar: "من قالها حين يمسي فقد أدى شكر ليلته.", virtue_en: "Whoever recites this in the evening has completed the thankfulness of the night. [Abu Dawud]" },
            { id: 'e6', arabic: "حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ، عَلَيْهِ تَوَكَّلْتُ، وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ", transliteration: "HasbiyAllahu la ilaha illa Huwa, 'alayhi tawakkaltu, wa Huwa Rabbul-'Arshil-'Adheem.", translation: "Allah is sufficient for me. There is none worthy of worship but Him. I have placed my trust in Him, He is Lord of the Majestic Throne.", count: 7, read: 0, virtue_ar: "من قالها سبع مرات كفاه الله ما أهمه.", virtue_en: "Whoever says this seven times in the morning or evening, Allah will grant whatever he desires. [Ibn As-Sunni]" },
            { id: 'e7', arabic: "اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ الْمَصِيرُ", transliteration: "Allahumma bika amsayna, wa bika asbahna, wa bika nahya, wa bika namut, wa ilaykal-masir.", translation: "O Allah, by You we have reached the evening, by You we live and by You we die, and to You is our final return.", count: 1, read: 0, virtue_ar: "دعاء شامل ينهي به المسلم يومه.", virtue_en: "A comprehensive supplication ending the day with complete reliance on Allah." },
            { id: 'e8', arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْبُخْلِ وَالْجُبْنِ، وَضَلَعِ الدَّيْنِ، وَغَلَبَةِ الرِّجَالِ", transliteration: "Allahumma inni a'udhu bika minal-hammi wal-hazan...", translation: "O Allah, I seek refuge in You from anxiety and sorrow, weakness and laziness, miserliness and cowardice, the burden of debts and from being overpowered by men.", count: 1, read: 0, virtue_ar: "دعاء نبوي للوقاية من الهموم.", virtue_en: "A powerful prayer taught by the Prophet (ﷺ) to seek refuge from common ailments of the heart and soul. [Bukhari, Muslim]" },
            { id: 'e9', arabic: "اللَّهُمَّ أَنْتَ رَبِّي، لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي، فَاغْفِرْ لِي، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ", transliteration: "Allahumma Anta Rabbi la ilaha illa Anta...", translation: "The Master of seeking forgiveness (Sayyid al-Istighfar).", count: 1, read: 0, virtue_ar: "من قاله موقناً به حين يمسي فمات من ليلته دخل الجنة.", virtue_en: "Whoever says it in the night with firm faith and dies before the morning will be from the people of Paradise. [Bukhari]" },
            { id: 'e10', arabic: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ، اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ", transliteration: "Allahumma salli 'ala Muhammadin wa 'ala aali Muhammadin...", translation: "O Allah, bestow Your favor on Muhammad and on the family of Muhammad as You have bestowed Your favor on Ibrahim.", count: 10, read: 0, virtue_ar: "من صلى عليّ عشراً حين يمسي أدركته شفاعتي يوم القيامة.", virtue_en: "Whoever sends blessings upon me ten times in the evening will have my intercession on the Day of Resurrection. [At-Tabarani]" },
            { id: 'e11', arabic: "أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ", transliteration: "Astaghfirullaha wa atubu ilayh.", translation: "I seek the forgiveness of Allah and repent to Him.", count: 100, read: 0, virtue_ar: "قال رسول الله صلى الله عليه وسلم: 'والله إني لأستغفر الله وأتوب إليه في اليوم أكثر من سبعين مرة.'", virtue_en: "The Prophet (ﷺ) himself used to say this more than seventy times a day. [Bukhari]" }
        ]
    },
    afterSalah: {
        title: 'After Salah', trackProgress: false,
        items: [
            { id: 'as1', arabic: "أَسْتَغْفِرُ اللَّهَ (ثلاثاً) اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ", transliteration: "Astaghfirullah (3 times). Allahumma Antas-Salam wa minkas-salam, tabarakta ya Dhal-Jalali wal-Ikram.", translation: "I seek the forgiveness of Allah (three times). O Allah, You are Peace and from You comes peace.", virtue_ar: "كَانَ رَسُولُ اللَّهِ إِذَا انْصَرَفَ مِنْ صَلاَتِهِ اسْتَغْفَرَ ثَلاَثًا وَقَالَ: اللَّهُمَّ أَنْتَ السَّلاَمُ...", virtue_en: "Whenever the Messenger of Allah (ﷺ) finished his prayer, he would seek forgiveness three times and say this supplication. [Muslim]" },
            { id: 'as2', arabic: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، اللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ، وَلَا مُعْطِيَ لِمَا مَنَعْتَ، وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ", transliteration: "La ilaha illallah wahdahu la sharika lah, lahul-mulku wa lahul-hamdu wa huwa 'ala kulli shay'in qadir. Allahumma la mani'a lima a'tayt...", translation: "There is none worthy of worship but Allah alone, Who has no partner. His is the dominion and to Him belongs all praise, and He is able to do all things.", virtue_ar: "كَانَ رَسُولُ اللَّهِ يَقُولُ فِي دُبُرِ كُلِّ صَلاَةٍ إِذَا سَلَّمَ: لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ...", virtue_en: "The Messenger of Allah (ﷺ) would say this after each prayer. [Bukhari, Muslim]" },
            { id: 'as3', arabic: "سُبْحَانَ اللَّهِ (٣٣ مرة) ، الْحَمْدُ لِلَّهِ (٣٣ مرة) ، اللَّهُ أَكْبَرُ (٣٣ مرة) ، ثُمَّ: لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ", transliteration: "SubhanAllah (33×), Alhamdulillah (33×), Allahu Akbar (33×), then: La ilaha illallah wahdahu la sharika lah...", translation: "Glory is to Allah (33×), Praise is to Allah (33×), Allah is the Most Great (33×), then complete the hundred with the declaration of His oneness.", virtue_ar: "مَنْ سَبَّحَ اللَّهَ فِي دُبُرِ كُلِّ صَلاَةٍ ثَلاَثًا وَثَلاَثِينَ... غُفِرَتْ خَطَايَاهُ وَإِنْ كَانَتْ مِثْلَ زَبَدِ الْبَحْرِ.", virtue_en: "Whoever glorifies Allah thirty-three times after each prayer... his sins will be forgiven even if they are like the foam of the sea. [Muslim]" },
            { id: 'as4', arabic: "آيَةُ الْكُرْسِيِّ دُبُرَ كُلِّ صَلَاةٍ مَكْتُوبَةٍ", transliteration: "Recite Ayat al-Kursi after every obligatory prayer.", translation: "Recitation of Ayat al-Kursi [Al-Baqarah: 255] after every prayer.", virtue_ar: "مَنْ قَرَأَ آيَةَ الْكُرْسِيِّ دُبُرَ كُلِّ صَلَاةٍ مَكْتُوبَةٍ لَمْ يَمْنَعْهُ مِنْ دُخُولِ الْجَنَّةِ إِلَّا أَنْ يَمُوتَ.", virtue_en: "Whoever recites Ayat al-Kursi after each obligatory prayer, nothing will prevent him from entering Paradise except death. [An-Nasa'i]" },
            { id: 'as5', arabic: "سورة الإخلاص، سورة الفلق، سورة الناس (بعد كل صلاة)", transliteration: "Surah Al-Ikhlas, Surah Al-Falaq, Surah An-Nas (after every prayer).", translation: "Recitation of Surah Al-Ikhlas, Al-Falaq, and An-Nas after every prayer.", virtue_ar: "أَمَرَنِي رَسُولُ اللَّهِ أَنْ أَقْرَأَ الْمُعَوِّذَاتِ دُبُرَ كُلِّ صَلاَةٍ.", virtue_en: "The Messenger of Allah (ﷺ) commanded to recite Al-Mu'awwidhat after every prayer. [Abu Dawud, Tirmidhi]" }
        ]
    },
    rabbana: {
        title: 'Rabbana Duas', trackProgress: false,
        items: [
            { id: 'rb1', arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ", transliteration: "Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan waqina 'adhaban-nar.", translation: "Our Lord, give us good in this world and good in the Hereafter and protect us from the punishment of the Fire. [Al-Baqarah: 201]", virtue_ar: "كَانَ أَكْثَرُ دُعَاءِ النَّبِيِّ صلى الله عليه وسلم: رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً...", virtue_en: "The most frequent invocation of the Prophet (ﷺ) was this supplication. [Bukhari and Muslim]" },
            { id: 'rb2', arabic: "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً ۚ إِنَّكَ أَنتَ الْوَهَّابُ", transliteration: "Rabbana la tuzigh quloobana ba'da idh hadaytana wa hab lana min ladunka rahmah, innaka Antal-Wahhab.", translation: "Our Lord, let not our hearts deviate after You have guided us and grant us from Yourself mercy. Indeed, You are the Bestower. [Aal-Imran: 8]", virtue_ar: "هذا دعاء أُولُو الْأَلْبَابِ المذكور في القرآن، يسألون الله أن يثبت قلوبهم على الهداية.", virtue_en: "This is the supplication of 'those of understanding' (Ulul-Albab) in the Qur'an, asking Allah to keep their hearts firm upon guidance. [Tafsir Ibn Kathir]" },
            { id: 'rb3', arabic: "رَبَّنَا اغْفِرْ لَنَا ذُنُوبَنَا وَإِسْرَافَنَا فِي أَمْرِنَا وَثَبِّتْ أَقْدَامَنَا وَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ", transliteration: "Rabbana-ghfir lana dhunoobana wa israfana fi amrina wa thabbit aqdamana wansurna 'alal-qawmil-kafirin.", translation: "Our Lord, forgive us our sins and our excesses in our affairs and plant firmly our feet and give us victory. [Aal-Imran: 147]", virtue_ar: "دعاء المؤمنين الصابرين مع الأنبياء، يجمع المغفرة والثبات والنصر.", virtue_en: "The supplication of the patient followers of past prophets, combining forgiveness, steadfastness, and victory. [Tafsir As-Sa'di]" },
            { id: 'rb4', arabic: "رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ", transliteration: "Rabbana zalamna anfusana wa-in lam taghfir lana wa tarhamna lanakoonanna minal-khasireen.", translation: "Our Lord, we have wronged ourselves, and if You do not forgive us and have mercy upon us, we will surely be among the losers. [Al-A'raf: 23]", virtue_ar: "كلمات التوبة التي تلقاها آدم عليه السلام وزوجه من ربهما.", virtue_en: "The words of repentance that Adam (peace be upon him) and his wife received from their Lord — a powerful supplication for seeking forgiveness. [Tafsir Al-Tabari]" },
            { id: 'rb5', arabic: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا", transliteration: "Rabbana hab lana min azwajina wa dhurriyatina qurrata a'yunin waj'alna lil-muttaqina imama.", translation: "Our Lord, grant us from among our wives and offspring comfort to our eyes and make us a leader for the righteous. [Al-Furqan: 74]", virtue_ar: "دعاء عباد الرحمن في سورة الفرقان، يسألون صلاح الأسرة والقيادة.", virtue_en: "One of the supplications made by the 'Servants of the Most Merciful' in Surah Al-Furqan, asking for righteous families. [Tafsir Ibn Kathir]" }
        ]
    },
    forgiveness: {
        title: 'Forgiveness', trackProgress: false,
        items: [
            { id: 'f1', arabic: "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيَّ الْقَيُّومَ وَأَتُوبُ إِلَيْهِ", transliteration: "Astaghfirullahal-'Adheemal-ladhi la ilaha illa Huwal-Hayyul-Qayyum wa atubu ilaih.", translation: "I seek the forgiveness of Allah the Mighty, Whom there is none worthy of worship except Him, the Living, the Eternal, and I repent unto Him.", virtue_ar: "من قال: أستغفر الله الذي لا إله إلا هو الحي القيوم وأتوب إليه، غفر له وإن كان فر من الزحف.", virtue_en: "Whoever says this supplication will be forgiven even if he had fled from the battlefield. [Abu Dawud, Tirmidhi]" },
            { id: 'f2', arabic: "اللَّهُمَّ أَنْتَ رَبِّي، لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي، فَاغْفِرْ لِي، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ", transliteration: "Allahumma Anta Rabbi, la ilaha illa Anta, khalaqtani wa ana 'abduk...", translation: "The Master of seeking forgiveness (Sayyid al-Istighfar).", virtue_ar: "من قاله موقناً به دخل الجنة.", virtue_en: "Whoever says it with firm faith will be from the people of Paradise. [Bukhari]" },
            { id: 'f3', arabic: "اللَّهُمَّ اغْفِرْ لِي خَطِيئَتِي وَجَهْلِي، وَإِسْرَافِي فِي أَمْرِي، وَمَا أَنْتَ أَعْلَمُ بِهِ مِنِّي", transliteration: "Allahumma-ghfir li khati'ati wa jahli, wa israfi fi amri, wa ma Anta a'lamu bihi minni.", translation: "O Allah, forgive me my sins and my ignorance, my excesses in my affairs, and whatever You know better than I.", virtue_ar: "عَنْ أَبِي مُوسَى الأَشْعَرِيِّ، عَنِ النَّبِيِّ أَنَّهُ كَانَ يَدْعُو بِهَذَا الدُّعَاءِ.", virtue_en: "The Prophet (ﷺ) used to supplicate with these words — a comprehensive supplication acknowledging one's faults. [Bukhari, Muslim]" }
        ]
    }
};

// ============================================================
//  STATE
// ============================================================

let adhkarData  = {};
let history     = {};
let favorites   = {};

let currentView      = 'home';   // 'home' | 'reader' | 'search' | 'completion'
let readerCategory   = 'morning';
let readerIndex      = 0;

function getCategoryProgress(key) {
    if (!adhkarData[key]) return 0;
    const total = adhkarData[key].items.reduce((s, d) => s + d.count, 0);
    const done  = adhkarData[key].items.reduce((s, d) => s + (d.read || 0), 0);
    return total > 0 ? Math.min(Math.round((done / total) * 100), 100) : 0;
}

function getStreakCount() {
    let streak = 0;
    const d = new Date();
    while (true) {
        const key       = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
        const completed = history[key] || [];
        if (completed.includes('morning') || completed.includes('evening')) {
            streak++;
            d.setDate(d.getDate() - 1);
        } else break;
    }
    return streak;
}

// ============================================================
//  CATEGORY METADATA  (icons + descriptions for home cards)
// ============================================================

const categoryMeta = {
    morning: {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>`,
        desc: 'Morning remembrances'
    },
    evening: {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>`,
        desc: 'Evening remembrances'
    },
    afterSalah: {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>`,
        desc: 'Post-prayer dhikr'
    },
    rabbana: {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>`,
        desc: "Qur'anic supplications"
    },
    forgiveness: {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>`,
        desc: 'Seeking forgiveness'
    },
    favorites: {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-4-7 4V5z"/></svg>`,
        desc: 'Your saved duas'
    },
};

// ============================================================
//  SETTINGS
// ============================================================

const settings = {
    fontSize: 1,
    showTransliteration: true,
    showTranslation: true,
    darkMode: false,
    language: 'en',
};

// ============================================================
//  TRANSLATIONS
// ============================================================

const translations = {
    en: {
        greeting_morning:   'Good Morning',
        greeting_afternoon: 'Good Afternoon',
        greeting_evening:   'Good Evening',
        select_category:    'Select a category to begin your remembrance.',
        morning:            'Morning Adhkar',
        evening:            'Evening Adhkar',
        afterSalah:         'After Salah',
        rabbana:            'Rabbana Duas',
        forgiveness:        'Forgiveness',
        favorites:          'Favorites',
        morning_desc:       'Morning remembrances',
        evening_desc:       'Evening remembrances',
        afterSalah_desc:    'Post-prayer dhikr',
        rabbana_desc:       "Qur'anic supplications",
        forgiveness_desc:   'Seeking forgiveness',
        favorites_desc:     'Your saved duas',
        morning_progress:   'Morning',
        evening_progress:   'Evening',
        streak:             'Day Streak',
        item:               'item',
        items:              'items',
        count:              'Count',
        next:               'Next',
        prev:               'Prev',
        back:               'Back',
        finish:             'Finish',
        copy:               'Copy',
        virtue:             'Virtue',
        completed:          'Completed',
        save:               'Save',
        saved:              'Saved',
        reset:              'Reset',
        swipe_hint:         'swipe to navigate',
        search_placeholder: 'Search in Arabic, transliteration, or translation…',
        no_results:         'No results found',
        no_results_sub:     'Try a different keyword or clear the search.',
        fav_added:          'Added to favorites!',
        fav_removed:        'Removed from favorites',
        copied:             'Copied to clipboard!',
        copy_fail:          'Could not copy',
        language:           'Language',
        completion_title:   'Alhamdulillah!',
        completion_message: 'You have completed your {category} today.',
        completion_btn:     'Back to Home',
    },
    ar: {
        greeting_morning:   'صباح الخير',
        greeting_afternoon: 'مساء الخير',
        greeting_evening:   'مساء الخير',
        select_category:    'اختر فئة لبدء الأذكار.',
        morning:            'أذكار الصباح',
        evening:            'أذكار المساء',
        afterSalah:         'أذكار بعد الصلاة',
        rabbana:            'أدعية ربنا',
        forgiveness:        'الاستغفار',
        favorites:          'المحفوظات',
        morning_desc:       'أذكار الصباح',
        evening_desc:       'أذكار المساء',
        afterSalah_desc:    'أذكار ما بعد الصلاة',
        rabbana_desc:       'أدعية قرآنية',
        forgiveness_desc:   'طلب المغفرة',
        favorites_desc:     'أذكارك المحفوظة',
        morning_progress:   'الصباح',
        evening_progress:   'المساء',
        streak:             'يوم متواصل',
        item:               'عنصر',
        items:              'عناصر',
        count:              'عدّ',
        next:               'التالي',
        prev:               'السابق',
        back:               'رجوع',
        finish:             'إنهاء',
        copy:               'نسخ',
        virtue:             'الفضل',
        completed:          'تمّ',
        save:               'حفظ',
        saved:              'محفوظ',
        reset:              'إعادة',
        swipe_hint:         'اسحب للتنقل',
        search_placeholder: 'ابحث بالعربية أو النقحرة أو الترجمة…',
        no_results:         'لا توجد نتائج',
        no_results_sub:     'جرّب كلمة مختلفة أو امسح البحث.',
        fav_added:          'تمت الإضافة للمحفوظات!',
        fav_removed:        'تمت الإزالة من المحفوظات',
        copied:             'تم النسخ!',
        copy_fail:          'تعذّر النسخ',
        language:           'اللغة',
        completion_title:   'الحمد لله!',
        completion_message: 'لقد أتممت {category} اليوم.',
        completion_btn:     'العودة للرئيسية',
    }
};

function t(key) {
    const lang = settings.language || 'en';
    return (translations[lang] && translations[lang][key]) || translations.en[key] || key;
}

const fontSizes = [
    { label: 'S', arabic: '1rem',    english: '0.8rem'   },
    { label: 'M', arabic: '1.25rem', english: '0.875rem' },
    { label: 'L', arabic: '1.5rem',  english: '1rem'     },
];

// ============================================================
//  PERSISTENCE
// ============================================================

function saveProgress()  { localStorage.setItem('adhkarProgress',  JSON.stringify(adhkarData)); }
function saveSettings()  { localStorage.setItem('adhkarSettings',  JSON.stringify(settings));  }
function saveHistory()   { localStorage.setItem('adhkarHistory',   JSON.stringify(history));   }
function saveFavorites() { localStorage.setItem('adhkarFavorites', JSON.stringify(favorites)); }

function loadProgress() {
    const saved = localStorage.getItem('adhkarProgress');
    if (saved) {
        adhkarData = JSON.parse(saved);
        Object.keys(staticAdhkarData).forEach(key => {
            if (!adhkarData[key]) adhkarData[key] = JSON.parse(JSON.stringify(staticAdhkarData[key]));
        });
    } else {
        adhkarData = JSON.parse(JSON.stringify(staticAdhkarData));
    }
}

function loadSettings() {
    const saved = localStorage.getItem('adhkarSettings');
    if (saved) Object.assign(settings, JSON.parse(saved));
}

function loadHistory() {
    const saved = localStorage.getItem('adhkarHistory');
    history = saved ? JSON.parse(saved) : {};
}

function loadFavorites() {
    const saved = localStorage.getItem('adhkarFavorites');
    favorites = saved ? JSON.parse(saved) : {};
}

// ============================================================
//  THEME
// ============================================================

function applyTheme() {
    document.body.classList.toggle('dark', settings.darkMode);
    const toggle = document.getElementById('toggle-dark-mode');
    if (toggle) toggle.checked = settings.darkMode;
}

// ============================================================
//  HOME VIEW
// ============================================================

function renderHomeView() {
    currentView = 'home';

    document.getElementById('reader-view').classList.add('hidden');
    document.getElementById('adhkar-container').classList.add('hidden');
    document.getElementById('empty-state').classList.add('hidden');
    const compView = document.getElementById('completion-view');
    if (compView) compView.classList.add('hidden');

    const homeView = document.getElementById('home-view');
    homeView.classList.remove('hidden');

    const hour     = new Date().getHours();
    const greetKey = hour < 12 ? 'greeting_morning' : hour < 18 ? 'greeting_afternoon' : 'greeting_evening';
    const locale   = settings.language === 'ar' ? 'ar-SA' : 'en-US';
    const dateStr  = new Date().toLocaleDateString(locale, {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });

    const morningPct = getCategoryProgress('morning');
    const eveningPct = getCategoryProgress('evening');
    const streak     = getStreakCount();

    const allKeys   = [...Object.keys(staticAdhkarData), 'favorites'];
    const cardsHtml = allKeys.map(key => {
        const meta  = categoryMeta[key];
        const items = key === 'favorites' ? getFavoriteItems().items : staticAdhkarData[key].items;
        const count = items.length;

        let progressHtml = '';
        if (key === 'morning' || key === 'evening') {
            const pct = key === 'morning' ? morningPct : eveningPct;
            progressHtml = `
                <div class="home-card-progress-wrap">
                    <div class="home-card-progress-track">
                        <div class="home-card-progress-fill" style="width:${pct}%"></div>
                    </div>
                    <span class="home-card-progress-pct">${pct}%</span>
                </div>`;
        }

        return `
            <button class="home-card home-card-${key}" data-category="${key}">
                <span class="home-card-icon">${meta.icon}</span>
                <span class="home-card-title">${t(key)}</span>
                <span class="home-card-desc">${t(key + '_desc')}</span>
                <span class="home-card-count">${count} ${count === 1 ? t('item') : t('items')}</span>
                ${progressHtml}
            </button>`;
    }).join('');

    homeView.innerHTML = `
        <div class="container mx-auto px-4 pt-6 pb-24 max-w-2xl">

            <div class="dash-welcome">
                <p class="dash-greeting">${t(greetKey)}</p>
                <p class="dash-date">${dateStr}</p>
                <p class="dash-subtitle">${t('select_category')}</p>
            </div>

            <div class="dash-stats">
                <div class="dash-stat">
                    <p class="dash-stat-label">${t('morning_progress')}</p>
                    <p class="dash-stat-value">${morningPct}<span class="dash-stat-unit">%</span></p>
                    <div class="dash-stat-bar">
                        <div class="dash-stat-fill dash-fill-morning" style="width:${morningPct}%"></div>
                    </div>
                </div>
                <div class="dash-stat">
                    <p class="dash-stat-label">${t('evening_progress')}</p>
                    <p class="dash-stat-value">${eveningPct}<span class="dash-stat-unit">%</span></p>
                    <div class="dash-stat-bar">
                        <div class="dash-stat-fill dash-fill-evening" style="width:${eveningPct}%"></div>
                    </div>
                </div>
                <div class="dash-stat dash-stat-streak">
                    <p class="dash-stat-value">${streak}</p>
                    <p class="dash-stat-label">${t('streak')}</p>
                </div>
            </div>

            <p class="dash-section-label">— ${settings.language === 'ar' ? 'الفئات' : 'Categories'} —</p>
            <div id="home-grid" class="grid grid-cols-2 gap-4">
                ${cardsHtml}
            </div>
        </div>`;

    homeView.querySelectorAll('.home-card[data-category]').forEach(card => {
        card.addEventListener('click', () => openReader(card.dataset.category));
    });
}

// ============================================================
//  READER VIEW
// ============================================================

function getReaderItems(categoryKey) {
    if (categoryKey === 'favorites') return getFavoriteItems().items;
    return adhkarData[categoryKey] ? adhkarData[categoryKey].items : [];
}

function openReader(categoryKey) {
    const items = getReaderItems(categoryKey);

    if (items.length === 0) {
        showToast(categoryKey === 'favorites'
            ? 'No favorites saved yet. Tap ❤️ on any dhikr to save it.'
            : 'No items in this category.');
        return;
    }

    readerCategory = categoryKey;

    // Start at first incomplete item for tracked categories
    readerIndex = 0;
    if (categoryKey !== 'favorites' && adhkarData[categoryKey] && adhkarData[categoryKey].trackProgress) {
        const firstIncomplete = items.findIndex(d => (d.read || 0) < d.count);
        if (firstIncomplete !== -1) readerIndex = firstIncomplete;
    }

    currentView = 'reader';
    document.getElementById('home-view').classList.add('hidden');
    document.getElementById('reader-view').classList.remove('hidden');
    document.getElementById('adhkar-container').classList.add('hidden');
    document.getElementById('empty-state').classList.add('hidden');

    // Category title
    const titleEl = document.getElementById('reader-cat-title');
    if (titleEl) titleEl.textContent = categoryKey === 'favorites' ? 'Favorites' : staticAdhkarData[categoryKey].title;

    // Show/hide progress bar and reset button (only for tracked categories)
    const isTracked = categoryKey !== 'favorites' && adhkarData[categoryKey] && adhkarData[categoryKey].trackProgress;
    const pbarWrap = document.getElementById('progress-bar-container');
    const resetBtn = document.getElementById('reset-btn');
    if (pbarWrap) pbarWrap.classList.toggle('hidden', !isTracked);
    if (resetBtn) resetBtn.classList.toggle('hidden', !isTracked);

    renderReaderCard();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderReaderCard() {
    const items = getReaderItems(readerCategory);
    if (!items.length) { goHome(); return; }

    const dhikr     = items[readerIndex];
    const isFav     = !!favorites[dhikr.id];
    const readCount = dhikr.read || 0;
    const isComplete = dhikr.count && readCount >= dhikr.count;

    // Position label
    const posEl = document.getElementById('reader-position');
    if (posEl) posEl.textContent = `${readerIndex + 1} / ${items.length}`;

    // Progress bar update
    if (readerCategory !== 'favorites' && adhkarData[readerCategory]) {
        updateProgressBar(readerCategory);
    }

    // Prev / Next button states
    const prevBtn = document.getElementById('reader-prev-btn');
    const nextBtn = document.getElementById('reader-next-btn');
    if (prevBtn) prevBtn.disabled = readerIndex === 0;
    if (nextBtn) {
        const isLast = readerIndex >= items.length - 1;
        nextBtn.innerHTML = isLast
            ? `${t('finish')} <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>`
            : `${t('next')} <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>`;
    }

    // Render card
    const cardInner = document.getElementById('reader-card-inner');
    cardInner.innerHTML = `
        <div class="adhkar-card fade-in${isComplete ? ' is-completed' : ''}">
            <div class="flex items-center justify-between mb-4 gap-2 flex-wrap">
                <span class="text-xs font-semibold uppercase tracking-wide text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                    ${dhikr.count ? `${dhikr.count}×` : 'Dua'}
                </span>
                <div class="flex items-center gap-1">
                    <button class="fav-btn${isFav ? ' is-fav' : ''}" data-id="${dhikr.id}" aria-label="${isFav ? 'Remove from favorites' : 'Add to favorites'}">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="${isFav ? 'currentColor' : 'none'}" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
                        <span>${isFav ? t('saved') : t('save')}</span>
                    </button>
                    ${dhikr.virtue_ar ? `
                    <button class="virtue-btn fav-btn" data-id="${dhikr.id}" data-category="${readerCategory}" aria-label="View virtue">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                        <span>${t('virtue')}</span>
                    </button>` : ''}
                    <button class="copy-btn fav-btn" data-id="${dhikr.id}" data-category="${readerCategory}" aria-label="Copy">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
                        <span>${t('copy')}</span>
                    </button>
                </div>
            </div>
            ${buildContentHtml(dhikr)}
            <p class="mt-3 text-gray-600 text-sm english-text translation-text border-t border-gray-50 pt-3">${dhikr.translation}</p>
            ${buildCounterHtml(dhikr, readerCategory)}
        </div>
    `;

    // Scroll content area to top on each card change
    const contentArea = document.getElementById('reader-content-area');
    if (contentArea) contentArea.scrollTop = 0;

    applySettings(false);
}

function navigateReader(delta) {
    const items    = getReaderItems(readerCategory);
    const newIndex = readerIndex + delta;

    if (newIndex < 0) return;

    if (newIndex >= items.length) {
        const isTracked = readerCategory !== 'favorites'
            && adhkarData[readerCategory]
            && adhkarData[readerCategory].trackProgress;

        if (isTracked) {
            const allDone = adhkarData[readerCategory].items.every(d => (d.read || 0) >= d.count);
            if (allDone) {
                showCompletionScreen(readerCategory);
                return;
            }
        }

        goHome();
        showToast(`${t(readerCategory)} — ${t('completed')}!`);
        return;
    }

    readerIndex = newIndex;
    renderReaderCard();
}

function goHome() {
    renderHomeView();
}

function showCompletionScreen(category) {
    currentView = 'completion';

    document.getElementById('home-view').classList.add('hidden');
    document.getElementById('reader-view').classList.add('hidden');

    const compView = document.getElementById('completion-view');
    if (!compView) { goHome(); return; }
    compView.classList.remove('hidden');

    const title = document.getElementById('completion-title');
    const msg   = document.getElementById('completion-message');
    const btn   = document.getElementById('completion-home-btn');

    if (title) title.textContent = t('completion_title');
    if (msg)   msg.textContent   = t('completion_message').replace('{category}', t(category));
    if (btn)   btn.textContent   = t('completion_btn');

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================================
//  SWIPE SUPPORT
// ============================================================

function setupSwipe() {
    const readerView = document.getElementById('reader-view');
    let touchStartX = 0;
    let touchStartY = 0;

    readerView.addEventListener('touchstart', e => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    }, { passive: true });

    readerView.addEventListener('touchend', e => {
        const dx = e.changedTouches[0].clientX - touchStartX;
        const dy = e.changedTouches[0].clientY - touchStartY;
        // Only fire if horizontal movement dominates and is at least 50px
        if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
            navigateReader(dx < 0 ? 1 : -1);
        }
    }, { passive: true });
}

// ============================================================
//  PROGRESS BAR  (IDs live inside #reader-view)
// ============================================================

function updateProgressBar(category) {
    const container = document.getElementById('progress-bar-container');
    const label     = document.getElementById('progress-label');
    const categoryData = adhkarData[category];

    if (!container) return;

    if (!categoryData || !categoryData.trackProgress) {
        container.classList.add('hidden');
        return;
    }

    container.classList.remove('hidden');

    const total   = categoryData.items.reduce((s, d) => s + d.count, 0);
    const current = categoryData.items.reduce((s, d) => s + (d.read || 0), 0);
    const pct     = total > 0 ? Math.min((current / total) * 100, 100) : 0;

    const bar = document.getElementById('progress-bar');
    if (bar)   bar.style.width = `${pct}%`;
    if (label) label.textContent = pct >= 100 ? '✓ All completed!' : `${current} / ${total} recitations`;

    if (pct >= 100) markCompletion(category);
}

// ============================================================
//  RESET
// ============================================================

const resetBtn = document.getElementById('reset-btn');

function resetProgress() {
    localStorage.removeItem('adhkarProgress');
    localStorage.removeItem('adhkarHistory');
    adhkarData = JSON.parse(JSON.stringify(staticAdhkarData));
    history    = {};

    if (currentView === 'reader') {
        renderReaderCard();
        updateProgressBar(readerCategory);
    } else {
        renderHomeView();
    }

    if (resetBtn) {
        resetBtn.disabled = true;
        const orig = resetBtn.textContent;
        resetBtn.textContent = 'Done!';
        setTimeout(() => { resetBtn.textContent = orig; resetBtn.disabled = false; }, 2000);
    }
}

// ============================================================
//  CARD HTML HELPERS  (shared by reader + search results)
// ============================================================

function buildContentHtml(dhikr) {
    if (dhikr.isComplex) {
        return dhikr.parts.map(part => `
            <div class="mb-4 pb-4 border-b border-gray-100 last:border-0 last:mb-0 last:pb-0">
                <p class="text-xs font-semibold text-emerald-600 mb-1">${part.title_en}</p>
                <p dir="rtl" class="arabic-text text-gray-800 text-right">${part.arabic}</p>
                <p class="mt-2 text-gray-400 italic text-sm english-text transliteration-text">${part.transliteration}</p>
            </div>
        `).join('');
    }
    return `
        <p dir="rtl" class="arabic-text text-gray-800 text-right">${dhikr.arabic}</p>
        <p class="mt-3 text-gray-400 italic text-sm english-text transliteration-text">${dhikr.transliteration}</p>
    `;
}

function buildCounterHtml(dhikr, category) {
    if (!dhikr.count) return '';
    const readCount  = dhikr.read || 0;
    const isComplete = readCount >= dhikr.count;
    return `
        <div class="mt-5 flex justify-end">
            <button
                data-id="${dhikr.id}" data-category="${category}"
                aria-label="Count recitation${isComplete ? ' — completed' : ''}"
                class="counter-btn ${isComplete
                    ? 'bg-emerald-100 text-emerald-700 cursor-not-allowed'
                    : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                } font-semibold py-2 px-5 rounded-full transition-colors duration-200 flex items-center gap-2 text-sm"
                ${isComplete ? 'disabled' : ''}
            >
                ${isComplete
                    ? `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg> ${t('completed')}`
                    : `${t('count')} <span class="count-display bg-white/20 rounded-full px-2 text-xs">${readCount}/${dhikr.count}</span>`
                }
            </button>
        </div>
    `;
}

// ============================================================
//  FAVORITES
// ============================================================

function getFavoriteItems() {
    const all  = Object.values(staticAdhkarData).flatMap(cat => cat.items);
    return { title: 'Favorites', trackProgress: false, items: all.filter(d => favorites[d.id]) };
}

// ============================================================
//  SEARCH RESULTS  (flat list view across all categories)
// ============================================================

function renderSearchResults(results) {
    const container  = document.getElementById('adhkar-container');
    const emptyState = document.getElementById('empty-state');
    container.innerHTML = '';

    if (!results.length) {
        container.classList.add('hidden');
        emptyState.classList.remove('hidden');
        return;
    }
    container.classList.remove('hidden');
    emptyState.classList.add('hidden');

    results.forEach(({ dhikr, categoryKey }) => {
        const isFav      = !!favorites[dhikr.id];
        const readCount  = dhikr.read || 0;
        const isComplete = dhikr.count && readCount >= dhikr.count;
        const catTitle   = staticAdhkarData[categoryKey] ? staticAdhkarData[categoryKey].title : '';

        const card = document.createElement('div');
        card.className = `adhkar-card fade-in${isComplete ? ' is-completed' : ''}`;
        card.innerHTML = `
            <div class="flex items-center justify-between mb-3 gap-2 flex-wrap">
                <div class="flex items-center gap-2">
                    <span class="text-xs font-semibold bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full">${catTitle}</span>
                    ${dhikr.count ? `<span class="text-xs text-gray-400 font-semibold">${dhikr.count}×</span>` : ''}
                </div>
                <div class="flex items-center gap-1">
                    <button class="fav-btn${isFav ? ' is-fav' : ''}" data-id="${dhikr.id}" aria-label="${isFav ? 'Remove from favorites' : 'Add to favorites'}">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="${isFav ? 'currentColor' : 'none'}" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
                        <span>${isFav ? t('saved') : t('save')}</span>
                    </button>
                    ${dhikr.virtue_ar ? `<button class="virtue-btn fav-btn" data-id="${dhikr.id}" data-category="${categoryKey}" aria-label="Virtue">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                        <span>${t('virtue')}</span>
                    </button>` : ''}
                    <button class="copy-btn fav-btn" data-id="${dhikr.id}" data-category="${categoryKey}" aria-label="Copy">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
                        <span>${t('copy')}</span>
                    </button>
                </div>
            </div>
            ${buildContentHtml(dhikr)}
            <p class="mt-3 text-gray-600 text-sm english-text translation-text border-t border-gray-50 pt-3">${dhikr.translation}</p>
            ${buildCounterHtml(dhikr, categoryKey)}
        `;
        container.appendChild(card);
    });

    applySettings(false);
}

// ============================================================
//  SETTINGS APPLICATION
// ============================================================

function applySettings(rerender = true) {
    const size = fontSizes[settings.fontSize];
    document.documentElement.style.setProperty('--font-size-arabic',  size.arabic);
    document.documentElement.style.setProperty('--font-size-english', size.english);

    const fontLabel = document.getElementById('font-size-label');
    if (fontLabel) fontLabel.textContent = size.label;

    const mainContent = document.getElementById('main-content');
    mainContent.classList.toggle('hide-transliteration', !settings.showTransliteration);
    mainContent.classList.toggle('hide-translation',     !settings.showTranslation);

    const translit = document.getElementById('toggle-transliteration');
    const transl   = document.getElementById('toggle-translation');
    if (translit) translit.checked = settings.showTransliteration;
    if (transl)   transl.checked   = settings.showTranslation;

    applyTheme();

    if (rerender && currentView === 'reader') renderReaderCard();
}

// ============================================================
//  LANGUAGE APPLICATION
// ============================================================

function applyLanguage(rerender = true) {
    const isAr = settings.language === 'ar';
    document.documentElement.dir  = isAr ? 'rtl' : 'ltr';
    document.documentElement.lang = settings.language;

    const langSelect = document.getElementById('language-select');
    if (langSelect) langSelect.value = settings.language;

    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.placeholder = t('search_placeholder');

    const swipeHint = document.querySelector('.reader-swipe-hint');
    if (swipeHint) swipeHint.textContent = t('swipe_hint');

    const backText = document.getElementById('reader-back-text');
    if (backText) backText.textContent = t('back');

    const prevText = document.getElementById('reader-prev-text');
    if (prevText) prevText.textContent = t('prev');

    const emptyTitle = document.getElementById('empty-state-title');
    if (emptyTitle) emptyTitle.textContent = t('no_results');

    const emptySub = document.getElementById('empty-state-sub');
    if (emptySub) emptySub.textContent = t('no_results_sub');

    const langLabel = document.getElementById('lang-settings-label');
    if (langLabel) langLabel.textContent = t('language');

    const resetBtnEl = document.getElementById('reset-btn');
    if (resetBtnEl && !resetBtnEl.disabled) resetBtnEl.textContent = t('reset');

    if (!rerender) return;

    if (currentView === 'reader') renderReaderCard();
    else if (currentView === 'completion') showCompletionScreen(readerCategory);
    else renderHomeView();
}

// ============================================================
//  MODAL HELPERS
// ============================================================

function showModal(id) {
    const modal = document.getElementById(id);
    const box   = modal && modal.querySelector('.modal-box');
    if (!modal || !box) return;
    modal.classList.remove('hidden');
    box.classList.remove('modal-leave');
    box.classList.add('modal-enter');
    const first = box.querySelector('button, [tabindex]');
    if (first) first.focus();
}

function hideModal(id) {
    const modal = document.getElementById(id);
    const box   = modal && modal.querySelector('.modal-box');
    if (!modal || !box) return;
    box.classList.remove('modal-enter');
    box.classList.add('modal-leave');
    setTimeout(() => modal.classList.add('hidden'), 250);
}

// Close modal on Escape
document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    for (const id of ['virtue-modal', 'settings-modal', 'progress-modal']) {
        const m = document.getElementById(id);
        if (m && !m.classList.contains('hidden')) { hideModal(id); break; }
    }
});

// ============================================================
//  TOAST
// ============================================================

let toastTimer = null;

function showToast(message = 'Done!') {
    const toast = document.getElementById('toast');
    const msg   = document.getElementById('toast-message');
    if (!toast || !msg) return;
    msg.textContent = message;
    toast.classList.remove('hidden');
    toast.classList.add('toast-show');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        toast.classList.add('hidden');
        toast.classList.remove('toast-show');
    }, 2400);
}

// ============================================================
//  EVENT HANDLERS  (delegated on document)
// ============================================================

function handleCount(e) {
    const btn = e.target.closest('.counter-btn');
    if (!btn || btn.disabled) return;

    const { id } = btn.dataset;

    // Find dhikr across all categories (works for any view)
    let dhikr = null;
    let realKey = null;
    for (const key of Object.keys(adhkarData)) {
        const found = adhkarData[key].items && adhkarData[key].items.find(d => d.id === id);
        if (found) { dhikr = found; realKey = key; break; }
    }
    if (!dhikr) return;

    dhikr.read = (dhikr.read || 0) + 1;
    saveProgress();

    if (adhkarData[realKey] && adhkarData[realKey].trackProgress) {
        updateProgressBar(realKey);
    }

    const countDisplay = btn.querySelector('.count-display');
    if (countDisplay) countDisplay.textContent = `${dhikr.read}/${dhikr.count}`;

    if (dhikr.read >= dhikr.count) {
        btn.disabled = true;
        btn.className = btn.className
            .replace('bg-emerald-600 hover:bg-emerald-700 text-white', 'bg-emerald-100 text-emerald-700 cursor-not-allowed');
        btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg> ${t('completed')}`;

        const card = btn.closest('.adhkar-card');
        if (card) card.classList.add('is-completed');

        // Auto-advance in reader mode after a brief pause
        if (currentView === 'reader') {
            setTimeout(() => navigateReader(1), 700);
        }
    }
}

function handleVirtueClick(e) {
    const btn = e.target.closest('.virtue-btn');
    if (!btn) return;

    const { id } = btn.dataset;
    const allItems = Object.values(staticAdhkarData).flatMap(c => c.items);
    const dhikr    = allItems.find(d => d.id === id);

    if (dhikr && dhikr.virtue_ar && dhikr.virtue_en) {
        document.getElementById('modal-text').innerHTML = `
            <p dir="rtl" class="arabic-text text-gray-800 text-right mb-4 leading-loose">${dhikr.virtue_ar}</p>
            <p class="text-gray-600 text-sm english-text">${dhikr.virtue_en.replace(/\[([^\]]+)\]/g, '<span class="font-semibold text-gray-400">[$1]</span>')}</p>
        `;
        showModal('virtue-modal');
    }
}

function handleCopyClick(e) {
    const btn = e.target.closest('.copy-btn');
    if (!btn) return;

    const { id } = btn.dataset;
    const allItems = Object.values(staticAdhkarData).flatMap(c => c.items);
    const dhikr    = allItems.find(d => d.id === id);
    if (!dhikr) return;

    const text = dhikr.isComplex
        ? dhikr.parts.map(p => `${p.title_ar}\n${p.arabic}\n\n${p.title_en}\n${p.transliteration}`).join('\n\n---\n\n')
        : `${dhikr.arabic}\n\n${dhikr.transliteration}\n\n${dhikr.translation}`;

    navigator.clipboard.writeText(text)
        .then(()  => showToast(t('copied')))
        .catch(()  => showToast(t('copy_fail')));
}

function handleFavClick(e) {
    const btn = e.target.closest('.fav-btn');
    if (!btn || btn.classList.contains('virtue-btn') || btn.classList.contains('copy-btn')) return;

    const { id } = btn.dataset;
    if (!id) return;

    if (favorites[id]) delete favorites[id]; else favorites[id] = true;
    saveFavorites();

    const isFav = !!favorites[id];
    btn.classList.toggle('is-fav', isFav);
    const svg  = btn.querySelector('svg');
    const span = btn.querySelector('span');
    if (svg)  svg.setAttribute('fill', isFav ? 'currentColor' : 'none');
    if (span) span.textContent = isFav ? t('saved') : t('save');
    btn.setAttribute('aria-label', isFav ? 'Remove from favorites' : 'Add to favorites');

    showToast(isFav ? t('fav_added') : t('fav_removed'));

    // In reader mode: re-render the card so the heart state is consistent on re-visit
    if (currentView === 'reader') renderReaderCard();
}

// ============================================================
//  DATE / TIME
// ============================================================

function updateDateTime() {
    const now = new Date();
    const dateEl = document.getElementById('date');
    const timeEl = document.getElementById('time');
    if (dateEl) dateEl.textContent = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    if (timeEl) timeEl.textContent = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
}

// ============================================================
//  STREAK & CALENDAR
// ============================================================

let currentCalendarDate = new Date();

function markCompletion(category) {
    const d   = new Date();
    const key = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
    if (!history[key]) history[key] = [];
    if (!history[key].includes(category)) { history[key].push(category); saveHistory(); }
}

function calculateStreak() {
    let streak = 0;
    const d = new Date();
    while (true) {
        const key       = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
        const completed = history[key] || [];
        if (completed.includes('morning') || completed.includes('evening')) {
            streak++;
            d.setDate(d.getDate() - 1);
        } else break;
    }
    const el = document.getElementById('streak-count');
    if (el) el.textContent = `${streak} Day${streak !== 1 ? 's' : ''}`;
}

function renderCalendar(date) {
    loadHistory();
    const month = date.getMonth();
    const year  = date.getFullYear();
    const label = document.getElementById('month-year-label');
    if (label) label.textContent = date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

    const firstDay    = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const today       = new Date();
    const body        = document.getElementById('calendar-body');
    if (!body) return;
    body.innerHTML = '';

    for (let i = 0; i < firstDay; i++) body.innerHTML += `<div></div>`;

    for (let day = 1; day <= daysInMonth; day++) {
        const key       = `${year}-${month}-${day}`;
        const completed = history[key] || [];
        const isToday   = day === today.getDate() && month === today.getMonth() && year === today.getFullYear();
        body.innerHTML += `
            <div class="h-9 flex items-center justify-center relative">
                <span class="${isToday ? 'today-marker' : ''} h-7 w-7 flex items-center justify-center text-xs rounded-full">${day}</span>
                <div class="absolute bottom-0.5 flex gap-0.5">
                    ${completed.includes('morning') ? '<div class="w-1.5 h-1.5 bg-green-500 rounded-full"></div>' : ''}
                    ${completed.includes('evening') ? '<div class="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>' : ''}
                </div>
            </div>`;
    }
}

// ============================================================
//  BACK TO TOP
// ============================================================

function setupBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;
    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ============================================================
//  INIT
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
    loadProgress();
    loadSettings();
    loadFavorites();

    applySettings(false);
    applyLanguage(false);
    applyTheme();
    renderHomeView();
    updateDateTime();
    setInterval(updateDateTime, 1000);
    setupBackToTop();
    setupSwipe();

    // Delegate all card interactions to document
    document.addEventListener('click', e => {
        handleCount(e);
        handleVirtueClick(e);
        handleCopyClick(e);
        handleFavClick(e);
    });

    // Reset button (lives inside reader view)
    if (resetBtn) resetBtn.addEventListener('click', resetProgress);

    // Completion screen
    document.getElementById('completion-home-btn').addEventListener('click', goHome);

    // Language select
    document.getElementById('language-select').addEventListener('change', e => {
        settings.language = e.target.value;
        saveSettings();
        applyLanguage(true);
    });

    // Reader navigation
    document.getElementById('reader-back-btn').addEventListener('click', goHome);
    document.getElementById('reader-prev-btn').addEventListener('click', () => navigateReader(-1));
    document.getElementById('reader-next-btn').addEventListener('click', () => navigateReader(1));

    // Virtue modal
    document.getElementById('close-modal-btn').addEventListener('click', () => hideModal('virtue-modal'));
    document.getElementById('virtue-modal').addEventListener('click', e => {
        if (e.target === document.getElementById('virtue-modal')) hideModal('virtue-modal');
    });

    // Settings modal
    const settingsBtn   = document.getElementById('settings-btn');
    const settingsModal = document.getElementById('settings-modal');
    settingsBtn.addEventListener('click', () => showModal('settings-modal'));
    document.getElementById('close-settings-btn').addEventListener('click', () => hideModal('settings-modal'));
    settingsModal.addEventListener('click', e => { if (e.target === settingsModal) hideModal('settings-modal'); });

    document.getElementById('font-increase').addEventListener('click', () => {
        settings.fontSize = Math.min(settings.fontSize + 1, fontSizes.length - 1);
        saveSettings(); applySettings();
    });
    document.getElementById('font-decrease').addEventListener('click', () => {
        settings.fontSize = Math.max(settings.fontSize - 1, 0);
        saveSettings(); applySettings();
    });
    document.getElementById('toggle-transliteration').addEventListener('change', e => {
        settings.showTransliteration = e.target.checked;
        saveSettings(); applySettings();
    });
    document.getElementById('toggle-translation').addEventListener('change', e => {
        settings.showTranslation = e.target.checked;
        saveSettings(); applySettings();
    });
    document.getElementById('toggle-dark-mode').addEventListener('change', e => {
        settings.darkMode = e.target.checked;
        saveSettings(); applyTheme();
    });

    // Progress modal
    const progressBtn   = document.getElementById('progress-btn');
    const progressModal = document.getElementById('progress-modal');
    progressBtn.addEventListener('click', () => {
        currentCalendarDate = new Date();
        renderCalendar(currentCalendarDate);
        calculateStreak();
        showModal('progress-modal');
    });
    document.getElementById('close-progress-btn').addEventListener('click', () => hideModal('progress-modal'));
    progressModal.addEventListener('click', e => { if (e.target === progressModal) hideModal('progress-modal'); });

    document.getElementById('prev-month-btn').addEventListener('click', () => {
        currentCalendarDate.setMonth(currentCalendarDate.getMonth() - 1);
        renderCalendar(currentCalendarDate);
    });
    document.getElementById('next-month-btn').addEventListener('click', () => {
        currentCalendarDate.setMonth(currentCalendarDate.getMonth() + 1);
        renderCalendar(currentCalendarDate);
    });

    // Search
    const searchToggle    = document.getElementById('search-toggle-btn');
    const searchContainer = document.getElementById('search-bar-container');
    const searchInput     = document.getElementById('search-input');

    searchToggle.addEventListener('click', () => {
        const isNowHidden = searchContainer.classList.toggle('hidden');
        if (!isNowHidden) {
            searchInput.focus();
        } else {
            searchInput.value = '';
            document.getElementById('adhkar-container').classList.add('hidden');
            document.getElementById('empty-state').classList.add('hidden');
            // Restore the correct view
            if (currentView === 'reader') {
                document.getElementById('reader-view').classList.remove('hidden');
                document.getElementById('home-view').classList.add('hidden');
            } else {
                renderHomeView();
            }
        }
    });

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.trim().toLowerCase();

        if (!query) {
            document.getElementById('adhkar-container').classList.add('hidden');
            document.getElementById('empty-state').classList.add('hidden');
            if (currentView === 'reader') {
                document.getElementById('reader-view').classList.remove('hidden');
                document.getElementById('home-view').classList.add('hidden');
            } else {
                currentView = 'home';
                document.getElementById('home-view').classList.remove('hidden');
            }
            return;
        }

        // Show search results, hide other views
        currentView = 'search';
        document.getElementById('home-view').classList.add('hidden');
        document.getElementById('reader-view').classList.add('hidden');

        // Search all categories
        const results = [];
        Object.keys(staticAdhkarData).forEach(key => {
            staticAdhkarData[key].items.forEach(dhikr => {
                const hay = [
                    dhikr.arabic || '',
                    dhikr.transliteration || '',
                    dhikr.translation || '',
                    ...(dhikr.parts ? dhikr.parts.flatMap(p => [p.arabic || '', p.transliteration || '']) : [])
                ].join(' ').toLowerCase();
                if (hay.includes(query)) results.push({ dhikr, categoryKey: key });
            });
        });

        renderSearchResults(results);
    });
});
