import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import theme from '../../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '3%',
  },
  profileImage: {
    width: wp('30%'),
    height: hp('15%'),
    borderRadius: wp('20%'),
    alignSelf: 'center',
    marginTop: '7%',
    backgroundColor: theme.backgroundColor.gray,
  },
  nameText: {
    color: theme.fontColors.black,
    fontSize: theme.fontSizes.mediumFontText,
    fontFamily: theme.fontFamily.Sen_Medium,
    textAlign: 'center',
    top: 10,
  },
  emailText: {
    color: theme.fontColors.darkGray,
    fontSize: theme.fontSizes.smallFontText,
    fontFamily: theme.fontFamily.Sen_Regular,
    textAlign: 'center',
    top: '2%',
  },
  subHead: {
    color: theme.fontColors.black,
    fontSize: theme.fontSizes.mediumFontText,
    fontFamily: theme.fontFamily.Sen_Bold,
    marginVertical: '5%',
  },
});
