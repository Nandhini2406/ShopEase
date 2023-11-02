import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 16,
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
    position: 'relative',
    width: Dimensions.get('window').width / 2.5,
  },
  wishlistButton: {
    position: 'absolute',
    top: 4,
    right: 4,
    zIndex: 2,
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
