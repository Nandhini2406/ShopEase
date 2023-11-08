import {TextInput} from 'react-native';
import React from 'react';
import {styles} from './styles';

const CustomInput = ({
  placeholder,
  value,
  setvalue,
  secureTextEntry,
  onBlur,
  autoCapitalize,
}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={setvalue}
      secureTextEntry={secureTextEntry}
      onBlur={onBlur}
      autoCapitalize={autoCapitalize}
    />
  );
};

export default CustomInput;
