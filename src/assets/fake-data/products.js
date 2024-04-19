// all images imported from images directory
import product_01_image_01 from '../images/product_01.jpg';
import product_01_image_02 from '../images/product_01.1.jpg';
import product_01_image_03 from '../images/product_01.3.jpg';

import product_02_image_01 from '../images/product_2.1.jpg';
import product_02_image_02 from '../images/product_2.2.jpg';
import product_02_image_03 from '../images/product_2.3.jpg';

import product_03_image_01 from '../images/product_3.1.jpg';
import product_03_image_02 from '../images/product_3.2.jpg';
import product_03_image_03 from '../images/product_3.3.jpg';

import product_04_image_01 from '../images/product_4.1.jpg';
import product_04_image_02 from '../images/product_4.2.jpg';
import product_04_image_03 from '../images/product_4.3.png';

import product_05_image_01 from '../images/product_04.jpg';
import product_05_image_02 from '../images/product_08.jpg';
import product_05_image_03 from '../images/product_09.jpg';

import shaurma_classic from '../images/shaurma_classic.jpg';
import shaurmaxz from '../images/shaurmaxz.jpg';

import chicken from '../images/chiken_shaurma.jpg'
import cheese from '../images/cheez_shaurma.jpg'
import kebab from '../images/keabebebe.jpg'
import asuClassic from '../images/asu_classic.jpg'
import asu_gaz from '../images/aus_gaz.jpg'
import asu_clubnika from '../images/asu_clubnika.jpg'
import asu_lemon from '../images/asu_lemon.jpg'
import asu_myata from '../images/asu_myata.jpg'
import aralash from '../images/aralash-krash.jpg'
import aralash2 from '../images/aralash2.jpg'
import chalap from '../images/chalap.jpg'
import chalap_jr from '../images/chalap_jr.jpg'
import cola from '../images/cola.jpg'
import fantabek from '../images/fantabek.jpg'
import fusetea_persik from '../images/fusetea_persik.jpg'
import fusetea_lemon from '../images/fusetea_lemon.jpg'
import fusetea_romashka from '../images/fusetea_romashka.jpg'
import maksim from '../images/maksim.jpg'
import sprite from '../images/sprite.jpg'
import tan from '../images/tan.jpg'


