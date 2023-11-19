import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { registerGlobalComponents } from './registerGlobalComponents'
import { router } from './router'
import '@mdi/font/css/materialdesignicons.css'
// Vuetify
// import 'vuetify/styles'
// import '@/a'
import 'vuetify/styles'
import vuetify from './plugins/vuetify'

const root = createApp(App)
registerGlobalComponents(root)


root
  .use(vuetify, {
    iconfont: 'mdi'
  })
  .use(router)
  .mount('#app')

