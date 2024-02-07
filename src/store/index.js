import { createStore } from "vuex";

export default createStore({
  state: {
    showFooter: true,
    // sortProjectsItem: "",
    sortPhotoItem: "",
    sortArticlesItem: "",
    selectedArticleId: 1,
    projects: [
      {
        id: 1,
        sliderItems: [],
        image: require("@/assets/portfolio/p1bix-1.jpg"),
        projectName: "",
        desc: "",
        tag: "Биксипластия",
        text: "",
      },
      {
        id: 2,
        sliderItems: [],
        image: require("@/assets/portfolio/okras1.jpg"),
        projectName: "",
        desc: "",
        tag: "Окрашивание",
        text: "",
      },
      {
        id: 3,
        sliderItems: [],
        image: require("@/assets/portfolio/okras2.jpg"),
        projectName: "",
        desc: "",
        tag: "Окрашивание",
        text: "",
      },
      {
        id: 4,
        sliderItems: [],
        image: require("@/assets/portfolio/okras3.jpg"),
        projectName: "",
        desc: "",
        tag: "Окрашивание",
        text: "",
      },
      {
        id: 5,
        sliderItems: [],
        image: require("@/assets/portfolio/okras4.jpg"),
        projectName: "",
        desc: "",
        tag: "Окрашивание",
        text: "",
      },
      {
        id: 6,
        sliderItems: [],
        image: require("@/assets/portfolio/airtouch1.jpg"),
        projectName: "",
        desc: "",
        tag: "Airtouch",
        text: "",
      },
      {
        id: 7,
        sliderItems: [],
        image: require("@/assets/portfolio/airtouch2.jpg"),
        projectName: "",
        desc: "",
        tag: "Airtouch",
        text: "",
      },
      {
        id: 8,
        sliderItems: [],
        image: require("@/assets/portfolio/airtouch3.jpg"),
        projectName: "",
        desc: "",
        tag: "Airtouch",
        text: "",
      },
      {
        id: 9,
        sliderItems: [],
        image: require("@/assets/portfolio/airtouch4.jpg"),
        projectName: "",
        desc: "",
        tag: "Airtouch",
        text: "",
      },
      {
        id: 10,
        sliderItems: [],
        image: require("@/assets/portfolio/bix2.jpg"),
        projectName: "",
        desc: "",
        tag: "Биксипластия",
        text: "",
      },
      {
        id: 11,
        sliderItems: [],
        image: require("@/assets/portfolio/botox1.jpg"),
        projectName: "",
        desc: "",
        tag: "Ботокс для волос",
        text: "",
      },
      {
        id: 12,
        sliderItems: [],
        image: require("@/assets/portfolio/botox2.jpg"),
        projectName: "",
        desc: "",
        tag: "Ботокс для волос",
        text: "",
      },
      {
        id: 13,
        sliderItems: [],
        image: require("@/assets/portfolio/detstrizh1.jpg"),
        projectName: "",
        desc: "",
        tag: "Детская стрижка",
        text: "",
      },
      {
        id: 14,
        sliderItems: [],
        image: require("@/assets/portfolio/kabinet1.jpg"),
        projectName: "",
        desc: "",
        tag: "Мой кабинет",
        text: "",
      },
      {
        id: 15,
        sliderItems: [],
        image: require("@/assets/portfolio/kabinet2.jpg"),
        projectName: "",
        desc: "",
        tag: "Мой кабинет",
        text: "",
      },
      {
        id: 16,
        sliderItems: [],
        image: require("@/assets/portfolio/kabinet3.jpg"),
        projectName: "",
        desc: "",
        tag: "Мой кабинет",
        text: "",
      },
      {
        id: 17,
        sliderItems: [],
        image: require("@/assets/portfolio/kabinet4.jpg"),
        projectName: "",
        desc: "",
        tag: "Мой кабинет",
        text: "",
      },
      {
        id: 18,
        sliderItems: [],
        image: require("@/assets/portfolio/keratin1.jpg"),
        projectName: "",
        desc: "",
        tag: "Кератиновое выпрямление",
        text: "",
      },
      {
        id: 19,
        sliderItems: [],
        image: require("@/assets/portfolio/keratin2.jpg"),
        projectName: "",
        desc: "",
        tag: "Кератиновое выпрямление",
        text: "",
      },
      {
        id: 20,
        sliderItems: [],
        image: require("@/assets/portfolio/melirovanie1.jpg"),
        projectName: "",
        desc: "",
        tag: "Мелирование",
        text: "",
      },
      {
        id: 21,
        sliderItems: [],
        image: require("@/assets/portfolio/melirovanie2.jpg"),
        projectName: "",
        desc: "",
        tag: "Мелирование",
        text: "",
      },
      {
        id: 22,
        sliderItems: [],
        image: require("@/assets/portfolio/strizhka1.jpg"),
        projectName: "",
        desc: "",
        tag: "Женская стрижка",
        text: "",
      },
      {
        id: 23,
        sliderItems: [],
        image: require("@/assets/portfolio/strizhka2.jpg"),
        projectName: "",
        desc: "",
        tag: "Женская стрижка",
        text: "",
      },
      {
        id: 24,
        sliderItems: [],
        image: require("@/assets/portfolio/tonir1.jpg"),
        projectName: "",
        desc: "",
        tag: "Тонирование",
        text: "",
      },
      {
        id: 25,
        sliderItems: [],
        image: require("@/assets/portfolio/tonir2.jpg"),
        projectName: "",
        desc: "",
        tag: "Тонирование",
        text: "",
      },
      {
        id: 26,
        sliderItems: [],
        image: require("@/assets/portfolio/uklad1.jpg"),
        projectName: "",
        desc: "",
        tag: "Укладка",
        text: "",
      },
    ],

    articles: [
      {
        id: 1,
        sliderItems: [
          {
            id: 1,
            name: "img1",
            img: require("@/assets/Articles/botoks1-1.jpg"),
          },
          {
            id: 2,
            name: "img2",
            img: require("@/assets/Articles/botoks1-2.jpg"),
          },
        ],
        image: require("@/assets/Articles/botoks1-2.jpg"),
        label: "",
        heading: "Ботокс для волос",
        date: "",
        link: "#",
        text: `Ботокс для волос - это лечебная процедура, направленная на улучшение структуры волос, восстановление и питание.
        После процедуры волосы перестают быть пушистыми и пористыми, приобретая блеск и гладкость.
        Эффект сохраняется от 1 до 3 мес.`,
        tag: "Ботокс",
        summary: "",
      },
      {
        id: 2,
        sliderItems: [
          {
            id: 1,
            name: "img1",
            img: require("@/assets/Articles/schastye1-1.jpg"),
          },
        ],
        image: require("@/assets/Articles/schastye1-1.jpg"),
        label: "",
        heading: "Абсолютное счастье",
        date: "",
        link: "#",
        text: `Абсолютное счастье для волос от Lebel - питает, увлажняет, восстанавливает.
        Придает блеск, способствует устранению сухости и ломкости волос.
        `,
        tag: "Счастье для волос",
        summary: "",
      },
      {
        id: 3,
        sliderItems: [
          {
            id: 1,
            name: "img1",
            img: require("@/assets/Articles/bixiplast1-1.jpg"),
          },
          {
            id: 2,
            name: "img1",
            img: require("@/assets/Articles/bixiplast1-2.jpg"),
          },
        ],
        image: require("@/assets/Articles/bixiplast1-2.jpg"),
        label: "",
        heading: "Биксипластия",
        date: "",
        link: "#",
        text: `Биксипластия – эффективная процедура, которая обеспечивает выпрямление, восстановление и глубокое питание.
        Процедура придаёт блеск вашим волосам, делая их послушными и гладкими.
        Эффект сохраняется на волосах в среднем 3-6 месяцев.
        Продолжительность процедуры - 2-4 часа, в зависимости от длины и густоты волос.`,
        tag: "Биксипластия",
        summary: "",
      },
      {
        id: 4,
        sliderItems: [
          {
            id: 1,
            name: "img1",
            img: require("@/assets/Articles/airtouch1-1.jpg"),
          },
          {
            id: 2,
            name: "img1",
            img: require("@/assets/portfolio/airtouch1.jpg"),
          },
          {
            id: 3,
            name: "img1",
            img: require("@/assets/portfolio/airtouch2.jpg"),
          },
          {
            id: 4,
            name: "img1",
            img: require("@/assets/portfolio/airtouch3.jpg"),
          },
          {
            id: 4,
            name: "img1",
            img: require("@/assets/portfolio/airtouch4.jpg"),
          },
        ],
        image: require("@/assets/Articles/airtouch1-1.jpg"),
        label: "",
        heading: "AIRTOUCH",
        date: "",
        link: "#",
        text: `AIRTOUCH позволяет получить максимально естественный результат окрашивания. Без явных желтых или оранжевых тонов, по максимуму без четких переходов. Помогает уйти от ежемесячного окрашивания корней.
        Прекрасная техника окрашивания, позволяющая делать коррекцию не чаще чем через 3-6 месяцев.`,
        tag: "AIRTOUCH (Эйртач)",
        summary: "",
      },
      {
        id: 5,
        sliderItems: [
          {
            id: 1,
            name: "img1",
            img: require("@/assets/Articles/okras1-1.jpg"),
          },
          {
            id: 2,
            name: "img1",
            img: require("@/assets/Articles/okras1-2.jpg"),
          },
        ],
        image: require("@/assets/Articles/okras1-1.jpg"),
        label: "",
        heading: "Однотонное окрашивание волос",
        date: "",
        link: "#",
        text: `Однотонное окрашивание волос - это отличный способ изменить свой образ и добавить яркости и стиля вашим волосам. Эта техника окрашивания используется для создания равномерного и однородного цвета волос, который может быть как естественным, так и экспериментальным.
        Однотонное окрашивание предлагает широкий выбор оттенков, от классических натуральных цветов до смелых и ярких. Независимо от того, хотите ли вы обновить свой текущий цвет волос или полностью сменить его, я умею работать с различными оттенками и посоветую вам наиболее подходящий вариант.
      
        Процесс однотонного окрашивания волос начинается с определения желаемого цвета. Краситель смешивается, чтобы получить цвет, который вы выбрали, и затем равномерно наносится на волосы. Это обеспечивает равномерное покрытие и насыщенность цвета.
        Однотонное окрашивание волос также позволяет вам улучшить состояние ваших волос и придать им блеск. Красители для окрашивания волос содержат специальные ухаживающие компоненты, которые защищают ваши волосы и делают их мягкими и шелковистыми.
      
        После окрашивания важно правильно ухаживать за своими волосами. Используйте специальные шампуни и кондиционеры для окрашенных волос, чтобы сохранить яркость цвета и предотвратить выцветание. Также рекомендуется регулярно использовать питательные маски и сыворотки, чтобы восстановить и укрепить волосы.
      
        Я предлагаю вам профессиональное однотонное окрашивание волос и помогу вам выбрать идеальный оттенок, чтобы создать потрясающий образ. Я использую только качественные красители и обеспечиваю безопасность ваших волос. Приходите, чтобы сделать  вашу мечту о новом цвете волос реальностью!`,
        tag: "Окрашивание",
        summary: "",
      },
      {
        id: 6,
        sliderItems: [
          {
            id: 1,
            name: "img1",
            img: require("@/assets/Articles/testImg1.png"),
          },
          {
            id: 2,
            name: "img1",
            img: require("@/assets/Articles/testImg2.png"),
          },
        ],
        image: require("@/assets/Articles/testImg1.png"),
        label: "",
        heading: "Тестовая статья 2",
        date: "",
        link: "#",
        text: `это текст к тестовой статье`,
        tag: "тест",
        summary: "",
      },
      {
        id: 7,
        sliderItems: [
          {
            id: 1,
            name: "img1",
            img: require("@/assets/Articles/testImg1.png"),
          },
          {
            id: 2,
            name: "img1",
            img: require("@/assets/Articles/testImg2.png"),
          },
        ],
        image: require("@/assets/Articles/testImg1.png"),
        label: "",
        heading: "Тестовая статья 3",
        date: "",
        link: "#",
        text: `это текст к тестовой статье`,
        tag: "тест",
        summary: "",
      },
      {
        id: 8,
        sliderItems: [
          {
            id: 1,
            name: "img1",
            img: require("@/assets/Articles/testImg1.png"),
          },
          {
            id: 2,
            name: "img1",
            img: require("@/assets/Articles/testImg2.png"),
          },
        ],
        image: require("@/assets/Articles/testImg1.png"),
        label: "",
        heading: "Тестовая статья 4",
        date: "",
        link: "#",
        text: `это текст к тестовой статье`,
        tag: "тест",
        summary: "",
      },
      {
        id: 9,
        sliderItems: [
          {
            id: 1,
            name: "img1",
            img: require("@/assets/Articles/testImg1.png"),
          },
          {
            id: 2,
            name: "img1",
            img: require("@/assets/Articles/testImg2.png"),
          },
        ],
        image: require("@/assets/Articles/testImg1.png"),
        label: "",
        heading: "Тестовая статья 5",
        date: "",
        link: "#",
        text: `это текст к тестовой статье`,
        tag: "тест",
        summary: "",
      },
      {
        id: 10,
        sliderItems: [
          {
            id: 1,
            name: "img1",
            img: require("@/assets/Articles/testImg1.png"),
          },
          {
            id: 2,
            name: "img1",
            img: require("@/assets/Articles/testImg2.png"),
          },
        ],
        image: require("@/assets/Articles/testImg1.png"),
        label: "",
        heading: "Тестовая статья 6",
        date: "",
        link: "#",
        text: `это текст к тестовой статье`,
        tag: "тест",
        summary: "",
      },
      {
        id: 11,
        sliderItems: [
          {
            id: 1,
            name: "img1",
            img: require("@/assets/Articles/testImg1.png"),
          },
          {
            id: 2,
            name: "img1",
            img: require("@/assets/Articles/testImg2.png"),
          },
        ],
        image: require("@/assets/Articles/testImg1.png"),
        label: "",
        heading: "Тестовая статья 7",
        date: "",
        link: "#",
        text: `это текст к тестовой статье`,
        tag: "тест",
        summary: "",
      },
      {
        id: 12,
        sliderItems: [
          {
            id: 1,
            name: "img1",
            img: require("@/assets/Articles/testImg1.png"),
          },
          {
            id: 2,
            name: "img1",
            img: require("@/assets/Articles/testImg2.png"),
          },
        ],
        image: require("@/assets/Articles/testImg1.png"),
        label: "",
        heading: "Тестовая статья 8",
        date: "",
        link: "#",
        text: `это текст к тестовой статье`,
        tag: "тест",
        summary: "",
      },
      {
        id: 13,
        sliderItems: [
          {
            id: 1,
            name: "img1",
            img: require("@/assets/Articles/testImg1.png"),
          },
          {
            id: 2,
            name: "img1",
            img: require("@/assets/Articles/testImg2.png"),
          },
        ],
        image: require("@/assets/Articles/testImg1.png"),
        label: "",
        heading: "Тестовая статья 9",
        date: "",
        link: "#",
        text: `это текст к тестовой статье`,
        tag: "тест",
        summary: "",
      },
    ],
  },
  getters: {
    getShowFooterFlag(state) {
      return state.showFooter;
    },
    getProjects(state) {
      return state.projects;
    },
    getArticles(state) {
      return state.articles;
    },
    arrayOfTagsArticles(state) {
      return Array.from(new Set(state.articles.map((item) => item.tag)));
    },
    arrayOfTags(state) {
      return Array.from(new Set(state.projects.map((item) => item.tag)));
    },
    getFilteredPhotoSet(state) {
      if (state.sortPhotoItem === "") {
        return state.projects;
      }
      return state.projects.filter((el) => el.tag === state.sortPhotoItem);
    },
    getFilteredArticlesSet(state) {
      if (state.sortArticlesItem === "") {
        return state.articles;
      }
      return state.articles.filter((el) => el.tag === state.sortArticlesItem);
    },
    getArticle(state) {
      return state.articles.find(function (elem) {
        return elem.id === state.selectedArticleId;
      });
    },
  },
  mutations: {
    CHANGEFOOTERSHOWFLAG(state, showFooter) {
      state.showFooter = showFooter;
    },
    CHANGEPORTFOLIOSORTITEM(state, sortPhotoItem) {
      state.sortPhotoItem = sortPhotoItem;
    },
    CHANGEARTICLESSORTITEM(state, sortArticlesItem) {
      state.sortArticlesItem = sortArticlesItem;
    },
    CHANGESELECTEDARTICLEID(state, selectedArticleId) {
      state.selectedArticleId = selectedArticleId;
    },
  },
  actions: {},
  modules: {},
});
