import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import theme from '../../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: theme.backgroundColor.tealGreen,
    borderRadius: 10,
    width: wp('80%'),
    height: hp('5%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
  },
  loginButtonText: {
    color: theme.fontColors.white,
    fontSize: theme.fontSizes.mediumFont,
    fontFamily: theme.fontFamily.Sen_SemiBold,
  },
});