const products = [
  {
    id: '01',
    title: 'Куриный бургер',
    price: 180.0,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: 'Burger',

    desc: 'Сочный куриный бургер с хрустящей булочкой и свежими овощами. Идеальный выбор для быстрого перекуса!',
  },

  {
    id: '02',
    title: 'Вегетарианская пицца',
    price: 690.0,
    image01: product_02_image_01,
    image02: product_02_image_02,
    image03: product_02_image_03,
    category: 'Pizza',

    desc: 'Аппетитная вегетарианская пицца с разнообразными овощами и сыром на тонком тесте. Идеальный выбор для вегетарианцев!',
  },

  {
    id: '03',
    title: 'Маргарита с двойным сыром',
    price: 850.0,
    image01: product_03_image_01,
    image02: product_03_image_02,
    image03: product_03_image_03,
    category: 'Pizza',

    desc: 'Классическая пицца "Маргарита" с удвоенным количеством сыра. Популярный выбор для ценителей сырных блюд!',
  },

  {
    id: '04',
    title: 'Мексиканская волна',
    price: 870.0,
    image01: product_04_image_01,
    image02: product_04_image_02,
    image03: product_04_image_03,
    category: 'Pizza',

    desc: 'Пикантная пицца "Мексиканская волна" с мексиканскими специями и сочными ингредиентами. Попробуйте что-то новенькое!',
  },

  {
    id: '05',
    title: 'Сырный бургер',
    price: 200.0,
    image01: product_05_image_01,
    image02: product_05_image_02,
    image03: product_05_image_03,
    category: 'Burger',

    desc: 'Нежный бургер с большим количеством сыра. Отличный вариант для любителей сырных блюд!',
  },
  {
    id: '06',
    title: 'Королевский сырный бургер',
    price: 210.0,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: 'Burger',

    desc: 'Пышная булочка, сочный котлет из говядины и три вида сыра - все это в королевском бургере!',
  },

  {
    id: '07',
    title: 'Морская пицца',
    price: 840.0,
    image01: product_02_image_02,
    image02: product_02_image_01,
    image03: product_02_image_03,
    category: 'Pizza',

    desc: 'Пицца с морепродуктами на тонком тесте. Ощутите вкус моря в каждом кусочке!',
  },

  {
    id: '08',
    title: 'Тонкая пицца с сыром',
    price: 700.0,
    image01: product_03_image_02,
    image02: product_03_image_01,
    image03: product_03_image_03,
    category: 'Pizza',

    desc: 'Легкая и нежная пицца с тонким тестом и ароматным сыром. Отличный выбор для любителей легких ужинов!',
  },

  {
    id: '09',
    title: 'Пицца с грибами',
    price: 950.0,
    image01: product_04_image_02,
    image02: product_04_image_01,
    image03: product_04_image_03,
    category: 'Pizza',

    desc: 'Ароматная пицца с лесными грибами и нежным сыром. Попробуйте нашу пиццу с традиционными итальянскими вкусами!',
  },

  {
    id: '10',
    title: 'Классический гамбургер',
    price: 190.0,
    image01: product_05_image_02,
    image02: product_05_image_01,
    image03: product_05_image_03,
    category: 'Burger',

    desc: 'Настоящий классический гамбургер с говяжьей котлетой, свежими овощами и специальным соусом. Попробуйте легендарный вкус!',
  },

  {
    id: '11',
    title: 'Шаурма классическая',
    price: 200.0,
    image01: shaurma_classic,
    image02: shaurma_classic,
    image03: shaurma_classic,
    category: 'Shaurma',

    desc: 'Ароматное куриное мясо, обжаренное с овощами и специями, завернутое в теплый лаваш с свежими огурцами, помидорами и аппетитным соусом. Быстрый и вкусный перекус для настоящих гурманов!',
  },

  {
    id: '12',
    title: 'Шаурма с курицей',
    price: 220.0,
    image01: chicken,
    image02: chicken,
    image03: chicken,
    category: 'Shaurma',

    desc: 'Нежное куриное мясо, обжаренные овощи, свежие огурцы и помидоры, завернутые в теплый лаваш с ароматным соусом. Идеальный выбор для быстрого перекуса!',
  },

  {
    id: '13',
    title: 'Шаурма-кебаб',
    price: 280.0,
    image01: kebab,
    image02: kebab,
    image03: kebab,
    category: 'Shaurma',

    desc: ' Мы сочетаем лучшие качества шаурмы и кебаба в этом блюде: нежное куриное мясо, обжаренные овощи и специи, завернутые в теплый лаваш с сочными огурцами, помидорами и ароматным соусом.',
  },

  {
    id: '14',
    title: 'Сырная шаурма',
    price: 275.0,
    image01: cheese,
    image02: cheese,
    image03: cheese,
    category: 'Shaurma',

    desc: ' Мы добавляем нежный сыр к классическому рецепту шаурмы для того, чтобы удовлетворить ваш аппетит еще более приятным и насыщенным вкусом.',
  },

  {
    id: '15',
    title: 'Асу без газа',
    price: 35.0,
    image01: asuClassic,
    image02: asuClassic,
    image03: asuClassic,
    category: 'Drink',

    desc: 'Насладитесь чистотой и натуральностью этого напитка, который идеально подходит к любому блюду.',
  },

  {
    id: '16',
    title: 'Асу с газом',
    price: 35.0,
    image01: asu_gaz,
    image02: asu_gaz,
    image03: asu_gaz,
    category: 'Drink',

    desc: 'Насладитесь бодрящим эффектом и приятным пузырьками этой воды, которая идеально подойдет как дополнение к вашему обеду или перекусу.',
  },

  {
    id: '17',
    title: 'Асу со вкусом мяты',
    price: 45.0,
    image01: asu_myata,
    image02: asu_myata,
    image03: asu_myata,
    category: 'Drink',

    desc: 'Этот напиток идеально подойдет для тех, кто ищет что-то освежающее и легкое.',
  },

  {
    id: '18',
    title: 'Кока-кола',
    price: 50.0,
    image01: cola,
    image02: cola,
    image03: cola,
    category: 'Drink',

    desc: 'мы предлагаем прохладительный напиток Coca-Cola, который всегда приносит удовольствие своим классическим вкусом и освежающими пузырьками.',
  },

  {
    id: '19',
    title: 'Фанта',
    price: 50.0,
    image01: fantabek,
    image02: fantabek,
    image03: fantabek,
    category: 'Drink',

    desc: 'у нас также есть освежающий напиток Фанта, который придает вашему обеду или перекусу яркую и веселую нотку.',
  },

  {
    id: '20',
    title: 'Спрайт',
    price: 45.0,
    image01: sprite,
    image02: sprite,
    image03: sprite,
    category: 'Drink',

    desc: ' у нас есть прохладительный напиток Спрайт, который обладает освежающим лимонным вкусом и приятной легкостью.',
  },

  {
    id: '21',
    title: 'Чалап',
    price: 35.0,
    image01: chalap_jr,
    image02: chalap_jr,
    image03: chalap_jr,
    category: 'Drink',

    desc: '',
  },

  {
    id: '22',
    title: 'Максым',
    price: 80.0,
    image01: maksim,
    image02: maksim,
    image03: maksim,
    category: 'Drink',

    desc: '',
  },

  {
    id: '22',
    title: 'Тан',
    price: 80.0,
    image01: tan,
    image02: tan,
    image03: tan,
    category: 'Drink',

    desc: '',
  },

  {
    id: '23',
    title: 'Аралаш',
    price: 80.0,
    image01: aralash,
    image02: aralash,
    image03: aralash,
    category: 'Drink',

    desc: '',
  },

  {
    id: '24',
    title: 'Фьюсти',
    price: 50.0,
    image01: fusetea_persik,
    image02: fusetea_persik,
    image03: fusetea_persik,
    category: 'Bread',

    desc: '',
  }
];

export default products;
