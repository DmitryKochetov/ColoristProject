<template>
  <div class="backWrapper">
    <div class="container">
      <div class="calculator">
        <div class="calculator__heading">Калькулятор окрашивания волос</div>
        <div class="calculator__typeInput">
          <label for="">
            <div class="calculator__h2">Вид окрашивания</div>
            <select v-model="selectedType">
              <option disabled value="">Нажмите для выбора</option>
              <option value="2000">Однотонное окрашивание</option>
              <option value="1500">Тонирование</option>
              <option value="5000">Эйртач</option>
            </select>
          </label>
        </div>

        <div class="calculator__hairLongRadio">
          <div class="calculator__h2">Длина волос</div>
          <div class="calculator__centerInput">
            <div class="form_radio_btn">
              <input type="radio" id="hairLongRadio01" value="1000" v-model="hairLong" />
              <label for="hairLongRadio01">Короткие</label>
            </div>

            <div class="form_radio_btn">
              <input type="radio" id="hairLongRadio02" value="2000" v-model="hairLong" />
              <label for="hairLongRadio02">Средние</label>
            </div>
            <div class="form_radio_btn">
              <input type="radio" id="hairLongRadio03" value="3000" v-model="hairLong" />
              <label for="hairLongRadio03">Длинные</label>
            </div>
          </div>
        </div>

        <div class="calculator__hairThickness">
          <div class="calculator__h2">Густота волос</div>
          <div class="calculator__centerInput">
            <div class="form_radio_btn">
              <input type="radio" id="hairThicknessRadio01" value="1500" v-model="hairThickness" />
              <label for="hairThicknessRadio01">Густые</label>
            </div>
            <div class="form_radio_btn">
              <input type="radio" id="hairThicknessRadio02" value="1000" v-model="hairThickness" />
              <label for="hairThicknessRadio02">Средние</label>
            </div>
            <div class="form_radio_btn">
              <input type="radio" id="hairThicknessRadio03" value="500" v-model="hairThickness" />
              <label for="hairThicknessRadio03">Тонкие</label>
            </div>
          </div>
        </div>
        <div class="calculator__result">
          Примерная цена окрашивания: {{ calculateHairColouringPrice() }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { useHead } from '@vueuse/head'

export default {
  name: "CalculatorView",
  components: {},
  computed: {},
  data() {
    return {
      selectedType: "",
      hairLong: "",
      hairThickness: "",
    };
  },
  mounted() { },
  methods: {
    calculateHairColouringPrice() {
      if (
        this.selectedType > 0 &&
        this.hairLong > 0 &&
        this.hairThickness > 0
      ) {
        return (
          Number(this.hairLong) +
          Number(this.hairThickness) +
          Number(this.selectedType)
        );
      } else return "";
    },
  },
  setup() {
    useHead({
      title: "Калькулятор",
      meta: [
        {
          name: `description`,
          content: "Калькулятор окрашивания",
        },
      ],
    });
  },
};
</script>

<style scoped lang="scss">

.backWrapper{
  background: repeat url("../assets/mainPage/mainPageBackground.png");
}
.calculator {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80vw;
  // height: 70vh;
  margin: 0 auto;
  gap: 20px;
  

  @media screen and (max-width: 680px) {
    width: 92vw;
  }

  &__heading {
    margin-top: 20px;
    color: #8a5737;
    font-family: Roboto;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 3px;
    text-align: center;
  }

  &__h2 {
    // margin-top: 20px;
    margin-bottom: 15px;
    color: #8a5737;
    font-family: Roboto;
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 3px;
    text-align: center;

    @media screen and (max-width: 680px) {
      font-size: 25px;
    }
  }

  &__centerInput {
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 480px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }

  }

  &__hairLongRadio {
    border: #f6e7df 1px solid;
    width: 80%;
    border-radius: 10px;
    background-color: #f6e7df;
    padding: 1%;
    -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

  }

  &__hairThickness {
    border: #f6e7df 1px solid;
    width: 80%;
    border-radius: 10px;
    background-color: #f6e7df;
    padding: 1%;
    -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &__result {
    border: #e3ccc0 1px solid;
    width: 80%;
    border-radius: 10px;
    background-color: #e3ccc0;
    padding: 1%;
    -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    margin-bottom: 50px;
    margin-top: 1%;
    color: #8a5737;
    font-family: Roboto;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 3px;
    text-align: left;
  }

  &__typeInput {
    position: relative;
    float: left;
    border: #f6e7df 1px solid;
    width: 80%;
    border-radius: 10px;
    background-color: #f6e7df;
    padding: 1%;
    -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);

  }

  select::-ms-expand {
    display: none;
  }

  &__typeInput select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    display: block;
    width: 100%;
    max-width: 400px;
    height: 50px;
    margin: 10px auto 0 auto;
    padding: 0px 24px;
    margin-top: 20px;
    color: #8a5737;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    line-height: normal;
    text-align: center;
    background-color: #f6e7df;
    background-image: none;
    -ms-word-break: normal;
    word-break: normal;
    border-radius: 10px;
    border: 1px solid #8a5737;
  }
}

.form_radio_btn {
  display: inline-block;
  margin-right: 10px;

  @media screen and (max-width: 480px) {

    }
}

.form_radio_btn input[type="radio"] {
  display: none;
}

.form_radio_btn label {
  display: inline-block;
  cursor: pointer;
  padding: 1vh 5vw;
  line-height: 34px;
  border: 1px solid #8a5737;
  color: #8a5737;
  border-radius: 16px;
  user-select: none;
  text-align: center;
  font-family: Roboto;
  font-size: 20px;

  @media screen and (max-width: 830px) {
    padding: 1vh 2vw;
    font-size: 16px;
  }

  @media screen and (max-width: 540px) {
    padding: 1vh 1vw;
    font-size: 14px;
  }

}

/* Checked */
.form_radio_btn input[type="radio"]:checked+label {
  background-color: #8a5737;
  color: #ffffff;
  box-shadow: 0px 5px 15px 0px rgba(255, 255, 255, 0.25);
}

/* Hover */
.form_radio_btn label:hover {
  background-color: #8a5737;
  color: #ffffff;
  box-shadow: 0px 5px 15px 0px rgba(255, 255, 255, 0.25);
}

/* Disabled */
.form_radio_btn input[type="radio"]:disabled+label {
  background: #efefef;
  color: #666;
}
</style>
