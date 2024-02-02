<template>
  <div class="container">
    <div class="hair">
      <div class="hair__heading">Окрашивание</div>

      <div class="hair__box">
        <div class="hair__h2">Balayage, Shatush</div>
        <div class="hair__h3">средние: 4500-6000</div>
        <div class="hair__h3">длинные: 5500-7000</div>
        <div class="hair__h2">Airtouch</div>
        <div class="hair__h3">средние: 5000-7500</div>
        <div class="hair__h3">длинные: 7500-10000</div>
      </div>
      <div class="hair__box">
        <div class="hair__h2">Мелирование</div>
        <div class="hair__h3">короткие: 2500-3500</div>
        <div class="hair__h3">средние: 3500-5500</div>
        <div class="hair__h3">длинные: 4500-6500</div>
      </div>
      <div class="hair__box">
        <div class="hair__h2">Выход из черного</div>
        <div class="hair__h3">бережное осветление по всей длине</div>
        <div class="hair__h3">короткие: 3000-4000</div>
        <div class="hair__h3">средние: 4000-6000</div>
        <div class="hair__h3">длинные: 6000-8000</div>
      </div>
      <div class="hair__box">
        <div class="hair__h2">Окрашивание тон в тон</div>
        <div class="hair__h3">короткие: 1500-2400</div>
        <div class="hair__h3">средние: 2500-3500</div>
        <div class="hair__h3">длинные: 3500-5000</div>
      </div>
      <div class="hair__box">
        <div class="hair__h2">Окрашивание корней до 3 см: 1300</div>
      </div>
    </div>
  </div>
</template>

<script>
import { useHead } from '@vueuse/head'

export default {
  name: "HairColoringView",
  components: {},
  computed: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  setup() {
    useHead({
      title: "Цена на окрашивание",
      meta: [
        {
          name: `description`,
          content: "Прайс на окрашивание волос",
        },
      ],
    });
  },
};
</script>

<style scoped lang="scss"></style>
