import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import { styles } from './styles';
import { removeFromCart } from '../../redux/actions/cartActions';
import Icon from 'react-native-vector-icons/Ionicons';

const ProductCard = ({id, title, price, image, onRemoveFromcart}) => {
  const handleRemoveFromcart = () => {
    onRemoveFromcart(id); // Pass the product ID to the function
  };

  return (
    <View style={styles.productCard}>
      <TouchableOpacity
        onPress={handleRemoveFromcart}
        style={styles.wishlistButton}>
        <Icon
          name={'heart'}
          size={24}
          color={'red'}
        />
      </TouchableOpacity>
      <Image source={image} style={styles.productImage} />
      <Text style={styles.productTitle}>{title}</Text>
      <Text style={styles.productPrice}>${price}</Text>
    </View>
  );
};

const CartScreen = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromcart = productId => {
    dispatch(removeFromCart(productId));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Cart</Text>
      <FlatList
        data={cart}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <ProductCard
            {...item}
            onRemoveFromcart={() => handleRemoveFromcart(item.id)}
          />
        )}
        numColumns={2}
      />
    </View>
  );
};

export default CartScreen;
