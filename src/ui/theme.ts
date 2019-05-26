import { Theme } from 'react-native-elements';

/**
 * Overrides the style of react-native-elements.
 * See https://react-native-training.github.io/react-native-elements/docs/customization.html
 */

export const theme = {
  Button: {
    buttonStyle: {
      backgroundColor: 'cadetblue'
    },
    titleStyle: {
      color: 'white',
      fontSize: 15,
      fontWeight: 'bold'
    }
  },
  Text: {
    style: {
      fontSize: 15,
      margin: 10,
      textAlign: 'center',
      lineHeight: 20
    }
  }
} as Theme;
