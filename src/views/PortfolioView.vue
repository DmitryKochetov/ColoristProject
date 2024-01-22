<template>
    <div class="container">
        <div class="portfolio">
            <div class="portfolioTagSet">
                <button v-for="(item, index) in arrayOfTags" :key="index" @click="CHANGEPORTFOLIOSORTITEM(item)"
                    class="portfolioTagSet__tag">{{ item }}</button>
            </div>
            <PortfolioSet />
        </div>
    </div>
</template>
  
<script>
import { mapMutations, mapGetters } from 'vuex';
import PortfolioSet from '../components/PortfolioSet.vue';

export default {
    name: "PortfolioView",
    components: {
        PortfolioSet,
    },
    computed: {
        ...mapGetters(['arrayOfTags']),
    },
    data() {
        return {
            sortItem: '',
        };
    },
    mounted() { },
    methods: {
        ...mapMutations(['CHANGEPORTFOLIOSORTITEM']),
    },
};
</script>
  
<style scoped lang="scss">
.portfolio {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 50px 20px 50px 20px;
    background: repeat url("../assets/mainPage/mainPageBackground.png");

    @media screen and (max-width: 630px) {
        flex-direction: column;
        }
}

.portfolioTagSet {
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
        max-height: 41px;
        cursor: pointer;

        &:hover {
            background: #cda58b;
            color: #f4f0ec;        }

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