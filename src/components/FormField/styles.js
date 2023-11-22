import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import theme from '../../constants/theme';

export const styles = StyleSheet.create({
  fieldContainer: {
    marginVertical: '2%',
    alignSelf: 'center',
  },
  heading: {
    color: theme.fontColors.black,
    fontSize: theme.fontSizes.mediumFont,
    fontFamily: theme.fontFamily.Sen_Medium,
  },
  pickerOption: {
    color: theme.fontColors.black,
    fontSize: theme.fontSizes.mediumFont,
    fontFamily: theme.fontFamily.Sen_Medium,
  },
  fieldInput: {
    width: wp('80%'),
    height: hp('6%'),

    marginTop: '5%',
    borderColor: theme.borderColor.myrtleGreen,
    borderRadius: 15,
    borderWidth: 2,
    alignSelf: 'center',
  },
  dateText: {
    padding: 12,
    color: theme.fontColors.black,
    fontSize: theme.fontSizes.mediumFont,
    fontFamily: theme.fontFamily.Sen_Regular,
  },
});
