<template>
  <!-- <div class="backwrapper"> -->
    <div class="container">
      <div class="articles">
        <div class="articlesTagSet">
          <button
            v-for="(item, index) in arrayOfTagsArticles"
            :key="index"
            @click="CHANGEARTICLESSORTITEM(item)"
            class="articlesTagSet__tag"
          >
            {{ item }}
          </button>
        </div>
        <ArticlesSet class="articlesBox" />
      </div>
    </div>
  <!-- </div> -->
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import ArticlesSet from "../components/ArticlesSet.vue";
import { useHead } from "@vueuse/head";

export default {
  name: "ArticlesView",
  components: {
    ArticlesSet,
  },
  computed: {
    ...mapGetters(["arrayOfTagsArticles"]),
  },
  data() {
    return {
      sortItem: "",
    };
  },

  mounted() {},
  methods: {
    ...mapMutations(["CHANGEARTICLESSORTITEM"]),
  },
  setup() {
    useHead({
      title: "Статьи",
      meta: [
        {
          name: `description`,
          content: "Статьи об окрашивании, стрижках, процедурах",
        },
      ],
    });
  },
};
</script>

<style scoped lang="scss">
.articles {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 50px 5vw 50px 20px;
  background: repeat url("../assets/mainPage/mainPageBackground.png");

  @media screen and (max-width: 630px) {
    flex-direction: column;
    padding: 30px 2vw 0 2vw;
  }
}

.backwrapper {
  background: repeat url("../assets/mainPage/mainPageBackground.png");
}

.articlesTagSet {
  max-width: 25vw;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  height: fit-content;

  @media screen and (max-width: 630px) {
    max-width: 80%;
    margin-bottom: 20px;
  }

  &__tag {
    display: flex;
    padding: 9px 30px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
    border: none;
    background: #f4f0ec;
    color: #8a5737;
    text-align: center;
    font-family: Roboto;
    font-size: 18px;
    line-height: 125%;
    letter-spacing: 0.36px;
    max-height: 61px;
    cursor: pointer;

    &:hover {
      background: #cda58b;
      color: #f4f0ec;
    }

    &.active {
      background: #cda58b;
      color: #f4f0ec;
    }

    @media screen and (max-width: 880px) {
      font-size: 14px;
      padding: 4px 15px;
    }
  }
}
</style>
