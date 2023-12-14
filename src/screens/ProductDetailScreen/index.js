import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import {products} from '../../constants/productsData';
import {styles} from './styles';
import Header from '../../components/Common/Header';
import IconButton from '../../components/Common/IconButton';
import ReviewStatus from '../../components/ReviewStatus';
import {
  addToWishlist,
  removeFromWishlist,
} from '../../redux/actions/wishlistAction';
import {addToCart} from '../../redux/actions/cartActions';

const ProductDetailsScreen = ({route, navigation}) => {
  const {productId} = route.params;
  const product = products.find(p => p.id === productId);

  const dispatch = useDispatch();
  const wishlist = useSelector(state => state.wishlist);
  const cart = useSelector(state => state.cart);

  const isProductInCart = productId => {
    return cart.cartItems.some(item => item.id === productId);
  };

  const [selectedSize, setSelectedSize] = useState(null);
  const [buttonText, setButtonText] = useState('');
  const isProductInWishlist = wishlist.some(p => p.id === productId);

  const handleAddToCart = () => {
    if (isProductInCart(productId)) {
      setButtonText('Added Successfully');
    } else {
      dispatch(
        addToCart({
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          quantity: 1,
        }),
      );
      setButtonText('Added Successfully');
    }
  };
  const handleWishlistToggle = () => {
    if (isProductInWishlist) {
      dispatch(removeFromWishlist(productId));
    } else {
      dispatch(addToWishlist(product));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={product.title}
        onPress={() => navigation.goBack()}
        rightButtonIcon="cart-outline"
        onRightButtonPress={() => navigation.navigate('MyCart')}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={product.image} style={styles.productImage} />
        <Text style={styles.brandText}>{product.brand}</Text>
        <View style={styles.titleView}>
          <Text style={styles.productTitle}>{product.title}</Text>
          <IconButton
            iconName={isProductInWishlist ? 'heart' : 'heart-outline'}
            iconColor="#006D5B"
            iconSize={25}
            onPress={handleWishlistToggle}
          />
        </View>
        <Text style={styles.brandText}>Category: {product.category}</Text>
        <Text style={styles.heading}>Size</Text>
        <View style={styles.sizeView}>
          {product.size.map(value => (
            <TouchableOpacity
              key={value}
              onPress={() => setSelectedSize(value)}
              style={[
                styles.sizeButton,
                selectedSize === value && styles.selectedSizeButton,
              ]}>
              <Text
                style={[
                  styles.sizeText,
                  selectedSize === value && styles.selectedSizeText,
                ]}>
                {value}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.heading}>Product Details</Text>
        <Text style={styles.description}>{product.description}</Text>
<<<<<<< HEAD
        <Text style={styles.heading}>Category: {product.category}</Text>
        <View style={[styles.sizeView, {marginBottom: '10%'}]}>
          <Text style={styles.heading}>Review: {product.review} </Text>
          <Icon
            name="star"
            size={20}
            color="#006D5B"
            style={{alignSelf: 'center'}}
          />
=======
        <View style={styles.sizeView}>
          <Text style={styles.heading}>Review: {product.reviewData.overallRating}</Text>
          <Icon name="star" size={20} color="#006D5B" style={{padding: '4%'}} />
>>>>>>> d96c4ae (Add Review comp)
        </View>
        <ReviewStatus data={product.reviewData}/>
      </ScrollView>
      <View style={styles.productPrice}>
        <View style={styles.productDetails}>
          <Text style={styles.brandText}>Price</Text>
          <Text style={styles.priceText}>${product.price}</Text>
        </View>
        <TouchableOpacity style={styles.cartButton} onPress={handleAddToCart}>
          <Text style={styles.cartButtonText}>
            {isProductInCart(productId) ? 'Added Successfully' : 'Add To Cart'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetailsScreen;
