<template>
  <section class="dropDownMenuWrapper"
    :class="{ 'dropDownMenuWrapper--dark': isDarkMode, 'dropDownMenuWrapper--noTitle': !menuTitle }">

    <button class="dropDownMenuButton" ref="menu" @click="openClose" :class="{ 'dropDownMenuButton--dark': isDarkMode }">
      {{ menuTitle }}
    </button>

    <div class="iconWrapper" :class="{ 'iconWrapper--noTitle': !menuTitle }">
      <div class="bar1" :class="{ 'bar1--open': isOpen, 'bar1--dark': isDarkMode }" />
      <div class="bar2" :class="{ 'bar2--open': isOpen, 'bar2--dark': isDarkMode }" />
      <div class="bar3" :class="{ 'bar3--open': isOpen, 'bar3--dark': isDarkMode }" />
    </div>

    <section class="dropdownMenu" v-if="isOpen" :class="{ 'dropdownMenu--dark': isDarkMode }">
      <div class="menuArrow" :class="{ 'menuArrow--dark': isDarkMode }" />
      <slot />
    </section>

  </section>
</template>

<script>

export default {
  props: ["darkMode", "menuTitle"],
  data() {
    return {
      isOpen: false,
      isDarkMode: false
    }
  },

  methods: {

    openClose() {
      var _this = this

      const closeListerner = (e) => {

        if (_this.catchOutsideClick(e, _this.$refs.menu))
          window.removeEventListener('click', closeListerner), _this.isOpen = false

      }

      window.addEventListener('click', closeListerner)

      this.isOpen = !this.isOpen

    },

    catchOutsideClick(event, dropdown) {


      if (dropdown == event.target)
        return false

      if (this.isOpen && dropdown != event.target)
        return true

    }

  },
  watch: {
    darkMode(val) {

      if (!val)
        this.isDarkMode = false


      if (val == 'force')
        this.isDarkMode = true


      if (val == 'auto' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
        this.isDarkMode = true

    }
  }

}

</script>

<style lang="scss">
.dropDownMenuWrapper {
  position: relative;
  // width: 100px;
  // height: 80px;
  border-radius: 12px;
  background: white;
  border: 1px solid #eee;
  box-shadow: 8px 8px 0 0 rgba(black, .04);
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  z-index: 20;

  * {
    box-sizing: border-box;
    text-align: left;
  }

  .dropDownMenuButton {
    border: none;
    font-family: Roboto;
    font-size: inherit;
    background: none;
    outline: none;
    border-radius: 4px;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    padding: 0 70px 0 20px;
    margin: 0;
    line-height: 1;
    width: 100%;
    height: 100%;
    z-index: 20;
    cursor: pointer;
  }

  .dropDownMenuButton--dark {
    color: #eee;
  }

  .iconWrapper {
    width: 25px;
    height: 25px;
    position: absolute;
    right: 30px;
    top: 50%;
    transform: translate(0, -50%);
    z-index: 1;

    .bar1 {
      width: 100%;
      max-width: 32px;
      height: 3px;
      background: #cda58b;
      position: absolute;
      top: 50%;
      left: 50%;
      border-radius: 9999px;
      transform: translate(-50%, calc(-50% - 8px));
      transition: all 0.2s ease;
    }

    .bar1--dark {
      background: #eee;
    }

    .bar1--open {
      transform: translate(-50%, -50%) rotate(45deg);
      margin-top: 0;
      background: #cda58b;
    }

    .bar2 {
      width: 100%;
      max-width: 32px;
      height: 3px;
      background: #cda58b;
      position: absolute;
      top: 50%;
      left: 50%;
      border-radius: 9999px;
      opacity: 1;
      transform: translate(-50%, -50%);
      transition: all 0.2s ease;
    }

    .bar2--dark {
      background: #eee;
    }

    .bar2--open {
      opacity: 0;
    }

    .bar3 {
      width: 100%;
      max-width: 32px;
      height: 3px;
      background: #cda58b;
      position: absolute;
      top: 50%;
      left: 50%;
      border-radius: 9999px;
      transform: translate(-50%, calc(-50% + 8px));
      transition: all 0.2s ease;
    }

    .bar3--dark {
      background: #eee;
    }

    .bar3--open {
      top: 50%;
      transform: translate(-50%, -50%) rotate(-45deg);
      background: #cda58b;
    }

  }

  .iconWrapper--noTitle {
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    width: auto;
    height: auto;
    transform: none;
  }

  .dropdownMenu {
    position: absolute;
    top: 110%;
    width: 100%;
    min-width: 300px;
    min-height: 10px;
    border-radius: 8px;
    border: 1px solid #cead97;
    box-shadow: 10px 10px 0 0 rgba(black, .03);
    background: white;
    padding: 10px 30px;
    animation: menu 0.3s ease forwards;
    z-index: 20;

    .menuArrow {
      width: 20px;
      height: 20px;
      position: absolute;
      top: -10px;
      left: 20px;
      border-left: 1px solid #cead97;
      border-top: 1px solid #cead97;
      background: white;
      transform: rotate(45deg);
      border-radius: 4px 0 0 0;
    }

    .menuArrow--dark {
      background: #333;
      border: none;
    }

    .option {
      width: 100%;
      border-bottom: 1px solid #eee;
      padding: 20px 0;
      cursor: pointer;
      font-family: Roboto;
      color: #8A5737;
      position: relative;
      z-index: 20;
      transition: all 0.3s;

      &:last-child {
        border-bottom: 0;
      }

      * {
        color: inherit;
        text-decoration: none;
        background: none;
        border: 0;
        padding: 0;
        outline: none;
        cursor: pointer;
      }

    }

    .option:hover {
      cursor: pointer;
      transform: scale(1.05);
      margin-left: 2%;
      text-shadow: #8A5737 0px 0 1px;
    }

    .desc {
      opacity: 0.5;
      display: block;
      width: 100%;
      font-family: Roboto;
      font-size: 14px;
      margin: 3px 0 0 0;
      cursor: default;
    }

  }

  .dropdownMenu--dark {
    background: #333;
    border: none;

    .option {
      border-bottom: 1px solid #888;
    }

    * {
      color: #eee;
    }

  }

  @keyframes menu {
    from {
      transform: translate3d(0, 30px, 0)
    }

    to {
      transform: translate3d(0, 20px, 0)
    }
  }

}

.dropDownMenuWrapper--noTitle {
  padding: 0;
  width: 55px;
  height: 55px;
}

.dropDownMenuWrapper--dark {
  background: #333;
  border: none;
}</style>
