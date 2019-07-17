import React, { Component } from 'react';
import { View } from 'react-native';
import { Flex, WingBlank } from '@ant-design/react-native';
import { Square } from '../../components/square';
import styles from './styles';

const BOARD_SQUARES = [
  [
    { position: 11, value: null },
    { position: 12, value: null },
    { position: 13, value: null }
  ],
  [
    { position: 21, value: null },
    { position: 22, value: null },
    { position: 23, value: null }
  ],
  [
    { position: 31, value: null },
    { position: 32, value: null },
    { position: 33, value: null }
  ]
];

const getBoardRowIndex = (columnPosition) => {
  const [boardRow] = columnPosition.toString().split('');
  const boardRowIndex = Number.parseInt(boardRow) - 1;
  return boardRowIndex;
}

const getNextPlayer = (currentPlayer) => {
  return currentPlayer === 'PLAYER_X' ? 'PLAYER_O' : 'PLAYER_X';
}

const getNumberOfSquares = (boardSquares) => {
  let numberOfSquares = 0;
  for (let index = 0; index < boardSquares.length; index++) {
    const row = boardSquares[index];
    numberOfSquares = numberOfSquares + row.length;
  }
  return numberOfSquares;
}

export default class GameBoardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boardState: BOARD_SQUARES,
      player: 'PLAYER_X',
      numberOfSquares: getNumberOfSquares(BOARD_SQUARES),
      numberOfClickedSquares: 0,
      isComplete: false
    }
  }
  upadateSquareValue = (columnPosition, columnValue) => {
    const { boardState } = this.state;
    let currentBoardState = [...boardState];
    const boardRowIndex = getBoardRowIndex(columnPosition);
    const rowToUpdate = [...currentBoardState[boardRowIndex]];
    const columnIndex = rowToUpdate.findIndex((column) => {
      return column.position === columnPosition;
    });
    const columnUpdate = Object.assign({}, rowToUpdate[columnIndex], {
      value: columnValue
    });
    rowToUpdate[columnIndex] = columnUpdate;
    currentBoardState[boardRowIndex] = rowToUpdate;

    this.setState((prevState) => {
      const { player, numberOfClickedSquares, numberOfSquares } = prevState;
      const clickedSquaresUpdate = numberOfClickedSquares + 1;
      const nextPlayer = getNextPlayer(player);
      return {
        boardState: currentBoardState,
        numberOfClickedSquares: clickedSquaresUpdate,
        isComplete: clickedSquaresUpdate === numberOfSquares,
        player: nextPlayer
      }
    });
  }

  renderSquareRows = () => {
    const { boardState, player } = this.state;
    return (
      boardState.map((row, index) => {
        return (
          row.map((column, index) => {
            return (
              <Square
                key={index}
                column={column}
                player={player}
                upadateSquareValue={this.upadateSquareValue}
              />
            )
          })
        )
      })
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <WingBlank>
          <Flex
            align="center"
            justify="center"
            wrap="wrap"
            style={styles.board}
          >
            { this.renderSquareRows() }
          </Flex>
        </WingBlank>
      </View>
    );
  }
}
