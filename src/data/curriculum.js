// ================================================================
// Full curriculum database — based on the 2021 Grade 1 English textbook
// Each unit has 6 lessons matching the textbook structure:
//   Lesson 1: Vocabulary
//   Lesson 2: Grammar
//   Lesson 3: Skills
//   Lesson 4: CLIL
//   Lesson 5: Story Time
//   Lesson 6: Phonics
// ================================================================

const curriculum = {
    bookTitle: "English — Grade 1",
    bookTitleUz: "Ingliz tili — 1-sinf",
    year: 2021,
    characters: ["Smarty", "Sharpy", "Friendy", "Jolly", "Shiny", "Tummy", "Tidy", "Yummy", "Lazy"],
    activityIcons: {
        listen: { icon: "🎧", label: "Listen", labelUz: "Eshit" },
        play_time: { icon: "🎮", label: "Play time", labelUz: "O'yin vaqti" },
        sing: { icon: "🎵", label: "Sing", labelUz: "Kuylaymiz" },
        think: { icon: "🤔", label: "Think", labelUz: "O'ylaymiz" },
        watch_video: { icon: "📹", label: "Watch the video", labelUz: "Video ko'ramiz" },
        look: { icon: "👁️", label: "Look", labelUz: "Qara" },
        collaborate: { icon: "🤝", label: "Collaborate", labelUz: "Birga ishlaymiz" },
        fun_time: { icon: "🎉", label: "Fun time", labelUz: "Qiziqarli vaqt" },
        create: { icon: "✏️", label: "Create", labelUz: "Yaratamiz" },
        chant: { icon: "🎶", label: "Listen and chant", labelUz: "Eshit va kuylaymiz" },
        find: { icon: "🔍", label: "Find", labelUz: "Topamiz" },
        homework: { icon: "🏠", label: "Homework", labelUz: "Uyga vazifa" },
    },

    units: [
        // ==================== UNIT 1 ====================
        {
            id: 1,
            title: "Hey! Hello, there!",
            titleUz: "Salom! Qalaysiz!",
            emoji: "👋",
            color: "#6366F1",
            colorLight: "#EEF2FF",
            gradient: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #A78BFA 100%)",
            pages: "5-14",
            lessons: [
                // --- Lesson 1: Vocabulary (p.6) ---
                {
                    id: "1-L1",
                    lessonNumber: 1,
                    type: "vocabulary",
                    pageNumber: 6,
                    topic: "How are you?",
                    topicUz: "Qalaysiz?",
                    icon: "🎧",
                    exercises: [
                        {
                            id: "1-L1-E1",
                            activityType: "listen_repeat",
                            title: "Listen and repeat",
                            titleUz: "Eshit va takrorla",
                            botScript: "Keling, his-tuyg'ularni inglizcha aytishni o'rganamiz! Men aytaman, sen eshitib takrorla.",
                            words: [
                                { en: "Happy", uz: "Xursand", emoji: "😊", phonetic: "Hep-pi" },
                                { en: "Sad", uz: "Xafa", emoji: "😢", phonetic: "Sed" },
                                { en: "Angry", uz: "G'azablangan", emoji: "😠", phonetic: "Eng-ri" },
                                { en: "Hungry", uz: "Och", emoji: "🤤", phonetic: "Han-gri" },
                                { en: "Thirsty", uz: "Chanqagan", emoji: "💧", phonetic: "Fyor-sti" },
                                { en: "Sleepy", uz: "Uyqusi kelgan", emoji: "😴", phonetic: "Sli-pi" },
                            ],
                        },
                        {
                            id: "1-L1-E2",
                            activityType: "play_time",
                            title: "Play Time!",
                            titleUz: "O'yin vaqti!",
                            botScript: "Keling, o'yin o'ynaymiz! Men his-tuyg'uni aytaman, sen ko'rsat!",
                            type: "show_emotion",
                            items: [
                                { en: "Show me happy!", uz: "Xursandligingni ko'rsat!", emoji: "😊" },
                                { en: "Show me sad!", uz: "Xafangni ko'rsat!", emoji: "😢" },
                                { en: "Show me angry!", uz: "G'azabingni ko'rsat!", emoji: "😠" },
                                { en: "Show me hungry!", uz: "Ochligingni ko'rsat!", emoji: "🤤" },
                                { en: "Show me sleepy!", uz: "Uyqusing kelayotganini ko'rsat!", emoji: "😴" },
                            ],
                        },
                        {
                            id: "1-L1-E3",
                            activityType: "look_say",
                            title: "Look, point and say",
                            titleUz: "Qara, ko'rsat va ayt",
                            botScript: "Rasmga qara. Qanday his-tuyg'u? Inglizchada ayt!",
                            items: [
                                { emoji: "😊", en: "Happy", uz: "Xursand" },
                                { emoji: "😢", en: "Sad", uz: "Xafa" },
                                { emoji: "😠", en: "Angry", uz: "G'azablangan" },
                                { emoji: "🤤", en: "Hungry", uz: "Och" },
                                { emoji: "💧", en: "Thirsty", uz: "Chanqagan" },
                                { emoji: "😴", en: "Sleepy", uz: "Uyqusi kelgan" },
                            ],
                        },
                        {
                            id: "1-L1-E4",
                            activityType: "homework",
                            title: "Homework",
                            titleUz: "Uyga vazifa",
                            botScript: "Bu uyga vazifa! Men senga rasm ko'rsataman, sen inglizcha ayt!",
                            questions: [
                                {
                                    questionEn: "How are you? Look at the face:",
                                    questionUz: "Qalaysan? Yuzga qara:",
                                    emoji: "😊",
                                    answer: ["happy", "i am happy", "i'm happy"],
                                    hintSteps: ["Bu odam kulyapti...", "Xursand, inglizchasi H harfdan boshlanadi...", "Happy!"],
                                    celebration: "Barakalla! Happy — Xursand! 😊",
                                },
                                {
                                    questionEn: "How is this person feeling?",
                                    questionUz: "Bu odam qanday his qilyapti?",
                                    emoji: "😢",
                                    answer: ["sad", "i am sad"],
                                    hintSteps: ["Bu odam yig'layapti...", "Xafa — inglizchasi S harfdan boshlanadi...", "Sad!"],
                                    celebration: "Zo'r! Sad — Xafa! 😢",
                                },
                                {
                                    questionEn: "What about this one? How is he?",
                                    questionUz: "Bu-chi? U qanday?",
                                    emoji: "🤤",
                                    answer: ["hungry", "i am hungry"],
                                    hintSteps: ["Bu odamning qorni ochgan...", "Och — inglizchasi H harfdan boshlanadi...", "Hungry!"],
                                    celebration: "Ajoyib! Hungry — Och! 🤤",
                                },
                            ],
                        },
                    ],
                },
                // --- Lesson 2: Grammar (p.7) ---
                {
                    id: "1-L2",
                    lessonNumber: 2,
                    type: "grammar",
                    pageNumber: 7,
                    topic: "What is your name? How old are you?",
                    topicUz: "Isming nima? Nechi yoshdasan?",
                    icon: "🗣️",
                    exercises: [
                        {
                            id: "1-L2-E1",
                            activityType: "listen_repeat",
                            title: "Listen and repeat",
                            titleUz: "Eshit va takrorla",
                            botScript: "Endi o'zimizni tanishtirishni o'rganamiz! Takrorla!",
                            words: [
                                { en: "What is your name?", uz: "Isming nima?", emoji: "❓", phonetic: "Vot iz yor neym?" },
                                { en: "My name is...", uz: "Mening ismim...", emoji: "🏷️", phonetic: "May neym iz..." },
                                { en: "How old are you?", uz: "Nechi yoshdasan?", emoji: "🎂", phonetic: "Hau old ar yu?" },
                                { en: "I am 7", uz: "Men 7 yoshdaman", emoji: "7️⃣", phonetic: "Ay em sevn" },
                                { en: "I am 6", uz: "Men 6 yoshdaman", emoji: "6️⃣", phonetic: "Ay em siks" },
                            ],
                        },
                        {
                            id: "1-L2-E2",
                            activityType: "chant",
                            title: "Listen and chant",
                            titleUz: "Eshit va kuylaymiz",
                            botScript: "Keling, birga kuylaylik! Qahramon ismlarini bilan tanishamiz!",
                            lines: [
                                { en: "What is your name?", uz: "Isming nima?", action: "🤔 Savol ber!" },
                                { en: "What is your name?", uz: "Isming nima?", action: "🏷️ O'zingni ko'rsat!" },
                                { en: "My name is Smarty", uz: "Mening ismim Smarty", action: "😊 Ismingni ayt!" },
                                { en: "I am Sharpy", uz: "Men Sharpy man", action: "👋 Qo'lingni silkit!" },
                                { en: "How old are you?", uz: "Nechi yoshdasan?", action: "🎂 Barmoqlaring bilan ko'rsat!" },
                                { en: "I am Friendy. I am 7", uz: "Men Friendy man. Men 7 yoshdaman", action: "7️⃣ 7 ni ko'rsat!" },
                                { en: "My name is Jolly. I am 6", uz: "Mening ismim Jolly. Men 6 yoshdaman", action: "6️⃣ 6 ni ko'rsat!" },
                            ],
                        },
                        {
                            id: "1-L2-E3",
                            activityType: "dialogue",
                            title: "Talk with Smarty",
                            titleUz: "Smarty bilan gaplash",
                            botScript: "Keling, men Smarty bo'laman, sen esa o'zing bo'l! Men savol beraman, sen javob ber!",
                            exchanges: [
                                {
                                    botSays: "Hello! What is your name?",
                                    botSaysUz: "Salom! Isming nima?",
                                    expectedPattern: ["my name is", "i am", "i'm"],
                                    botResponse: "Nice to meet you! How old are you?",
                                    botResponseUz: "Tanishganimdan xursandman! Nechi yoshdasan?",
                                },
                                {
                                    botSays: "How old are you?",
                                    botSaysUz: "Nechi yoshdasan?",
                                    expectedPattern: ["i am", "i'm", "seven", "six", "7", "6"],
                                    botResponse: "Great! How are you today?",
                                    botResponseUz: "Zo'r! Bugun qalaysan?",
                                },
                                {
                                    botSays: "How are you?",
                                    botSaysUz: "Qalaysan?",
                                    expectedPattern: ["happy", "fine", "good", "i am happy", "i am fine"],
                                    botResponse: "I am happy too! Bye-bye!",
                                    botResponseUz: "Men ham xursandman! Xayr!",
                                },
                            ],
                        },
                        {
                            id: "1-L2-E4",
                            activityType: "homework",
                            title: "Homework",
                            titleUz: "Uyga vazifa",
                            botScript: "Uyga vazifani bajaramiz! Savollarga javob ber!",
                            questions: [
                                {
                                    questionEn: "Someone asks: What is your name?",
                                    questionUz: "Senga \"Isming nima?\" deb so'rashdi. Nima deb javob berasan?",
                                    emoji: "🏷️",
                                    answer: ["my name is"],
                                    hintSteps: ["\"Mening ismim\" demoqchimiz...", "My name is...", "My name is [sening isming]!"],
                                    celebration: "Zo'r! My name is... — Mening ismim... 🌟",
                                },
                                {
                                    questionEn: "Someone asks: How old are you?",
                                    questionUz: "\"Nechi yoshdasan?\" deb so'rashdi.",
                                    emoji: "🎂",
                                    answer: ["i am", "i'm"],
                                    hintSteps: ["\"Men ... yoshdaman\" deymiz...", "I am...", "I am 7!"],
                                    celebration: "Ajoyib! I am [raqam] — Men [raqam] yoshdaman! 🎂",
                                },
                            ],
                        },
                    ],
                },
                // --- Lesson 3: Skills (p.8) ---
                {
                    id: "1-L3",
                    lessonNumber: 3,
                    type: "skills",
                    pageNumber: 8,
                    topic: "Are you happy?",
                    topicUz: "Sen xursandmisan?",
                    icon: "🎵",
                    exercises: [
                        {
                            id: "1-L3-E1",
                            activityType: "chant",
                            title: "Sing and show",
                            titleUz: "Kuylaymiz va ko'rsatamiz",
                            botScript: "Keling, qo'shiq kuylaylik! Har bir qatorda ishora ham qil!",
                            lines: [
                                { en: "How are you? How are you?", uz: "Qalaysiz? Qalaysiz?", action: "🤔 Savol ber!" },
                                { en: "I am Jolly", uz: "Men Jolly man", action: "😊 O'zingni ko'rsat!" },
                                { en: "I am hungry", uz: "Men ochman", action: "🤤 Qorningni ko'rsat!" },
                                { en: "What is your name?", uz: "Isming nima?", action: "❓ So'ra!" },
                            ],
                        },
                        {
                            id: "1-L3-E2",
                            activityType: "look_say",
                            title: "Look, point and say",
                            titleUz: "Qara, ko'rsat va ayt",
                            botScript: "Rasmga qara va kim ekanini ayt! Masalan: \"I am happy\" yoki \"I am hungry\".",
                            items: [
                                { emoji: "😊", en: "I am happy", uz: "Men xursandman" },
                                { emoji: "🤤", en: "I am hungry", uz: "Men ochman" },
                                { emoji: "😢", en: "I am sad", uz: "Men xafaman" },
                                { emoji: "😠", en: "I am angry", uz: "Men g'azablanganman" },
                                { emoji: "😴", en: "I am sleepy", uz: "Mening uyqum kelyapti" },
                                { emoji: "💧", en: "I am thirsty", uz: "Men chanqaganman" },
                            ],
                        },
                    ],
                },
                // --- Lesson 4: CLIL (p.9) ---
                {
                    id: "1-L4",
                    lessonNumber: 4,
                    type: "clil",
                    pageNumber: 9,
                    topic: "Do you know the greeting cultures?",
                    topicUz: "Salomlashish madaniyatini bilasanmi?",
                    icon: "🌍",
                    exercises: [
                        {
                            id: "1-L4-E1",
                            activityType: "listen_repeat",
                            title: "Greeting cultures",
                            titleUz: "Salomlashish madaniyatlari",
                            botScript: "Turli mamlakatlardan odamlar qanday salomlashadi? Keling, o'rganamiz!",
                            words: [
                                { en: "Handshake", uz: "Qo'l siqish", emoji: "🤝", phonetic: "Hend-sheyk" },
                                { en: "Bow", uz: "Ta'zim", emoji: "🙇", phonetic: "Bau" },
                                { en: "Wave", uz: "Qo'l silkitish", emoji: "👋", phonetic: "Veyv" },
                                { en: "Hug", uz: "Quchoqlash", emoji: "🤗", phonetic: "Hag" },
                            ],
                        },
                    ],
                },
                // --- Lesson 5: Story Time (p.10-11) ---
                {
                    id: "1-L5",
                    lessonNumber: 5,
                    type: "story",
                    pageNumber: 10,
                    topic: "Can you be polite?",
                    topicUz: "Odobli bo'la olasanmi?",
                    icon: "📖",
                    value: "Be polite!",
                    valueUz: "Odobli bo'l!",
                    exercises: [
                        {
                            id: "1-L5-E1",
                            activityType: "story",
                            title: "Story Time: Be polite!",
                            titleUz: "Hikoya vaqti: Odobli bo'l!",
                            botScript: "Keling, hikoya eshitamiz! Odobli bo'lish haqida. Men o'qiyman, sen eshit!",
                            pages: [
                                { text: "Good morning!", textUz: "Xayrli tong!", emoji: "🌅" },
                                { text: "Good afternoon!", textUz: "Xayrli kun!", emoji: "☀️" },
                                { text: "Good evening!", textUz: "Xayrli oqshom!", emoji: "🌆" },
                                { text: "Hello! We say \"Good afternoon!\"", textUz: "Salom! Biz \"Xayrli kun!\" deymiz", emoji: "🗣️" },
                                { text: "How do you say? Be polite!", textUz: "Sen qanday deysan? Odobli bo'l!", emoji: "😊" },
                            ],
                            followUpQuestions: [
                                {
                                    questionUz: "Ertalab nima deymiz?",
                                    answer: ["good morning"],
                                    emoji: "🌅",
                                },
                                {
                                    questionUz: "Kunduzi nima deymiz?",
                                    answer: ["good afternoon"],
                                    emoji: "☀️",
                                },
                                {
                                    questionUz: "Kechqurun nima deymiz?",
                                    answer: ["good evening"],
                                    emoji: "🌆",
                                },
                            ],
                        },
                    ],
                },
                // --- Lesson 6: Phonics (p.12) ---
                {
                    id: "1-L6",
                    lessonNumber: 6,
                    type: "phonics",
                    pageNumber: 12,
                    topic: "Can you say A, B, C?",
                    topicUz: "A, B, C ayta olasanmi?",
                    icon: "🔤",
                    exercises: [
                        {
                            id: "1-L6-E1",
                            activityType: "listen_repeat",
                            title: "Listen and repeat: A, B, C",
                            titleUz: "Eshit va takrorla: A, B, C",
                            botScript: "Keling, A, B, C harflarini o'rganamiz! Men aytaman, sen takrorla!",
                            words: [
                                { en: "A — Ant", uz: "A — Chumoli", emoji: "🐜", phonetic: "Ey — Ent" },
                                { en: "A — Apple", uz: "A — Olma", emoji: "🍎", phonetic: "Ey — Ep-l" },
                                { en: "A — Ax", uz: "A — Bolta", emoji: "🪓", phonetic: "Ey — Eks" },
                                { en: "B — Box", uz: "B — Quti", emoji: "📦", phonetic: "Bi — Boks" },
                                { en: "B — Boy", uz: "B — Bola", emoji: "👦", phonetic: "Bi — Boy" },
                                { en: "B — Bat", uz: "B — Ko'rshapalak", emoji: "🦇", phonetic: "Bi — Bet" },
                                { en: "C — Car", uz: "C — Mashina", emoji: "🚗", phonetic: "Si — Kar" },
                                { en: "C — Cap", uz: "C — Qalpoq", emoji: "🧢", phonetic: "Si — Kep" },
                                { en: "C — Cat", uz: "C — Mushuk", emoji: "🐱", phonetic: "Si — Ket" },
                            ],
                        },
                        {
                            id: "1-L6-E2",
                            activityType: "chant",
                            title: "A, B, C Chant",
                            titleUz: "A, B, C Kuylash",
                            botScript: "Keling, A, B, C qo'shig'ini kuylaylik!",
                            lines: [
                                { en: "A — Angry ant", uz: "A — G'azablangan chumoli", action: "🐜 Chumolini ko'rsat!" },
                                { en: "A — Angry apple", uz: "A — G'azablangan olma", action: "🍎 Olmani ko'rsat!" },
                                { en: "B — Boy with a box", uz: "B — Qutili bola", action: "📦 Qutini ko'rsat!" },
                                { en: "B — Bat in a box", uz: "B — Qutidagi ko'rshapalak", action: "🦇 Ko'rshapalakni ko'rsat!" },
                                { en: "C — Cat in a car", uz: "C — Mashinadagi mushuk", action: "🚗 Mashinani ko'rsat!" },
                                { en: "C — Cap on a cat", uz: "C — Mushuk ustidagi qalpoq", action: "🐱 Mushukni ko'rsat!" },
                            ],
                        },
                        {
                            id: "1-L6-E3",
                            activityType: "homework",
                            title: "Phonics Homework",
                            titleUz: "Fonetika uyga vazifasi",
                            botScript: "Uyga vazifa! Bu narsalarning bosh harfini ayt!",
                            questions: [
                                {
                                    questionEn: "What letter does this start with?",
                                    questionUz: "Bu qaysi harfdan boshlanadi?",
                                    emoji: "🐜",
                                    answer: ["a", "ant"],
                                    hintSteps: ["Bu chumoli...", "Inglizchasi Ant...", "A harfidan boshlanadi!"],
                                    celebration: "Barakalla! Ant — A! 🐜",
                                },
                                {
                                    questionEn: "What letter does this start with?",
                                    questionUz: "Bu qaysi harfdan boshlanadi?",
                                    emoji: "📦",
                                    answer: ["b", "box"],
                                    hintSteps: ["Bu quti...", "Inglizchasi Box...", "B harfidan boshlanadi!"],
                                    celebration: "Zo'r! Box — B! 📦",
                                },
                                {
                                    questionEn: "What letter does this start with?",
                                    questionUz: "Bu qaysi harfdan boshlanadi?",
                                    emoji: "🐱",
                                    answer: ["c", "cat"],
                                    hintSteps: ["Bu mushuk...", "Inglizchasi Cat...", "C harfidan boshlanadi!"],
                                    celebration: "Ajoyib! Cat — C! 🐱",
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};

export default curriculum;
