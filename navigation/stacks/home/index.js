import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import AppIcon from '../../../components/app-icon';
import HomeScreen from '../../../screens/home';
import GameBoardScreen from '../../../screens/game-board';
import config from '../config';

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    GameBoard: GameBoardScreen
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <AppIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';

export default HomeStack;
