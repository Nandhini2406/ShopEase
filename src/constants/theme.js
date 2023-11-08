import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const screenHeight = hp('100%');
const screenWidth = wp('100%');

const fontSizes = {
  bigFont: hp('3%'),
  mediumFont: hp('2%'),
  smallFont: hp('1.5%'),
  bigFontText: hp('3.5%'),
  mediumFontText: hp('2.5%'),
  smallFontText: hp('1.8%'),
};

const backgroundColor = {
  tealGreen: '#006D5B',
  myrtleGreen: '#317773',
  white: '#F0F0EF',
  black: '#000000',
  secondaryBlack: '#292929',
  primary: '#FAFAFA',
  gray: '#CCCCCC',
  orange: '#E47718',
  green: '#008000',
  red: '#FF0000',
  lightCoral: '#F08080',
  mediumAquamarine: '#66CDAA',
};

const borderColor = {
  white: '#F0F0EF',
  black: '#000000',
  grey: '#CCCCCC',
  tealGreen: '#006D5B',
  myrtleGreen: '#317773',
};

const fontFamily = {
  Sen_Bold: 'Sen-Bold',
  Sen_Medium: 'Sen-Medium',
  Sen_Regular: 'Sen-Regular',
  Sen_SemiBold: 'Sen-SemiBold',
};

const fontColors = {
  white: '#F0F0EF',
  black: '#000000',
  grey: '#CCCCCC',
  tealGreen: '#006D5B',
  myrtleGreen: '#317773',
  secondaryBlack: '#292929',
  inkBlack: '#252A31',
  inkLight: '#697D95',
  inkDark: '#252A31',
  orange: '#E47718',
  green: '#008000',
  candyBlue: '#37ECBA',
  darkGray: '#808080',
};

export default {
  fontSizes,
  fontFamily,
  fontColors,
  screenHeight,
  screenWidth,
  backgroundColor,
  borderColor,
};
