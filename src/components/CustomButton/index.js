import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import { styles } from './styles';

const CustomButton = ({text, onPress}) => {
  return (

      <TouchableOpacity style={styles.loginButton} onPress={onPress}>
        <Text style={styles.loginButtonText}>{text}</Text>
      </TouchableOpacity>
  );
};

export default CustomButton;
