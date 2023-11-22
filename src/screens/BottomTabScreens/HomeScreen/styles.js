import {StyleSheet, Dimensions} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import theme from '../../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '3%',
  },
  heading: {
    fontSize: theme.fontSizes.bigFont,
    fontFamily: theme.fontFamily.Sen_Bold,
    color: theme.fontColors.black,
    marginBottom: '3%',
  },
  categoriesContainer: {
    marginBottom: '3%',
    height: hp('5%'),
  },
  categoryText: {
    fontSize: theme.fontSizes.mediumFontText,
    fontFamily: theme.fontFamily.Sen_Medium,
    color: theme.fontColors.black,
  },
  categoryItem: {
    marginRight: 10,
    paddingVertical: '10%',
    paddingHorizontal: 12,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: theme.borderColor.grey,
  },
  selectedCategory: {
    backgroundColor: theme.backgroundColor.gray,
  },

});
