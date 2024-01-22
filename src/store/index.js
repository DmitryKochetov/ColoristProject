import { createStore } from 'vuex'

export default createStore({
  state: {
    showFooter: true,
    // sortProjectsItem: "",
    sortPhotoItem: "",
    sortArticlesItem: "",
    projects: [
      {
        id: 1,
        sliderItems: [
          {id: 1, name: 'img1', img: require("@/assets/portfolio/p1bix-1.jpg"),},
          {id: 2, name: 'img2', img: require("@/assets/portfolio/p1bix-2.jpg"),},
        ],
        image: require("@/assets/portfolio/p1bix-1.jpg"),
        projectName: "",
        desc: "",
        tag: "Окрашивание",
        text: "",
      },
      {
        id: 2,
        sliderItems: [
          {id: 1, name: 'img1', img: require("@/assets/portfolio/p1bix-1.jpg"),},
          {id: 2, name: 'img2', img: require("@/assets/portfolio/p1bix-2.jpg"),},
        ],
        image: require("@/assets/portfolio/p1bix-1.jpg"),
        projectName: "",
        desc: "",
        tag: "Окрашивание",
        text: "",
      },
      {
        id: 3,
        sliderItems: [
          {id: 1, name: 'img1', img: require("@/assets/portfolio/p1bix-1.jpg"),},
          {id: 2, name: 'img2', img: require("@/assets/portfolio/p1bix-2.jpg"),},
        ],
        image: require("@/assets/portfolio/p1bix-1.jpg"),
        projectName: "",
        desc: "",
        tag: "Мужская стрижка",
        text: "",
      },
      {
        id: 4,
        sliderItems: [
          {id: 1, name: 'img1', img: require("@/assets/portfolio/p1bix-1.jpg"),},
          {id: 2, name: 'img2', img: require("@/assets/portfolio/p1bix-2.jpg"),},
        ],
        image: require("@/assets/portfolio/p1bix-1.jpg"),
        projectName: "",
        desc: "",
        tag: "Женская стрижка",
        text: "",
      },
      {
        id: 5,
        sliderItems: [
          {id: 1, name: 'img1', img: require("@/assets/portfolio/p1bix-1.jpg"),},
          {id: 2, name: 'img2', img: require("@/assets/portfolio/p1bix-2.jpg"),},
        ],
        image: require("@/assets/portfolio/p1bix-1.jpg"),
        projectName: "",
        desc: "",
        tag: "Женская стрижка",
        text: "",
      },
      {
        id: 6,
        sliderItems: [
          {id: 1, name: 'img1', img: require("@/assets/portfolio/p1bix-1.jpg"),},
          {id: 2, name: 'img2', img: require("@/assets/portfolio/p1bix-2.jpg"),},
        ],
        image: require("@/assets/portfolio/p1bix-1.jpg"),
        projectName: "",
        desc: "",
        tag: "Эйртач",
        text: "",
      },
      {
        id: 7,
        sliderItems: [
          {id: 1, name: 'img1', img: require("@/assets/portfolio/p1bix-1.jpg"),},
          {id: 2, name: 'img2', img: require("@/assets/portfolio/p1bix-2.jpg"),},
        ],
        image: require("@/assets/portfolio/p1bix-1.jpg"),
        projectName: "",
        desc: "",
        tag: "Эйртач",
        text: "",
      },
      {
        id: 8,
        sliderItems: [
          {id: 1, name: 'img1', img: require("@/assets/portfolio/p1bix-1.jpg"),},
          {id: 2, name: 'img2', img: require("@/assets/portfolio/p1bix-2.jpg"),},
        ],
        image: require("@/assets/portfolio/p1bix-1.jpg"),
        projectName: "",
        desc: "",
        tag: "Ботокс",
        text: "",
      },
      {
        id: 9,
        sliderItems: [
          {id: 1, name: 'img1', img: require("@/assets/portfolio/p1bix-1.jpg"),},
          {id: 2, name: 'img2', img: require("@/assets/portfolio/p1bix-2.jpg"),},
        ],
        image: require("@/assets/portfolio/p1bix-1.jpg"),
        projectName: "",
        desc: "",
        tag: "Ботокс",
        text: "",
      },
      {
        id: 10,
        sliderItems: [
          {id: 1, name: 'img1', img: require("@/assets/portfolio/p1bix-1.jpg"),},
          {id: 2, name: 'img2', img: require("@/assets/portfolio/p1bix-2.jpg"),},
        ],
        image: require("@/assets/portfolio/p1bix-1.jpg"),
        projectName: "",
        desc: "",
        tag: "Уход за волосами",
        text: "",
      },
      {
        id: 11,
        sliderItems: [
          {id: 1, name: 'img1', img: require("@/assets/portfolio/p1bix-1.jpg"),},
          {id: 2, name: 'img2', img: require("@/assets/portfolio/p1bix-2.jpg"),},
        ],
        image: require("@/assets/portfolio/p1bix-1.jpg"),
        projectName: "",
        desc: "",
        tag: "Уход за волосами",
        text: "",
      },
    ],

    articles: [
      {
        id: 1,
        sliderItems: [
          {id: 1, name: 'img1', img: require("@/assets/Articles/botoks1-1.jpg"),},
          {id: 2, name: 'img2', img: require("@/assets/Articles/botoks1-2.jpg"),},
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
          {id: 1, name: 'img1', img: require("@/assets/Articles/schastye1-1.jpg"),},
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
          {id: 1, name: 'img1', img: require("@/assets/Articles/bixiplast1-1.jpg"),},
          {id: 1, name: 'img1', img: require("@/assets/Articles/bixiplast1-2.jpg"),},
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
          {id: 1, name: 'img1', img: require("@/assets/Articles/airtouch1-1.jpg"),},
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
    ],
  },
  getters: {
    getShowFooterFlag(state){
      return state.showFooter;
    },
    getProjects(state){
      return state.projects;
    },
    getArticles(state){
      return state.articles;
    },
    arrayOfTagsArticles(state){
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
  },
  mutations: {
    CHANGEFOOTERSHOWFLAG(state, showFooter){
      state.showFooter = showFooter;
    },
    CHANGEPORTFOLIOSORTITEM(state, sortPhotoItem) {
      state.sortPhotoItem = sortPhotoItem;
    },
    CHANGEARTICLESSORTITEM(state, sortArticlesItem) {
      state.sortArticlesItem = sortArticlesItem;
    },
  },
  actions: {
  },
  modules: {
  }
})
