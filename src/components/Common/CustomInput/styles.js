import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import theme from '../../../constants/theme';

export const styles = StyleSheet.create({
  inputContainer: {
    width: wp('80%'),
    height: hp('6%'),

    marginVertical: '3%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    borderColor: theme.borderColor.myrtleGreen,
    borderRadius: 15,
    borderWidth: 2,
  },
  input: {
    width: wp('50%'),
    height: hp('5%'),
    fontSize: theme.fontSizes.mediumFont,
    fontFamily: theme.fontFamily.Sen_Regular,
    color: theme.fontColors.black,
    paddingHorizontal: 10,
  },
  iconContainer: {
    padding: '3%',
  },
});
