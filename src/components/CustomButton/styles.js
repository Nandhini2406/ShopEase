import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import theme from '../../constants/theme';

export const styles = StyleSheet.create({
  loginButton: {
    backgroundColor: theme.backgroundColor.tealGreen,
    borderRadius: 10,
    width: wp('70%'),
    height: hp('6%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',
  },
  loginButtonText: {
    color: theme.fontColors.white,
    fontSize: theme.fontSizes.mediumFont,
    fontFamily: theme.fontFamily.Sen_SemiBold,
  },
});
