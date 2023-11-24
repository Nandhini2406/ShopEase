import {Text} from 'react-native';
import React from 'react';
import theme from '../../../constants/theme';

const StyledText = ({children, style, ...props}) => {
    const themes = {mode: 'dark'};
    const activeColors = theme.colors[themes.mode];
  return (
    <Text style={[style, {color: activeColors.tint}]} {...props}>
      {children}
    </Text>
  );
};

export default StyledText;
