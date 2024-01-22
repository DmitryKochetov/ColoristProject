<template>
    <div class="containerPortfolio">
        <div class="portfolioSet">
            <div v-for="(project, index) in getFilteredPhotoSet" :key="index">
                <img :src="project.image" alt="picture" class="portfolioSet__photo" @click="showImage(project.image)">
            </div>
        </div>
        <div class="bigImage" id="imagePopup">
            <span class="bigImage__closeBtn" @click="closePopup()">×</span>
            <img src="" alt="Image" id="bigImagePopup">
        </div>
    </div>
</template>
  
<script>
import { mapGetters } from 'vuex';

export default {
    name: 'Blog-List',
    components: {
    },
    props: {

    },
    computed: {
        ...mapGetters(['getFilteredPhotoSet']),
    },
    methods: {
        showImage(src) {
            console.log(src);
            let imagePopup = document.getElementById("bigImagePopup");
            imagePopup.src = src;
            document.getElementById("imagePopup").style.display = "block";
        },
        closePopup() {
            document.getElementById("imagePopup").style.display = "none";
        },
    },
}
</script>

<style scoped lang="scss">
.portfolioSet {
    width: 90%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    grid-gap: 20px;
    justify-content: center;
    align-items: center;

    &__photo {
        width: 100%;
        border-radius: 10px;
        transition: transform 0.2s;
    }

    &__photo:hover {
        -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
        -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
        box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
        transform: scale(1.03);
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
}

.bigImage{
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);

    &__closeBtn {
        position: absolute;
        top: 10px;
        right: 10px;
        font-family: Roboto;
        font-size: 30px;
        color: white;
        cursor: pointer;
    }
    &__closeBtn:hover{
        transform: scale(1.5);
    }
}

#bigImagePopup {
    display: block;
    max-width: 80%;
    max-height: 80%;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
  