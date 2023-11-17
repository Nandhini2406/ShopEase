import {StyleSheet, Platform} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import theme from '../../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    width: wp('100%'),
    height: hp('5.5%'),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: '30%',
  },
  backButton: {
    position: 'absolute',
    left: 0,
    backgroundColor: theme.backgroundColor.gray,

  },
  rightButton: {
    position: 'absolute',
    right: '10%',
    backgroundColor: theme.backgroundColor.gray,

  },
  title: {
    textAlign: 'center',
    width: wp('38%'),
    fontFamily: theme.fontFamily.Sen_SemiBold,
    fontSize: theme.fontSizes.mediumFontText,
    color: theme.fontColors.black,
  },
});
