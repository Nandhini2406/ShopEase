import React, {useState} from 'react';
import {
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  Text,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../../components/Header';
import {styles} from './styles';

const SearchScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Search" onPress={() => navigation.goBack()} />
      <View style={styles.searchBox}>
        <Icon name="search" size={25} color="#006D5B" />
        <TextInput
          placeholder="Search"
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={handleSearch}
          style={styles.searchInput}
        />
      </View>
      {searchQuery.length > 0 ? (
        <FlatList
          data={searchResults}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ProductDetails', {productId: item.id})
              }>
              <Text>{item.title}</Text>
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
