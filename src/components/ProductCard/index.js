import {Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import IconButton from '../Common/IconButton';

const ProductCard = ({
  id,
  title,
  price,
  image,
  onAddToWishlist,
  onAddToCart,
  isWishlist,
  isAddedToCart,
  handleProduct,
}) => {
  const handleAddToWishlist = () => {
    onAddToWishlist({id, title, price, image});
  };
  const handleAddToCart = () => {
    onAddToCart({id, title, price, image, quantity: 1});
  };

  return (
    <TouchableOpacity style={styles.productCard} onPress={handleProduct}>
      <Image source={image} style={styles.productImage} />
      <IconButton
        onPress={handleAddToWishlist}
        buttonStyle={styles.wishlistButton}
        iconName={isWishlist ? 'heart' : 'heart-outline'}
        iconSize={25}
        iconColor={isWishlist ? '#006D5B' : 'black'}
      />
      <Text style={styles.productTitle}>{title}</Text>
      <Text style={styles.productPrice}>${price}</Text>
      <IconButton
        onPress={handleAddToCart}
        buttonStyle={styles.addCartButton}
        iconName={isAddedToCart ? 'add-circle' : 'add-circle-outline'}
        iconSize={25}
        iconColor={isAddedToCart ? '#006D5B' : 'black'}
      />
    </TouchableOpacity>
  );
};

export default ProductCard;
