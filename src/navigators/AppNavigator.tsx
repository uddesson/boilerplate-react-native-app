import { createBottomTabNavigator } from 'react-navigation';
import { StackNavigator } from './StackNavigator';
import { SecondScreen } from '../screens';

/**
 * In this example we wan't our first screen (home) to be a stack navigator
 * containing two screens. The first screen in that stack is what we'll se
 * as our home screen, which we never actually import here. See './StackNavigator.tsx'.
 */
export const AppNavigator = createBottomTabNavigator(
  {
    FIRST_SCREEN: {
      screen: StackNavigator,
      navigationOptions: {
        tabBarLabel: 'HOME SCREEN'
      }
    },
    SECOND_SCREEN: {
      screen: SecondScreen,
      navigationOptions: {
        tabBarLabel: 'ANOTHER SCREEN'
      }
    }
  },
  {
    initialRouteName: 'FIRST_SCREEN',
    tabBarOptions: {
      inactiveTintColor: 'powderblue',
      activeTintColor: 'white',
      labelStyle: {
        fontSize: 14,
        fontWeight: 'bold'
      },
      style: {
        backgroundColor: 'cadetblue',
        padding: 10,
        display: 'flex',
        borderTopColor: 'transparent'
      }
    }
  }
);
