import {StyleSheet, Platform} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import theme from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '3%',
    backgroundColor: theme.backgroundColor.white,
  },
  productImage: {
    width: wp('80%'),
    height: hp('40%'),
    overflow: 'hidden',
    resizeMode: 'cover',
    alignSelf: 'center',
    marginVertical:'5%'
  },
  brandText: {
    fontFamily: theme.fontFamily.Sen_SemiBold,
    fontSize: theme.fontSizes.mediumFontText,
    color: theme.fontColors.darkGray,
  },
  titleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productTitle: {
    fontFamily: theme.fontFamily.Sen_Medium,
    fontSize: theme.fontSizes.bigFontText,
    color: theme.fontColors.black,
    alignSelf: 'flex-start',
    marginTop: '2%',
  },
  heading: {
    fontFamily: theme.fontFamily.Sen_SemiBold,
    fontSize: theme.fontSizes.mediumFontText,
    color: theme.fontColors.black,
    marginVertical: '4%',
  },
  sizeView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  sizeButton: {
    borderWidth: 1,
    borderColor: theme.borderColor.tealGreen,
    borderRadius: wp('2%'),
    width: wp('10%'),
    height: hp('5%'),
    marginHorizontal: '3%',
    alignItem: 'center',
    padding: 8,
  },
  selectedSizeButton: {
    backgroundColor: theme.backgroundColor.tealGreen,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOpacity: 1,
        shadowOffset: {width: 1, height: 2},
        shadowRadius: 2,
      },
      android: {elevation: 7},
    }),
  },
  sizeText: {
    fontFamily: theme.fontFamily.Sen_Bold,
    fontSize: theme.fontSizes.mediumFontText,
    color: theme.fontColors.black,
    textAlign: 'center',
  },
  selectedSizeText: {
    fontFamily: theme.fontFamily.Sen_Bold,
    fontSize: theme.fontSizes.mediumFontText,
    color: theme.fontColors.white,
    textAlign: 'center',
  },
  description: {
    fontFamily: theme.fontFamily.Sen_Medium,
    fontSize: theme.fontSizes.mediumFontText,
    color: theme.fontColors.black,
    alignSelf: 'flex-start',
  },
  productPrice: {
    flexDirection: 'row',
    borderRadius: wp('10%'),
    justifyContent: 'space-around',
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    elevation: 25,
    backgroundColor: theme.colors.primary,
    padding: '3%',
    margin: '-6%',
  },
  productDetails: {
    flexDirection: 'column',
  },
  priceText: {
    fontFamily: theme.fontFamily.Sen_Bold,
    fontSize: theme.fontSizes.bigFontText,
    color: theme.fontColors.black,
    alignSelf: 'flex-start',
    bottom: '5%',
  },
  cartButton: {
    width: wp('55%'),
    height: hp('6%'),
  },
  cartButtonText: {
    fontFamily: theme.fontFamily.Sen_Bold,
    fontSize: theme.fontSizes.mediumFontText,
    color: theme.fontColors.white,
    backgroundColor: theme.backgroundColor.tealGreen,
    borderRadius: wp('5%'),
    textAlign: 'center',
    padding: '6%',
  },
});
