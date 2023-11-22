import React, {useState} from 'react';
import {
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  ToastAndroid,
  RefreshControl,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  addToWishlist,
  removeFromWishlist,
} from '../../../redux/actions/wishlistAction';
import {addToCart, removeFromCart} from '../../../redux/actions/cartActions';
import {products, categories} from '../../../constants/productsData';
import Header from '../../../components/Common/Header';
import {styles} from './styles';
import ProductCard from '../../../components/ProductCard';

const renderCategoryItem = ({item, selectedCategory, handleCategoryPress}) => {
  return (
    <TouchableOpacity
      style={[
        styles.categoryItem,
        selectedCategory?.id === item.id && styles.selectedCategory,
      ]}
      onPress={() => handleCategoryPress(item)}>
      <Text style={styles.categoryText}>{item.name}</Text>
    </TouchableOpacity>
  );
};

const HomeScreen = ({navigation}) => {
  const wishlist = useSelector(state => state.wishlist);
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

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

  const handleCategoryPress = category => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory.name)
    : products;

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      setSelectedCategory(null);
    }, 100);
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
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
        }
        ListHeaderComponent={() => (
          <>
            <Text style={styles.heading}>Category</Text>
            <FlatList
              horizontal={true}
              data={categories}
              renderItem={({item}) =>
                renderCategoryItem({
                  item,
                  selectedCategory,
                  handleCategoryPress,
                })
              }
              showsHorizontalScrollIndicator={false}
              style={styles.categoriesContainer}
            />
            <Text style={styles.heading}>Featured Products</Text>
          </>
        )}
        data={filteredProducts}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <ProductCard
            {...item}
            onAddToWishlist={handleAddToWishlist}
            onAddToCart={handleAddToCart}
            isWishlist={isProductInWishlist(item.id)}
            isAddedToCart={isProductInCart(item.id)}
            handleProduct={() =>
              navigation.navigate('ProductDetails', {productId: item.id})
            }
          />
        )}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
