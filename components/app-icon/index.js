import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import COLORS from '../../constants/colors';

export default function AppIcon(props) {
  return (
    <Ionicons
      name={props.name}
      size={26}
      style={{ marginBottom: -3 }}
      color={props.focused ? COLORS.tabIconSelected : COLORS.tabIconDefault}
    />
  );
}
