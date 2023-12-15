import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';

const CustomInput = ({
  placeholder,
  value,
  setvalue,
  secureTextEntry,
  onBlur,
  autoCapitalize,
  numberOfLines,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={setvalue}
        secureTextEntry={!isPasswordVisible && secureTextEntry}
        onBlur={onBlur}
        autoCapitalize={autoCapitalize}
        numberOfLines={numberOfLines}
      />
      {secureTextEntry && (
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={togglePassword}>
          <Icon
            name={isPasswordVisible ? 'eye-off' : 'eye'}
            size={20}
            color="#000"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomInput;
