import React, { PureComponent } from 'react';
import { Text } from 'react-native';
import { Button } from '@ant-design/react-native';
import styles from './styles';

const PLAYER_VALUES = {
  'PLAYER_X': 'X',
  'PLAYER_O': 'O'
};

const PLAYER_COLOR_STYLE = {
  'PLAYER_X': 'playerX',
  'PLAYER_O': 'playerO'
}

export class Square extends PureComponent {
  constructor() {
    super();
    this.state = {
      isClicked: false
    }
  }

  handleSquarePress = () => {
    const { column, player, upadateSquareValue } = this.props;
    const squareValue = PLAYER_VALUES[player];
    const playerColorStyle = PLAYER_COLOR_STYLE[player];
    upadateSquareValue(column.position, squareValue);
    this.setState({
      isClicked: true,
      playerColorStyle
    });
  }

  render() {
    const { column } = this.props;
    const { isClicked } = this.state;

    if (isClicked) {
      const { playerColorStyle } = this.state;
      return (
        <Button
          type="primary"
          disabled
          style={[styles.square, styles[playerColorStyle]]}
        >
          <Text style={styles.squareText}>
            {column.value}
          </Text>
        </Button>
      );
    }

    return (
      <Button
        type="ghost"
        style={styles.square}
        onPress={this.handleSquarePress}
      ></Button>
    );
  }
}
