import { StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: COLORS.white,
  },
  welcomeContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain'
  },
  startButton: {
    width: 200,
    marginTop: 30,
    borderWidth: 1.3
  }
});

export default styles;
