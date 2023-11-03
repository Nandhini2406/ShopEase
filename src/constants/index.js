import {Images} from '../assets/Images';

export const products = [
  {
    id: 1,
    title: 'Black Dress',
    price: 1000,
    image: Images.KidsBlackDress,
  },
  {
    id: 2,
    title: 'Ash Shirt',
    price: 1500,
    image: Images.AshShirt,
  },
  {
    id: 3,
    title: 'Blue Bag',
    price: 590,
    image: Images.blueBag,
  },
  {
    id: 4,
    title: 'Blue Shirt',
    price: 900,
    image: Images.BlueShirt,
  },
  {
    id: 5,
    title: 'Kids Dress',
    price: 999,
    image: Images.KidsDress,
  },
  {
    id: 6,
    title: 'Orange Bag',
    price: 950,
    image: Images.orangeBag,
  },
  {
    id: 7,
    title: 'Pink Bag',
    price: 1200,
    image: Images.pinkBag,
  },
  {
    id: 8,
    title: 'Purple T-Shirt',
    price: 700,
    image: Images.PurpleT_Shirt,
  },
  {
    id: 9,
    title: 'Blue Kurti',
    price: 800,
    image: Images.BlueKurti,
  },
  {
    id: 10,
    title: 'Women Kuri',
    price: 300,
    image: Images.WomenKurtis,
  },
];

export const categories = [
  {id: 1, name: 'Kids', product: {products}},
  {id: 2, name: 'Bag'},
  {id: 3, name: 'Women'},
  {id: 4, name: 'Men'},
];
