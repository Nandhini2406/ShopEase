import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {Platform} from 'react-native';
//Screens
import HomeScreen from '../screens/HomeScreen';
import WishlistScreen from '../screens/Wishlist';
import CartScreen from '../screens/CartScreen';
import OrdersScreen from '../screens/OrdersScreen';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#fff',
        tabBarShowLabel: false,
        headerShown: false,
        tabBarItemStyle: {top: Platform.OS === 'ios' ? 5 : 0},
        tabBarStyle: {
          backgroundColor: '#006D5B',
          height: 60,
        },
        tabBarIcon: ({focused, color}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home-sharp' : 'home-outline';
          } else if (route.name === 'WishList') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'MyCart') {
            iconName = focused ? 'cart-sharp' : 'cart-outline';
          } else if (route.name === 'Orders') {
            iconName = focused ? 'logo-dropbox' : 'logo-xbox';
          }
          return <Icon name={iconName} size={30} color={color} />;
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="WishList" component={WishlistScreen} />
      <Tab.Screen name="MyCart" component={CartScreen} />
      <Tab.Screen name="Orders" component={OrdersScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
