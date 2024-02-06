<template>
  <div class="projectSlider-item">
    <div
      class="sliderImage"
      :style="{ backgroundImage: `url(${item_data.img})` }"
    ></div>
  </div>
</template>

<script>
export default {
  name: "projectSlider-item",
  props: {
    item_data: Object,
    default: () => {},
  },
  data() {
    return {};
  },
  computed: {},
};
</script>

<style lang="scss" scoped>

.sliderImage {
  width: 70vw;
  height: 70vh;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
