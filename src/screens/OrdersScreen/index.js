// import { View, Text } from 'react-native'
// import React from 'react'

// const OrdersScreen = () => {
//   return (
//     <View>
//       <Text>OrdersScreen</Text>
//     </View>
//   )
// }

// export default OrdersScreen

import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, FlatList } from 'react-native';

const OrdersScreen = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: 'Shoes' },
    { id: 2, name: 'T-Shirts' },
    { id: 3, name: 'Jeans' },
    { id: 4, name: 'Accessories' },
  ]);
  
  const [popularProducts, setPopularProducts] = useState([
    { id: 1, name: 'Nike Air Max AP', price: 76000 },
    { id: 2, name: 'Nike Impact 4v', price: 6000 },
    { id: 3, name: 'Adidas Superstar', price: 8500 },
    { id: 4, name: 'Puma Clyde Court', price: 6800 },
  ]);
  
  const renderCategoryItem = ({ item }) => {
    return (
      <View style={styles.categoryItem}>
        <Text style={styles.categoryText}>{item.name}</Text>
      </View>
    );
  };
  
  const renderPopularProductItem = ({ item }) => {
    return (
      <View style={styles.popularProductItem}>
        <Text style={styles.popularProductName}>{item.name}</Text>
        <Text style={styles.popularProductPrice}>${item.price}</Text>
      </View>
    );
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StatusBar barStyle="dark-content" />

        <Text style={styles.header}>Category</Text>
        <FlatList
          horizontal={true}
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={(item) => item.id}
        />

        <Text style={styles.header}>Popular</Text>
        <FlatList
          data={popularProducts}
          renderItem={renderPopularProductItem}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 20,
  },
  categoryItem: {
    width: 100,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  categoryText: {
    fontSize: 16,
  },
  popularProductItem: {
    width: '100%',
    height: 100,
    borderRadius: 5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  popularProductName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  popularProductPrice: {
    fontSize: 14,
    color: '#ccc',
  },
});

export default OrdersScreen