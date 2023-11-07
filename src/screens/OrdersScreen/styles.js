import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import theme from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '3%',
  },
  orderCard: {
    margin: '2%',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 10,
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  orderId: {
    fontFamily: theme.fontFamily.Sen_SemiBold,
    fontSize: theme.fontSizes.mediumFontText,
    color: theme.fontColors.black,
    alignSelf: 'flex-start',
    marginBottom: 4,
  },
  totalPrice: {
    fontFamily: theme.fontFamily.Sen_Medium,
    fontSize: theme.fontSizes.mediumFont,
    color: theme.fontColors.black,
    alignSelf: 'flex-start',
    marginBottom: 4,
  },
  noOrdersText: {
    fontFamily: theme.fontFamily.Sen_Medium,
    fontSize: theme.fontSizes.mediumFont,
    color: theme.fontColors.grey,
    textAlign: 'center',
  },
});
