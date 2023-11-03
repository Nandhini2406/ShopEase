import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import theme from '../../constants/theme';

export const styles = StyleSheet.create({
  loginButton: {
    backgroundColor: theme.backgroundColor.tealGreen,
    borderRadius: 5,

    width: wp('80%'),
    height: hp('6%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,

    // elevation: 1,

  },
  loginButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
  },
});
