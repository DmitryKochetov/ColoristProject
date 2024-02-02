<template>
  <div id="app">
    <div class="mainContainer">
      <div class="content">
        <Header v-if="showHeader" />

        <router-view />
      </div>
      <Footer v-if="getShowFooterFlag" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Header from './blocks/Header.vue'
import Footer from './blocks/Footer.vue'
import { useHead } from '@vueuse/head'
import { reactive, computed } from 'vue'


export default {

 
  name: 'App',

  components: {
    Header,
    Footer,
  },
  data() {
    return {
      showHeader: true,
    }
  },
  computed: {
    ...mapGetters(['getShowFooterFlag']),
  },
  methods: {

  },
  setup() {
    const siteData = reactive({
      title: `Парикмахер-колорист`,
      description: `К вашим услугам - женские, мужские и детские стрижки, оформление усов и бороды, окрашивания любой сложности, а также профессиональный уход за волосами от LEBEL (Счастье для волос). Сестрорецк, Рай в шалаше`,
    })

    useHead({
      title: computed(() => siteData.title),
      meta: [
        {
          name: `description`,
          content: computed(() => siteData.description),
        },
      ],
    })
  },

}

</script>

<style lang = "scss" >

@font-face {
  font-family: 'Literata';
  src: url('./assets/fonts/Literata-VariableFont_opsz\,wght.ttf');
}

@font-face {
  font-family: 'Roboto';
  src: url('./assets/fonts/Roboto-Regular.ttf');
}

* {
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}

a {
  text-decoration: none;
  color: inherit;
}

html, body {
  height: 100%;
}

.container {
  max-width: 100%;
  margin: 0 auto;
}

.mainContainer {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}

.content {
  flex: 1 0 auto;
}

.footer {
  flex: 0 0 auto;
}

.hair {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
    background: repeat url("../src/assets/mainPage/mainPageBackground.png");

    &__heading {
        margin-top: 45px;
        margin-bottom: 35px;
        color: #8a5737;
        font-family: Roboto;
        font-size: 40px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 3px;
        text-align: center;
    }

    &__h2 {
        margin-bottom: 35px;
        margin-top: 20px;
        color: #8a5737;
        font-family: Roboto;
        font-size: 35px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 3px;
        text-align: left;

        @media screen and (max-width: 680px) {
            font-size: 25px;
        }
    }

    &__h3 {
        color: #8a5737;
        font-family: Roboto;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 3px;
        margin-bottom: 25px;
        margin-left: 30px;
    }

    &__box {
        border: #f6e7df 1px solid;
        width: 80%;
        border-radius: 10px;
        background-color: #f6e7df;
        padding: 2% 3% 1% 3%;
        -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
        -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
        box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
        display: flex;
        flex-direction: column;
        margin-bottom: 40px;
    }

    &__box:last-child {
        margin-bottom: 80px;
    }
  }
</style >
