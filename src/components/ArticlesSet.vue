<template>
    <div class="containerArticles">
        <div class="articlesSet">
            <div v-for="(article, index) in getFilteredArticlesSet" :key="index">
                <ArticleItem :article="article" />
            </div>
        </div>
    </div>
</template>
  
<script>
import { mapGetters } from 'vuex';
import ArticleItem from '../components/ArticleItem.vue';

export default {
    name: 'ArticlesSet',
    components: {
        ArticleItem,
    },
    props: {

    },
    computed: {
        ...mapGetters(['getFilteredArticlesSet']),
    },
    methods: {
    },
}
</script>

<style scoped lang="scss">
.articlesSet {
    // width: 60vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

</style>
  