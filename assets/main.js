/**
 * Plantaska landing runtime (defer): i18n tables, locale DOM updates, scroll reveals, header progress, drawer close-on-tap.
 * I18N keys match data-i18n / data-i18n-html / data-i18n-aria-label / data-i18n-alt in index.html.
 */
var I18N_MESSAGES = {
  ru: {
    meta_title: "Plantaska — праздник и поездка: задачи, бюджет, гости",
    meta_desc:
      "Plantaska — приложение для личных праздников и поездок: задачи, бюджет, гости и напоминания. Всё в одном событии, данные на телефоне.",
    brand_aria: "Plantaska — на главную",
    logo_alt: "Логотип Plantaska",
    brand_tagline: "Планируйте события без суеты",
    nav_aria: "Навигация",
    nav_product: "Продукт",
    nav_features: "Возможности",
    nav_how: "Как это работает",
    nav_drawer_open: "Открыть меню",
    nav_drawer_panel: "Меню на мобильном",
    lang_group_aria: "Язык интерфейса",
    lang_ru: "RU",
    lang_en: "EN",
    hero_kicker: "Для свадьбы, дня рождения или поездки на несколько дней",
    hero_h1: "Планируй события от путешествий до свадьбы",
    hero_lead: "Задачи, деньги и список гостей рядом, без таблиц и хаоса в заметках",
    hero_cta_aria: "Основные действия",
    hero_dl_aria: "Перейти к кнопкам App Store и Google Play",
    hero_dl: "Скачать приложение",
    hero_inside_aria: "Посмотреть возможности",
    hero_inside: "Что внутри",
    hero_faq_aria: "Открыть ответы на вопросы",
    phone_aria: "Превью экрана события в стиле приложения Plantaska",
    mock_title: "Свадьба",
    mock_date: "15 июля 2025",
    mock_tabs_aria: "Вкладки события",
    mock_tab_overview: "Обзор",
    mock_tab_budget: "Бюджет",
    mock_tab_guests: "Участники",
    mock_tab_tasks: "Задачи",
    mock_info_title: "Информация о событии",
    mock_label_date: "Дата",
    mock_value_date: "15 июля 2025",
    mock_label_budget: "Бюджет",
    mock_value_budget: "500\u00a0000\u00a0₽",
    mock_tasks_title: "Задачи",
    mock_tasks_sub: "7 из 12 выполнено",
    mock_budget_line_title: "Бюджет",
    mock_budget_line_sub: "320\u00a0000 / 500\u00a0000\u00a0₽",
    mock_guests_title: "Участники",
    mock_guests_sub: "24 из 40 придут",
    bento_aria: "Ключевые возможности",
    feat_event_title: "Событие",
    feat_event_h: "Имя, даты и вкладки",
    feat_event_p:
      "Одна дата или несколько дней — тогда появятся «Дни» и задачи по дню. Цвет, иконка, бюджет и гости — по желанию.",
    feat_event_pill1: "дата и период",
    feat_event_pill2: "цвет и иконка",
    feat_event_pill3: "обзор и табы",
    feat_event_pills_aria: "Возможности события",
    feat_tasks_title: "Задачи",
    feat_tasks_h: "Сроки и напоминания",
    feat_tasks_p:
      "Список дел по событию: день (если дней несколько), дедлайн и по желанию <strong>напоминание на телефоне</strong>.",
    feat_tasks_pill1: "статусы",
    feat_tasks_pill2: "дедлайн",
    feat_tasks_pill3: "напоминание",
    feat_budget_title: "Бюджет",
    feat_budget_h: "Лимит, статьи, «кто кому должен»",
    feat_budget_p:
      "Вносите расходы и видите остаток лимита. Включите <strong>взаиморасчёты</strong> — приложение подскажет баланс между участниками.",
    feat_budget_pill1: "лимит",
    feat_budget_pill2: "статьи",
    feat_budget_pill3: "взаиморасчёты",
    feat_guests_title: "Участники",
    feat_guests_h: "Контакты и кто придёт",
    feat_guests_p:
      "Список гостей с контактами и статусом ответа. Участники связаны с бюджетом, вкладку можно включить позже.",
    feat_guests_pill1: "список",
    feat_guests_pill3: "контакты",
    feat_list_title: "Мои события",
    feat_list_h: "Все планы в одном списке",
    feat_list_p:
      "Карточки событий на одном экране. Данные хранятся <strong>только на вашем телефоне</strong> — без облака и общего аккаунта.",
    feat_list_pill1: "свайпы",
    feat_list_pill2: "обновление",
    feat_list_pill3: "локально",
    screens_section_aria: "Экраны приложения",
    screens_h2: "Как выглядит в телефоне",
    screens_intro: "Реальные экраны приложения. Листайте вбок — как в галерее.",
    shots_gallery_aria: "Галерея скриншотов",
    shots_rail_aria: "Галерея скриншотов, прокрутка в сторону",
    shot1_title: "Список событий",
    shot1_sub: "Все события списком; пустой экран предлагает создать первое.",
    shot1_alt: "Скриншот Plantaska: экран «Мои события»",
    shot2_title: "Обзор и вкладки",
    shot2_sub: "Сводка сверху; вкладки «Дни» и «Бюджет» — когда нужны.",
    shot2_alt: "Скриншот: обзор события Plantaska",
    shot3_title: "Бюджет события",
    shot3_sub: "Статьи расходов и остаток лимита; при взаиморасчётах — баланс между людьми.",
    shot3_alt: "Скриншот: бюджет события Plantaska",
    shot4_title: "Участники",
    shot4_sub: "Контакты и RSVP в карточке каждого гостя.",
    shot4_alt: "Скриншот: участники события Plantaska",
    shot5_title: "Задачи",
    shot5_sub: "Сделано и в работе; фильтр по дням, сроки и напоминания.",
    shot5_alt: "Скриншот: задачи события Plantaska",
    shot6_title: "Вкладка «Дни»",
    shot6_sub: "Несколько дней — план по дням, заметки и задачи к выбранной дате.",
    shot6_alt: "Скриншот: экран дней в путешествии Plantaska",
    shot7_title: "Профиль",
    shot7_sub: "Тема, язык, контакты профиля и версия приложения.",
    shot7_alt: "Скриншот: профиль пользователя Plantaska",
    stores_group_aria: "Ссылки на магазины приложений",
    store_as_aria: "Загрузить в App Store",
    store_gp_aria: "Доступно в Google Play",
    store_as_alt: "Загрузить в App Store",
    store_gp_alt: "Доступно в Google Play",
    how_section_aria: "Как это работает",
    how_h2: "Три простых шага",
    how_steps_aria: "Шаги",
    how_step1_t: "Событие",
    how_step1_b: "Название, дата или несколько дней, цвет. При желании — лимит бюджета и список гостей.",
    how_step2_t: "Задачи",
    how_step2_b: "Разложите подготовку по делам, срокам и напоминаниям — в том числе по дням поездки.",
    how_step3_t: "Деньги и гости",
    how_step3_b: "Следите за бюджетом и ответами гостей — всё привязано к этому событию.",
    how_card_aria: "Итог по приложению",
    how_card_title: "Итог",
    how_card_h: "Одно событие — один экран обзора",
    how_card_p:
      "Сводка по задачам, деньгам и гостям наверху; детали — во вкладках. Понятный интерфейс в стиле Material Design.",
    how_mini1: "Сводка и задачи сразу на виду",
    how_mini2: "Дни, бюджет и гости — когда нужно",
    how_mini3: "Данные остаются на телефоне",
    how_chip1: "сводка",
    how_chip2: "вкладки",
    how_chip3: "локально",
    how_btn_as_aria: "Перейти к блоку загрузки в App Store и Google Play",
    how_btn_gp_aria: "Перейти к блоку загрузки в Google Play",
    faq_section_aria: "Вопросы и ответы",
    faq1_q: "Для каких событий подходит Plantaska?",
    faq1_a:
      "Свадьба, день рождения, поездка, вечеринка — любой личный повод. Схема одна: событие, задачи, бюджет, гости.",
    faq2_q: "Можно ли вести несколько событий одновременно?",
    faq2_a:
      "Да. У каждого события свои задачи, деньги и гости; в списке выбираете карточку — и работаете только с ней.",
    faq3_q: "Чем это лучше заметок и таблиц?",
    faq3_a: "Всё связано: сроки, лимит денег, кто придёт. Сводка на одном экране — без ручных таблиц.",
    faq4_q: "Можно ли планировать вместе с другими в одном аккаунте?",
    faq4_a:
      "Это приложение для <strong>одного человека на одном телефоне</strong>: данные не в облаке, совместного редактирования нет. Договаривайтесь с близкими как удобно — в мессенджере или на словах.",
    footer_aria: "Контакты и правовая информация",
    footer_tagline: "Планируйте события без суеты",
    footer_privacy: "Политика конфиденциальности — по запросу на почту",
    footer_rights: "Plantaska. Все права защищены."
  },
  en: {
    meta_title: "Plantaska — parties and trips: tasks, budget, guests",
    meta_desc:
      "Plantaska — for birthdays, weddings, and multi-day trips: tasks, budget, guests, and reminders in one event. Data stays on your phone.",
    brand_aria: "Plantaska — home",
    logo_alt: "Plantaska logo",
    brand_tagline: "Plan events without the chaos",
    nav_aria: "Navigation",
    nav_product: "Product",
    nav_features: "Features",
    nav_how: "How it works",
    nav_drawer_open: "Open menu",
    nav_drawer_panel: "Mobile menu",
    lang_group_aria: "Interface language",
    lang_ru: "RU",
    lang_en: "EN",
    hero_kicker: "For a wedding, birthday, or a multi-day trip",
    hero_h1: "Plan events from trips to weddings",
    hero_lead: "Tasks, money, and your guest list together — no messy notes or spreadsheets",
    hero_cta_aria: "Primary actions",
    hero_dl_aria: "Go to App Store and Google Play download buttons",
    hero_dl: "Download the app",
    hero_inside_aria: "See what’s inside",
    hero_inside: "What’s inside",
    hero_faq_aria: "Open FAQ answers",
    phone_aria: "Preview of an event screen in the Plantaska app style",
    mock_title: "Wedding",
    mock_date: "July 15, 2025",
    mock_tabs_aria: "Event tabs",
    mock_tab_overview: "Overview",
    mock_tab_budget: "Budget",
    mock_tab_guests: "Guests",
    mock_tab_tasks: "Tasks",
    mock_info_title: "Event information",
    mock_label_date: "Date",
    mock_value_date: "July 15, 2025",
    mock_label_budget: "Budget",
    mock_value_budget: "500,000 ₽",
    mock_tasks_title: "Tasks",
    mock_tasks_sub: "7 of 12 done",
    mock_budget_line_title: "Budget",
    mock_budget_line_sub: "320,000 / 500,000 ₽",
    mock_guests_title: "Guests",
    mock_guests_sub: "24 of 40 attending",
    bento_aria: "Key features",
    feat_event_title: "Event",
    feat_event_h: "Name, dates, and tabs",
    feat_event_p:
      "One date or several — then you get Days and tasks per day. Color, icon, budget, and guests are optional.",
    feat_event_pill1: "date & range",
    feat_event_pill2: "color & icon",
    feat_event_pill3: "overview & tabs",
    feat_event_pills_aria: "Event capabilities",
    feat_tasks_title: "Tasks",
    feat_tasks_h: "Deadlines and reminders",
    feat_tasks_p:
      "A to-do list for the event: day (if there are several), deadline, and an optional <strong>phone reminder</strong>.",
    feat_tasks_pill1: "statuses",
    feat_tasks_pill2: "deadline",
    feat_tasks_pill3: "reminder",
    feat_budget_title: "Budget",
    feat_budget_h: "Limit, lines, who owes whom",
    feat_budget_p:
      "Track spending and what’s left of the limit. Turn on <strong>settling up</strong> to see balances between people.",
    feat_budget_pill1: "limit",
    feat_budget_pill2: "lines",
    feat_budget_pill3: "settle up",
    feat_guests_title: "Guests",
    feat_guests_h: "Contacts and who’s coming",
    feat_guests_p:
      "Guest list with contacts and RSVP. Linked to the budget; you can turn the tab on later.",
    feat_guests_pill1: "list",
    feat_guests_pill3: "contacts",
    feat_list_title: "My events",
    feat_list_h: "Every plan in one list",
    feat_list_p:
      "Event cards on one screen. Data stays <strong>only on your phone</strong> — no cloud, no shared account.",
    feat_list_pill1: "swipes",
    feat_list_pill2: "refresh",
    feat_list_pill3: "local",
    screens_section_aria: "App screens",
    screens_h2: "What it looks like on your phone",
    screens_intro: "Real app screens. Swipe sideways like a gallery.",
    shots_gallery_aria: "Screenshot gallery",
    shots_rail_aria: "Screenshot gallery, horizontal scroll",
    shot1_title: "Event list",
    shot1_sub: "All events in a list; empty state suggests creating the first one.",
    shot1_alt: "Plantaska screenshot: My events screen",
    shot2_title: "Overview & tabs",
    shot2_sub: "Summary up top; Days and Budget tabs when you need them.",
    shot2_alt: "Screenshot: Plantaska event overview",
    shot3_title: "Event budget",
    shot3_sub: "Spending lines and limit left; with settle-up — balances between people.",
    shot3_alt: "Screenshot: Plantaska event budget",
    shot4_title: "Guests",
    shot4_sub: "Contacts and RSVP on each guest card.",
    shot4_alt: "Screenshot: Plantaska event guests",
    shot5_title: "Tasks",
    shot5_sub: "Done vs in progress; filter by day, deadlines, reminders.",
    shot5_alt: "Screenshot: Plantaska event tasks",
    shot6_title: "Days tab",
    shot6_sub: "Multi-day plan: notes per day and tasks for the day you pick.",
    shot6_alt: "Screenshot: Plantaska multi-day trip screen",
    shot7_title: "Profile",
    shot7_sub: "Theme, language, profile details, and app version.",
    shot7_alt: "Screenshot: Plantaska user profile",
    stores_group_aria: "App store links",
    store_as_aria: "Download on the App Store",
    store_gp_aria: "Get it on Google Play",
    store_as_alt: "Download on the App Store",
    store_gp_alt: "Get it on Google Play",
    how_section_aria: "How it works",
    how_h2: "Three simple steps",
    how_steps_aria: "Steps",
    how_step1_t: "Event",
    how_step1_b: "Name it, pick a date or several days, choose a color. Add a budget cap and guest list if you like.",
    how_step2_t: "Tasks",
    how_step2_b: "Break prep into to-dos, dates, and reminders — including per day on a trip.",
    how_step3_t: "Money & guests",
    how_step3_b: "Watch spending and RSVPs — everything stays tied to this event.",
    how_card_aria: "Summary of the app",
    how_card_title: "Summary",
    how_card_h: "One event — one overview screen",
    how_card_p:
      "Tasks, money, and guests at a glance; details live in tabs. Clear Material-style layout.",
    how_mini1: "Summary and tasks up front",
    how_mini2: "Days, budget, guests when needed",
    how_mini3: "Data stays on your phone",
    how_chip1: "summary",
    how_chip2: "tabs",
    how_chip3: "local",
    how_btn_as_aria: "Go to the App Store and Google Play download section",
    how_btn_gp_aria: "Go to the Google Play download section",
    faq_section_aria: "Questions and answers",
    faq1_q: "What kinds of events is Plantaska for?",
    faq1_a:
      "Weddings, birthdays, trips, parties — any personal occasion. Same flow: event, tasks, budget, guests.",
    faq2_q: "Can I run several events at once?",
    faq2_a:
      "Yes. Each event has its own tasks, money, and guests — pick a card in the list and work on that one only.",
    faq3_q: "How is this better than notes and spreadsheets?",
    faq3_a: "It’s connected: deadlines, spending limits, who’s coming. One summary screen — no DIY spreadsheets.",
    faq4_q: "Can we plan together in one account?",
    faq4_a:
      "It’s for <strong>one person on one phone</strong>: no cloud sync, no shared editing. Coordinate with family and friends however you already do — chat, calls, in person.",
    footer_aria: "Contact and legal",
    footer_tagline: "Plan events without the chaos",
    footer_privacy: "Privacy policy — available on request via email",
    footer_rights: "Plantaska. All rights reserved."
  }
};

