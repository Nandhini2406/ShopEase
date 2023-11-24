import { TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';
import StyledText from '../Common/StyledText';
import theme from '../../constants/theme';

const SettingsCard = ({iconName, settings, onPress}) => {
  const themes = {mode: 'dark'};
  const activeColors = theme.colors[themes.mode];
  return (
    <TouchableOpacity style={[styles.container, {borderColor: activeColors.grey}]} onPress={onPress}>
      <Icon name={iconName} size={30} color="#317773" />
      <StyledText style={styles.text}>{settings}</StyledText>
      <IonIcon name="chevron-forward" size={28} color="#317773" />
    </TouchableOpacity>
  );
};

export default SettingsCard;
