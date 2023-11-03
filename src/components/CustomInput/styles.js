import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import theme from '../../constants/theme';

export const styles = StyleSheet.create({
  input: {
    borderRadius: 15,
    fontSize: theme.fontSizes.mediumFont,
    fontWeight: '400',

    width: wp('80%'),
    height: hp('6%'),

    borderColor: '#317773',
    borderWidth: 1.5,
    borderRadius: 20,

    padding: 15,
    marginTop: 20,
  },
});
