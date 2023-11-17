import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import theme from '../../../constants/theme';

export const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    backgroundColor: theme.backgroundColor.tealGreen,
  },
  img: {
    width: wp('30%'),
    height: hp('15%'),
    alignSelf: 'center',
    marginTop: '7%',
  },
  imgText: {
    fontSize: theme.fontSizes.bigFontText,
    fontFamily: theme.fontFamily.Sen_Bold,
    color: theme.fontColors.white,
    alignSelf: 'center',
    marginBottom: '5%',
  },
  container: {
    alignItems: 'center',
    padding: '10%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: theme.backgroundColor.white,
  },
  title: {
    color: theme.fontColors.tealGreen,
    fontSize: theme.fontSizes.mediumFontText,
    fontFamily: theme.fontFamily.Sen_Bold,
    marginVertical: '10%',
  },
  errorMsg: {
    color: theme.fontColors.orange,
    fontSize: theme.fontSizes.smallFont,
    fontFamily: theme.fontFamily.Sen_Medium,
  },
  orText: {
    fontFamily: theme.fontFamily.Sen_Bold,
    marginVertical: '8%',
    fontSize: theme.fontSizes.mediumFont,
  },
  iconContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  signupContainer: {
    flexDirection: 'row',
    marginTop: '10%',
  },
  signup: {
    color: theme.fontColors.black,
    fontSize: theme.fontSizes.smallFontText,
    fontFamily: theme.fontFamily.Sen_Medium,
  },
  signupText: {
    color: theme.fontColors.tealGreen,
    fontSize: theme.fontSizes.smallFontText,
    fontFamily: theme.fontFamily.Sen_Medium,
  },
});