var I18N_STORAGE_KEY = "plantaska-lang";

/** Returns the string for the active locale, falling back to Russian. */
function i18nT(lang, key) {
  var pack = I18N_MESSAGES[lang] || I18N_MESSAGES.ru;
  var s = pack[key];
  if (s != null && s !== "") return s;
  return I18N_MESSAGES.ru[key] != null ? I18N_MESSAGES.ru[key] : "";
}

/** Applies locale to the DOM, document title, meta description, and html[lang]. */
function applyLocale(lang) {
  if (lang !== "en" && lang !== "ru") lang = "ru";
  var docEl = document.documentElement;
  docEl.lang = lang === "en" ? "en" : "ru";
  var titleEl = document.getElementById("doc-title");
  var descEl = document.getElementById("meta-desc");
  if (titleEl) titleEl.textContent = i18nT(lang, "meta_title");
  if (descEl) descEl.setAttribute("content", i18nT(lang, "meta_desc"));

  var tr = function (key) {
    return i18nT(lang, key);
  };
  var bindings = [
    { sel: "[data-i18n]", attr: "data-i18n", apply: function (el, key) { el.textContent = tr(key); } },
    { sel: "[data-i18n-html]", attr: "data-i18n-html", apply: function (el, key) { el.innerHTML = tr(key); } },
    {
      sel: "[data-i18n-aria-label]",
      attr: "data-i18n-aria-label",
      apply: function (el, key) {
        el.setAttribute("aria-label", tr(key));
      }
    },
    { sel: "[data-i18n-alt]", attr: "data-i18n-alt", apply: function (el, key) { el.setAttribute("alt", tr(key)); } }
  ];
  bindings.forEach(function (b) {
    document.querySelectorAll(b.sel).forEach(function (el) {
      var key = el.getAttribute(b.attr);
      if (key) b.apply(el, key);
    });
  });

  var isEn = lang === "en";
  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.setAttribute("aria-pressed", (btn.getAttribute("data-lang") === "en") === isEn ? "true" : "false");
  });

  try {
    localStorage.setItem(I18N_STORAGE_KEY, lang);
  } catch (e) {}
}

