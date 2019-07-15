import React, { Component } from 'react';
import { ExpoConfigView } from '@expo/samples';

export default class SettingsScreen extends Component {
  static navigationOptions = {
    title: 'app.json',
  };

  render() {
    return <ExpoConfigView />;
  }
}
