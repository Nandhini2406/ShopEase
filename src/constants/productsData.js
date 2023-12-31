import {Images} from './images';

export const products = [
  {
    id: 1,
    title: 'Black Dress',
    price: 1000,
    image: Images.KidsBlackDress,
    category: 'Kids',
    description:
      'A stylish black dress for kids. This elegant dress is perfect for special occasions, providing both comfort and a fashionable look. Available in sizes S, M, and L.',
    size: ['2T', '3T', '4T', '5T'],
    brand: "Kid's Fashion",
    reviewData: {
      overallRating: 4.7,
      ratingPercentage: {
        1: 70,
        2: 10,
        3: 10,
        4: 8,
        5: 2,
      },
      totalReviews: 150,
    },
  },
  {
    id: 2,
    title: 'Ash Shirt',
    price: 1500,
    image: Images.AshShirt,
    category: 'Men',
    description:
      'Upgrade your wardrobe with this comfortable ash-colored shirt for men. Stay cool and trendy wherever you go. Available in sizes M, L, and XL.',
    size: ['S', 'M', 'L', 'XL'],
    brand: `Men's Wardrobe`,
    reviewData: {
      overallRating: 4.2,
      ratingPercentage: {
        1: 10,
        2: 25,
        3: 40,
        4: 18,
        5: 8,
      },
      totalReviews: 100,
    },
  },
  {
    id: 3,
    title: 'Blue Bag',
    price: 590,
    image: Images.blueBag,
    category: 'Bag',
    description:
      'Carry your essentials in style with this fashionable blue bag. Spacious and chic, it complements your look for any occasion.',
    size: ['One size'],
    brand: 'Accessories World',
    reviewData: {
      overallRating: 3.8,
      ratingPercentage: {
        1: 15,
        2: 20,
        3: 30,
        4: 25,
        5: 10,
      },
      totalReviews: 150,
    },
  },
  {
    id: 4,
    title: 'Blue Shirt',
    price: 900,
    image: Images.BlueShirt,
    category: 'Men',
    description:
      'Step out in style with this classic blue shirt for men. The perfect blend of comfort and sophistication. Available in sizes S, M, and L.',
    size: ['S', 'M', 'L', 'XL'],
    brand: `Men's Wardrobe`,
    reviewData: {
      overallRating: 4.5,
      ratingPercentage: {
        1: 5,
        2: 15,
        3: 30,
        4: 40,
        5: 10,
      },
      totalReviews: 200,
    },
  },
  {
    id: 5,
    title: 'Kids Dress',
    price: 999,
    image: Images.KidsDress,
    category: 'Kids',
    description:
      'Adorn your little one with this adorable kids dress. Vibrant colors and a playful design make it a favorite for any occasion. Available in sizes 2T, 3T, and 4T.',
    size: ['2T', '3T', '4T', '5T'],
    brand: "Kid's Fashion",
    reviewData: {
      overallRating: 3.9,
      ratingPercentage: {
        1: 12,
        2: 18,
        3: 28,
        4: 32,
        5: 10,
      },
      totalReviews: 120,
    },
  },
  {
    id: 6,
    title: 'Orange Bag',
    price: 950,
    image: Images.orangeBag,
    category: 'Bag',
    description:
      'Make a statement with this eye-catching orange bag. Stylish and functional, it adds a pop of color to your ensemble.',
    size: ['One size'],
    brand: 'Accessories World',
    reviewData: {
      overallRating: 4.0,
      ratingPercentage: {
        1: 8,
        2: 20,
        3: 32,
        4: 30,
        5: 10,
      },
      totalReviews: 180,
    },
  },
  {
    id: 7,
    title: 'Pink Bag',
    price: 1200,
    image: Images.pinkBag,
    category: 'Bag',
    description:
      'Add a pop of color to your wardrobe with this stylish purple T-shirt for men. Comfortable and trendy, its a versatile piece for casual wear. Available in sizes S, M, and L.',
    size: ['One size'],
    brand: 'Accessories World',
    reviewData: {
      overallRating: 4.8,
      ratingPercentage: {
        1: 2,
        2: 5,
        3: 15,
        4: 38,
        5: 40,
      },
      totalReviews: 120,
    },
  },
  {
    id: 8,
    title: 'Purple T-Shirt',
    price: 700,
    image: Images.PurpleT_Shirt,
    category: 'Men',
    description:
      'Add a pop of color to your wardrobe with this stylish purple T-shirt for men. Comfortable and trendy, its a versatile piece for casual wear. Available in sizes S, M, and L.',
    size: ['S', 'M', 'L', 'XL'],
    brand: `Men's Wardrobe`,
    reviewData: {
      overallRating: 3.5,
      ratingPercentage: {
        1: 20,
        2: 15,
        3: 30,
        4: 25,
        5: 10,
      },
      totalReviews: 160,
    },
  },
  {
    id: 9,
    title: 'Blue Kurti',
    price: 800,
    image: Images.BlueKurti,
    category: 'Women',
    description:
      'Embrace elegance with this beautiful blue kurti for women. Perfect for both casual and festive occasions. Available in sizes S, M, and L.',
    size: ['S', 'M', 'L', 'XL'],
    brand: `Women's Collection`,
    reviewData: {
      overallRating: 4.2,
      ratingPercentage: {
        1: 8,
        2: 15,
        3: 27,
        4: 35,
        5: 15,
      },
      totalReviews: 140,
    },
  },
  {
    id: 10,
    title: 'Women Kuri',
    price: 300,
    image: Images.WomenKurtis,
    category: 'Women',
    description:
      'Stay stylish and comfortable with this trendy women kurti. Versatile enough for various occasions. Available in sizes S, M, and L.',
    size: ['S', 'M', 'L', 'XL'],
    brand: `Women's Collection`,
    reviewData: {
      overallRating: 4.6,
      ratingPercentage: {
        1: 5,
        2: 10,
        3: 20,
        4: 40,
        5: 25,
      },
      totalReviews: 180,
    },
  },
];

export const categories = [
  {id: 1, name: 'Kids'},
  {id: 2, name: 'Bag'},
  {id: 3, name: 'Women'},
  {id: 4, name: 'Men'},
  {id: 5, name: 'Shoes'},
];
