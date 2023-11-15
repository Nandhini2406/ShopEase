import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {addToWishlist,removeFromWishlist} from '../../redux/actions/wishlistAction';
import {addToCart, removeFromCart} from '../../redux/actions/cartActions';
import {products, categories} from '../../constants/productsData';
import Header from '../../components/Common/Header';
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
      <TouchableOpacity
        onPress={handleAddToWishlist}
        style={styles.wishlistButton}>
        <Icon
          name={isWishlist ? 'heart' : 'heart-outline'}
          size={24}
          color={isWishlist ? '#006D5B' : 'black'}
        />
      </TouchableOpacity>
      <Text style={styles.productTitle}>{title}</Text>
      <Text style={styles.productPrice}>${price}</Text>
      {/* Add to cart Button with icon */}
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
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleAddToWishlist = product => {
    const productId = product.id;

    if (isProductInWishlist(productId)) {
      dispatch(removeFromWishlist(productId));
    } else {
      dispatch(addToWishlist(product));
      ToastAndroid.show('Item added to Wishlist', ToastAndroid.SHORT);
    }
  };

  const handleAddToCart = product => {
    const productId = product.id;

    if (isProductInCart(productId)) {
      dispatch(removeFromCart(productId));
    } else {
      dispatch(addToCart(product));
      ToastAndroid.show('Item added to Cart', ToastAndroid.SHORT);
    }
  };

  const isProductInWishlist = productId => {
    return wishlist.some(product => product.id === productId);
  };
  const isProductInCart = productId => {
    return cart.cartItems.some(product => product.id === productId);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Home"
        showBackButton={false}
        rightButtonIcon="search"
        onRightButtonPress={() => navigation.navigate('Search')}
      />
      <FlatList
        ListHeaderComponent={() => (
          <>
            <Text style={styles.heading}>Category</Text>
            <FlatList
              horizontal={true}
              data={categories}
              renderItem={renderCategoryItem}
              showsHorizontalScrollIndicator={false}
              style={styles.categoriesContainer}
            />
            <Text style={styles.heading}>Featured Products</Text>
          </>
        )}
        data={products}
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
