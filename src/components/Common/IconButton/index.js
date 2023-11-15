import {TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import theme from '../../../constants/theme';

const IconButton = ({onPress, iconName, iconSize, buttonStyle}) => {
  return (
    <TouchableOpacity style={[styles.iconButton, {buttonStyle}]} onPress={onPress}>
      <Icon
        name={iconName}
        size={iconSize}
        color={theme.backgroundColor.tealGreen}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconButton: {
    marginHorizontal: '5%',
  },
});

export default IconButton;
