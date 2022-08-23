import Vue from 'vue'
import VueI18n from 'vue-i18n' // 引入国际化的包
import en from './messages/en'
import zh from './messages/zh'
Vue.use(VueI18n)
// 如果想要中文版 element-ui，按如下方式声明
export const messages = {
    en,
    zh
}
 const i18n = new VueI18n({
     locale: localStorage.getItem('lang') ||'zh',
  messages,
 })
export default i18n