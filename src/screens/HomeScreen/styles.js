import {StyleSheet, Dimensions} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import theme from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.fontColors.black,
    marginBottom: 16,
  },
  categoriesContainer: {
    marginBottom: 16,
  },
  categoryText: {
    fontSize: 16,
  },
  categoryItem: {
    marginRight: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ccc',
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
  addCartButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
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
    alignSelf: 'flex-start',
  },
  productPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
});
