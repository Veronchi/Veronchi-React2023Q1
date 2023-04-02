import { FormItemProps, Product } from './interfaces';
import item1 from '../assets/img/vero-moda-sweater.png';
import item2 from '../assets/img/forever-21-sweater.png';
import item3 from '../assets/img/HnM-jeans.png';
import item4 from '../assets/img/only-top.png';
import item5 from '../assets/img/zara-scarf.png';
import item6 from '../assets/img/only-dress.png';
import item7 from '../assets/img/vero-moda-jumpsuit.png';
import item8 from '../assets/img/plush.png';
import item9 from '../assets/img/dressberry.png';
import item10 from '../assets/img/only-jumpsuit.png';
import item11 from '../assets/img/zara-dress.png';
import item12 from '../assets/img/forever-21-choker.png';

export const products: Product[] = [
  {
    id: '1',
    title: 'VERO MODA',
    description: 'Blue Soft Knit Sweater',
    oldPrice: undefined,
    newPrice: '1100',
    rating: '4,9',
    isLiked: true,
    img: item1,
  },
  {
    id: '2',
    title: 'Forever 21',
    description: 'Plush body-hug sweater',
    oldPrice: '2299',
    newPrice: '1790',
    rating: '4,3',
    isLiked: true,
    img: item2,
  },
  {
    id: '3',
    title: 'HnM',
    description: 'Wide-leg TRF Jeans',
    oldPrice: '3299',
    newPrice: '2999',
    rating: '3,2',
    isLiked: false,
    img: item3,
  },
  {
    id: '4',
    title: 'ONLY',
    description: 'Floral Print Corsetry-Inspired Top',
    oldPrice: undefined,
    newPrice: '2999',
    rating: '3,9',
    isLiked: false,
    img: item4,
  },
  {
    id: '5',
    title: 'ZARA',
    description: 'Knit Scarf with diamond shapes',
    oldPrice: '2999',
    newPrice: '2299',
    rating: '4,0',
    isLiked: true,
    img: item5,
  },
  {
    id: '6',
    title: 'ONLY',
    description: 'Pink Blazer Dress',
    oldPrice: '2299',
    newPrice: '1790',
    rating: '4,3',
    isLiked: true,
    img: item6,
  },
  {
    id: '7',
    title: 'VERO MODA',
    description: 'Velvet Halter Jumpsuit',
    oldPrice: '3299',
    newPrice: '2999',
    rating: '4,1',
    isLiked: false,
    img: item7,
  },
  {
    id: '8',
    title: 'Plush',
    description: 'High Rise Jeans- Ankle Length',
    oldPrice: '2999',
    newPrice: '1790',
    rating: '4,2',
    isLiked: false,
    img: item8,
  },
  {
    id: '9',
    title: 'Dressberry',
    description: '3 pack of no-show socks',
    oldPrice: '2999',
    newPrice: '2299',
    rating: '4,5',
    isLiked: true,
    img: item9,
  },
  {
    id: '10',
    title: 'ONLY',
    description: 'Polo Collar Jumpsuit',
    oldPrice: '2999',
    newPrice: '1790',
    rating: '3,3',
    isLiked: true,
    img: item10,
  },
  {
    id: '11',
    title: 'ZARA',
    description: 'Blue mini dress',
    oldPrice: '3299',
    newPrice: '2999',
    rating: '5',
    isLiked: true,
    img: item11,
  },
  {
    id: '12',
    title: 'Forever 21',
    description: 'Wide Metal Choker',
    oldPrice: '2299',
    newPrice: '1790',
    rating: '4,4',
    isLiked: false,
    img: item12,
  },
];

export const mockFormItem = (): FormItemProps => {
  return {
    title: 'HnM',
    description: 'Wide-leg TRF Jeans',
    price: '1234',
    category: 'Jeans',
    collection: '2023-03-24',
    radio: 'yes',
    stock: 'yes',
    image: item1,
  };
};
