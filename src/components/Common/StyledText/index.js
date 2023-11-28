import {Text} from 'react-native';
import React from 'react';
import theme from '../../../constants/theme';

const StyledText = ({children, style, ...props}) => {
  const activeColors = theme.colors;
  return (
    <Text style={[style, {color: activeColors.tint}]} {...props}>
      {children}
    </Text>
  );
};

export default StyledText;
