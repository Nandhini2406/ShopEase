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
  productCard: {
    margin: '2%',
    // backgroundColor: theme.backgroundColor.white,
    backgroundColor: 'white',
    padding: 8,
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 10,
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
  productTitle: {
    fontFamily: theme.fontFamily.Sen_Regular,
    fontSize: theme.fontSizes.mediumFont,
    color: theme.fontColors.black,
    marginBottom: 4,
    alignSelf: 'flex-start',
  },
  productPrice: {
    fontFamily: theme.fontFamily.Sen_Medium,
    fontSize: theme.fontSizes.mediumFont,
    color: theme.fontColors.black,
    alignSelf: 'flex-start',
  },
  noItemsText:{
    fontFamily: theme.fontFamily.Sen_Medium,
    fontSize: theme.fontSizes.mediumFont,
    color: theme.fontColors.grey,
    alignSelf: 'center',
  },
});
