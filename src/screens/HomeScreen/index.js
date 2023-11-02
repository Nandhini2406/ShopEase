import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, ImageComponent } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { addToWishlist } from '../../redux/actions/wishlistAction';
import { products } from '../../constants';
import { styles } from './styles';

// const CategoryItem = ({item}) => {
//   return (
//     <View style={styles.categoryItem}>
//       <Text style={styles.categoryText}>{item.name}</Text>
//     </View>
//   );
// };


const HomeScreen = () => {
  const wishlist = useSelector(state => state.wishlist);  // Use useSelector to get the wishlist from Redux store
  const dispatch = useDispatch(); // Use useDispatch to get the dispatch function
  
  const handleAddToWishlist = (product) => {
    dispatch(addToWishlist(product)); // Dispatch addToWishlist action
  };
  
  const isProductInWishlist = (productId) => {
    return wishlist.some((product) => product.id === productId);
  };
  const ProductCard = ({ id, title, price, image, onAddToWishlist, isWishlist }) => {
    const handleAddToWishlist = () => {
      onAddToWishlist({ id, title, price, image });
    };
  
    return (
      <View style={styles.productCard}>
        <TouchableOpacity onPress={handleAddToWishlist} style={styles.wishlistButton}>
          <Icon
            name={isWishlist ? 'heart' : 'heart-outline'}
            size={24}
            color={isWishlist ? 'red' : 'black'}
          />
        </TouchableOpacity>
        <Image source={{ uri: image }} style={styles.productImage} />
        <Text style={styles.productTitle}>{title}</Text>
        <Text style={styles.productPrice}>${price}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Featured Products</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard
            {...item}
            onAddToWishlist={handleAddToWishlist}
            isWishlist={isProductInWishlist(item.id)}
          />
        )}
        numColumns={2}
      />
    </View>
  );
};

export default HomeScreen;
