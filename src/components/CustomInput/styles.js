import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import theme from '../../constants/theme';

export const styles = StyleSheet.create({
  input: {
    width: wp('80%'),
    height: hp('6%'),
    
    padding: 10,
    marginTop: '5%',

    fontSize: theme.fontSizes.mediumFont,
    fontFamily: theme.fontFamily.Sen_Regular,
    
    borderColor: theme.borderColor.myrtleGreen,
    borderRadius: 15,
    borderWidth: 2,
  },
});
