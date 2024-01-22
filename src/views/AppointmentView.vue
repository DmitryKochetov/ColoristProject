<template>
  <div class="container">
    <div class="content">
      <form action="https://formspree.io/f/meqyovzn" method="POST">
        <label>
          Ваше имя:
          <input type="text" name="userName" />
        </label>
        <label>
          Ваш телефон:
          <input type="phone" name="UserPhone" />
        </label>
        <label>
          Текст сообщения:
          <textarea name="userMessage"></textarea>
        </label>
        <button type="submit">Отправить</button>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">

form {
  width: 60vw;
  margin: 2vh auto 2vh auto;
  color: #8a5737;
  font-family: Roboto;
  font-size: 18px;
  line-height: 125%;
  letter-spacing: 0.36px;

  @media screen and (max-width: 720px) {
        width: 90vw;
    }
}

label {
  margin-bottom: 0.4rem;
  display: block;
}

input,
textarea {
  padding: 3%;
  width: 90%;
  border: 1px solid;
}

button {
  
        display: flex;
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
        cursor: pointer;

        &:hover {
            background: #cda58b;
            color: #f4f0ec;
        }

}
</style>
