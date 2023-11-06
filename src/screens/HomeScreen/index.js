import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  ImageComponent,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import {addToWishlist} from '../../redux/actions/wishlistAction';
import {addToCart} from '../../redux/actions/cartActions';
import {products, categories} from '../../constants/productsData';
import {styles} from './styles';

const renderCategoryItem = ({item}) => {
  return (
    <View style={styles.categoryItem}>
      <Text style={styles.categoryText}>{item.name}</Text>
    </View>
  );
};

const ProductCard = ({
  id,
  title,
  price,
  image,
  onAddToWishlist,
  onAddToCart,
  isWishlist,
  isAddedToCart,
}) => {
  const handleAddToWishlist = () => {
    onAddToWishlist({id, title, price, image});
  };
  const handleAddToCart = () => {
    onAddToCart({id, title, price, image, quantity: 1});
  };

  return (
    <View style={styles.productCard}>
      <Image source={image} style={styles.productImage} />
      {/* Add to wishlist Button with icon */}
      <TouchableOpacity
        onPress={handleAddToWishlist}
        style={styles.wishlistButton}>
        <Icon
          name={isWishlist ? 'heart' : 'heart-outline'}
          size={24}
          color={isWishlist ? '#006D5B' : 'black'}
        />
        {/* Add to cart Button with icon */}
      </TouchableOpacity>
      <Text style={styles.productTitle}>{title}</Text>
      <Text style={styles.productPrice}>${price}</Text>
      <TouchableOpacity onPress={handleAddToCart} style={styles.addCartButton}>
        <Icon
          name={isAddedToCart ? 'add-circle' : 'add-circle-outline'}
          color={isAddedToCart ? '#006D5B' : 'black'}
          size={24}
        />
      </TouchableOpacity>
    </View>
  );
};

const HomeScreen = () => {
  const wishlist = useSelector(state => state.wishlist); // useSelector to get the wishlist from Redux store
  const cart = useSelector(state => state.cart); // useSelector to get the wishlist from Redux store

  const dispatch = useDispatch();

  const handleAddToWishlist = product => {
    dispatch(addToWishlist(product)); // Dispatch addToWishlist action
    console.log('products on wishlist...', product);
  };
  const handleAddToCart = product => {
    dispatch(addToCart(product)); // Dispatch addToCart action
    console.log('products on cart...', product);
  };

  const isProductInWishlist = productId => {
    return wishlist.some(product => product.id === productId);
  };
  const isProductInCart = productId => {
    return cart.cartItems.some(product => product.id === productId);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={() => (
          <>
            <Text style={styles.heading}>Category</Text>
            <FlatList
              horizontal={true}
              data={categories}
              renderItem={renderCategoryItem}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
              style={styles.categoriesContainer}
            />
            <Text style={styles.heading}>Featured Products</Text>
          </>
        )}
        data={products}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <ProductCard
            {...item}
            onAddToWishlist={handleAddToWishlist}
            onAddToCart={handleAddToCart}
            isWishlist={isProductInWishlist(item.id)}
            isAddedToCart={isProductInCart(item.id)}
          />
        )}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
