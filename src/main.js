import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { registerGlobalComponents } from './registerGlobalComponents'
import { router } from './router'
import '@mdi/font/css/materialdesignicons.css'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as directives from 'vuetify/directives'
import * as components from "vuetify/components"

const root = createApp(App)
registerGlobalComponents(root)

const vuetify = createVuetify({
  components,
  directives,
  // ssr: true,
})
root
  .use(vuetify)
  .use(router)
  .mount('#app')

