import { createBottomTabNavigator } from 'react-navigation';

import HomeStack from './stacks/home';
import LinksStack from './stacks/links';
import SettingsStack from './stacks/settings';
import COLORS from '../constants/colors';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
}, {
    tabBarOptions: {
      activeTintColor: COLORS.tintColor,
      labelStyle: {
        fontSize: 12,
        fontWeight: '500',
        letterSpacing: 0.1,
        padding: 0
      },
      style: {
        height: 58,
        padding: 0
      },
    }
});

tabNavigator.path = '';

export default tabNavigator;
