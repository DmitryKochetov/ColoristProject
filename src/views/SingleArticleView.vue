<template>
    <div class="container">
        <div class="hair">
            <h2 class="hair__heading">{{ getArticle.heading }}</h2>
            <div class="hair__box articleBox">
                <SliderComponent></SliderComponent>
                <p class="hair__h3">{{ getArticle.text }}</p>
                
            </div>
            
        </div>

    </div>
</template>
  
<script>
import { mapMutations, mapGetters } from 'vuex';
import SliderComponent from '../components/SliderComponent.vue';


export default {

    name: 'SingleArticle',
    components: {
        SliderComponent,
    },
    props: {

    },
    data() {
        return {
            sortItem: '',
            filteredArticlesArray: [],
        }
    },
    computed: {
        ...mapGetters(['getArticle']),
    },
    methods: {
        ...mapMutations(['CHANGEARTICLESSORTITEM']),
    },

}
</script>
  

<style lang="scss">
.hair__heading {
    font-size: 32px;
    margin-top: 2vh;
    margin-bottom: 1vh;
}

.articleBox{
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>
  