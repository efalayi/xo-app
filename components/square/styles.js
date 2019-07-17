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
  squareText: {
    color: 'red'
  },
  playerO: {
    backgroundColor: COLORS.orangeDark
  },
  playerX: {
    backgroundColor: COLORS.yellowDark
  }
});

export default styles;
