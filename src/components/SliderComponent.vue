<template>
  <div @mouseover="stopAutoPlay" @mouseout="startAutoPlay">
    <div class="sliderWrapper">
      <div
        @click="nextSlide"
        class="projectSlider"
        :style="{ 'margin-left': '-' + 100 * currentSlideIndex + '%' }"
      >
        <SliderItem
          v-for="item in getArticle.sliderItems"
          :key="item.id"
          :item_data="item"
        />
      </div>
      <!-- <div class="sliderButtons"> -->
        <div @click="prevSlide" class="sliderLeftButton">
          <svg
            width="40px"
            height="40px"
            viewBox="0 0 32.00 32.00"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <title>налево</title>
                            <defs></defs>
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
                sketch:type="MSPage"
              >
                <g
                  id="Icon-Set-Filled"
                  sketch:type="MSLayerGroup"
                  transform="translate(-258.000000, -1089.000000)"
                  fill="#E4C7B4"
                >
                  <path
                    d="M281,1106 L270.414,1106 L274.536,1110.12 C274.926,1110.51 274.926,1111.15 274.536,1111.54 C274.145,1111.93 273.512,1111.93 273.121,1111.54 L267.464,1105.88 C267.225,1105.64 267.15,1105.31 267.205,1105 C267.15,1104.69 267.225,1104.36 267.464,1104.12 L273.121,1098.46 C273.512,1098.07 274.145,1098.07 274.536,1098.46 C274.926,1098.86 274.926,1099.49 274.536,1099.88 L270.414,1104 L281,1104 C281.552,1104 282,1104.45 282,1105 C282,1105.55 281.552,1106 281,1106 L281,1106 Z M274,1089 C265.164,1089 258,1096.16 258,1105 C258,1113.84 265.164,1121 274,1121 C282.836,1121 290,1113.84 290,1105 C290,1096.16 282.836,1089 274,1089 L274,1089 Z"
                    id="arrow-left-circle"
                    sketch:type="MSShapeGroup"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div @click="nextSlide" class="sliderRightButton">
          <svg
            width="40px"
            height="40px"
            viewBox="0 0 32.00 32.00"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
            fill="#000000"
            transform="rotate(180)"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <title>направо</title>
              <desc>Created with Sketch Beta.</desc>
              <defs></defs>
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
                sketch:type="MSPage"
              >
                <g
                  id="Icon-Set-Filled"
                  sketch:type="MSLayerGroup"
                  transform="translate(-258.000000, -1089.000000)"
                  fill="#E4C7B4"
                >
                  <path
                    d="M281,1106 L270.414,1106 L274.536,1110.12 C274.926,1110.51 274.926,1111.15 274.536,1111.54 C274.145,1111.93 273.512,1111.93 273.121,1111.54 L267.464,1105.88 C267.225,1105.64 267.15,1105.31 267.205,1105 C267.15,1104.69 267.225,1104.36 267.464,1104.12 L273.121,1098.46 C273.512,1098.07 274.145,1098.07 274.536,1098.46 C274.926,1098.86 274.926,1099.49 274.536,1099.88 L270.414,1104 L281,1104 C281.552,1104 282,1104.45 282,1105 C282,1105.55 281.552,1106 281,1106 L281,1106 Z M274,1089 C265.164,1089 258,1096.16 258,1105 C258,1113.84 265.164,1121 274,1121 C282.836,1121 290,1113.84 290,1105 C290,1096.16 282.836,1089 274,1089 L274,1089 Z"
                    id="arrow-left-circle"
                    sketch:type="MSShapeGroup"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </div>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SliderItem from "./Slider-item.vue";
export default {
  name: "SliderComponent",
  components: {
    SliderItem,
  },
  props: {},
  data() {
    return {
      currentSlideIndex: 0,
      // stopSlideMove: false,
      autoPlay: true,
      autoPlayDelay: 3000,
    };
  },
  computed: {
    ...mapGetters(["getArticle"]),
  },
  methods: {
    prevSlide() {
      if (this.currentSlideIndex > 0) {
        this.currentSlideIndex--;
      }
    },
    nextSlide() {
      if (this.currentSlideIndex >= this.getArticle.sliderItems.length - 1) {
        this.currentSlideIndex = 0;
        return;
      }
      this.currentSlideIndex++;
    },
    startAutoPlay() {
      this.autoPlayInterval = setInterval(() => {
        this.nextSlide();
      }, this.autoPlayDelay);
    },
    stopAutoPlay() {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    },
  },

  mounted() {
    if (this.autoPlay) {
      this.startAutoPlay();
    }
    // let cont = this;
    // if (this.stopSlideMove) {
    //     setInterval(function () {
    //         cont.nextSlide()
    //     }, 3000)
    // }
  },
};
</script>

<style lang="scss" scoped>
.sliderWrapper {
  border-radius: 24px;
  width: 70vw;
  height: auto;
  // width: 600px;
  // height: 600px;
  overflow: hidden;
  // margin: 0 auto;
  position: relative;
  margin-bottom: 20px;
}

.projectSlider {
  display: flex;
  transition: all ease 0.5s;
  // height: 100%;
  // width: 100%;
}

.sliderLeftButton{
    position: absolute;
    top: 46%;
    left: 10px;
}
.sliderRightButton{
    position: absolute;
    top: 46%;
    right: 10px;
}

// .sliderButtons {

//   margin-top: 20px;
//   margin-bottom: 20px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 88px;
// }
</style>
