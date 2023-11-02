// import { View, Text } from 'react-native'
// import React from 'react'

// const CartScreen = () => {
//   return (
//     <View>
//       <Text>CartScreen</Text>
//     </View>
//   )
// }

import React from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList, Dimensions,Image } from 'react-native';

const categories = ['Men', 'Women', 'Kids', 'Accessories', 'Shoes', 'Electronics', 'Home'];

const popularProducts = [
  {
    id: 1,
    title: 'Product 1',
    price: 10.99,
    image: 'https://example.com/product1.jpg',
  },
  {
    id: 2,
    title: 'Product 2',
    price: 15.99,
    image: 'https://example.com/product2.jpg',
  },
  // Add more products as needed
];

const CategoryItem = ({ category }) => (
  <View style={styles.categoryItem}>
    <Text>{category}</Text>
  </View>
);

const ProductCard = ({ id, title, price, image }) => (
  <View style={styles.productCard}>
    <Image source={{ uri: image }} style={styles.productImage} />
    <Text style={styles.productTitle}>{title}</Text>
    <Text style={styles.productPrice}>${price}</Text>
  </View>
);

const CartScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesContainer}
      >
        {categories.map(category => (
          <CategoryItem key={category} category={category} />
        ))}
      </ScrollView>
      <Text style={styles.heading}>Popular Products</Text>
      <FlatList
        data={popularProducts}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <ProductCard {...item} />}
        numColumns={2}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  categoriesContainer: {
    marginBottom: 16,
  },
  categoryItem: {
    marginRight: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ccc',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  productCard: {
    flex: 1,
    margin: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    alignItems: 'center',
    width: Dimensions.get('window').width / 2.5, // Adjust as needed
  },
  productImage: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
    marginBottom: 8,
  },
  productTitle: {
    fontSize: 16,
    marginBottom: 4,
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});


export default CartScreen
