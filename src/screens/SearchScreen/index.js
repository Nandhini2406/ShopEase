import React, {useEffect, useState} from 'react';
import {
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  Text,
  SafeAreaView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {products} from '../../constants/productsData';
import Header from '../../components/Common/Header';
import {styles} from './styles';

const SearchScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const filteredResults = products.filter(product =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setSearchResults(filteredResults);
  }, [searchQuery, products]);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Search" onPress={() => navigation.goBack()} />
      <View style={styles.searchBox}>
        <Icon name="search" size={25} color="#006D5B" style={styles.icon} />
        <TextInput
          placeholder="Search"
          value={searchQuery}
          onChangeText={setSearchQuery}
          style={styles.searchInput}
        />
      </View>
      {searchQuery.length > 1 ? (
        <FlatList
          data={searchResults}
          keyExtractor={item => item.id.toString()}
          style={styles.searchList}
          renderItem={({item}) => (
            <TouchableOpacity
            style={styles.searchResults}
              onPress={() =>
                navigation.navigate('ProductDetails', {productId: item.id})
              }>
              <Text style={styles.resultText}>{item.title}</Text>
              <Image source={item.image} style={styles.productImage}/>
            </TouchableOpacity>
          )}
        />
      ) : (
        <View style={styles.emptyScreen}>
          <Icon name="search" size={50} color="#cccc" />
          <Text style={styles.emptyText}>What are you looking for?</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default SearchScreen;
