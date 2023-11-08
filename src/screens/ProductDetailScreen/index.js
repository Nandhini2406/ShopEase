import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react';
import { AppState } from 'react-native';
import { LoginTimer, LogoutTimer } from '../../components/Timer';

const ProductDetailsScreen = () => {
  const [isAppActive, setIsAppActive] = useState(true);
  
  useEffect(() => {
    const handleAppStateChange = (newState) => {
      setIsAppActive(newState === 'active');
    };
    
    const subscription = AppState.addEventListener('change', handleAppStateChange);
    
    return () => subscription.remove();
  }, []);
  
  return (
    <View>
      {isAppActive ? <LoginTimer /> : <LogoutTimer />}
    </View>
  );
};

export default ProductDetailsScreen