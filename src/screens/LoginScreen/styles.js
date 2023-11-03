import {StyleSheet} from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from 'react-native-responsive-screen';
  import theme from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: hp('5%'),
  },
  img: {
    width: wp('40%'),
    height: hp('20%'),
  },
  title: {
    color: '#317773',
    fontSize: theme.fontSizes.mediumFont,
    fontWeight: 'bold',
    marginTop: hp('5%'),
  },
  ButtonContainer: {
    marginVertical: 20,
    width: 'auto',
  },
});
