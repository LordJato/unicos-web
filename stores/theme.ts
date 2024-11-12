import { useTheme } from 'vuetify';

interface ThemeStore {
  themeName: string;
  logoSrc: string;
  borderWavesSrc: string;
}

export const useThemeStore = defineStore('theme', () => {

  const theme = useTheme();
  const themeName = computed(() => theme.global.name.value);
  const isDarkTheme = computed(() => theme.global.name.value === 'darkTheme');
  const getImageSrc = (lightSrc: string, darkSrc: string) => computed(() => {
    return isDarkTheme.value ? darkSrc : lightSrc;
  });

  const logoSrc = getImageSrc('/img/logo.png', '/img/logo-white.png');
  const borderWavesSrc = getImageSrc('/img/footer/border-waves-light.svg', '/img/footer/border-waves-dark.svg');

  return { themeName, logoSrc, borderWavesSrc };
});