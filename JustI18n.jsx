/* Just a Website — i18n store, hook, dictionary (RU default · FR) + language switcher. */

const JAW_LANGS = ['ru', 'fr'];
const JAW_LANG_LABEL = { ru: 'RU', fr: 'FR' };

const JAW_STR = {
  /* ---------------- RUSSIAN (default) ---------------- */
  ru: {
    nav: { tag: '· Just a Website', build: 'Создать мой сайт' },
    cs: {
      back: 'Назад к Just a Website',
      eyebrow: 'КЕЙС · НАША РАБОТА',
      h1: 'Сайт, который вызывает доверие ещё до кнопки записи',
      subhead: 'Вот как мы подошли к сайту хирурга кисти и плеча в Ницце — блок за блоком: что мы решили, почему и как это работает на пациента. Так же мы думаем о каждом сайте, который делаем.',
      sourceLink: 'Смотреть сайт — mahdi-siala.vercel.app',
      about: {
        title: 'Что это за сайт',
        body: 'Доктор Махди Сиала — французский хирург кисти и плеча (ортопедическая и травматологическая хирургия). Его специализация — всё от плеча до кончиков пальцев: артроскопия, микрохирургия периферических нервов, эндопротезирование. Он пришёл к нам за сайтом, который решает две задачи для двух аудиторий сразу: превратить нового пациента в запись и дать направляющим врачам понятные критерии передачи случая.',
      },
      facts: [
        ['Специализация', 'Хирург кисти и плеча, ортопедическая и травматологическая хирургия'],
        ['Аудитория', 'Пациенты в Ницце и Канне + направляющие врачи'],
        ['Языки', 'французский, английский, испанский, итальянский'],
        ['Цель №1', 'Записи через Doctolib'],
        ['Данные пациентов', 'Не собираются на самом сайте; запись и переписка идут в Doctolib'],
        ['Технологии', 'Next.js, хостинг на Vercel'],
      ],
      breakdown: { title: 'Разбор, блок за блоком', intro: 'Идём сверху вниз — в том же порядке, в котором их видит посетитель.' },
      blocks: [
        { step: '01/07', title: 'Первый экран и метод WALANT', points: [
          'Вместо ожидаемого фото врача в белом халате мы использовали анатомический эскиз кисти с отметками «плечо / локоть / запястье / кисть» — за две секунды посетителю ясно, что лечит этот кабинет.',
          'Заголовок мы построили вокруг результата для пациента («вернуть подвижность руки»), а не вокруг титула врача.',
          'Рейтинг 4,9 и 367 отзывов показаны ещё до первого скролла — доверие формируется раньше предложения.',
          'Операцию под местной анестезией мы разложили на 4 карточки, каждая снимает конкретный страх: анестезия, голодание перед операцией, восстановление, показания.',
        ] },
        { step: '02/07', title: 'Карта заболеваний, а не список терминов', points: [
          'Мы сгруппировали заболевания по анатомии — от плеча до пальцев, а не по алфавиту или приоритетам клиники: пациенты ищут по своей боли, а не по медицинским терминам.',
          'Каждый пункт работает и как точка входа из поиска по конкретному диагнозу — без отдельного блога.',
        ] },
        { step: '03/07', title: 'Техники, а не терминология', points: [
          'Мы объяснили четыре техники простым языком, у каждой — честная оговорка, когда она применяется, а когда нет.',
          'Такая оговорка читается как компетентность, а не слабость: сайт никогда не обещает «исправить всё».',
        ] },
        { step: '04/07', title: 'Два кабинета, один операционный блок', points: [
          'Мы явно разделили места консультаций (Ницца, Канны) и место операций (Clinique Saint François) — отвечая на частый вопрос «а где вы на самом деле оперируете?».',
          'У каждого кабинета своя кнопка записи в Doctolib — на шаг ближе к конверсии, плюс локальное SEO сразу на два города.',
        ] },
        { step: '05/07', title: 'Каналы, а не цитаты', points: [
          'Вместо блока «отзывы пациентов» с подобранными цитатами мы дали прямые ссылки на реальные профили: Doctolib, отзывы Google, Instagram, LinkedIn.',
          'Ссылку на настоящий профиль подделать сложнее, чем цитату на странице — именно поэтому она вызывает больше доверия.',
        ] },
        { step: '06/07', title: 'Врач как человек', points: [
          'Фото, четыре языка и настоящий профессиональный путь превращают «хирурга» в конкретного человека, которому доверяешь свою руку.',
          'Номер RPPS и членство в профессиональном сообществе — формальное подтверждение квалификации для тех, кто проверяет перед записью.',
        ] },
        { step: '07/07', title: 'Вторая аудитория и юридическая гигиена', points: [
          'Мы добавили отдельный блок для направляющих врачей — B2B-путь внутри B2C-сайта, типичный для узкой специализации.',
          'В подвале прямо сказано, что сайт не собирает медицинские данные — запись идёт в Doctolib. Явное указание соответствия снимает юридический риск.',
        ] },
      ],
      principlesEyebrow: '5 принципов',
      principlesTitle: 'Что мы из этого выносим',
      principlesIntro: 'Это применимо к любому сайту профессиональных услуг, не только к хирургам.',
      principles: [
        ['01', 'Один путь конверсии', 'Кнопка записи встречается на странице больше пяти раз и никогда не противоречит сама себе.'],
        ['02', 'Доверие раньше знакомства', 'Рейтинги и отзывы видны до того, как сайт начинает рассказывать о враче.'],
        ['03', 'Честные ограничения продают', 'Оговорки о показаниях читаются как экспертность, а не слабая позиция.'],
        ['04', 'Структура — это поиск', 'Разделы отражают то, как люди реально ищут: по симптому, по городу, по языку.'],
        ['05', 'Разные аудитории — разные экраны', 'Пациенты и направляющие врачи получают на одной странице разные блоки — без путаницы.'],
      ],
      cta: {
        eyebrow: 'ВАШ ПРОЕКТ',
        title: 'Хотите такой же подход для своей практики?',
        lead: 'Это тот же процесс — исследование, структура, и только потом дизайн — который мы применяем для каждого клиента: врачей, юристов, консультантов, частных практик.',
        bullets: [
          'Структура и тексты, которые ведут к записи, а не просто рассказывают о вас',
          'Адаптивная вёрстка, подключённая к вашей текущей системе записи',
          'Разметка на уровне разделов вместо блога «на всякий случай»',
          'Готовый сайт на вашем собственном домене — без конструкторов',
        ],
        button: 'Обсудить ваш проект',
      },
    },
    bubble: {
      label: 'Хотите похожий проект?',
      title: 'Расскажите о своём проекте',
      note: 'Отвечаем в течение одного рабочего дня.',
      prefill: 'Хочу что-то похожее для своего дела.',
    },
    hero: {
      badge: 'Цифровой продукт от Pixel',
      t1: 'Сайт за 3 дня.', t2: 'Без хлопот.',
      subLead: 'На самом деле…',
      slogan: 'Пусть сайт работает на вас',
      sub: 'Быстрое решение для простых задач бизнеса — от визитки со ссылкой в соцсетях до простой формы заказа или записи.',
      flow1: 'Бесплатный звонок онлайн — 15 минут.',
      flow2: 'В течение суток после звонка у вас готовый прототип.',
      flow3: 'Второй короткий звонок: проверяем, всё ли подходит.',
      flow4: 'И всё — сайт работает.',
      build: 'Записаться на бесплатную консультацию', estimate: 'Узнать цену',
      chip1: '☕ 15 минут разговора — и мы начинаем', chip2: '⚡ Готово за 3 дня',
      visitors: '+2 481 визит сегодня', revenue: 'Доход ↑ 214%',
      frameCta: 'Написать нам',
      morph: { sketch: 'Эскиз', wireframe: 'Прототип', responsive: 'Мобильная версия', live: 'Сайт онлайн', design: 'Дизайн', customers: 'Клиенты', growth: 'Рост бизнеса' },
      proc: { sketch: 'так выглядит проект на старте', wireframe: 'структура контента', responsive: 'тест на телефоне', live: 'версия, которую вы получаете', replay: 'Повторить процесс' },
      days: { sketch: 'День 0', wireframe: 'День 1', responsive: 'День 2', live: 'День 3' },
      logoHint: 'Ваш логотип', photoHint: 'Ваше фото',
    },
    trust: { title1: 'Нам доверяют компании из', title2: 'разных отраслей.',
      csTag: 'Кейс · наша работа',
      csTitle: 'Сайт хирурга кисти и плеча в Ницце',
      csDesc: 'Мы разобрали этот проект блок за блоком: для кого, какие решения приняли и почему сайт ведёт пациента к записи.',
      csMeta: ['Медицина · Хирургия', 'Пациенты + направляющие врачи', 'Next.js · Vercel'],
      csCta: 'Смотреть кейс' },
    card: { visit: 'Перейти на сайт', view: 'Смотреть проект' },
    projects: {
      herbaczar: { industry: 'Гостеприимство · Чай', type: 'B2B сайт', time: '3 дня' },
      sacred: { industry: 'Велнес · Оздоровление', type: 'Бизнес · Записи', time: '2 дня' },
      budrysowka: { industry: 'Гостеприимство · Домик', type: 'Бронирование · Многоязычный', time: '4 недели' },
      pixel: { industry: 'Креатив · Агентство', type: 'Портфолио', time: '2 недели' },
    },
    steps: {
      title: 'Создание сайта должно быть простым.',
      items: [
        { emoji: 'file-text', title: 'Расскажите о своём бизнесе.', sub: 'Одна короткая форма. Без брифов и жаргона.' },
        { emoji: 'message-circle', title: '30-минутная встреча онлайн.', sub: 'Обсуждаем цели в коротком звонке.' },
        { emoji: 'palette', title: 'Мы проектируем и создаём всё.', sub: 'Тексты, дизайн, код — берём на себя.' },
        { emoji: 'rocket', title: 'Запуск. Начинайте расти.', sub: 'Публикуем и смотрим, как приходят клиенты.' },
      ],
    },
    features: {
      eyebrow: 'Всё включено', title: 'Полная комплектация.', hint: 'Наведите на карточку, чтобы увидеть детали.',
      items: [
        { emoji: 'zap', title: 'Быстрый', line: 'Загружается меньше секунды, везде.' },
        { emoji: 'smartphone', title: 'Мобильный', line: 'Идеально на любом размере экрана.' },
        { emoji: 'bot', title: 'Готов к AI', line: 'Встроенный ассистент и AI-инструменты.' },
        { emoji: 'search', title: 'SEO', line: 'Виден в поиске с первого дня.' },
        { emoji: 'globe', title: 'Многоязычный', line: 'Общайтесь с клиентами на любом языке.' },
        { emoji: 'bar-chart-2', title: 'Аналитика', line: 'Точно знайте, что делают посетители.' },
        { emoji: 'lock', title: 'Безопасный', line: 'SSL, резервные копии и защита.' },
        { emoji: 'credit-card', title: 'Записи', line: 'Принимайте записи и платежи онлайн.' },
      ],
    },
    pricing: {
      eyebrow: 'Простые, честные цены', title: 'Выберите, сколько помощи нужно.',
      intro: 'Без сложных пакетов. Без скрытых расходов. Без технического жаргона. Просто выберите объём помощи — остальным займёмся мы.',
      chips: ['Фиксированные цены', 'Дружелюбный процесс', 'Без сюрпризов в счёте'], swipe: 'Смахните, чтобы увидеть пакеты',
      oneTime: 'единоразово', popular: '⭐ Чаще всего выбирают', popularSub: 'Выбор большинства компаний.',
      have: 'Что вы получите', care: 'Мы берём на себя',
      extrasTitle: 'Нужно что-то ещё?', extrasSub: 'Добавьте любой пункт, когда захотите — на ваш выбор.', extrasFrom: 'От…',
      careEyebrow: 'Постоянная поддержка', careTitle: 'Пусть сайт работает на вас.',
      careDesc: 'Мы продолжаем заботиться о сайте после запуска — быстрый, безопасный и актуальный.',
      perMonth: '/ месяц', careCta: 'Добавить поддержку сайта', careNote: 'Отмена в любой момент. Без договоров.',
      careLimits: 'Что входит: небольшие правки текста и изображений, до 2 запросов в месяц, обычно за 2–3 рабочих дня. Не входит: новые страницы, редизайн разделов и крупные доработки — считаем отдельно.',
      promiseEyebrow: 'Наше обещание',
      promise: ['Если хватит меньшего пакета — мы скажем об этом.', 'Без скрытых расходов. Без сюрпризов в счёте.', 'После завершения сайт принадлежит вам.'],
      promiseBig: 'Нам важны долгосрочные отношения, а не разовая продажа.',
      finalTitle: 'Всё ещё не уверены?', finalDesc: 'Давайте сначала поговорим. Без давления. Без уловок. Просто честный совет.',
      finalStars: 'Большинство проектов начинается с бесплатного 30-минутного разговора.', finalCta: 'Записаться на бесплатную консультацию',
      plans: [
        { title: 'Just a Website', badge: 'Идеально, если просто нужно быть онлайн.', cta: 'Начинаем', note: 'Домен не включён.', timeline: 'Обычно готово за неделю.',
          have: [['globe','Профессиональное присутствие в сети'],['smartphone','Отлично смотрится на любом экране'],['sparkles','Современный, чистый дизайн'],['compass','Понятно клиентам'],['pencil','Три раунда правок включены'],['package','Файлы сайта принадлежат вам'],['rocket','Публикация по бесплатному адресу'],['refresh-cw','Готов к будущим доработкам']],
          care: ['Дружелюбная консультация','Планирование страницы','Адаптивный дизайн','Секция контактов','Простая форма связи','Подготовка файлов сайта','Публикация на бесплатном хостинге','Рабочая ссылка онлайн'] },
        { title: 'Business Website', badge: '⭐ Чаще всего выбирают', cta: 'Создать мой сайт', timeline: 'Около двух недель.',
          have: [['message-circle','Понятный рассказ о вашем бизнесе'],['handshake','Больше доверия клиентов'],['trending-up','Больше шансов на заявки'],['image','Красивые, оптимизированные фото'],['file','Несколько страниц'],['mail','Формы обратной связи'],['search','Готов появиться в Google'],['zap','Плавная, современная работа']],
          care: ['Анкета по бизнесу','Понимание вашей компании','Помощь с текстами','Подготовка изображений','2–6 страниц','Интерактивные секции','Формы связи','Базовое SEO','Начальная GEO-оптимизация','Индексация в Google','Настройка аналитики','Три раунда правок','Запуск сайта'] },
        { title: 'Growth Website', badge: 'Лучший вариант для растущего бизнеса', cta: 'Создадим что-то большое', timeline: 'Около трёх-пяти недель.',
          have: [['rocket','Создан, чтобы расти вместе с бизнесом'],['palette','Премиальный визуальный опыт'],['bot','Готов к AI-инструментам'],['trending-up','Больше возможностей для конверсии'],['settings','Готов к будущему расширению'],['sparkles','Сильное первое впечатление'],['brain','Стратегия перед дизайном'],['link','Гибкий фундамент']],
          care: ['Бизнес-воркшоп','Анализ конкурентов','Планирование пути клиента','UX-планирование','Профессиональные тексты','Премиальная дизайн-система','Неограниченное число стандартных страниц','Интеграция записи','Интеграция CRM','Архитектура, готовая к AI','Стратегия привлечения лидов','Структура SEO','Подготовка AEO / GEO','Оптимизация производительности','Аналитика','Четыре недели поддержки после запуска'] },
      ],
      extras: [['camera','Фотография'],['video','Видео'],['palette','Логотип'],['sparkles','Фирменный стиль'],['shopping-cart','Интернет-магазин'],['calendar','Система записи'],['bot','AI-ассистент в чате'],['globe','Несколько языков'],['home','Хостинг'],['link','Домен'],['map-pin','Профиль в Google'],['edit-3','SEO-тексты']],
      careBenefits: [['refresh-cw','Ежемесячные обновления'],['lock','Мониторинг безопасности'],['save','Резервные копии'],['zap','Оптимизация скорости'],['pencil','Небольшие правки контента'],['bar-chart-2','Ежемесячный отчёт'],['phone','Приоритетная поддержка'],['mail','Ежемесячная проверка']],
    },
    modal: {
      title: 'Записаться на бесплатную консультацию', desc: 'Спокойный разговор на 30 минут. Без давления, без уловок — только честный совет.',
      name: 'Имя', email: 'Email', phone: 'Телефон', business: 'Компания', message: 'Сообщение (необязательно)',
      cta: 'Записаться на консультацию', okTitle: 'Записано.', ok: '— мы свяжемся, чтобы подтвердить удобное время.', okHi: 'Спасибо',
    },
    portfolio: { eyebrow: 'Портфолио', title: 'Настоящие проекты. Реальные результаты.' },
    process: {
      eyebrow: 'Как это работает', title: 'От идеи до роста.',
      items: [
        ['compass', 'Изучение', 'Разбираемся в вашем бизнесе и целях.'],
        ['pen-tool', 'Прототип', 'Кликабельная структура для быстрого согласования.'],
        ['palette', 'Дизайн', 'Ваш бренд, оживлённый визуально.'],
        ['code-2', 'Разработка', 'Быстрый, чистый код продакшн-уровня.'],
        ['bug', 'Тестирование', 'Каждый экран, устройство и сценарий.'],
        ['rocket', 'Запуск', 'Публикуем и передаём вам ключи.'],
        ['life-buoy', 'Поддержка', 'Постоянная забота, чтобы вы могли расти.'],
      ],
    },
    faq: {
      title: 'Вопросы?',
      items: [
        ['Сколько стоит сайт?', 'Зависит от объёма — от 170 до 790 евро в зависимости от пакета, всегда видно заранее, до принятия решения.'],
        ['Как быстро сайт будет онлайн?', 'Обычно 2–5 недель в зависимости от сложности. Калькулятор показывает примерные сроки по ходу настройки.'],
        ['Нужно ли писать тексты самому?', 'Нет. Копирайтинг и фотография — опциональные допы: включите их, и мы возьмём всё на себя.'],
        ['Будет ли сайт работать на телефоне и виден в Google?', 'Всегда. Каждый сайт адаптивный, быстрый и готов к SEO по умолчанию — без доплат.'],
        ['Что происходит после запуска?', 'Вы получаете ключи, а опциональная поддержка держит всё безопасным, актуальным и растущим.'],
      ],
    },
    contact: {
      title: 'Готовы?', sub: 'Давайте создадим ваш следующий сайт.',
      name: 'Имя', email: 'Email', phone: 'Телефон', business: 'Компания', message: 'Сообщение (необязательно)',
      cta: 'Начать проект', note: '☕ Занимает 30 секунд. Без обязательств.',
      okTitle: 'Вы в деле.', ok: '— мы свяжемся в течение одного рабочего дня, чтобы начать.', okHi: 'Спасибо',
    },
    footer: { tag: '· Just a Website', rights: '© 2026 Pixel Experts Team · Делаем сайты просто, как заказ кофе ☕', privacy: 'Политика конфиденциальности' },
    consent: {
      text: 'Мы используем куки и обрабатываем данные форм, чтобы отвечать на запросы и улучшать сайт.',
      more: 'Отправляя форму, вы даёте согласие в соответствии с GDPR.',
      accept: 'Принять', reject: 'Только необходимые', link: 'Политика конфиденциальности',
    },
    lead: {
      eyebrow: 'Бесплатно · Без обязательств',
      title: 'Получите бесплатную мини-консультацию',
      desc: 'Оставьте email или телефон, и мы отправим бесплатный эскиз сайта и 15-минутную мини-консультацию — без обязательств.',
      email: 'Ваш email', phone: 'или номер телефона',
      cta: 'Хочу бесплатный эскиз', note: 'Отвечаем в течение одного рабочего дня.',
      later: 'Может быть позже', okTitle: 'Готово!', ok: 'Спасибо — скоро отправим эскиз и детали консультации.',
    },
  },

  /* ---------------- FRENCH ---------------- */
  fr: {
    nav: { tag: '· Just a Website', build: 'Créer mon site' },
    cs: {
      back: 'Retour à Just a Website',
      eyebrow: 'ÉTUDE DE CAS · NOTRE TRAVAIL',
      h1: 'Un site qui gagne la confiance avant le bouton de réservation',
      subhead: 'Voici comment nous avons abordé le site d’un chirurgien de la main et de l’épaule à Nice, bloc par bloc — ce que nous avons décidé, pourquoi, et comment cela agit sur un patient. C’est le même niveau de réflexion que nous apportons à chaque site.',
      sourceLink: 'Voir le site en ligne — mahdi-siala.vercel.app',
      about: {
        title: 'Ce qu’est ce site',
        body: 'Le Dr Mahdi Siala est un chirurgien français de la main et de l’épaule (chirurgie orthopédique et traumatologique). Son périmètre va de l’épaule au bout des doigts : arthroscopie, microchirurgie des nerfs périphériques, arthroplastie. Il est venu nous chercher un site qui sert deux publics avec un seul objectif : transformer un nouveau patient en réservation, et donner aux médecins correspondants des critères clairs pour adresser un cas.',
      },
      facts: [
        ['Spécialité', 'Chirurgien de la main et de l’épaule, chirurgie orthopédique et traumatologique'],
        ['Public', 'Patients à Nice et Cannes + médecins correspondants'],
        ['Langues parlées', 'français, anglais, espagnol, italien'],
        ['Objectif n° 1', 'Générer des réservations via Doctolib'],
        ['Données patients', 'Non collectées sur le site ; la réservation et les échanges passent par Doctolib'],
        ['Technologies', 'Next.js, hébergé sur Vercel'],
      ],
      breakdown: { title: 'Décomposition, bloc par bloc', intro: 'Nous allons de haut en bas, dans l’ordre où un visiteur les découvre.' },
      blocks: [
        { step: '01/07', title: 'Premier écran et méthode WALANT', points: [
          'Nous avons remplacé la photo attendue du médecin en blouse blanche par un croquis anatomique de la main avec les repères « épaule / coude / poignet / main » — le visiteur comprend en deux secondes ce que traite ce cabinet.',
          'Nous avons écrit le titre autour du résultat pour le patient (« retrouver l’usage de sa main »), pas autour du titre du médecin.',
          'Nous avons fait apparaître la note de 4,9 et les 367 avis avant le premier défilement — la confiance s’installe avant l’argumentaire.',
          'Nous avons découpé la chirurgie sous anesthésie locale en 4 cartes, chacune désamorçant une peur précise : anesthésie, jeûne, récupération, éligibilité.',
        ] },
        { step: '02/07', title: 'Une carte des pathologies, pas une liste de termes', points: [
          'Nous avons regroupé les pathologies par anatomie — de l’épaule aux doigts — plutôt que par ordre alphabétique ou par priorité du cabinet : les patients cherchent à partir de leur douleur, pas du vocabulaire médical.',
          'Chaque entrée sert aussi de point d’entrée potentiel depuis la recherche pour un diagnostic précis, sans blog séparé.',
        ] },
        { step: '03/07', title: 'Des techniques, pas de la terminologie', points: [
          'Nous avons expliqué quatre techniques en langage clair, chacune avec une réserve honnête sur les cas où elle s’applique — et ceux où elle ne s’applique pas.',
          'Cette réserve se lit comme une expertise, pas comme une faiblesse : le site ne promet jamais de « tout réparer ».',
        ] },
        { step: '04/07', title: 'Deux cabinets, un bloc opératoire', points: [
          'Nous avons clairement séparé les lieux de consultation (Nice, Cannes) du lieu des interventions (Clinique Saint François) — en répondant à la question fréquente « où opérez-vous réellement ? ».',
          'Chaque cabinet a son propre bouton de réservation Doctolib — une étape de moins vers la conversion, et un SEO local sur deux villes à la fois.',
        ] },
        { step: '05/07', title: 'Des canaux, pas des citations', points: [
          'Au lieu d’un bloc « ce que disent les patients » avec des citations sélectionnées, nous avons lié directement les profils réels : Doctolib, avis Google, Instagram, LinkedIn.',
          'Un lien vers un vrai profil est plus difficile à falsifier qu’une citation sur une page — et inspire donc plus confiance.',
        ] },
        { step: '06/07', title: 'Le médecin en tant que personne', points: [
          'Une photo, quatre langues parlées et un vrai parcours transforment « le chirurgien » en une personne précise à qui confier sa main.',
          'Un numéro RPPS et l’appartenance à une société professionnelle apportent une preuve formelle des qualifications pour qui vérifie avant de réserver.',
        ] },
        { step: '07/07', title: 'Le second public et l’hygiène juridique', points: [
          'Nous avons ajouté un bloc dédié aux médecins correspondants — un parcours B2B au sein d’un site B2C, typique d’une spécialité étroite.',
          'Le pied de page indique clairement que le site ne collecte aucune donnée médicale — la réservation se fait sur Doctolib. Énoncer la conformité supprime le risque juridique.',
        ] },
      ],
      principlesEyebrow: '5 principes',
      principlesTitle: 'Ce que nous en retenons',
      principlesIntro: 'Ils valent pour tout site de services professionnels, pas seulement pour les chirurgiens.',
      principles: [
        ['01', 'Un seul chemin de conversion', 'Le bouton de réservation apparaît plus de cinq fois sur la page, et ne se contredit jamais.'],
        ['02', 'La confiance avant la présentation', 'Notes et avis sont visibles avant que le site ne commence à parler du médecin.'],
        ['03', 'Les limites honnêtes vendent', 'Les réserves sur l’éligibilité se lisent comme une expertise, pas comme une position faible.'],
        ['04', 'La structure, c’est la recherche', 'Les sections reflètent la façon dont les gens cherchent vraiment : par symptôme, par ville, par langue parlée.'],
        ['05', 'Publics différents, écrans différents', 'Patients et médecins correspondants ont des blocs distincts sur la même page, sans confusion.'],
      ],
      cta: {
        eyebrow: 'VOTRE PROJET',
        title: 'Vous voulez ce niveau de réflexion pour votre cabinet ?',
        lead: 'C’est le même processus — recherche, structure, puis design — que nous menons pour chaque client : médecins, avocats, consultants, cabinets privés.',
        bullets: [
          'Une structure et des textes qui mènent à une réservation, pas qui parlent seulement de vous',
          'Une mise en page responsive, connectée à votre système de réservation existant',
          'Un balisage au niveau des sections plutôt qu’un blog « au cas où »',
          'Un site terminé sur votre propre domaine — sans créateur de sites',
        ],
        button: 'Parlons de votre projet',
      },
    },
    bubble: {
      label: 'Un projet comme celui-ci ?',
      title: 'Parlez-nous de votre projet',
      note: 'Nous répondons sous un jour ouvré.',
      prefill: 'J’aimerais quelque chose comme ça pour mon activité.',
    },
    hero: {
      badge: 'Un produit numérique par Pixel',
      t1: 'Un site en 3 jours.', t2: 'Sans souci.',
      subLead: 'En fait…',
      slogan: 'Laissez votre site travailler pour vous',
      sub: 'Une solution rapide pour les besoins simples d’une entreprise — de la carte de visite avec un lien dans vos réseaux sociaux au formulaire de commande ou de réservation.',
      flow1: 'Un appel gratuit de 15 minutes en ligne.',
      flow2: 'Dans les 24 h après l’appel, votre prototype est prêt.',
      flow3: 'Un second appel court pour vérifier que tout vous convient.',
      flow4: 'Et c’est tout — votre site est en ligne.',
      build: 'Réserver une consultation gratuite', estimate: 'Estimer le prix',
      chip1: '☕ 15 minutes d’appel — et on commence', chip2: '⚡ En ligne en 3 jours',
      visitors: '+2 481 visiteurs aujourd’hui', revenue: 'Revenus ↑ 214 %',
      frameCta: 'Nous contacter',
      morph: { sketch: 'Croquis', wireframe: 'Maquette', responsive: 'Version mobile', live: 'Site en ligne', design: 'Design', customers: 'Clients', growth: 'Croissance' },
      proc: { sketch: 'voilà un projet au départ', wireframe: 'structure du contenu', responsive: 'testé sur mobile', live: 'la version que vous recevez', replay: 'Revoir le processus' },
      days: { sketch: 'Jour 0', wireframe: 'Jour 1', responsive: 'Jour 2', live: 'Jour 3' },
      logoHint: 'Votre logo', photoHint: 'Votre photo',
    },
    trust: { title1: 'La confiance d’entreprises de', title2: 'multiples secteurs.',
      csTag: 'Étude de cas · notre travail',
      csTitle: 'Le site d’un chirurgien de la main à Nice',
      csDesc: 'Nous décomposons ce projet bloc par bloc : pour qui, quelles décisions et pourquoi la page mène le patient vers la réservation.',
      csMeta: ['Santé · Chirurgie', 'Patients + médecins correspondants', 'Next.js · Vercel'],
      csCta: 'Voir l’étude de cas' },
    card: { visit: 'Voir le site', view: 'Voir le projet' },
    projects: {
      herbaczar: { industry: 'Hôtellerie · Thé', type: 'Site B2B', time: '3 jours' },
      sacred: { industry: 'Bien-être · Soins', type: 'Entreprise · Réservation', time: '2 jours' },
      budrysowka: { industry: 'Hôtellerie · Chalet', type: 'Réservation · Multilingue', time: '4 semaines' },
      pixel: { industry: 'Créatif · Agence', type: 'Portfolio', time: '2 semaines' },
    },
    steps: {
      title: 'Créer un site devrait être simple.',
      items: [
        { emoji: 'file-text', title: 'Parlez-nous de votre activité.', sub: 'Un court formulaire. Sans brief ni jargon.' },
        { emoji: 'message-circle', title: 'Réunion en ligne de 30 minutes.', sub: 'On aligne les objectifs lors d’un appel.' },
        { emoji: 'palette', title: 'On conçoit et construit tout.', sub: 'Textes, design, développement — tout géré.' },
        { emoji: 'rocket', title: 'Lancement. Place à la croissance.', sub: 'Mise en ligne et les clients arrivent.' },
      ],
    },
    features: {
      eyebrow: 'Tout est inclus', title: 'Entièrement équipé.', hint: 'Survolez une carte pour voir le détail.',
      items: [
        { emoji: 'zap', title: 'Rapide', line: 'Se charge en moins d’une seconde, partout.' },
        { emoji: 'smartphone', title: 'Mobile', line: 'Parfait sur toutes les tailles d’écran.' },
        { emoji: 'bot', title: 'Prêt pour l’IA', line: 'Assistant intégré et outils de contenu IA.' },
        { emoji: 'search', title: 'SEO', line: 'Référencé sur Google dès le premier jour.' },
        { emoji: 'globe', title: 'Multilingue', line: 'Touchez vos clients dans toutes les langues.' },
        { emoji: 'bar-chart-2', title: 'Analytique', line: 'Sachez exactement ce que font vos visiteurs.' },
        { emoji: 'lock', title: 'Sécurisé', line: 'SSL, sauvegardes et protections inclus.' },
        { emoji: 'credit-card', title: 'Réservation', line: 'Réservations et paiements en ligne.' },
      ],
    },
    pricing: {
      eyebrow: 'Des prix simples et honnêtes', title: 'Choisissez le niveau d’accompagnement.',
      intro: 'Pas de forfaits compliqués. Pas de coûts cachés. Pas de jargon technique. Choisissez simplement l’aide souhaitée — on s’occupe du reste.',
      chips: ['Prix fixes', 'Processus convivial', 'Aucune facture surprise'], swipe: 'Glissez pour voir les offres',
      oneTime: 'paiement unique', popular: '⭐ Le plus choisi', popularSub: 'Le choix de la plupart des entreprises.',
      have: 'Ce que vous aurez', care: 'Nous nous occupons de',
      extrasTitle: 'Besoin de quelque chose en plus ?', extrasSub: 'Ajoutez ces options quand vous voulez — à la carte.', extrasFrom: 'À partir de…',
      careEyebrow: 'Suivi continu', careTitle: 'Gardez un site qui travaille pour vous.',
      careDesc: 'Nous continuons à entretenir votre site après le lancement — rapide, sûr et à jour.',
      perMonth: '/ mois', careCta: 'Ajouter le suivi', careNote: 'Annulable à tout moment. Sans engagement.',
      careLimits: 'Inclus : petites modifications de texte et d’images, jusqu’à 2 demandes par mois, traitées en 2 à 3 jours ouvrés. Non inclus : nouvelles pages, refonte de sections ou travaux importants — devis séparé.',
      promiseEyebrow: 'Notre promesse',
      promise: ['Si un forfait plus petit suffit, on vous le dira.', 'Aucun coût caché. Aucune facture surprise.', 'Le site vous appartient une fois terminé.'],
      promiseBig: 'Nous visons des relations durables, pas des ventes ponctuelles.',
      finalTitle: 'Encore hésitant ?', finalDesc: 'Discutons d’abord. Sans pression. Sans techniques de vente. Juste des conseils honnêtes.',
      finalStars: 'La plupart des projets commencent par un échange gratuit de 30 minutes.', finalCta: 'Réserver une consultation gratuite',
      plans: [
        { title: 'Just a Website', badge: 'Parfait si vous voulez simplement être en ligne.', cta: 'Commençons', note: 'Le nom de domaine n’est pas inclus.', timeline: 'Généralement prêt en une semaine.',
          have: [['globe','Une présence en ligne professionnelle'],['smartphone','Superbe sur chaque écran'],['sparkles','Un design moderne et épuré'],['compass','Facile à comprendre pour vos clients'],['pencil','Trois séries de modifications incluses'],['package','Les fichiers du site vous appartiennent'],['rocket','En ligne sur une adresse gratuite'],['refresh-cw','Prêt pour de futures améliorations']],
          care: ['Consultation conviviale','Planification de la page','Design responsive','Section contact','Formulaire de contact simple','Préparation des fichiers du site','Publication sur hébergement gratuit','Lien en ligne fonctionnel'] },
        { title: 'Business Website', badge: '⭐ Le plus choisi', cta: 'Créer mon site', timeline: 'Environ deux semaines.',
          have: [['message-circle','Un récit clair de votre activité'],['handshake','Plus de confiance des clients'],['trending-up','Plus de chances de demandes'],['image','De belles images optimisées'],['file','Plusieurs pages'],['mail','Formulaires de contact'],['search','Prêt à apparaître sur Google'],['zap','Une expérience fluide et moderne']],
          care: ['Questionnaire d’entreprise','Compréhension de votre activité','Aide à la rédaction','Préparation des images','2 à 6 pages','Sections interactives','Formulaires de contact','SEO de base','Optimisation GEO initiale','Indexation Google','Configuration analytique','Trois séries de révisions','Lancement du site'] },
        { title: 'Growth Website', badge: 'Idéal pour les entreprises en croissance', cta: 'Créons quelque chose de grand', timeline: 'Environ trois à cinq semaines.',
          have: [['rocket','Conçu pour grandir avec vous'],['palette','Une expérience visuelle premium'],['bot','Prêt pour les outils IA'],['trending-up','De meilleures conversions'],['settings','Prêt pour l’expansion future'],['sparkles','Une forte première impression'],['brain','La stratégie avant le design'],['link','Une base flexible']],
          care: ['Atelier stratégique','Analyse concurrentielle','Parcours client','Planification UX','Rédaction professionnelle','Système de design premium','Pages standard illimitées','Intégration de réservation','Intégration CRM','Architecture prête pour l’IA','Stratégie de génération de leads','Structure SEO','Préparation AEO / GEO','Optimisation des performances','Analytique','Quatre semaines de suivi après lancement'] },
      ],
      extras: [['camera','Photographie'],['video','Vidéo'],['palette','Logo'],['sparkles','Identité de marque'],['shopping-cart','Boutique en ligne'],['calendar','Système de réservation'],['bot','Assistant IA'],['globe','Plusieurs langues'],['home','Hébergement'],['link','Nom de domaine'],['map-pin','Fiche Google'],['edit-3','Rédaction SEO']],
      careBenefits: [['refresh-cw','Mises à jour mensuelles'],['lock','Surveillance de sécurité'],['save','Sauvegardes'],['zap','Optimisation de vitesse'],['pencil','Petites modifications de contenu'],['bar-chart-2','Rapport mensuel'],['phone','Support prioritaire'],['mail','Bilan mensuel']],
    },
    modal: {
      title: 'Réserver une consultation gratuite', desc: 'Un échange détendu de 30 minutes. Sans pression, sans techniques de vente — juste des conseils honnêtes.',
      name: 'Nom', email: 'E-mail', phone: 'Téléphone', business: 'Entreprise', message: 'Message (facultatif)',
      cta: 'Je réserve', okTitle: 'C’est réservé.', ok: '— nous vous contacterons pour convenir d’un créneau.', okHi: 'Merci',
    },
    portfolio: { eyebrow: 'Portfolio', title: 'Vrais projets. Vrais résultats.' },
    process: {
      eyebrow: 'Comment ça marche', title: 'De l’idée à la croissance.',
      items: [
        ['compass', 'Découverte', 'Nous cernons votre activité et vos objectifs.'],
        ['pen-tool', 'Prototype', 'Une structure cliquable pour s’aligner vite.'],
        ['palette', 'Design', 'Votre marque, mise en vie visuellement.'],
        ['code-2', 'Développement', 'Un code rapide, propre, prêt pour la production.'],
        ['bug', 'Tests', 'Chaque écran, appareil et cas limite.'],
        ['rocket', 'Lancement', 'On met en ligne et on vous remet les clés.'],
        ['life-buoy', 'Support', 'Un suivi continu pour vous concentrer sur la croissance.'],
      ],
    },
    faq: {
      title: 'Des questions ?',
      items: [
        ['Combien coûte un site ?', 'Cela dépend du périmètre — de 170 à 790 € selon la formule choisie, et vous voyez toujours le prix avant de vous engager.'],
        ['Sous combien de temps mon site sera en ligne ?', 'Généralement 2 à 5 semaines selon la complexité. Le configurateur affiche un délai estimé au fur et à mesure.'],
        ['Dois-je rédiger le contenu ?', 'Non. La rédaction et la photographie sont des options — activez-les et nous nous occupons de tout.'],
        ['Sera-t-il mobile et bien référencé sur Google ?', 'Toujours. Chaque site est entièrement responsive, rapide et prêt pour le SEO en standard — jamais en supplément.'],
        ['Que se passe-t-il après le lancement ?', 'Vous recevez les clés, et un suivi optionnel garde tout sûr, à jour et en croissance.'],
      ],
    },
    contact: {
      title: 'Prêt ?', sub: 'Créons votre prochain site.',
      name: 'Nom', email: 'E-mail', phone: 'Téléphone', business: 'Entreprise', message: 'Message (facultatif)',
      cta: 'Démarrer mon projet', note: '☕ 30 secondes. Sans engagement.',
      okTitle: 'C’est parti.', ok: '— nous vous répondrons sous un jour ouvré pour démarrer.', okHi: 'Merci',
    },
    footer: { tag: '· Just a Website', rights: '© 2026 Pixel Experts Team · Des sites aussi simples qu’un café ☕', privacy: 'Politique de confidentialité' },
    consent: {
      text: 'Nous utilisons des cookies et traitons les données des formulaires pour répondre aux demandes et améliorer le site.',
      more: 'En envoyant un formulaire, vous consentez conformément au RGPD.',
      accept: 'Accepter', reject: 'Essentiel uniquement', link: 'Politique de confidentialité',
    },
    lead: {
      eyebrow: 'Gratuit · Sans engagement',
      title: 'Recevez une mini-consultation gratuite',
      desc: 'Laissez votre e-mail ou téléphone et nous vous enverrons une esquisse de site gratuite et une mini-consultation de 15 minutes — sans engagement.',
      email: 'Votre e-mail', phone: 'ou numéro de téléphone',
      cta: 'Je veux mon esquisse', note: 'Nous répondons sous un jour ouvré.',
      later: 'Plus tard', okTitle: 'C’est fait !', ok: 'Merci — nous vous enverrons votre esquisse et les détails sous peu.',
    },
  },
};

