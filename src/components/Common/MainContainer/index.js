import React from 'react';
import {StyleSheet, SafeAreaView, ScrollView, StatusBar} from 'react-native';
import theme from '../../../constants/theme';
import Header from '../Header';

const MainContainer = ({
  children,
  style,
  title,
  onPress,
  showBackButton,
  rightButtonIcon,
  onRightButtonPress,
  ...props
}) => {
  const activeColors = theme.colors;
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={title}
        onPress={onPress}
        showBackButton={showBackButton}
        rightButtonIcon={rightButtonIcon}
        onRightButtonPress={onRightButtonPress}
      />
      <ScrollView
        style={[{backgroundColor: activeColors.primary}, style]}
        showsVerticalScrollIndicator={false}
        {...props}>
        {children}
        <StatusBar barStyle={'dark-content'} backgroundColor='white'/>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: '3%',
  },
});

export default MainContainer;
