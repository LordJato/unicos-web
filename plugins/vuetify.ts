import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify, type ThemeDefinition } from 'vuetify'

const lightTheme: ThemeDefinition = {
  dark: false,
  colors: { 
    primary: '#213268',
    secondary: '#5CB85C',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
    'white-primary' : '#FAFAFA',
    'white-secondary' : '#e9f2fb'
  }
}

const darkTheme: ThemeDefinition = {
  dark: true,
  colors: { 
    primary: '#213268',
    secondary: '#5CB85C',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
    'white-primary' : '#FAFAFA',
    'white-secondary' : '#e9f2fb'
  }
}
 
export default defineNuxtPlugin(nuxt => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'lightTheme',
      themes: {
        lightTheme,
        darkTheme
      },
    },
    ssr: true
  })
  nuxt.vueApp.use(vuetify)
})