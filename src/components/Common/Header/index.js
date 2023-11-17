import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';

const Header = ({title, onPress, showBackButton = true, rightButtonIcon, onRightButtonPress }) => {
  return (
    <View style={styles.container}>
      {showBackButton && (
        <TouchableOpacity style={styles.backButton} onPress={onPress}>
          <Icon name="arrow-back" size={25} color="#006D5B" />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
      {rightButtonIcon && onRightButtonPress && (
        <TouchableOpacity style={styles.rightButton} onPress={onRightButtonPress}>
          <Icon name={rightButtonIcon} size={25} color='#006D5B' />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
