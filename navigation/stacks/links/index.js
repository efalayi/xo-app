import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import AppIcon from '../../../components/app-icon';
import LinksScreen from '../../../screens/links';
import config from '../config';

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <AppIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

LinksStack.path = '';

export default LinksStack;
