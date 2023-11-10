import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const IconButton = ({onPress, iconName, iconSize}) => {
  return (
      <TouchableOpacity style={styles.iconButton} onPress={onPress}>
        <Icon name={iconName} size={iconSize} color="#006D5B" />
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconButton: {
    marginHorizontal: '5%',
  },
});

export default IconButton;