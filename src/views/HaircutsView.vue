<template>
  <div class="container">
    <div class="hair">
      <div class="hair__heading">Стрижки</div>

      <div class="hair__box">
        <div class="hair__h2">Женские стрижки</div>
        <div class="hair__h3">короткие: 650-850</div>
        <div class="hair__h3">средние: 850-1000</div>
        <div class="hair__h3">длинные: 950-1300</div>
        <div class="hair__h3">стрижка челки: 200</div>
      </div>
      <div class="hair__box">
        <div class="hair__h2">Укладка волос/кудри/локоны/выпрямление волос</div>
        <div class="hair__h3">короткие: 1000-1500</div>
        <div class="hair__h3">средние: 1500-2000</div>
        <div class="hair__h3">длинные: 2000-3000</div>
      </div>
      <div class="hair__box">
        <div class="hair__h2">Мужская стрижка: 450-850</div>
        <div class="hair__h2">Оформление бороды/усов: 400/300</div>
        <div class="hair__h2">Камуфляж седины: 700</div>
        <div class="hair__h2">длинный: 950-1300</div>
        <div class="hair__h2">Детская стрижка (до 10 лет): 450-800</div>
      </div>
    </div>
  </div>
</template>

<script>
import { useHead } from "@vueuse/head";

export default {
  name: "HaircutsView",
  components: {},
  computed: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  setup() {
    useHead({
      title: "Цена на стрижки",
      meta: [
        {
          name: `description`,
          content: "Прайс на стрижку волос",
        },
      ],
    });
  },
};
</script>

<style scoped lang="scss"></style>
