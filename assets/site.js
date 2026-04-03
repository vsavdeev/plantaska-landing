/**
       * UI strings for RU/EN. Keys match data-i18n / data-i18n-html / data-i18n-aria-label / data-i18n-alt in the markup.
       */
      var I18N_MESSAGES = {
        ru: {
          meta_title: "Plantaska — даты, задачи, бюджет и гости в одном приложении",
          meta_desc:
            "Plantaska — локальное приложение для личных мероприятий: даты и дни, задачи с дедлайнами и напоминаниями, бюджет со статьями и взаиморасчётами, участники с RSVP.",
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
          hero_kicker: "Планирование личных мероприятий: от одной даты до нескольких дней подряд",
          hero_h1: "От идеи — до гостей, задач и бюджета.",
          hero_lead: "Планируйте события без суеты",
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
          feat_event_h: "Имя, даты и вкладки по ситуации",
          feat_event_p:
            "У каждого события — название, иконка типа и акцентный цвет. Дата одна или период из нескольких дней: тогда появляется вкладка «Дни» с задачами по каждому дню. Общий лимит бюджета и валюта задаются при создании; вкладку участников можно сразу не включать, если она пока не нужна.",
          feat_event_pill1: "дата и период",
          feat_event_pill2: "цвет и иконка",
          feat_event_pill3: "обзор и табы",
          feat_event_pills_aria: "Возможности события",
          feat_tasks_title: "Задачи",
          feat_tasks_h: "Дни, дедлайны, локальные напоминания",
          feat_tasks_p:
            "Задача с описанием, статусом (в работе, выполнена, отменена) и привязкой к дню события. Для срока указывается дедлайн; при желании планируется <strong>локальное напоминание</strong> на устройстве. После выполнения можно оставить заметку — например ссылку или итог.",
          feat_tasks_pill1: "статусы",
          feat_tasks_pill2: "дедлайн",
          feat_tasks_pill3: "напоминание",
          feat_budget_title: "Бюджет",
          feat_budget_h: "Статьи расходов и взаиморасчёты",
          feat_budget_p:
            "Общий лимит и список статей: у каждой — сумма, кто платил и кому относится расход. Если включить <strong>взаиморасчёты</strong>, приложение посчитает, кто кому должен, с учётом участников. Прогресс по лимиту видно на экране бюджета.",
          feat_budget_pill1: "лимит",
          feat_budget_pill2: "статьи",
          feat_budget_pill3: "взаиморасчёты",
          feat_guests_title: "Участники",
          feat_guests_h: "Контакты и RSVP",
          feat_guests_p:
            "Имя, телефон, email и Telegram; статусы приглашения и отклика («придёт», «не придёт», приглашён и т.д.). Участники связаны с бюджетом: кто платил и между кем делится расход. Вкладку гостей при создании события можно отключить и включить позже.",
          feat_guests_pill1: "список",
          feat_guests_pill3: "контакты",
          feat_list_title: "Мои события",
          feat_list_h: "Список карточек и данные на устройстве",
          feat_list_p:
            "Все события на одном экране: откройте карточку, чтобы перейти к обзору и вкладкам. Свайп вправо — редактировать, влево — удалить (с подтверждением); потяните список вниз для обновления. Данные хранятся <strong>локально</strong> в приложении на вашем устройстве.",
          feat_list_pill1: "свайпы",
          feat_list_pill2: "обновление",
          feat_list_pill3: "локально",
          screens_section_aria: "Экраны приложения",
          screens_h2: "Экраны приложения",
          screens_intro:
            "Ниже — фрагменты интерфейса: список событий, обзор с вкладками, бюджет, участники, задачи, план по дням и профиль. Ленту можно листать горизонтально; на тач‑экранах полоса прокрутки обычно видна во время движения.",
          shots_gallery_aria: "Галерея скриншотов",
          shots_rail_aria: "Галерея скриншотов, прокрутка в сторону",
          shot1_title: "Список событий",
          shot1_sub:
            "Карточки с датой и статусом; пустой экран подсказывает создать первое событие, иначе — плавающая кнопка «+».",
          shot1_alt: "Скриншот Plantaska: экран «Мои события»",
          shot2_title: "Обзор и вкладки",
          shot2_sub:
            "Сводка по задачам, бюджету и участникам; сверху — название и дата. Вкладки «Дни» и «Бюджет» появляются, когда заданы период или лимит.",
          shot2_alt: "Скриншот: обзор события Plantaska",
          shot3_title: "Бюджет события",
          shot3_sub: "Статьи расходов, прогресс по лимиту; при включённых взаиморасчётах и участниках — кто кому должен.",
          shot3_alt: "Скриншот: бюджет события Plantaska",
          shot4_title: "Участники",
          shot4_sub: "Список с контактами и RSVP; статусы приглашения и отклика отображаются в карточке участника.",
          shot4_alt: "Скриншот: участники события Plantaska",
          shot5_title: "Задачи",
          shot5_sub: "Активные и выполненные блоки, фильтр по дням события, дедлайн и опция локального напоминания.",
          shot5_alt: "Скриншот: задачи события Plantaska",
          shot6_title: "Вкладка «Дни»",
          shot6_sub:
            "Для событий с несколькими датами: карточки по дням, описание со ссылками и задачи, привязанные к выбранному дню.",
          shot6_alt: "Скриншот: экран дней в путешествии Plantaska",
          shot7_title: "Профиль",
          shot7_sub:
            "Имя и контакты профиля (локально), тема оформления, язык интерфейса, повтор онбординга и сведения о версии.",
          shot7_alt: "Скриншот: профиль пользователя Plantaska",
          stores_group_aria: "Ссылки на магазины приложений",
          store_as_aria: "Загрузить в App Store",
          store_gp_aria: "Доступно в Google Play",
          store_as_alt: "Загрузить в App Store",
          store_gp_alt: "Доступно в Google Play",
          how_section_aria: "Как это работает",
          how_h2: "Как устроено планирование в Plantaska",
          how_steps_aria: "Шаги",
          how_step1_t: "Создайте событие",
          how_step1_b:
            "Название, иконка типа мероприятия и акцентный цвет; одна дата или период из нескольких дней. При необходимости задайте лимит бюджета и валюту, включите вкладку участников и режим взаиморасчётов.",
          how_step2_t: "Разложите подготовку",
          how_step2_b:
            "Добавляйте задачи с описанием, привязкой к дню (если дней несколько) и дедлайном. Отмечайте выполнение, при необходимости включайте напоминание на устройстве.",
          how_step3_t: "Держите бюджет и гостей под контролем",
          how_step3_b:
            "Вносите статьи бюджета и смотрите остаток лимита; при включённых взаиморасчётах сверяйтесь с участниками. В списке гостей отмечайте RSVP — данные остаются в контексте этого события.",
          how_card_aria: "Итог по приложению",
          how_card_title: "Итог",
          how_card_h: "Один контекст — одно событие",
          how_card_p:
            "На экране обзора видно, как двигаются задачи, бюджет и участники; дальше вы открываете нужную вкладку. Интерфейс в духе Material Design 3: карточки, акцентный цвет события и спокойная типографика.",
          how_mini1: "Обзор и задачи всегда под рукой",
          how_mini2: "Дни, бюджет и гости — по необходимости",
          how_mini3: "Данные событий на вашем устройстве",
          how_chip1: "сводка",
          how_chip2: "вкладки",
          how_chip3: "локально",
          how_btn_as_aria: "Перейти к блоку загрузки в App Store и Google Play",
          how_btn_gp_aria: "Перейти к блоку загрузки в Google Play",
          faq_section_aria: "Вопросы и ответы",
          faq1_q: "Для каких событий подходит Plantaska?",
          faq1_a:
            "Для личных мероприятий: свадьба, день рождения, юбилей, поездка на несколько дней, вечеринка и другие поводы. В приложении одна и та же схема: событие → задачи (и при необходимости дни), бюджет, участники.",
          faq2_q: "Можно ли вести несколько событий одновременно?",
          faq2_a:
            "Да. У каждого события свой набор задач, статей бюджета и участников; переключаясь между карточками в списке, вы работаете только с выбранным мероприятием.",
          faq3_q: "Чем это лучше заметок и таблиц?",
          faq3_a:
            "Задачи связаны с дедлайнами и днями события, бюджет — с лимитом и статьями, участники — с RSVP. На обзоре видны сводные цифры; детали открываются во вкладках без ручной сборки таблиц.",
          faq4_q: "Можно ли планировать вместе с другими в одном аккаунте?",
          faq4_a:
            "Сейчас Plantaska ориентирована на <strong>личное использование</strong>: данные событий хранятся локально на устройстве, общего облачного аккаунта и одновременного редактирования с другими людьми нет. Обмен деталями удобно вести вне приложения — как вам привычнее.",
          footer_aria: "Контакты и правовая информация",
          footer_tagline: "Планируйте события без суеты",
          footer_privacy: "Политика конфиденциальности — по запросу на почту",
          footer_rights: "Plantaska. Все права защищены."
        },
        en: {
          meta_title: "Plantaska — dates, tasks, budget, and guests in one app",
          meta_desc:
            "Plantaska — a local app for personal events: dates and days, tasks with deadlines and reminders, budget with line items and settling up, guests with RSVP.",
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
          hero_kicker: "Plan personal events: from a single date to several days in a row",
          hero_h1: "From the idea — to guests, tasks, and budget.",
          hero_lead: "Plan events without the chaos",
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
          feat_event_h: "Name, dates, and tabs as you need them",
          feat_event_p:
            "Each event has a name, type icon, and accent color. One date or a multi-day range — then a Days tab appears with tasks per day. Set an overall budget limit and currency when you create the event; you can leave guests off until you need them.",
          feat_event_pill1: "date & range",
          feat_event_pill2: "color & icon",
          feat_event_pill3: "overview & tabs",
          feat_event_pills_aria: "Event capabilities",
          feat_tasks_title: "Tasks",
          feat_tasks_h: "Days, deadlines, local reminders",
          feat_tasks_p:
            "Tasks include a description, status (in progress, done, cancelled), and optional day within the event. Add a deadline; optionally schedule a <strong>local reminder</strong> on your device. After completion, leave a note — e.g. a link or outcome.",
          feat_tasks_pill1: "statuses",
          feat_tasks_pill2: "deadline",
          feat_tasks_pill3: "reminder",
          feat_budget_title: "Budget",
          feat_budget_h: "Expense lines and settling up",
          feat_budget_p:
            "Overall limit and line items: each has an amount, who paid, and how the expense applies. Turn on <strong>settling up</strong> and the app calculates who owes whom, using participants. Progress against the limit is visible on the budget screen.",
          feat_budget_pill1: "limit",
          feat_budget_pill2: "lines",
          feat_budget_pill3: "settle up",
          feat_guests_title: "Guests",
          feat_guests_h: "Contacts and RSVP",
          feat_guests_p:
            "Name, phone, email, and Telegram; invitation and response statuses (“attending”, “not attending”, invited, etc.). Guests tie into the budget: who paid and how costs are shared. You can disable the guests tab when creating an event and enable it later.",
          feat_guests_pill1: "list",
          feat_guests_pill3: "contacts",
          feat_list_title: "My events",
          feat_list_h: "Card list and on-device data",
          feat_list_p:
            "All events on one screen: open a card to go to the overview and tabs. Swipe right to edit, left to delete (with confirmation); pull the list down to refresh. Data is stored <strong>locally</strong> in the app on your device.",
          feat_list_pill1: "swipes",
          feat_list_pill2: "refresh",
          feat_list_pill3: "local",
          screens_section_aria: "App screens",
          screens_h2: "App screens",
          screens_intro:
            "Below are UI fragments: event list, overview with tabs, budget, guests, tasks, multi-day plan, and profile. Scroll the strip horizontally; on touch devices the scrollbar usually appears while you scroll.",
          shots_gallery_aria: "Screenshot gallery",
          shots_rail_aria: "Screenshot gallery, horizontal scroll",
          shot1_title: "Event list",
          shot1_sub:
            "Cards with date and status; an empty state nudges you to create your first event, otherwise a floating “+” button.",
          shot1_alt: "Plantaska screenshot: My events screen",
          shot2_title: "Overview & tabs",
          shot2_sub:
            "Summary for tasks, budget, and guests; title and date at the top. Days and Budget tabs appear when a range or limit is set.",
          shot2_alt: "Screenshot: Plantaska event overview",
          shot3_title: "Event budget",
          shot3_sub: "Expense lines and limit progress; with settling up and participants — who owes whom.",
          shot3_alt: "Screenshot: Plantaska event budget",
          shot4_title: "Guests",
          shot4_sub: "List with contacts and RSVP; invitation and response statuses show on each guest card.",
          shot4_alt: "Screenshot: Plantaska event guests",
          shot5_title: "Tasks",
          shot5_sub: "Active and completed sections, filter by event days, deadlines, and optional local reminders.",
          shot5_alt: "Screenshot: Plantaska event tasks",
          shot6_title: "Days tab",
          shot6_sub:
            "For multi-day events: cards per day, descriptions with links, and tasks tied to the selected day.",
          shot6_alt: "Screenshot: Plantaska multi-day trip screen",
          shot7_title: "Profile",
          shot7_sub:
            "Profile name and contacts (local), theme, interface language, replay onboarding, and version info.",
          shot7_alt: "Screenshot: Plantaska user profile",
          stores_group_aria: "App store links",
          store_as_aria: "Download on the App Store",
          store_gp_aria: "Get it on Google Play",
          store_as_alt: "Download on the App Store",
          store_gp_alt: "Get it on Google Play",
          how_section_aria: "How it works",
          how_h2: "How planning works in Plantaska",
          how_steps_aria: "Steps",
          how_step1_t: "Create an event",
          how_step1_b:
            "Name, event-type icon, and accent color; one date or a multi-day range. Optionally set a budget limit and currency, enable the guests tab and settling up.",
          how_step2_t: "Break down prep",
          how_step2_b:
            "Add tasks with a description, day link (if there are multiple days), and deadlines. Mark progress and turn on on-device reminders when needed.",
          how_step3_t: "Keep budget and guests under control",
          how_step3_b:
            "Add budget lines and watch the remaining limit; with settling up, reconcile with participants. Track RSVP in the guest list — data stays scoped to that event.",
          how_card_aria: "Summary of the app",
          how_card_title: "Summary",
          how_card_h: "One context — one event",
          how_card_p:
            "The overview shows how tasks, budget, and guests move; then you open the tab you need. The UI follows Material Design 3: cards, the event accent color, and calm typography.",
          how_mini1: "Overview and tasks always at hand",
          how_mini2: "Days, budget, and guests when you need them",
          how_mini3: "Your event data stays on your device",
          how_chip1: "summary",
          how_chip2: "tabs",
          how_chip3: "local",
          how_btn_as_aria: "Go to the App Store and Google Play download section",
          how_btn_gp_aria: "Go to the Google Play download section",
          faq_section_aria: "Questions and answers",
          faq1_q: "What kinds of events is Plantaska for?",
          faq1_a:
            "Personal events: weddings, birthdays, anniversaries, multi-day trips, parties, and more. The same flow applies: event → tasks (and days when needed), budget, guests.",
          faq2_q: "Can I run several events at once?",
          faq2_a:
            "Yes. Each event has its own tasks, budget lines, and guests; switching cards in the list works only on the selected event.",
          faq3_q: "How is this better than notes and spreadsheets?",
          faq3_a:
            "Tasks link to deadlines and event days, budget to the limit and line items, guests to RSVP. The overview shows rollups; details live in tabs without hand-built tables.",
          faq4_q: "Can we plan together in one account?",
          faq4_a:
            "Today Plantaska is focused on <strong>personal use</strong>: event data stays locally on the device — there’s no shared cloud account or real-time co-editing with others. Share details outside the app however you prefer.",
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
        document.documentElement.lang = lang === "en" ? "en" : "ru";
        var titleEl = document.getElementById("doc-title");
        var descEl = document.getElementById("meta-desc");
        if (titleEl) titleEl.textContent = i18nT(lang, "meta_title");
        if (descEl) descEl.setAttribute("content", i18nT(lang, "meta_desc"));

        document.querySelectorAll("[data-i18n]").forEach(function (el) {
          var key = el.getAttribute("data-i18n");
          if (!key) return;
          el.textContent = i18nT(lang, key);
        });
        document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
          var key = el.getAttribute("data-i18n-html");
          if (!key) return;
          el.innerHTML = i18nT(lang, key);
        });
        document.querySelectorAll("[data-i18n-aria-label]").forEach(function (el) {
          var key = el.getAttribute("data-i18n-aria-label");
          if (!key) return;
          el.setAttribute("aria-label", i18nT(lang, key));
        });
        document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
          var key = el.getAttribute("data-i18n-alt");
          if (!key) return;
          el.setAttribute("alt", i18nT(lang, key));
        });

        document.querySelectorAll(".lang-btn").forEach(function (btn) {
          var isEn = btn.getAttribute("data-lang") === "en";
          btn.setAttribute("aria-pressed", lang === "en" ? (isEn ? "true" : "false") : isEn ? "false" : "true");
        });

        try {
          localStorage.setItem(I18N_STORAGE_KEY, lang);
        } catch (e) {}
      }

      /** Resolves initial language: ?lang=, localStorage, or browser preference. */
      function resolveInitialLang() {
        try {
          var params = new URLSearchParams(window.location.search);
          var q = (params.get("lang") || "").toLowerCase();
          if (q === "en" || q === "ru") return q;
        } catch (e) {}
        try {
          var stored = localStorage.getItem(I18N_STORAGE_KEY);
          if (stored === "en" || stored === "ru") return stored;
        } catch (e) {}
        var nav = (navigator.language || "").toLowerCase();
        if (nav.indexOf("en") === 0) return "en";
        return "ru";
      }

      /** Binds RU/EN toggles and applies the saved or detected language. */
      function initI18n() {
        var lang = resolveInitialLang();
        applyLocale(lang);
        document.querySelectorAll(".lang-btn").forEach(function (btn) {
          btn.addEventListener("click", function () {
            var next = btn.getAttribute("data-lang");
            if (next === "en" || next === "ru") applyLocale(next);
          });
        });
      }

      initI18n();

      /** Sets the current year in the footer. */
      (function setFooterYear() {
        var y = document.getElementById("y");
        if (y) y.textContent = String(new Date().getFullYear());
      })();

      /** Updates sticky header shadow and --scroll-p for the reading-progress bar (skipped when reduced motion). */
      (function initTopbarScrollState() {
        var topbar = document.querySelector(".topbar");
        if (!topbar) return;
        var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        function tick() {
          var root = document.documentElement;
          var y = root.scrollTop || document.body.scrollTop;
          topbar.classList.toggle("is-scrolled", y > 10);
          if (!reduce) {
            var max = root.scrollHeight - root.clientHeight;
            var p = max > 0 ? y / max : 0;
            topbar.style.setProperty("--scroll-p", String(Math.min(1, Math.max(0, p))));
          }
        }

        tick();
        window.addEventListener("scroll", tick, { passive: true });
        window.addEventListener("resize", tick);
      })();

      /** Closes the mobile nav drawer after navigating via a link. */
      (function initMobileNavDrawer() {
        var panel = document.querySelector(".nav-drawer-panel");
        if (!panel) return;
        panel.addEventListener("click", function (e) {
          var t = e.target;
          if (t && t.tagName === "A") {
            var root = t.closest("details");
            if (root) root.removeAttribute("open");
          }
        });
      })();

      /** Adds .is-visible when blocks enter the viewport (respects reduced motion). */
      (function initScrollReveals() {
        var nodes = document.querySelectorAll(".reveal-on-scroll");
        if (!nodes.length) return;

        function revealAll() {
          nodes.forEach(function (el) {
            el.classList.add("is-visible");
          });
        }

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          revealAll();
          return;
        }

        if (!("IntersectionObserver" in window)) {
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

        nodes.forEach(function (el) {
          io.observe(el);
        });
      })();
