import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import theme from '../../constants/theme';

const SettingsCard = ({iconName, settings, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name={iconName} size={30} color="#006D5B" />
      <Text style={styles.text}>{settings}</Text>
      <Icon name="chevron-forward" size={28} color="#006D5B" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '2%',
    // borderWidth: 1,
    borderBottomWidth:1,
    borderRadius: 10,
    borderColor: theme.borderColor.black,
  },
  text: {
    flex: 1,
    marginLeft: '4%',
    color: theme.fontColors.black,
    fontSize: theme.fontSizes.mediumFont,
    fontFamily: theme.fontFamily.Sen_Medium,
  },
});

export default SettingsCard;
