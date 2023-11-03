import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import theme from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: theme.fontSizes.mediumFontText,
    color: theme.fontColors.black,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
