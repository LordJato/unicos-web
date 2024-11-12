import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify, type ThemeDefinition } from 'vuetify'

const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#213268',
    secondary: '#5CB85C',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
    'white-primary' : '#e9f2fb',
    'on-surface': '#212121',
    'on-background': '#212121',
  }
}

const darkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#070F2B',
    surface: '#070F2B',
    primary: '#213268',
    secondary: '#5CB85C',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
    'white-primary' : '#e9f2fb',
    'on-surface': '#9290C3',
    'on-background': '#9290C3',
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