/* ---------- store ---------- */
let JAW_CUR = (() => { try { const s = localStorage.getItem('jaw_lang'); return JAW_LANGS.includes(s) ? s : 'ru'; } catch (e) { return 'ru'; } })();
try { document.documentElement.lang = JAW_CUR; } catch (e) {}

function jawSetLang(l) {
  if (!JAW_LANGS.includes(l)) return;
  JAW_CUR = l;
  try { localStorage.setItem('jaw_lang', l); document.documentElement.lang = l; } catch (e) {}
  window.dispatchEvent(new Event('jaw-lang'));
}

function jawLookup(obj, path) {
  return path.split('.').reduce((o, k) => (o == null ? undefined : o[k]), obj);
}

function jawUseLang() {
  const [, force] = React.useReducer((x) => x + 1, 0);
  React.useEffect(() => {
    const h = () => force();
    window.addEventListener('jaw-lang', h);
    return () => window.removeEventListener('jaw-lang', h);
  }, []);
  const lang = JAW_CUR;
  const t = (path) => {
    const v = jawLookup(JAW_STR[lang], path);
    return v === undefined ? (jawLookup(JAW_STR.ru, path) ?? path) : v;
  };
  return [lang, t, jawSetLang];
}

/* ---------- language switcher ---------- */
function LangSwitch({ dark }) {
  const [lang, , setLang] = jawUseLang();
  const border = dark ? 'rgba(255,255,255,0.18)' : '#DFE1EC';
  const idle = dark ? 'rgba(255,255,255,0.7)' : '#7A7F92';
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', background: dark ? 'rgba(255,255,255,0.06)' : '#fff', border: '1px solid ' + border, borderRadius: 999, padding: 3 }}>
      {JAW_LANGS.map((l) => {
        const on = l === lang;
        return (
          <button key={l} onClick={() => setLang(l)} aria-pressed={on}
            style={{ fontFamily: "'Karla', system-ui, sans-serif", fontWeight: 700, fontSize: 12.5, letterSpacing: '0.03em',
              padding: '6px 11px', borderRadius: 999, border: 'none', cursor: 'pointer',
              color: on ? '#fff' : idle, background: on ? '#5B6AC4' : 'transparent',
              boxShadow: on ? '0 3px 10px rgba(91,106,196,0.35)' : 'none', transition: 'all .18s cubic-bezier(.2,0,.1,1)' }}>
            {JAW_LANG_LABEL[l]}
          </button>
        );
      })}
    </div>
  );
}

Object.assign(window, { JAW_STR, jawUseLang, jawSetLang, JawLangSwitch: LangSwitch });
