<template>
    <div class="articleItem">
        <div class="articleItem__header">{{ article.heading }}</div>
        <img :src="article.image" alt="picture" class="articleItem__image">
        <div class="articleItem__inscription">
            <div class="articleItem__date">{{ article.date }}</div>
                </div>
        <div class="articleItem__text">{{ article.text }}</div>

    </div>
</template>
  
<script>

export default {
    name: 'ArticleItem',
    components: {
    },
    props: {
        article: Object,
    }
}
</script>

<style scoped lang="scss">
    .articleItem {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50vw;

    @media screen and (max-width: 630px) {
        width: 90vw;
    }

    &__header {
        color: #8a5737;
        text-align: center;
        font-family: Roboto;
        font-size: 48px;
        line-height: 125%;
        letter-spacing: 0.36px;
        margin-bottom: 40px;
        
        @media screen and (max-width: 630px) {
            font-size: 38px;
            margin-bottom: 25px;
    }
    }

    &__image {
        border-radius: 62px;
        max-height: 50vh;
    }

    &__text {
        color: #8a5737;
        font-family: Roboto;
        font-size: 22px;
        line-height: 150%;
        letter-spacing: 0.22px;
        margin-bottom: 80px;
    }


    &__inscription {
        display: flex;
        justify-content: space-between;
        margin: 16px 0 28px 0;
        color: #8a5737;
        font-family: Roboto;
        font-size: 16px;
        line-height: 150%;
        letter-spacing: 0.16px;
        text-transform: capitalize;
    }
}

</style>