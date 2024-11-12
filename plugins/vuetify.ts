import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify, type ThemeDefinition } from 'vuetify'

const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    'theme': '#212121',
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#213268',
    secondary: '#5CB85C',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
    'white-primary' : '#e9f2fb'
  }
}

const darkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    'theme': '#BDBDBD',
    background: '#070F2B',
    surface: '#070F2B',
    primary: '#213268',
    secondary: '#5CB85C',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
    'white-primary' : '#e9f2fb'
  }
}
 
export default defineNuxtPlugin(nuxt => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'darkTheme',
      themes: {
        lightTheme,
        darkTheme
      },
    },
    ssr: true
  })
  nuxt.vueApp.use(vuetify)
})