<template>
    <div class="container">
      <div class="hair">
        <div class="hair__heading">Извините, страница не найдена</div>
      </div>
    </div>
  </template>
  
  <script>
  import { useHead } from "@vueuse/head";
  import { mapMutations } from 'vuex';
  
  export default {
    name: "404View",
    components: {},
    computed: {},
    data() {
      return {};
    },
    beforeRouteLeave(to, from, next) {
        this.CHANGEFOOTERSHOWFLAG(true);
        next();
    },
    mounted() {
        this.CHANGEFOOTERSHOWFLAG(false);
    },

 
    methods: {
        ...mapMutations(['CHANGEFOOTERSHOWFLAG']),
    },
    setup() {
      useHead({
        title: "404",
        meta: [
          {
            name: `description`,
            content: "Страница не найдена",
          },
        ],
      });
    },
  };
  </script>
  
  <style scoped lang="scss"></style>
  



