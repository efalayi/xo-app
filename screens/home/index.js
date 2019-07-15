import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import {
  Image,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { Button, Flex, WingBlank } from '@ant-design/react-native';

import { AppText } from '../../components/app-text';
import styles from './styles';

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  handlePress = () => {
    console.log('start game');
  }

  render() {
    return (
      <View>
        <WingBlank>
          <Flex direction="column" align="center" justify="center" style={styles.container}>
            <View style={styles.welcomeContainer}>
              <Image
                source={require('../../assets/images/app-icon.png')}
                style={styles.welcomeImage}
              />
            </View>
            <Button
              type="ghost"
              style={styles.startButton}
              onPress={this.handlePress}
            >START</Button>
          </Flex>
        </WingBlank>
      </View>
    );
  }
}
