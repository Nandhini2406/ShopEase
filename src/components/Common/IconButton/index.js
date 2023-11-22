import {TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const IconButton = ({onPress, iconName, iconColor, iconSize, buttonStyle}) => {
  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress}>
      <Icon name={iconName} size={iconSize} color={iconColor} />
    </TouchableOpacity>
  );
};

export default IconButton;
