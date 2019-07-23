import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Flex, WingBlank } from '@ant-design/react-native';
import { Square } from '../../components/square';
import styles from './styles';

const BOARD_SQUARES = [
  { id: 1, position: 11, value: null },
  { id: 2, position: 12, value: null },
  { id: 3, position: 13, value: null },
  { id: 4, position: 21, value: null },
  { id: 5, position: 22, value: null },
  { id: 6, position: 23, value: null },
  { id: 7, position: 31, value: null },
  { id: 8, position: 32, value: null },
  { id: 9, position: 33, value: null }
];

const VERTICAL_MATCH_IDS = [
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9]
];

const HORIZONTAL_MATCH_IDS = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const DIAGONAL_MATCH_IDS = [
  [1, 5, 9],
  [3, 5, 7]
];

const VALID_DIRECTION_MATCHES = {
  horizontal: HORIZONTAL_MATCH_IDS,
  vertical: VERTICAL_MATCH_IDS,
  diagonal: DIAGONAL_MATCH_IDS
}

const hasValidDirectionMatch = (boardSquares, directionMatch) => {
  let detectedMatchIds = null;
  let foundValidMatch = false;
  
  for (let index = 0; index < directionMatch.length; index++) {
    const [a, b, c] = directionMatch[index];
    const [matchA, matchB, matchC] = boardSquares.filter((square) => {
      const { id } = square;
      return id === a || id === b || id === c;
    });

    const matchValue = matchA.value || matchB.value || matchC.value;

    if (matchValue) {     
      foundValidMatch = (matchA.value === matchValue) && (matchB.value === matchValue) && (matchC.value === matchValue);
    }

    if (foundValidMatch) {
      detectedMatchIds = [a, b, c];
      break;
    }
  }
  return {
    foundValidMatch,
    detectedMatchIds
  };
}

const findMatch = (boardSquares) => {
  let validDirectionMatchExists = false;
  let detectedMatchDirection = null;
  let foundMatchIds = null;
  for (const directionMatch in VALID_DIRECTION_MATCHES) {
    if (VALID_DIRECTION_MATCHES.hasOwnProperty(directionMatch)) {
      const validMatchIds = VALID_DIRECTION_MATCHES[directionMatch];
      const { foundValidMatch, detectedMatchIds } = hasValidDirectionMatch(boardSquares, validMatchIds);
      if (foundValidMatch) {
        validDirectionMatchExists = foundValidMatch;
        detectedMatchDirection = directionMatch;
        foundMatchIds = detectedMatchIds;
        break;
      }
    }
  }

  return {
    validDirectionMatchExists,
    matchDirection: detectedMatchDirection,
    foundMatchIds
  }
}

const getNextPlayer = (currentPlayer) => {
  return currentPlayer === 'PLAYER_X' ? 'PLAYER_O' : 'PLAYER_X';
}

const getNumberOfSquares = (boardSquares) => {
  return boardSquares.length;
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
    const squareUpdateIndex = currentBoardState.findIndex((square) => {
      return square.position === columnPosition;
    });
    const squareUpdate = Object.assign({}, currentBoardState[squareUpdateIndex], {
      value: columnValue
    });
    currentBoardState[squareUpdateIndex] = squareUpdate;

    const { validDirectionMatchExists, matchDirection, foundMatchIds } = findMatch(currentBoardState);

    this.setState((prevState) => {
      const { player, numberOfClickedSquares, numberOfSquares } = prevState;
      const clickedSquaresUpdate = numberOfClickedSquares + 1;
      const nextPlayer = getNextPlayer(player);
      return {
        boardState: currentBoardState,
        numberOfClickedSquares: clickedSquaresUpdate,
        isComplete: validDirectionMatchExists,
        player: nextPlayer,
        matchDirection,
        foundMatchIds
      }
    });
  }

  renderSquareRows = () => {
    const { boardState, player, isComplete, foundMatchIds } = this.state;
    if (isComplete) {
      return (
        boardState.map((column, index) => {
          return (
            <Square
              key={index}
              column={column}
              matchIds={foundMatchIds}
            />
          );
        })
      )
    }

    return (
      boardState.map((column, index) => {
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
