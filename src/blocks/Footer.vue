<template>
    <div class="footer">
        <footer>
            <div class="container">
                <nav class="footerMenu">

                    <div class="footerMenuItems">
                        <router-link to="/">
                            <div class="footerMenuItems__item" @click="scrollUp()">Наверх</div>
                        </router-link>
                        <router-link to="/Appointment">
                            <div class="footerMenuItems__item hiddenFooterItem">запись</div>
                        </router-link>
                        <router-link to="/Portfolio">
                            <div class="footerMenuItems__item hiddenFooterItem">портфолио</div>
                        </router-link>
                        <router-link to="/Articles">
                            <div class="footerMenuItems__item hiddenFooterItem">статьи</div>
                        </router-link>
                        <div class="copyright">
                            <a href="https://api.whatsapp.com/send/?phone=79312469934" target="_blank">
                                <p>2024 Kochetov Dmitry</p>
                            </a>
                        </div>
                    </div>
                    <div class="footerIconsSet">
                        <div class="footerIconsSet__item">
                            <a href="https://api.whatsapp.com/send/?phone=79312469934" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="42" viewBox="0 0 43 42"
                                    fill="none">
                                    <path
                                        d="M21.5 8.5125C14.5221 8.5125 8.84955 14.0531 8.83996 20.8688C8.83996 23.2031 9.51183 25.4813 10.7788 27.4406L11.0763 27.9094L9.79978 32.4656L14.5893 31.2375L15.05 31.5094C16.9888 32.6344 19.2156 33.2344 21.4904 33.2344H21.5C28.4683 33.2344 34.2944 27.6937 34.2944 20.8781C34.2944 17.5781 32.8355 14.475 30.4455 12.1406C28.046 9.79688 24.8786 8.5125 21.5 8.5125ZM28.9386 26.175C28.6219 27.0469 27.1054 27.8344 26.3759 27.9375C25.1665 28.1156 24.2259 28.0219 21.8167 27.0094C18.0063 25.3969 15.5107 21.6469 15.3188 21.4031C15.1268 21.1594 13.7638 19.3875 13.7638 17.5594C13.7638 15.7313 14.7429 14.8312 15.098 14.4562C15.4435 14.0812 15.8562 13.9875 16.1154 13.9875C16.365 13.9875 16.6241 13.9875 16.8449 13.9969C17.0752 14.0063 17.392 13.9125 17.6991 14.6344C18.0158 15.375 18.7741 17.2031 18.8701 17.3906C18.9661 17.5781 19.0333 17.7937 18.8989 18.0375C18.1694 19.4625 17.392 19.4062 17.7855 20.0625C19.254 22.5281 20.7225 23.3813 22.9589 24.4781C23.3429 24.6656 23.5636 24.6375 23.7844 24.3844C24.0051 24.1406 24.7346 23.2969 24.9841 22.9313C25.2337 22.5563 25.4929 22.6219 25.8384 22.7438C26.1839 22.8656 28.0556 23.7656 28.4395 23.9531C28.8234 24.1406 29.073 24.2344 29.169 24.3844C29.2554 24.5625 29.2554 25.3125 28.9386 26.175ZM38.3929 0H4.60714C2.06362 0 0 2.01562 0 4.5V37.5C0 39.9844 2.06362 42 4.60714 42H38.3929C40.9364 42 43 39.9844 43 37.5V4.5C43 2.01562 40.9364 0 38.3929 0ZM21.4904 35.7375C18.9373 35.7375 16.4321 35.1094 14.215 33.9281L6.14286 36L8.30245 28.2937C6.9683 26.0437 6.26763 23.4844 6.26763 20.8594C6.27723 12.6656 13.1016 6 21.4904 6C25.56 6 29.3801 7.54688 32.2596 10.3594C35.1295 13.1719 36.8571 16.9031 36.8571 20.8781C36.8571 29.0719 29.8792 35.7375 21.4904 35.7375Z"
                                        fill="white" />
                                </svg>
                            </a>
                        </div>
                        <div class="footerIconsSet__item">
                            <a href="https://vk.com/hair_sestroretsk" target="_blank">
                                <svg fill="#ffffff" width="45" height="45" viewBox="0 0 32 32" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <title>vk</title>
                                        <path
                                            d="M25.217 22.402h-2.179c-0.825 0-1.080-0.656-2.562-2.158-1.291-1.25-1.862-1.418-2.179-1.418-0.445 0-0.572 0.127-0.572 0.741v1.968c0 0.53-0.169 0.847-1.566 0.847-2.818-0.189-5.24-1.726-6.646-3.966l-0.021-0.035c-1.632-2.027-2.835-4.47-3.43-7.142l-0.022-0.117c0-0.317 0.127-0.614 0.741-0.614h2.179c0.55 0 0.762 0.254 0.975 0.846 1.078 3.112 2.878 5.842 3.619 5.842 0.275 0 0.402-0.127 0.402-0.825v-3.219c-0.085-1.482-0.868-1.608-0.868-2.137 0.009-0.283 0.241-0.509 0.525-0.509 0.009 0 0.017 0 0.026 0.001l-0.001-0h3.429c0.466 0 0.635 0.254 0.635 0.804v4.34c0 0.465 0.212 0.635 0.339 0.635 0.275 0 0.509-0.17 1.016-0.677 1.054-1.287 1.955-2.759 2.642-4.346l0.046-0.12c0.145-0.363 0.493-0.615 0.9-0.615 0.019 0 0.037 0.001 0.056 0.002l-0.003-0h2.179c0.656 0 0.805 0.337 0.656 0.804-0.874 1.925-1.856 3.579-2.994 5.111l0.052-0.074c-0.232 0.381-0.317 0.55 0 0.975 0.232 0.317 0.995 0.973 1.503 1.566 0.735 0.727 1.351 1.573 1.816 2.507l0.025 0.055c0.212 0.612-0.106 0.93-0.72 0.93zM20.604 1.004h-9.207c-8.403 0-10.392 1.989-10.392 10.392v9.207c0 8.403 1.989 10.392 10.392 10.392h9.207c8.403 0 10.392-1.989 10.392-10.392v-9.207c0-8.403-2.011-10.392-10.392-10.392z">
                                        </path>
                                    </g>
                                </svg>
                            </a>
                        </div>
                        <div class="footerIconsSet__item">
                            <a href="tel:+79312469934">
                                <svg style="color: white" width="50" height="50" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512">
                                    <path
                                        d="M0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.65-64-64-64H64C28.65 32 0 60.65 0 96zM105.5 303.6l54.24-23.25c6.391-2.766 13.9-.9062 18.24 4.484l22.02 26.91c34.63-17 62.77-45.14 79.77-79.75l-26.91-22.05c-5.375-4.391-7.211-11.83-4.492-18.22l23.27-54.28c3.047-6.953 10.59-10.77 17.93-9.062l50.38 11.63c7.125 1.625 12.11 7.891 12.11 15.22c0 126.1-102.6 228.8-228.7 228.8c-7.336 0-13.6-4.984-15.24-12.11l-11.62-50.39C94.71 314.2 98.5 306.6 105.5 303.6z"
                                        fill="white"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>

        </footer>

    </div>
</template>
  
<script>
export default {
    name: 'Footer-block',
    props: {

    },
    methods: {
    scrollUp() {
      window.scrollTo(0,0);
    }
  },
}
</script>
  

<style scoped lang="scss">
.footerMenu {
    height: 255px;
    background: #8A5737;
    ;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 138px;
    padding-right: 91px;

    @media (max-width: 1024px) {
        padding-left: 5%;
        padding-right: 5%;
    }

}

.hiddenFooterItem {
    @media (max-width: 540px) {
        display: none;
    }
}

.footerIconsSet {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 21px;

    &__item:hover {
        transform: scale(1.1);
        transition: all 0.3s;
    }
}

.footerMenuItems {
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 51px;
    position: relative;

    @media (max-width: 1024px) {
        gap: 21px;
    }


    &__item {
        color: #FFF;
        font-family: Roboto;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;

        @media (max-width: 650px) {
            font-size: 14px;
        }

    }

    &__item:hover {
        cursor: pointer;
        transform: scale(1.1);
        transition: all 0.3s;
    }

}

.copyright {
    color: #F5F5F5;
    font-family: Roboto;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    position: absolute;
    bottom: -90px;
    left: 0;
}
</style>