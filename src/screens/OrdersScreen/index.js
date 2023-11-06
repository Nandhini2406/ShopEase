// MyOrdersScreen.js
import React from 'react';
import {View, Text, FlatList, SafeAreaView, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {styles} from './styles';
import { cancelOrder } from '../../redux/actions/ordersActions';
import CustomButton from '../../components/CustomButton';

const OrderCard = ({id, totalPrice, onCancelOrder}) => {
  const handleCancelOrder = () => {
    onCancelOrder(id); // Pass the order ID to the function
  };

  return (
    <View style={styles.orderCard}>
      <Text style={styles.orderId}>Order ID: {id}</Text>
      <Text style={styles.totalPrice}>Total Price: ${totalPrice}</Text>
      <Text style={styles.totalPrice}>Delivery in 2 days</Text>
      <CustomButton text='Cancel Order' onPress={handleCancelOrder}/>
    </View>
  );
};

const OrdersScreen = () => {
  const orders = useSelector(state => state.order.orders);
  console.log('Orders:', orders);
  const dispatch = useDispatch();

  const handleCancelOrder = orderId => {
    dispatch(cancelOrder(orderId));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>My Orders</Text>
      {orders.length > 0 ? (
        <FlatList
          data={orders}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <OrderCard
              {...item}
              onCancelOrder={() => handleCancelOrder(item.id)}
            />
          )}
          numColumns={1}
        />
      ) : (
        <Text style={styles.noOrdersText}>No Orders Placed</Text>
      )}
    </SafeAreaView>
  );
};

export default OrdersScreen;
