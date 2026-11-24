// Language switch RU / EN. Texts are written separately for each language, not translated word by word.
(function () {
  var T = {
    ru: {
      skip: "К содержимому", cv: "CV", menu: "Меню", profile_label: "Профиль", links_label: "Ссылки", avatar: "Фото Катерины Генераловой",
      name: "Катерина Генералова, продуктовый дизайнер с бренд-бэкграундом",
      subtitle: "13 лет в дизайне,\n3 года в продукте",
      bio: "Проектирую понятные продукты: Web3, доступность, культура. Лучше всего работаю в небольших командах, где можно принимать продуктовые решения",
      btn_tg: "написать в Telegram",
      card_title: "Название проекта",
      tag1: "Сайт", tag2: "Упаковка", tag3: "Брэндинг",
      title: "Катерина Генералова, продуктовый дизайнер", lang_btn: "Eng", lang_btn_label: "Switch to English",
      back: "Назад к проектам", cover_alt: "Сайт Мозаики Тбилиси на экране компьютера", theme_label: "Тема", theme_light: "Светлая тема", theme_dark: "Тёмная тема", home_label: "На главную", next_label: "Следующий проект", prev_label: "Предыдущий проект", case_nav_label: "Другие проекты", video_label: "Видео сайта Мозаики Тбилиси", media: "Изображение будет добавлено",
      case_page_title: "Мозаики Тбилиси, Катерина Генералова",
      m_title: "Мозаики Тбилиси", m_desc: "Мультиязычный сайт и карта мозаик города", m_tag: "Сайт",
      role_label: "Моя роль", role_value: "Продуктовый дизайнер",
      task_h: "Задача", task_t: "Сделать редизайн старого сайта с мозаиками Тбилиси",
      result_h: "Результат", result_a: "Посещений выросло на", result_b: "за первые 19 дней и продолжает расти.",
      aud_h: "Аудитория", aud_0: "Три группы с разными целями.",
      aud_1: "Ценители мозаики и визуальной культуры: ищут конкретную работу и хотят рассмотреть её.",
      aud_2: "Туристы: встретили мозаику на улице и хотят быстро понять, что это.",
      aud_3: "Неравнодушные горожане: хотят знать, что происходит с мозаиками их города",
      wrong_h: "Что было не так",
      wrong_t: "Путь от первой страницы до мозаик не был так понятен, как предполагалось. Старый сайт редко вёл дальше первой страницы: несмотря на кнопку перехода, люди покидали сайт не доходя до мозаик",
      sol_h: "Решение", sol_t: "Показать все мозаики на главном экране с возможностью перехода к каждой из них",
      map_h: "Карта внутри сайта", map_t1: "Человеку не нужно уходить на другой сервис, и не открываются лишние ссылки.", map_t2: "В будущем планируется сделать на карте выстраиваемые маршруты по мозаикам для создания индивидуального маршрута-экскурсии",
      desk_h: "Desktop версия", desk_t: "Раньше сайт в первую очередь был сделан под мобильную версию. Я исходила из того, что люди встречают мозаики на улице, и самое доступное устройство в этот момент это телефон. Но, как показала аналитика, с компьютеров приходит больше половины визитов",
      prin_h: "Принцип оформления",
      prin_t: "Нейтральный сайт без ярких заголовков и сложного дизайна. Акцентами являются сами мозаики",
      concl_h: "Выводы",
      concl_t: "Мозаики на первой странице работают: люди переходят дальше к мозаикам. Десктопная версия тоже остаётся актуальной. Посещение сайта выросло значительно за короткий период без рекламы и продвижения",
      a_page_title: "Всегда рядом, Катерина Генералова",
      a_title: "Всегда рядом", a_tag: "Приложение", a_card_desc: "Дневник самочувствия для людей с рассеянным склерозом", a_desc: "Дневник самочувствия для людей с рассеянным склерозом. Концепт, сделанный за 2 недели на a11y дизайн-спринте",
      a_role: "Продуктовый дизайнер: исследование, концепция, логика, UI, прототип",
      a_mentors_l: "Менторы", a_mentors: "Эксперты по доступности из Яндекс, Freedom Finance, ex-Сбер / ВТБ / Самокат",
      a_team_l: "Команда", a_team: "3 дизайнера", a_term_l: "Срок", a_term: "2 недели, ноябрь 2026",
      a_task: "Спроектировать одну MVP-фичу: фиксацию симптомов обострения рассеянного склероза. Главное условие «не увеличивать когнитивную и физическую нагрузку на человека»",
      a_aud: "Люди с рассеянным склерозом",
      a_prob_h: "Проблема",
      a_prob_1: "Трекеры здоровья требуют заполнять десятки полей и выбирать категории. Для человека с РС каждое поле отнимает силы, которых и так мало.",
      a_prob_2: "Больше всего людей с рассеянным склерозом изматывает усталость, её отмечают около 75% пациентов. К ней добавляются проблемы с памятью и вниманием, тремор и слабость в пальцах, быстрая усталость глаз. Со стороны этого почти не видно",
      a_sol_1: "Люди с РС уже ведут дневники симптомов, только не в приложениях, но и в Telegram-каналах: голосовыми и короткими заметками, без форм и категорий.",
      a_sol_2: "Мы перенесли эту привычку в приложение. Дневник открывается первым экраном. Достаточно рассказать голосом или текстом, что происходит, и приложение само разложит всё по разделам",
      a_modes_h: "Два режима", a_modes_t: "Сил на подробную запись хватает не каждый день. Поэтому человек сам выбирает, насколько подробно писать сегодня.",
      a_short_b: "Кратко.", a_short_t: "Одна кнопка и запись готова.",
      a_full_b: "Развёрнуто.", a_full_t: "Можно отметить симптомы, поправить записи, посмотреть историю.",
      a_v_modes: "Видео: краткий и развёрнутый режим дневника",
      a_flow_h: "Сценарий записи", a_flow_1: "Запись занимает три шага: сказать или написать, отправить, увидеть подтверждение.", a_flow_2: "Запись появляется в истории дня с временем и частью дня. Голосовое сохраняется, его можно переслушать.",
      a_i_flow: "Три шага записи: сказать или написать, отправить, увидеть подтверждение",
      a_asst_h: "Помощник поверх экрана",
      a_asst_1: "Помощник открывается поверх любого экрана. Через него можно найти нужное не только через текст, но и голосом: «открой мои справки», «найди результаты последнего обследования»",
      a_asst_2: "ИИ может ошибаться, поэтому голосовое сохраняется, текст можно исправить, а рядом всегда есть пометка «текст расшифровал помощник»",
      a_v_asst: "Видео: помощник поверх экрана",
      a_vis_h: "Визуальная система и доступность", a_vis_t: "Монохромная контрастная палитра с одним акцентом, крупные тач-таргеты, одно главное действие на экран. Дневник стоит в центре таб-бара, под большим пальцем. Голос служит альтернативой клавиатуре",
      a_i_vis: "Палитра, акцент и крупные элементы интерфейса",
      a_start_h: "Простой старт", a_start_1: "Чтобы начать, нужно только имя. Остальное о себе можно рассказать позже.", a_start_2: "Регистрация проходит один раз, после этого приложение всегда открывается сразу на дневнике",
      a_v_start: "Видео: первый запуск приложения", a_v_thumb: "Видео: кнопка помощника внизу экрана",
      a_c_mos: "Екатерина Москаленко: идея записи своими словами хорошая. Не нужно сначала выбирать категории и думать, куда что вносить. Сам основной сценарий интересный",
      a_c_feo: "Яна Феодосиади: нравится работа с цветовым акцентом и возможность сразу записать голосом",
      a_c_bay: "Карина Байрамова: отличный выбор цветовой палитры и очень чистый интерфейс без перегруза",
      a_iter_h: "Моя итерация.", a_iter_sub: "Эту часть я сделала самостоятельно после спринта",
      a_iter_t: "За две недели в спринт вошло не всё, что я задумывала. Здесь то, как я вижу продукт, если довести идею до конца",
      a_widget_h: "Виджет с одной кнопкой", a_widget_t: "Самый короткий путь к записи это вообще не открывать приложение. Виджет на рабочем экране телефона или часов: одно касание и можно говорить. Это важно в моменте, когда симптом только появился, а сил мало",
      a_i_watch: "Виджет на часах", a_i_phone: "Виджет на рабочем экране телефона",
      a_thumb_h: "Помощник под большим пальцем", a_thumb_t: "Помощник переехал вниз, в зону большого пальца. Кнопка открывает тот же оверлей, так что тянуться к верху экрана больше не нужно",
      a_concl_1: "Этот проект научил меня подстраивать продукт под то, как люди уже действуют, а не учить их новому. Люди с РС вели дневники голосом в Telegram, и лучшим решением стало перенести эту привычку в приложение.",
      a_concl_2: "Главное действие должно быть на расстоянии одного касания и доступно несколькими равноценными способами, ведь сил и возможностей у человека каждый день разное количество. А в медицинском продукте доступность включает и приватность: приложение не должно выдавать то, о чём человек не хочет говорить."
    },
    en: {
      skip: "Skip to content", cv: "CV", menu: "Menu", profile_label: "Profile", links_label: "Links", avatar: "Photo of Kate Generalova",
      name: "Kate Generalova, brand-led product designer",
      subtitle: "13 years in design,\n3 in product",
      bio: "I design clear products for Web3, accessibility and culture. I work best in small teams where I can make product decisions",
      btn_tg: "Message on Telegram",
      card_title: "Project name",
      tag1: "Website", tag2: "Packaging", tag3: "Branding",
      title: "Kate Generalova, brand-led product designer", lang_btn: "Рус", lang_btn_label: "Переключить на русский",
      back: "Back to projects", cover_alt: "The Mosaics of Tbilisi website on a computer screen", theme_label: "Theme", theme_light: "Light theme", theme_dark: "Dark theme", home_label: "Back to home", next_label: "Next project", prev_label: "Previous project", case_nav_label: "More projects", video_label: "Video of the Mosaics of Tbilisi site", media: "Image will be added",
      case_page_title: "Mosaics of Tbilisi, Kate Generalova",
      m_title: "Mosaics of Tbilisi", m_desc: "A multilingual website and map of the city\u2019s mosaics", m_tag: "Website",
      role_label: "My role", role_value: "Product designer",
      task_h: "Task", task_t: "Redesign the old Mosaics of Tbilisi website",
      result_h: "Result", result_a: "Visits grew by", result_b: "in 19 days and keeps growing.",
      aud_h: "Audience", aud_0: "Three groups with different goals.",
      aud_1: "Mosaic and visual culture fans: they look for a specific work and want to see it closely.",
      aud_2: "Tourists: they see a mosaic on the street and want to quickly understand what it is.",
      aud_3: "Local residents who care: they want to know what is happening to the mosaics of their city",
      wrong_h: "What was wrong",
      wrong_t: "The path from the first page to the mosaics was not as clear as expected. The old site rarely led people past the first page: despite the button, people left the site before reaching the mosaics",
      sol_h: "Solution", sol_t: "Show all the mosaics on the main screen, with a way to open each one",
      map_h: "A map inside the site", map_t1: "People do not need to go to another service, and no extra links open.", map_t2: "In the future, I plan to add routes on the map, so people can build their own tour of the mosaics",
      desk_h: "A desktop version", desk_t: "At first, the site was made mainly for mobile. I thought people meet mosaics on the street, and the most available device at that moment is a phone. But analytics showed that more than half of the visits come from computers",
      prin_h: "Design principle",
      prin_t: "The mosaics are the accents. A neutral site without bright headings or complex design",
      concl_h: "Conclusions",
      concl_t: "The mosaics on the first page work: people go on to the mosaics. The desktop version is still relevant. Visits to the site grew a lot in a short time, without ads or promotion",
      a_page_title: "Always Near, Kate Generalova",
      a_title: "Always Near", a_tag: "App", a_card_desc: "A wellbeing diary for people with multiple sclerosis", a_desc: "A wellbeing diary for people with multiple sclerosis. A concept made in 2 weeks at an a11y design sprint",
      a_role: "Product designer: research, concept, logic, UI, prototype",
      a_mentors_l: "Mentors", a_mentors: "Accessibility experts from Yandex, Freedom Finance, ex-Sber / VTB / Samokat",
      a_team_l: "Team", a_team: "3 designers", a_term_l: "Timeline", a_term: "2 weeks, November 2026",
      a_task: "Design one MVP feature: logging the symptoms of a multiple sclerosis relapse. The main condition: do not add cognitive or physical load",
      a_aud: "People with multiple sclerosis",
      a_prob_h: "Problem",
      a_prob_1: "Health trackers ask people to fill in dozens of fields and pick categories. For a person with MS, every field takes energy they already lack.",
      a_prob_2: "Fatigue wears people with MS down the most, about 75% of patients report it. On top of that come memory and attention problems, tremor and weak fingers, eyes that tire quickly. From the outside, almost none of this shows",
      a_sol_1: "People with MS already keep symptom diaries, and often not in apps but in Telegram channels: voice messages and short notes, no forms or categories.",
      a_sol_2: "We moved this habit into an app. The diary is the first screen. Just say or type what is going on, and the app sorts it into sections",
      a_modes_h: "Two modes", a_modes_t: "Not every day leaves energy for a detailed entry. So people choose how detailed to be today.",
      a_short_b: "Short.", a_short_t: "One button and the entry is done.",
      a_full_b: "Detailed.", a_full_t: "Mark symptoms, edit entries, see the history.",
      a_v_modes: "Video: the short and detailed diary modes",
      a_flow_h: "Logging flow", a_flow_1: "An entry takes three steps: say or type, send, see the confirmation.", a_flow_2: "The entry appears in the day\u2019s history with the time and part of the day. The voice message is saved and can be played again.",
      a_i_flow: "Three steps of an entry: say or type, send, see the confirmation",
      a_asst_h: "An assistant over any screen",
      a_asst_1: "The assistant opens over any screen. It finds things by text and by voice too: \u201copen my certificates\u201d, \u201cfind my latest test results\u201d",
      a_asst_2: "AI can make mistakes, so the voice message is saved, the text can be edited, and a note always says \u201ctranscribed by the assistant\u201d",
      a_v_asst: "Video: the assistant over the screen",
      a_vis_h: "Visual system and accessibility", a_vis_t: "A high contrast monochrome palette with one accent, large touch targets, one main action per screen. The diary sits in the middle of the tab bar, under the thumb. Voice is an alternative to the keyboard",
      a_i_vis: "Palette, accent and large interface elements",
      a_start_h: "An easy start", a_start_1: "To start, only a name is needed. The rest can come later.", a_start_2: "Sign-up happens once, after that the app always opens straight on the diary",
      a_v_start: "Video: the first launch of the app", a_v_thumb: "Video: the assistant button at the bottom of the screen",
      a_c_mos: "Comment by mentor Ekaterina Moskalenko, in Russian: the idea of logging in your own words is good, there is no need to pick categories first. The main flow is interesting",
      a_c_feo: "Comment by mentor Yana Feodosiadi, in Russian: likes the colour accent and the option to record by voice right away",
      a_c_bay: "Comment by mentor Karina Bayramova, in Russian: a great choice of colour palette and a very clean interface without overload",
      a_iter_h: "My iteration.", a_iter_sub: "I made this part on my own after the sprint",
      a_iter_t: "Not everything I planned fit into two weeks. This is how I see the product with the idea taken all the way",
      a_widget_h: "A one-button widget", a_widget_t: "The shortest way to an entry is not opening the app at all. A widget on the phone or watch home screen: one tap and you can speak. This matters at the moment a symptom has just appeared and energy is low",
      a_i_watch: "The widget on a watch", a_i_phone: "The widget on a phone home screen",
      a_thumb_h: "The assistant under the thumb", a_thumb_t: "The assistant moved down, into the thumb zone. The button opens the same overlay, so there is no need to reach for the top of the screen",
      a_concl_1: "This project taught me to fit the product to what people already do, not teach them something new. People with MS kept voice diaries in Telegram, and the best solution was to move this habit into an app.",
      a_concl_2: "The main action should be one tap away and possible in several equal ways, because people have a different amount of energy every day. In a medical product, accessibility also means privacy: the app should not reveal what a person does not want to talk about."
    }
  };

  var CV = {
    ru: "https://drive.google.com/file/d/1fg4uXJg_R9ozg3dvVXu9_5D3tAVqgk2d/view",
    en: "https://drive.google.com/file/d/1e29ZX_LGjUI_1-otIjPejlz_a9vdGz-B/view"
  };

  function apply(lang) {
    var d = T[lang];
    document.documentElement.lang = lang;
    document.title = d[document.documentElement.getAttribute("data-title-key") || "title"];
    document.querySelectorAll("[data-i18n]").forEach(function (el) { el.textContent = d[el.getAttribute("data-i18n")]; });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) { el.setAttribute("aria-label", d[el.getAttribute("data-i18n-aria")]); });
    document.querySelectorAll("[data-cv]").forEach(function (a) { a.href = CV[lang]; });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) { el.setAttribute("alt", d[el.getAttribute("data-i18n-alt")]); });
    document.querySelectorAll("[data-lang-toggle]").forEach(function (b) { b.textContent = d.lang_btn; b.setAttribute("aria-label", d.lang_btn_label); });
  }

  function saved() { try { return localStorage.getItem("lang"); } catch (e) { return null; } }
  function save(l) { try { localStorage.setItem("lang", l); } catch (e) {} }

  var lang = saved() === "ru" ? "ru" : "en";
  apply(lang);

  // Mobile: show the Telegram button in the header once the profile button has scrolled above the header
  var head = document.querySelector(".mobile-head");
  var profileBtn = document.querySelector(".profile .btn");
  var headBtn = head && head.querySelector(".head-btn");
  function updateHead() {
    var show = profileBtn.getBoundingClientRect().bottom < head.offsetHeight;
    if (head.classList.contains("is-scrolled") === show) return;
    head.classList.toggle("is-scrolled", show);
    headBtn.setAttribute("aria-hidden", show ? "false" : "true");
    headBtn.tabIndex = show ? 0 : -1;
  }
  if (head && profileBtn && headBtn) {
    window.addEventListener("scroll", updateHead, { passive: true });
    window.addEventListener("resize", updateHead);
    updateHead();
  }

  // Mobile menu: opens the links list in the header panel
  var menuBtn = document.querySelector(".menu-btn");
  var menu = document.getElementById("mobile-menu");
  function setMenu(open) { menu.hidden = !open; menuBtn.setAttribute("aria-expanded", open ? "true" : "false"); }
  if (menuBtn && menu) {
    menuBtn.addEventListener("click", function () { setMenu(menu.hidden); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !menu.hidden) { setMenu(false); menuBtn.focus(); } });
    menu.addEventListener("click", function (e) { if (e.target.closest("a")) setMenu(false); });
    // Click or tap anywhere outside the header panel closes the menu
    document.addEventListener("click", function (e) { if (!menu.hidden && !e.target.closest(".mobile-head")) setMenu(false); });
  }

  document.querySelectorAll("[data-lang-toggle]").forEach(function (b) {
    b.addEventListener("click", function () { lang = lang === "ru" ? "en" : "ru"; apply(lang); save(lang); });
  });
})();

/* Video: no autoplay when the user prefers reduced motion; controls let them start it */
(function () {
  if (!window.matchMedia || !window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  document.querySelectorAll(".case-video").forEach(function (v) {
    v.removeAttribute("autoplay"); v.pause(); v.setAttribute("controls", "");
  });
})();

/* Theme switch (icons in the links block) */
(function () {
  var root = document.documentElement;
  var btns = document.querySelectorAll("[data-theme-set]");
  function mark() {
    var cur = root.getAttribute("data-theme");
    btns.forEach(function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-theme-set") === cur ? "true" : "false"); });
  }
  btns.forEach(function (b) {
    b.addEventListener("click", function () {
      var v = b.getAttribute("data-theme-set");
      root.setAttribute("data-theme", v);
      try { localStorage.setItem("theme", v); } catch (e) {}
      mark();
    });
  });
  mark();
})();
