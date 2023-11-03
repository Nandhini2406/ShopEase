import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {removeFromWishlist} from '../../redux/actions/wishlistAction';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

const ProductCard = ({id, title, price, image, onRemoveFromWishlist}) => {
  const handleRemoveFromWishlist = () => {
    onRemoveFromWishlist(id); // Pass the product ID to the function
  };

  return (
    <View style={styles.productCard}>
      <TouchableOpacity
        onPress={handleRemoveFromWishlist}
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

const WishlistScreen = () => {
  const wishlist = useSelector(state => state.wishlist);
  const dispatch = useDispatch();

  const handleRemoveFromWishlist = productId => {
    dispatch(removeFromWishlist(productId));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Wishlist</Text>
      <FlatList
        data={wishlist}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <ProductCard
            {...item}
            onRemoveFromWishlist={() => handleRemoveFromWishlist(item.id)}
          />
        )}
        numColumns={2}
      />
    </View>
  );
};

export default WishlistScreen;
