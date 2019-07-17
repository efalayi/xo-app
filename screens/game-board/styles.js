import { StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
  board: {
    paddingVertical: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLORS.black,
    backgroundColor: COLORS.black
  }
});

export default styles;
