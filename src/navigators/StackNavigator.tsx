import { createStackNavigator } from 'react-navigation';
import { FirstScreen, ThirdScreen } from '../screens';

export const StackNavigator = createStackNavigator(
  {
    FIRST_SCREEN: {
      screen: FirstScreen,
      navigationOptions: () => ({
        header: null
      })
    },
    THIRD_SCREEN: {
      screen: ThirdScreen,
      navigationOptions: () => ({
        headerBackTitle: null,
        headerTintColor: 'cadetblue'
      })
    }
  },
  {
    initialRouteName: 'FIRST_SCREEN'
  }
);