/** Resolves initial language: ?lang=, localStorage, or browser preference. */
function resolveInitialLang() {
  try {
    var q = (new URLSearchParams(window.location.search).get("lang") || "").toLowerCase();
    if (q === "en" || q === "ru") return q;
  } catch (e) {}
  try {
    var stored = localStorage.getItem(I18N_STORAGE_KEY);
    if (stored === "en" || stored === "ru") return stored;
  } catch (e) {}
  var nav = (navigator.language || "").toLowerCase();
  return nav.indexOf("en") === 0 ? "en" : "ru";
}

/** Wires RU/EN toggles (call once). */
function bindLanguageSwitchers() {
  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var next = btn.getAttribute("data-lang");
      if (next === "en" || next === "ru") applyLocale(next);
    });
  });
}

/**
 * Sticky header height for anchor scroll offset (mobile needs explicit top, not centered block).
 * @returns {number}
 */
function getTopbarAnchorOffset() {
  var header = document.querySelector(".topbar");
  if (!header) return 0;
  return Math.ceil(header.getBoundingClientRect().height);
}

/**
 * Narrow viewports: scroll so target top sits just below sticky header (start of block).
 * Wide: keep previous behavior — vertically centered.
 * @param {HTMLElement} el
 * @param {boolean} smooth
 */
