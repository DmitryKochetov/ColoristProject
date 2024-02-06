<template>
  <div class="container">
    <div class="content">
      <div class="hair">
        <div class="hair__heading">Запись</div>
        <div class="hair__box">
          <div class="hair__h3">
            Вы можете заполнить форму и я свяжусь с вами, чтобы уточнить детали
            и записать вас на указанное время, если оно свободно
          </div>
          <form
            @submit="checkForm"
            action="https://formspree.io/f/meqyovzn"
            method="POST"
          >
            <label>
              Ваше имя:
              <input type="text" name="userName" v-model="name" />
            </label>
            <label>
              Ваш телефон:
              <input
                type="phone"
                name="UserPhone"
                v-model="phone"
                placeholder="+7 (___) ___ __ __"
              />
            </label>
            <label>
              Напишите, что вас интересует и какое время для вас удобно:
              <textarea name="userMessage" v-model="userText"></textarea>
            </label>
            <div v-if="errors.length">
              <b>Форма еще не отправлена: </b>
              <div class="errorsList">
                <div v-for="(error, index) in errors" :key="index">
                  {{ error }}
                </div>
              </div>
            </div>
            <input type="submit" value="Отправить" class="formButton" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useHead } from "@vueuse/head";

export default {
  components: {},
  data() {
    return {
      errors: [],
      name: "",
      phone: null,
      userText: "",
      Text: null,
    };
  },
  computed: {
    isPhoneValid() {
      const phoneRegex = /^((8|\+7)[ ]?)?(\(?\d{3}\)?[ ]?)?[\d\- ]{7,10}$/;
      return phoneRegex.test(this.phone);
    },
    // проверка на корректность введенного телефонного номера
    isUserTextValid() {
      if (this.userText.length > 6) {
        return true;
      } else return false;
    },
    // проверка, что пользователь ввел минимальное количество символов в окне ввода
    isNameValid() {
      if (this.name.length > 1) {
        return true;
      } else return false;
    },
    // проверка, что пользователь ввел свое имя
  },
  methods: {
    checkForm(e) {
      if (this.isPhoneValid && this.isNameValid && this.isUserTextValid) {
        return true;
      }
      this.errors = [];

      if (!this.isNameValid) {
        this.errors.push("Требуется указать имя (минимум 2 символа)");
      }
      if (!this.isUserTextValid) {
        this.errors.push(
          "Требуется указать ваши пожелания (минимум 6 символов)"
        );
      }
      if (!this.isPhoneValid) {
        this.errors.push("требуется корректно указать номер телефона");
      }

      e.preventDefault();
    },
    // проверка корректности заполнения формы. Если форма заполнена не полностью или неправильно
    // то в массив ошибок добавляются элементы, которые будут выведены пользователю
  },
  setup() {
    useHead({
      title: "Запись",
      meta: [
        {
          name: `description`,
          content: "Запись на окрашивание",
        },
      ],
    });
  },
};
</script>

<style scoped lang="scss">
form {
  width: 60vw;
  margin: 0 auto 2vh auto;
  color: #8a5737;
  font-family: Roboto;
  font-size: 18px;
  line-height: 125%;
  letter-spacing: 0.36px;

  @media screen and (max-width: 720px) {
    width: 70vw;
  }
}

label {
  margin-bottom: 0.3rem;
  display: block;
}

input,
textarea {
  padding: 2%;
  width: 90%;
  border: 1px solid;
}

.formButton {
  display: flex;
  width: auto;
  padding: 9px 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  border: none;
  background: #f4f0ec;
  color: #8a5737;
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  line-height: 125%;
  letter-spacing: 0.36px;
  max-height: 41px;
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);

  &:hover:enabled {
    background: #cda58b;
    color: #f4f0ec;
    cursor: pointer;
  }
}

.hair__h3 {
  text-align: center;

  @media screen and (max-width: 720px) {
    font-size: 16px;
  }
}

.errorsList {
  margin-bottom: 25px;
  @media screen and (max-width: 720px) {
    font-size: 14px;
  }

}
</style>
