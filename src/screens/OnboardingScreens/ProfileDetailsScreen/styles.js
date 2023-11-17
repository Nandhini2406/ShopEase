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
  button: {
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
  profileImage: {
    width: wp('50%'),
    height: hp('23%'),
    borderRadius: wp('25%'),
    alignSelf: 'center',
    marginVertical: '2%',
    backgroundColor: theme.backgroundColor.gray,
  },
  editIcon: {
    alignSelf: 'flex-end',
    right: '3%',
    borderRadius: wp('25%'),
    zIndex: 1,
    padding: 10,
    backgroundColor: theme.backgroundColor.tealGreen,
  },
  errorText: {
    alignSelf: 'center',
    color: theme.fontColors.orange,
    fontSize: theme.fontSizes.smallFont,
    fontFamily: theme.fontFamily.Sen_Medium,
  },
});
