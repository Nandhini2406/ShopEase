import React, { useState } from 'react';
import { View, Text, Image, FlatList,SafeAreaView, ScrollView,TouchableOpacity, ImageComponent } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { addToWishlist } from '../../redux/actions/wishlistAction';
import { products, categories } from '../../constants';
import { styles } from './styles';

const renderCategoryItem = ({ item }) => {
  return (
    <View style={styles.categoryItem}>
      <Text style={styles.categoryText}>{item.name}</Text>
    </View>
  );
};

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
        <Image source={image} style={styles.productImage} />
        <Text style={styles.productTitle}>{title}</Text>
        <Text style={styles.productPrice}>${price}</Text>
        {/* <TouchableOpacity onPress={handleAddToWishlist} style={styles.addCartButton}>
          <Icon
            name={isWishlist ? 'add-circle' : 'add-circle-outline'}
            size={24}
            color={isWishlist ? '#317773' : 'black'}
          />
        </TouchableOpacity> */}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
       <ScrollView>
       <Text style={styles.heading}>Category</Text>
       <FlatList
          horizontal={true}
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={(item) => item.id}
          style={styles.categoriesContainer}
        />
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
