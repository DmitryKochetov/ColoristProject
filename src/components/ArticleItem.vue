<template>
  <div class="articleItem">
    <div class="articleItem__upperBox">
      <div class="articleItem__header">{{ article.heading }}</div>
      <div class="articleItem__arrow">
        <router-link
          to="/SingleArticle"
          @click="CHANGESELECTEDARTICLEID(article.id)"
        >
          <svg
            width="32px"
            height="32px"
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
              <title>arrow-right-square</title>
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
                  transform="translate(-466.000000, -985.000000)"
                  fill="#E4C7B4"
                >
                  <path
                    d="M489.535,1001.879 L483.879,1007.54 C483.488,1007.93 482.855,1007.93 482.465,1007.54 C482.074,1007.14 482.074,1006.51 482.465,1006.12 L486.586,1002 L476,1002 C475.447,1002 475,1001.552 475,1001 C475,1000.447 475.447,1000 476,1000 L486.586,1000 L482.465,995.879 C482.074,995.488 482.074,994.854 482.465,994.465 C482.855,994.074 483.488,994.074 483.879,994.465 L489.535,1000.121 C489.775,1000.361 489.85,1000.689 489.795,1001 C489.85,1001.311 489.775,1001.639 489.535,1001.879 L489.535,1001.879 Z M494,985 L470,985 C467.791,985 466,986.791 466,989 L466,1013 C466,1015.21 467.791,1017 470,1017 L494,1017 C496.209,1017 498,1015.21 498,1013 L498,989 C498,986.791 496.209,985 494,985 L494,985 Z"
                    id="arrow-right-square"
                    sketch:type="MSShapeGroup"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </router-link>
      </div>
    </div>
    <img :src="article.image" alt="picture" class="articleItem__image" />
    <div class="articleItem__inscription">
      <div class="articleItem__date">{{ article.date }}</div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "ArticleItem",
  components: {},
  props: {
    article: Object,
  },
  methods: {
    ...mapMutations(["CHANGESELECTEDARTICLEID"]),
  },
};
</script>

<style scoped lang="scss">
.articleItem {
  display: flex;
  flex-direction: column;
  width: 100%;
  break-inside: avoid;

  &__upperBox {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  &__arrow {
    height: 32px;
    transition: all 0.5s;
  }

  &__arrow:hover {
    transform: scale(1.2);
  }

  &__header {
    color: #8a5737;
    text-align: left;
    font-family: Roboto;
    font-size: 20px;
    line-height: 125%;
    letter-spacing: 0.36px;
    margin-bottom: 25px;
    max-width: 70%;

    @media screen and (max-width: 630px) {
      margin-bottom: 25px;
    }
  }

  &__image {
    border-radius: 12px;
    max-width: 100%;
    background-size: cover;
    background-position: center;
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
