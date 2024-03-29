// import '../assets/scss/main.scss'
import { createVuetify } from 'vuetify'
import * as directives from 'vuetify/directives'
import * as components from "vuetify/components"

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "dark",
  },
  // ssr: true,
})

export default vuetify