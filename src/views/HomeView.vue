<template>
  <div class="home">
    <div class="container">
      <main>
        <div class="mainTopBlock">
          <div class="infoLeft">
            <h1 class="infoLeft__h1">ОКСАНА КОЧЕТОВА</h1>
            <h2 class="infoLeft__h2">Парикмахер - колорист</h2>
          </div>
          <div class="infoRight"></div>
        </div>
        <div class="introduce">
          <h2 class="introduce__h2">
            Здравствуйте! Меня зовут Оксана и я мастер - колорист и парикмахер
          </h2>
        </div>

        <div class="galleryHeading">
          <h2 class="galleryHeading__h2">ОТКРОЙТЕ СВОЙ ИСТИННЫЙ ЦВЕТ</h2>
        </div>
        <div class="galleryWrapper">
          <div class="galleryMainPage">
            <div
              v-for="(item, index) in galleryCardsForMainPage"
              :key="index"
              class="galleryMainPageCard"
            >
              <img
                :src="item.image"
                alt="picture"
                class="galleryMainPageCard__img"
              />
            </div>
          </div>
        </div>
        <div class="navigtionHeading">
          <h1 class="navigtionHeading__h1">КАК МЕНЯ НАЙТИ</h1>
        </div>
        <div class="navigationMap" @click="activateMap()">
          <div class="mapHint" id="mapHint">
            Нажмите на карту, чтобы активировать
          </div>
          <iframe
            id="mapFrame"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A57e5b6d41377697ad9c702c4b94a396976d1c8f848219c69688364d040534e78&amp;
            source=constructor"
            width="100%"
            height="600"
            style="pointer-events: none"
            frameborder="0"
          ></iframe>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "HomeView",
  components: {},
  computed: {
    ...mapGetters(["getProjects"]),
    galleryCardsForMainPage() {
      return this.getProjects.slice(0, 6);
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    activateMap() {
      let mapFrame = document.getElementById("mapFrame");
      let mapHint = document.getElementById("mapHint");
      mapFrame.removeAttribute("style");
      mapHint.setAttribute("style", "display:none");
    },
  },

};
</script>

<style scoped lang="scss">
.mainTopBlock {
  height: 85vh;
  background-color: rgba(234, 218, 197, 0.15);
  background: no-repeat url("../assets/mainPage/mainPageBackground.png");
  display: flex;
  justify-content: space-between;
}

.infoLeft {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 48%;
  padding-top: 194px;
  padding-left: 10%;

  @media screen and (max-width: 630px) {
    margin-top: 60px;
    padding-left: 5%;
  }

  &__h1 {
    color: #8a5737;
    font-family: Literata;
    font-size: 100px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    @media screen and (max-width: 1200px) {
      font-size: 70px;
    }

    @media screen and (max-width: 1024px) {
      font-size: 50px;
    }

    @media screen and (max-width: 650px) {
      font-size: 42px;
    }
  }

  &__h2 {
    color: #8a5737;
    font-family: Literata;
    font-size: 48px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;

    @media screen and (max-width: 1200px) {
      font-size: 38px;
    }

    @media screen and (max-width: 1024px) {
      font-size: 30px;
    }

    @media screen and (max-width: 650px) {
      font-size: 26px;
    }
  }
}

.infoRight {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 48%;
  margin-top: 127px;
  margin-right: 20px;

  background: url("../assets/mainPage/mainPageTopCirclePhoto.png") no-repeat;
  background-position-x: center;
  background-position-y: top;

  @media screen and (max-width: 900px) {
    background-size: contain;
  }
}

.introduce {
  background: rgba(188, 159, 140, 0.3);
  height: 449px;
  padding-left: 20%;
  padding-right: 20%;
  display: flex;
  justify-content: center;
  align-items: center;

  &__h2 {
    color: #513320;
    text-align: center;
    font-family: Literata;
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    @media screen and (max-width: 1200px) {
      font-size: 30px;
    }

    @media screen and (max-width: 1024px) {
      font-size: 20px;
    }
  }

  @media screen and (max-width: 1200px) {
    height: 300px;
  }

  @media screen and (max-width: 1024px) {
    height: 200px;
  }
}

.galleryHeading {
  height: 276px;
  background-color: rgba(234, 218, 197, 0.15);
  background: no-repeat url("../assets/mainPage/mainPageBackground.png");
  padding-left: 10%;
  padding-right: 10%;
  display: flex;
  justify-content: center;
  align-items: center;

  &__h2 {
    color: #8c6f5c;
    font-family: Roboto;
    font-size: 60px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 3px;
    text-align: center;

    @media screen and (max-width: 1200px) {
      font-size: 40px;
    }

    @media screen and (max-width: 1024px) {
      font-size: 30px;
    }
  }
}

.galleryWrapper {
  background: rgba(229, 221, 216, 0.6);
  height: auto;
  padding-top: 50px;
  padding-bottom: 150px;
}

.galleryMainPage {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  row-gap: 3%;

  @media screen and (max-width: 680px) {
    margin-bottom: 400px;
  }
}

.galleryMainPageCard {
  margin: auto;
  max-width: 340px;
  box-shadow: 0px 5px 15px 0px rgba(255, 255, 255, 0.25);

  &__img {
    border-radius: 30px;
    width: 100%;
    height: 100%;
  }
}

.navigtionHeading {
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #8c6f5c;

  &__h1 {
    font-family: Roboto;
    font-size: 60px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 3px;
    text-align: center;

    @media screen and (max-width: 1200px) {
      font-size: 40px;
    }

    @media screen and (max-width: 1024px) {
      font-size: 30px;
    }
  }
}

.navigationMap {
  width: 80vw;
  height: 600px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 120px;
  position: relative;

  @media screen and (max-width: 800px) {
    width: 100vw;
  }
}

.mapHint {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 5px;
  padding: 15px 20px;
  border-radius: 5px;
  background: rgb(255, 255, 255);
  border-width: 1px;
  border-style: solid;
  border-color: rgb(204, 204, 204);
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 3px;
  text-align: center;
  color: #8c6f5c;
}
</style>
