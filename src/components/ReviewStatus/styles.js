import {StyleSheet, Dimensions} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import theme from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    // shadowColor: '#ddd',
    // shadowOffset: {width: 0, height: 2},
    // shadowOpacity: 0.8,
    // shadowRadius: 4,
    marginBottom: wp('10%'),
  },
  overallRating: {
    color: theme.fontColors.black,
    fontFamily: theme.fontFamily.Sen_Bold,
    fontSize: theme.fontSizes.mediumFontText,
  },
  starRatingContainer: {
    marginTop: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 2,
  },
  ratingBar: {
    flexDirection: 'row',
    height: 20,
    width: wp('60%'),
    borderRadius: 5,
    marginVertical: 5,
    backgroundColor: '#c0c0c0',
    
  },
  starRatingBar: {
    height: 20,
    top: -5,
    borderRadius: 5,
    marginVertical: 5,
    backgroundColor: 'red',
  },
  totalReviews: {
    color: theme.fontColors.grey,
    fontFamily: theme.fontFamily.Sen_Medium,
    fontSize: theme.fontSizes.smallFontText,
  },
  seeMoreButton: {
    marginTop: 15,
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
    alignItems: 'center',
    elevation: 2,
  },
  ratingInfoText: {
    color: theme.fontColors.black,
    fontFamily: theme.fontFamily.Sen_Medium,
    fontSize: theme.fontSizes.smallFontText,
    alignSelf: 'center',
  },
});
