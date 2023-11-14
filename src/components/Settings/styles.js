import {StyleSheet} from 'react-native';
import theme from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '2%',
    // borderWidth: 1,
    borderBottomWidth: 1,
    borderRadius: 10,
    borderColor: theme.borderColor.black,
  },
  text: {
    flex: 1,
    marginLeft: '4%',
    color: theme.fontColors.black,
    fontSize: theme.fontSizes.mediumFont,
    fontFamily: theme.fontFamily.Sen_Medium,
  },
});
