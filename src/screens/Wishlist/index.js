import React from 'react';
import {View, Text, FlatList, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {removeFromWishlist} from '../../redux/actions/wishlistAction';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomButton from '../../components/CustomButton';

const ProductCard = ({id, title, price, image, onRemoveFromWishlist}) => {
  const handleRemoveFromWishlist = () => {
    onRemoveFromWishlist(id); // Pass the product ID to the function
  };

  return (
    <>
      <View style={styles.productCard}>
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
      {/* <CustomButton text="Add to Cart" /> */}
    </>
  );
};

const WishlistScreen = () => {
  const wishlist = useSelector(state => state.wishlist);
  const dispatch = useDispatch();

  const handleRemoveFromWishlist = productId => {
    dispatch(removeFromWishlist(productId));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>My Wishlist</Text>
      <FlatList
        data={wishlist}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <ProductCard
            {...item}
            onRemoveFromWishlist={() => handleRemoveFromWishlist(item.id)}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default WishlistScreen;
