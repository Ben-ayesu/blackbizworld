import { MD3Theme as Theme } from 'react-native-paper';

export const createCustomTheme = (theme: Theme) => ({
  ...theme,
  roundness: 12,
  colors: {
    ...theme.colors,
    primary: "rgba(255, 255, 255, 0.7)",
    text: "rgba(255, 255, 255, 1)",
    placeholder: "rgba(255, 255, 255, 1)",
    error: "rgba(255, 69, 58, 0.9)",
  },
});
