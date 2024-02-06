<template>
  <div class="containerArticles">
    <div class="articlesSet">
      <div v-for="(article, index) in articlesForCurrentPage" :key="index">
        <ArticleItem :article="article" class="articlesSet__item" />
      </div>
    </div>
    <div class="paginationBar">
      <router-link
        v-for="page in numberOfArticlesPages"
        :to="`/articles/${page}`"
        :key="page"
      >
        <div class="paginationBar__element">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="53"
            height="52"
            viewBox="0 0 53 52"
            fill="none"
          >
            <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
          </svg>
          <div class="paginationBar__number">{{ page }}</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import ArticleItem from "../components/ArticleItem.vue";

export default {
  name: "ArticlesSet",
  components: {
    ArticleItem,
  },
  props: {},
  data() {
    return {
      currentPage: 1,
    };
  },
  computed: {
    ...mapGetters(["getFilteredArticlesSet"]),
    numberOfArticlesPages() {
      return Math.ceil(this.getFilteredArticlesSet.length / 5);
    },
    articlesForCurrentPage() {
      const { currentPage } = this;
      let startIndex = currentPage;
      if(this.getFilteredArticlesSet.length <= 5){
        return this.getFilteredArticlesSet;
      }
      return this.getFilteredArticlesSet.slice(
        (startIndex - 1) * 5,
        (startIndex - 1) * 5 + 5
      );
    },
  },
  watch: {
    $route() {
      const page = this.$route.params.page;
      this.currentPage = +page;
      // // console.log(this.$route.params.page); 
      // this.currentPage = this.$route.params.page;
    },
  },
  methods: {
    ...mapMutations(["CHANGESELECTEDARTICLEID"]),
  },
};
</script>

<style scoped lang="scss">
.articlesSet {
  max-width: 65vw;
  margin: 0 auto;
  // display: grid;
  // grid-template-columns: repeat(auto-fill, minmax(22%, 1fr));
  // grid-template-rows: repeat(auto-fill, minmax(22%, 1fr));
  // grid-template-columns: repeat(auto-fill, minmax(40%, 1fr));
  // grid-gap: 20px;
  columns: 2;
  gap: 24px;
  justify-content: center;
  align-items: center;

  &__item {
    max-width: 100%;
    border-radius: 10px;
    transition: transform 0.2s;
  }

  // @media screen and (max-width: 768px) {
  //   grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  // }

  @media screen and (max-width: 630px) {
    columns: 1;
    max-width: 85vw;
  }
}
</style>
