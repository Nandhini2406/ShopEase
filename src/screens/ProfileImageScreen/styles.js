import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import theme from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    position: 'absolute',
    top: '3%',
    right: '5%',
  },
  fullScreenImage: {
    width: wp('100%'),
    height: hp('100%'),
    resizeMode: 'contain',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: '2%',
    width: wp('100%'),
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: '5%',
  },
  buttonText: {
    padding: '3%',
    color: theme.fontColors.white,
    fontSize: theme.fontSizes.mediumFont,
    fontFamily: theme.fontFamily.Sen_Regular,
  },
});