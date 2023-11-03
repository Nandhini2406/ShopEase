import {View, Text} from 'react-native';
import React from 'react';
import { styles } from './styles';

const OrdersScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Orders</Text>
    </View>
  );
};

export default OrdersScreen;
