export interface Product {
  id: number;
  image: string;
  name: string;
  description: string;
  rating: number;
  price: number;
  source: string;
}

export const products = [
  {
    id: 1,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h17/h14/31489167425566/apple-iphone-11-128gb-slim-box-cernyj-100692388-1-Container.jpg",
    name: 'Смартфон Apple iPhone 11 128Gb Slim Box черный',
    description: 'технология NFC: Да\n' +
        'цвет: черный\n' +
        'тип экрана: сенсорный мультитач цветной IPS, Liquid Retina HD\n' +
        'диагональ: 6.1 дюйм\n' +
        'размер оперативной памяти: 4 ГБ\n' +
        'процессор: 6-ядерный Apple A13 Bionic\n' +
        'объем встроенной памяти: 128 ГБ\n' +
        'емкость аккумулятора: 3110 мАч',
    rating: 5.0,
    price: 700,
    source: "https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/?c=750000000#!/item"
  },
  {
    id: 2,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbc/h0a/49939925205022/xiaomi-redmi-10c-4-gb-128-gb-seryj-104417231-1.jpg",
    name: "НСмартфон Xiaomi Redmi 10C 4 ГБ/128 ГБ серый",
    price: 857,
    description: 'технология NFC: Нет\n' +
        'цвет: серый\n' +
        'тип экрана: IPS, сенсорный, мультитач\n' +
        'диагональ: 6.71 дюйм\n' +
        'размер оперативной памяти: 4 ГБ\n' +
        'процессор: 8-ядерный Qualcomm Snapdragon 680\n' +
        'объем встроенной памяти: 128 ГБ\n' +
        'емкость аккумулятора: 5000 мАч',
    rating: 4.5,
    source: "https://kaspi.kz/shop/p/xiaomi-redmi-10c-4-gb-128-gb-seryi-104417231/?c=750000000#!/item"
  },
  {
    id: 3,
      image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/h18/62948780834846/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg",
      name: "Смартфон Apple iPhone 14 Pro Max 256Gb фиолетовый",
      price: 384,
      description: 'технология NFC: Да\n' +
          'цвет: фиолетовый\n' +
          'тип экрана: OLED, Super Retina XDR display с возможностью постоянной работы\n' +
          'диагональ: 6.7 дюйм\n' +
          'размер оперативной памяти: 6 ГБ\n' +
          'процессор: 6-ядерный Apple A16 Bionic\n' +
          'объем встроенной памяти: 256 ГБ\n' +
          'емкость аккумулятора: 3095 мАч',
      rating: 4.5,
      source: "https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000#!/item"
  },
  {
    id: 4,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h89/hb5/49613818069022/smartfon-samsung-galaxy-a13-128gb-sm-a135flbkskz-blue-104253392-1.jpg",
    name: "Смартфон Samsung Galaxy A13 4 ГБ/128 ГБ голубой",
    price: 685,
    description: 'технология NFC: Да\n' +
        'цвет: голубой\n' +
        'тип экрана: PLS TFT LCD сенсорный, мультитач\n' +
        'диагональ: 6.6 дюйм\n' +
        'размер оперативной памяти: 4 ГБ\n' +
        'процессор: 8-ядерный Exynos 850\n' +
        'объем встроенной памяти: 128 ГБ\n' +
        'емкость аккумулятора: 5000 мАч',
    rating: 4.5,
    source: "https://kaspi.kz/shop/p/samsung-galaxy-a13-4-gb-128-gb-goluboi-104253392/?c=750000000#!/item"
  },
  {
    id: 5,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5f/h50/49684457259038/xiaomi-redmi-note-11s-6-gb-128-gb-seryj-104292774-1.jpg",
    name: "Смартфон Xiaomi Redmi Note 11S 8 ГБ/128 ГБ серый",
    price: 699,
    description: 'технология NFC: Нет\n' +
        'цвет: серый\n' +
        'тип экрана: AMOLED, сенсорный, мультитач\n' +
        'диагональ: 6.43 дюйм\n' +
        'размер оперативной памяти: 8 ГБ\n' +
        'процессор: 8-ядерный Mediatek Helio G96\n' +
        'объем встроенной памяти: 128 ГБ\n' +
        'емкость аккумулятора: 5000 мАч',
    rating: 4.5,
    source: "https://kaspi.kz/shop/p/xiaomi-redmi-note-11s-8-gb-128-gb-seryi-104292774/?c=750000000#!/item"
  },
  {
    id: 6,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h68/h07/49792674463774/samsung-galaxy-a23-128gb-peach-104347752-1.jpg",
    name: "Смартфон Samsung Galaxy A23 6 ГБ/128 ГБ",
    price: 987,
    description: 'технология NFC: Да\n' +
        'цвет: оранжевый\n' +
        'тип экрана: PLS TFT LCD сенсорный, мультитач\n' +
        'диагональ: 6.6 дюйм\n' +
        'размер оперативной памяти: 6 ГБ\n' +
        'процессор: 8-ядерный Snapdragon 680\n' +
        'объем встроенной памяти: 128 ГБ\n' +
        'емкость аккумулятора: 5000 мАч',
    rating: 4.5,
    source: "https://kaspi.kz/shop/p/samsung-galaxy-a23-6-gb-128-gb-oranzhevyi-104347752/?c=750000000#!/item"
  },
  {
    id: 7,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h91/h47/49566152032286/poco-x4-pro-8-256gb-cernyj-104227418-1.jpg",
    name: "Смартфон Poco X4 Pro 8 ГБ/256 ГБ черный",
    price: 778,
    description: 'технология NFC: Да\n' +
        'цвет: черный\n' +
        'тип экрана: AMOLED, сенсорный, мультитач\n' +
        'диагональ: 6.67 дюйм\n' +
        'размер оперативной памяти: 8 ГБ\n' +
        'процессор: 8-ядерный Snapdragon 695\n' +
        'объем встроенной памяти: 256 ГБ\n' +
        'емкость аккумулятора: 5000 мАч',
    rating: 4.5,
    source: "https://kaspi.kz/shop/p/poco-x4-pro-8-gb-256-gb-chernyi-104227418/?c=750000000#!/item"
  },
  {
    id: 8,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd6/h71/62288519757854/tecno-spark-9-pro-4-gb-128-gb-cernyj-106366803-1.jpg",
    name: "Смартфон TECNO Spark 9 Pro 4 ГБ/128 ГБ черный",
    price: 857,
    description: 'технология NFC: Да\n' +
        'цвет: черный\n' +
        'тип экрана: цветной IPS, сенсорный\n' +
        'диагональ: 6.6 дюйм\n' +
        'размер оперативной памяти: 4 ГБ\n' +
        'процессор: MediaTek Helio G85\n' +
        'объем встроенной памяти: 128 ГБ\n' +
        'емкость аккумулятора: 5000 мАч',
    rating: 4.5,
    source: "https://kaspi.kz/shop/p/tecno-spark-9-pro-4-gb-128-gb-chernyi-106366803/?c=750000000#!/item"
  },
  {
    id: 9,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h31/h27/49939926581278/xiaomi-redmi-10c-4-gb-128-gb-goluboj-104417308-1.jpg",
    name: "Смартфон Xiaomi Redmi 10C 4 ГБ/128 ГБ голубой",
    price: 998,
    description: 'технология NFC: Нет\n' +
        'цвет: голубой\n' +
        'тип экрана: IPS, сенсорный, мультитач\n' +
        'диагональ: 6.71 дюйм\n' +
        'размер оперативной памяти: 4 ГБ\n' +
        'процессор: 8-ядерный Qualcomm Snapdragon 680\n' +
        'объем встроенной памяти: 128 ГБ\n' +
        'емкость аккумулятора: 5000 мА',
    rating: 4.5,
    source: "https://kaspi.kz/shop/p/xiaomi-redmi-10c-4-gb-128-gb-goluboi-104417308/?c=750000000#!/item"
  },
  {
    id: 10,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5e/ha3/63072545734686/apple-iphone-14-128gb-sirenevyj-106363117-1.jpg",
    name: "Смартфон Apple iPhone 14 128Gb сиреневый",
    price: 679,
    description: 'технология NFC: Да\n' +
        'цвет: сиреневый\n' +
        'тип экрана: OLED, Super Retina XDR display\n' +
        'диагональ: 6.1 дюйм\n' +
        'размер оперативной памяти: 6 ГБ\n' +
        'процессор: 6-ядерный Apple A15 Bionic\n' +
        'объем встроенной памяти: 128 ГБ\n' +
        'емкость аккумулятора: 3279 мАч',
    rating: 4.5,
    source: "https://kaspi.kz/shop/p/apple-iphone-14-128gb-sirenevyi-106363117/?c=750000000#!/item"
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/