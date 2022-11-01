import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

const message={
    en:{
      test:'test',
    },
    zh:{
      test:'dd',
    }
}

const i18n=new VueI18n({
    locale:'zh',
    message,
    fallbackLocale:'en',
})
export default i18n
