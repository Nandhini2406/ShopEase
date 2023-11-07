import {StyleSheet, Dimensions} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import theme from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: '3%',
  },
  productImage: {
    width: wp('15%'),
    height: hp('10%'),
    borderRadius: 8,
    overflow: 'hidden',
    resizeMode: 'cover',
    backgroundColor: 'white',
    marginHorizontal: 10,
  },
  productTitle: {
    fontFamily: theme.fontFamily.Sen_Regular,
    fontSize: theme.fontSizes.mediumFont,
    color: theme.fontColors.black,
    marginBottom: 4,
    alignSelf: 'flex-start',
  },
  wishlistButton: {
    position: 'absolute',
    top: 30,
    right: 20,
    zIndex: 2,
  },
  productDetails: {
    flexDirection: 'column',
    marginHorizontal: 16,
  },
  productPrice: {
    fontFamily: theme.fontFamily.Sen_Medium,
    fontSize: theme.fontSizes.mediumFont,
    color: theme.fontColors.black,
    alignSelf: 'flex-start',
  },
  productDescription:{
    fontFamily: theme.fontFamily.Sen_Medium,
    fontSize: theme.fontSizes.mediumFont,
    color: theme.fontColors.grey,
    alignSelf: 'center',
  },
  

});
