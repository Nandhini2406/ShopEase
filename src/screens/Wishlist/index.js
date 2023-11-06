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
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector, useDispatch} from 'react-redux';
import {removeFromWishlist} from '../../redux/actions/wishlistAction';
import {addToCart} from '../../redux/actions/cartActions';
import CustomButton from '../../components/CustomButton';
import {styles} from './styles';

const ProductCard = ({
  id,
  title,
  price,
  image,
  onRemoveFromWishlist,
  onAddToCart,
}) => {
  const handleRemoveFromWishlist = () => {
    onRemoveFromWishlist(id);
  };
  const handleAddToCart = () => {
    onAddToCart({id, title, price, image, quantity: 1});
  };

  return (
    <>
      <View style={styles.productCard}>
        <View style={styles.productContainer}>
          <Image source={image} style={styles.productImage} />
          <View style={styles.productDetails}>
            <Text style={styles.productTitle}>{title}</Text>
            <Text style={styles.productPrice}>${price}</Text>
          </View>
          <TouchableOpacity
            onPress={handleRemoveFromWishlist}
            style={styles.wishlistButton}>
            <Icon name={'heart'} size={24} color={'#006D5B'} />
          </TouchableOpacity>
        </View>
        <CustomButton text="Add to Cart" onPress={handleAddToCart} />
      </View>
    </>
  );
};

const WishlistScreen = () => {
  const wishlist = useSelector(state => state.wishlist);
  const dispatch = useDispatch();

  const handleRemoveFromWishlist = productId => {
    dispatch(removeFromWishlist(productId));
  };

  const handleAddToCart = product => {
    dispatch(addToCart(product)); // Dispatch addToCart action
    console.log('products on cart...', product);
    ToastAndroid.show('Item added to Cart', 600)
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>My Wishlist</Text>
      {wishlist.length > 0 ? (
        <FlatList
          data={wishlist}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <ProductCard
              {...item}
              onRemoveFromWishlist={() => handleRemoveFromWishlist(item.id)}
              onAddToCart={handleAddToCart}
            />
          )}
        />
      ) : (
        <Text style={styles.noItemsText}>No Items Added to Wishlist</Text>
      )}
    </SafeAreaView>
  );
};

export default WishlistScreen;
