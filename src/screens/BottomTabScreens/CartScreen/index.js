import React from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from '../../../redux/actions/cartActions';
import {placeOrder} from '../../../redux/actions/ordersActions';
import CustomButton from '../../../components/Common/CustomButton';
import Header from '../../../components/Common/Header';
import {styles} from './styles';

const ProductCard = ({
  id,
  title,
  price,
  quantity,
  image,
  onRemoveFromcart,
  onIncreaseQuantity,
  onDecreaseQuantity,
}) => {
  const handleRemoveFromcart = () => {
    onRemoveFromcart(id); // Pass the product ID to the function
  };
  const handleIncreaseQuantity = () => {
    onIncreaseQuantity(id);
  };

  const handleDecreaseQuantity = () => {
    onDecreaseQuantity(id);
  };
  return (
    <>
      <TouchableOpacity
        onPress={handleRemoveFromcart}
        style={styles.closeButton}>
        <Icon name={'close-circle-sharp'} size={25} color={'#000000'} />
      </TouchableOpacity>
      <View style={styles.productCard}>
        <Image source={image} style={styles.productImage} />
        <View style={styles.productDetails}>
          <Text style={styles.productTitle}>{title}</Text>
          <Text style={styles.productPrice}>${price}</Text>
        </View>
        <View style={styles.quantityControls}>
          <TouchableOpacity onPress={handleDecreaseQuantity}>
            <Icon name={'remove'} size={22} color={'#006D5B'} />
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity onPress={handleIncreaseQuantity}>
            <Icon name={'add'} size={22} color={'#006D5B'} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const Total = ({totalTxt, rate}) => {
  return (
    <View style={styles.totalRow}>
      <Text style={styles.totalText}>{totalTxt}</Text>
      <Text style={styles.totalText}>${rate}</Text>
    </View>
  );
};

const CartScreen = () => {
  const cart = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0,
  );
  const discount = 0;
  const shipping = 100;
  const totalAmount = totalPrice + discount + shipping;

  const handleRemoveFromcart = productId => {
    dispatch(removeFromCart(productId));
  };
  const handleIncreaseQuantity = productId => {
    console.log('quantity increased');
    dispatch(increaseQuantity(productId));
  };

  const handleDecreaseQuantity = productId => {
    console.log('quantity decreased');
    dispatch(decreaseQuantity(productId));
  };

  const handlePlaceOrder = () => {
    console.log('Order Placed');
    dispatch(placeOrder(cart));
    dispatch(clearCart());
    ToastAndroid.show('Orders Placed', 500);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="My Cart" onPress={() => navigation.goBack()} />
      {cart.length > 0 ? (
        <>
          <FlatList
            data={cart}
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <ProductCard
                {...item}
                key={item.id.toString()}
                onRemoveFromcart={() => handleRemoveFromcart(item.id)}
                onIncreaseQuantity={() => handleIncreaseQuantity(item.id)}
                onDecreaseQuantity={() => handleDecreaseQuantity(item.id)}
              />
            )}
          />
          <View style={styles.totalContainer}>
            <View style={styles.divider} />
            <Total totalTxt="Total Prize" rate={totalPrice} />
            <Total totalTxt="Discount" rate={discount} />
            <Total totalTxt="Shipping" rate={shipping} />
            <Total totalTxt="Total Amount" rate={totalAmount} />
          </View>
          <CustomButton text="Place Order" onPress={handlePlaceOrder} />
        </>
      ) : (
        <Text style={styles.noItemsText}>No Items Added to Cart</Text>
      )}
    </SafeAreaView>
  );
};

export default CartScreen;
