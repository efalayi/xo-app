import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

export function AppText(props) {
  const textType = props.type || 'regular';
  const textStyle = styles[textType];
  return (
    <Text {...props} style={[textStyle, props.style]} />
  );
}