function scrollToHashTarget(el, smooth) {
  var behavior = smooth ? "smooth" : "auto";
  var gap = 12;
  var preferStart = window.matchMedia("(max-width: 859px)").matches;

  if (preferStart) {
    var y = el.getBoundingClientRect().top + window.pageYOffset - getTopbarAnchorOffset() - gap;
    window.scrollTo({ top: Math.max(0, y), behavior: behavior });
    return;
  }

  el.scrollIntoView({ behavior: behavior, block: "center" });
}

/**
 * Clicks on same-page #links: mobile aligns block start under header; desktop centers.
 * @param {boolean} smooth - false when prefers-reduced-motion
 */
function bindInPageAnchorCenterScroll(smooth) {
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var href = a.getAttribute("href");
      if (!href || href === "#") return;
      var isMobile = window.matchMedia("(max-width: 859px)").matches;
      /* Mobile reliability first: keep native hash navigation (no JS interception). */
      if (isMobile) return;

      var behavior = smooth ? "smooth" : "auto";

      if (href === "#top") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: behavior });
        return;
      }

      var id = decodeURIComponent(href.slice(1));
      if (!id) return;
      var el = document.getElementById(id);
      if (!el) return;

      e.preventDefault();
      var run = function () {
        scrollToHashTarget(el, smooth);
      };
      /* Drawer close changes layout: delay by 2 frames for stable mobile offset. */
      if (a.closest(".nav-drawer")) {
        requestAnimationFrame(function () {
          requestAnimationFrame(run);
        });
      } else {
        run();
      }
    });
  });
}

