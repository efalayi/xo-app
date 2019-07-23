import { StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  square: {
    height: 90,
    width: 90,
    marginHorizontal: 10,
    marginVertical: 10,
    borderColor: COLORS.orangeDark,
    opacity: 1
  },
  squareDisabled: {
    borderColor: COLORS.orangeDark,
    opacity: 1
  },
  squareText: {
    color: 'red',
    fontSize: 20
  },
  playerO: {
    backgroundColor: COLORS.orangeDark
  },
  playerX: {
    backgroundColor: COLORS.yellowDark
  },
  match: {
    backgroundColor: COLORS.yellow,
    borderColor: COLORS.yellow
  },
  disabled: {
    backgroundColor: COLORS.grey,
    borderColor: COLORS.grey
  },
  squareMatchText: {
    color: COLORS.black,
    fontSize: 20
  },
});

export default styles;
