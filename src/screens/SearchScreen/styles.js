import {StyleSheet} from 'react-native';
import theme from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: '3%',
  },
  searchBox: {
    flexDirection: 'row',
    backgroundColor: theme.backgroundColor.gray,
    borderRadius: 12,
  },
  searchInput: {
    fontFamily: theme.fontFamily.Sen_Regular,
    fontSize: theme.fontSizes.smallFontText,
    color: theme.fontColors.black,
  },
  emptyScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '50%',
  },
  emptyText: {
    fontFamily: theme.fontFamily.Sen_Medium,
    fontSize: theme.fontSizes.bigFont,
    color: theme.fontColors.grey,
  },
});
