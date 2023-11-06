import {StyleSheet, Dimensions} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import theme from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 16,
    margin: 12,
    // backgroundColor: '#FFF'
  },
  heading: {
    fontSize: theme.fontSizes.bigFont,
    fontFamily: theme.fontFamily.Sen_Bold,
    color: theme.fontColors.black,
    marginBottom: '3%',
  },
  categoriesContainer: {
    marginBottom: '3%',
    height: hp('5%')
  },
  categoryText: {
    fontSize: theme.fontSizes.mediumFontText,
    fontFamily: theme.fontFamily.Sen_Medium,
    color: theme.fontColors.black,
  },
  categoryItem: {
    marginRight: 16,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: theme.borderColor.grey,
  },
  productCard: {
    flex: 1,
    margin: '2%',
    backgroundColor: 'white',
    padding: 8,
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    width: wp('50'),
    borderRadius: 10,
    elevation: 5, 
    shadowColor: 'black', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5, 
    shadowRadius: 5, 
  },
  wishlistButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 2,
  },
  addCartButton: {
    position: 'absolute',
    bottom: 20,
    right: 10,
    zIndex: 2,
  },
  productImage: {
    width: wp('30'),
    height: hp('20'),
    resizeMode: 'cover',
    marginBottom: 8,
  },
  productTitle: {
    fontFamily: theme.fontFamily.Sen_Medium,
    fontSize:  theme.fontSizes.smallFontText,
    color: theme.fontColors.black,
    marginBottom: 4,
    alignSelf: 'flex-start',
  },
  productPrice: {
    fontFamily: theme.fontFamily.Sen_SemiBold,
    fontSize:  theme.fontSizes.mediumFont,
    color: theme.fontColors.black,
    alignSelf: 'flex-start',
  },
});
