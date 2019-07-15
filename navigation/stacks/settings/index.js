import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import AppIcon from '../../../components/app-icon';
import SettingsScreen from '../../../screens/settings';
import config from '../config';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <AppIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

export default SettingsStack;
