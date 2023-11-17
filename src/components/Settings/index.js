import { Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';

const SettingsCard = ({iconName, settings, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name={iconName} size={30} color="#006D5B" />
      <Text style={styles.text}>{settings}</Text>
      <IonIcon name="chevron-forward" size={28} color="#006D5B" />
    </TouchableOpacity>
  );
};

export default SettingsCard;
