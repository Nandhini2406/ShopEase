import {StyleSheet, Dimensions} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import theme from '../../constants/theme';

export const styles = StyleSheet.create({
  productCard: {
    flex: 1,
    margin: '2%',
    backgroundColor: 'white',
    padding: '4%',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    width: wp('50%'),
    borderRadius: wp('3%'),
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  wishlistButton: {
    position: 'absolute',
    top: '6%',
    right: '7%',
    zIndex: 2,
  },
  addCartButton: {
    position: 'absolute',
    bottom: '6%',
    right: '7%',
    zIndex: 2,
  },
  productImage: {
    width: wp('40'),
    height: hp('20'),
    resizeMode: 'cover',
    marginBottom: '8%',
  },
  productTitle: {
    fontFamily: theme.fontFamily.Sen_Medium,
    fontSize: theme.fontSizes.mediumFontText,
    color: theme.fontColors.black,
    marginVertical: '2%',
    alignSelf: 'flex-start',
  },
  productPrice: {
    fontFamily: theme.fontFamily.Sen_SemiBold,
    fontSize: theme.fontSizes.mediumFontText,
    color: theme.fontColors.black,
    alignSelf: 'flex-start',
  },
});
