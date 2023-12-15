import {StyleSheet} from 'react-native';
import theme from '../../constants/theme';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '3%',
  },
  searchBox: {
    flexDirection: 'row',
    backgroundColor: theme.backgroundColor.gray,
    top: '2%',
    borderRadius: 15,
  },
  searchInput: {
    fontFamily: theme.fontFamily.Sen_Regular,
    fontSize: theme.fontSizes.mediumFontText,
    color: theme.fontColors.black,
    padding: '2%',
    width: wp('80%')
  },
  icon: {
    padding: '2%',
  },
  emptyScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontFamily: theme.fontFamily.Sen_Medium,
    fontSize: theme.fontSizes.bigFont,
    color: theme.fontColors.grey,
  },
  searchList: {
    marginHorizontal: '3%',
    marginTop: '3%',
  },
  searchResults: {
    borderBottomWidth: 1,
    borderBottomColor: theme.borderColor.grey,
    borderRadius: wp('3%'),
    padding: '3%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  resultText: {
    fontFamily: theme.fontFamily.Sen_Medium,
    fontSize: theme.fontSizes.mediumFontText,
    color: theme.fontColors.black,
    alignSelf: 'center',
  },
  productImage: {
    width: wp('10%'),
    height: hp('6%'),
  },
});
