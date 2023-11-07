import {StyleSheet, Dimensions} from 'react-native';
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
  productCard: {
    margin: '2%',
    // backgroundColor: theme.backgroundColor.white,
    backgroundColor: 'white',
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  closeButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 2,
  },
  productImage: {
    width: wp('15%'),
    height: hp('10%'),
    borderRadius: 8,
    overflow: 'hidden',
    resizeMode: 'cover',
    marginBottom: 8,
    marginHorizontal: 10,
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
  quantityControls: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 25,
    right: 20,
    zIndex: 2,
    borderWidth: 1,
    borderRadius: 15,
    padding: 5,
    borderColor: theme.borderColor.black,
  },
  quantityText: {
    fontFamily: theme.fontFamily.Sen_Medium,
    fontSize: theme.fontSizes.mediumFont,
    color: theme.fontColors.black,
    paddingHorizontal: 5,
    // paddingVertical: 2,
  },
  noItemsText:{
    fontFamily: theme.fontFamily.Sen_Medium,
    fontSize: theme.fontSizes.mediumFont,
    color: theme.fontColors.grey,
    alignSelf: 'center',
  },
  totalContainer:{
    alignSelf: 'center',
    width: wp('80'),
    height: hp('18%'),
  },
  divider:{
    fontSize: theme.fontSizes.bigFont,
    fontFamily: theme.fontFamily.Sen_Medium,

  },
  totalText:{
    fontSize: theme.fontSizes.mediumFont,
    fontFamily: theme.fontFamily.Sen_Medium,
    marginVertical: '2%',
  },
  totalRow:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