/**
 * Single bootstrap: i18n, footer year, topbar scroll/progress, drawer close-on-nav, scroll reveals.
 * Runs after DOM parse (use defer on script tag).
 */
function initLandingApp() {
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  applyLocale(resolveInitialLang());
  bindLanguageSwitchers();
  bindInPageAnchorCenterScroll(!reduceMotion);

  var yearEl = document.getElementById("y");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  var topbar = document.querySelector(".topbar");
  if (topbar) {
    function topbarTick() {
      var root = document.documentElement;
      var scrollY = root.scrollTop || document.body.scrollTop;
      topbar.classList.toggle("is-scrolled", scrollY > 10);
      if (!reduceMotion) {
        var max = root.scrollHeight - root.clientHeight;
        var p = max > 0 ? scrollY / max : 0;
        topbar.style.setProperty("--scroll-p", String(Math.min(1, Math.max(0, p))));
      }
    }
    topbarTick();
    window.addEventListener("scroll", topbarTick, { passive: true });
    window.addEventListener("resize", topbarTick);
  }

  var drawerPanel = document.querySelector(".nav-drawer-panel");
  if (drawerPanel) {
    drawerPanel.addEventListener("click", function (e) {
      var target = e.target;
      if (target && target.nodeType === 3) target = target.parentElement;
      var link = target && target.closest ? target.closest("a") : null;
      if (link) {
        var detailsRoot = link.closest("details");
        if (detailsRoot) detailsRoot.removeAttribute("open");
      }
    });
  }

  var revealNodes = document.querySelectorAll(".reveal-on-scroll");
  if (!revealNodes.length) return;

  function revealAll() {
    revealNodes.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealAll();
    return;
  }

  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { root: null, rootMargin: "0px 0px -8% 0px", threshold: 0.06 }
  );
  revealNodes.forEach(function (el) {
    io.observe(el);
  });
}

initLandingApp();
