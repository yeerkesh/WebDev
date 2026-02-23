import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' },
  ];

  // Картинки-заглушки: стабильные URL (можно потом заменить на Kaspi)
  private img(seed: string) {
    // picsum выдаёт разные изображения по seed
    return `https://picsum.photos/seed/${encodeURIComponent(seed)}/800/600`;
  }

  private products: Product[] = [
    // Smartphones (categoryId: 1)
    {
      id: 1,
      categoryId: 1,
      likes: 0,
      name: 'Apple iPhone 17 Pro 256Gb (оранжевый)',
      description:
        'Флагманский iPhone с мощным процессором и отличным OLED-дисплеем. Подходит для фото, видео и самых тяжёлых приложений.',
      price: 0,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p24/p88/64170090.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p24/p88/64170090.png?format=gallery-medium',
        'https://object.pscloud.io/cms/cms/Photo/img_0_77_7219_0_1_ayMLEZ.webp',
        'https://object.pscloud.io/cms/cms/Photo/img_0_77_7219_0_1_WMeIDQ.webp',
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000',
    },
    {
    id: 2,
    categoryId: 1,
    likes: 0,
    name: 'Apple iPhone 15 128Gb (чёрный)',
    description:
      'iPhone 15 с отличной камерой, быстрым чипом и ярким Super Retina XDR. Отличный выбор для ежедневного использования.',
    price: 0,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86275143532574.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h6d/h89/86275143565342.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000',
  },
      {
        id: 3,
    categoryId: 1,
    likes: 0,
    name: 'Redmi A3x 3/64Gb (чёрный)',
    description:
      'Доступный смартфон для базовых задач: звонки, мессенджеры, соцсети.',
    price: 0,
    rating: 4.5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h83/h08/86585118720030.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h83/h08/86585118720030.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h9a/h1b/86584697651230.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hac/h2e/86584697683998.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/redmi-a3x-3-gb-64-gb-chernyi-121654928/?c=750000000',
      },
      {
    id: 4,
    categoryId: 1,
    likes: 0,
    name: 'Samsung Galaxy A07 6/128Gb (лавандовый)',
    description:
      'Практичный смартфон Samsung для повседневных задач.',
    price: 0,
    rating: 4.6,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p0d/pdb/61291709.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p0d/pdb/61291709.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p79/pdd/61291710.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p06/pde/61291715.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a07-6-gb-128-gb-lavandovyi-144817894/?c=750000000',
  },
      {
    id: 5,
    categoryId: 1,
    likes: 0,
    name: 'Samsung Galaxy S25 Ultra 5G 12/256Gb (чёрный)',
    description:
      'Топовый Android-флагман с мощной камерой и высокой производительностью.',
    price: 0,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p84/p24/20120106.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p84/p24/20120106.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pbc/p24/20120108.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p7d/p27/20120112.png?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s25-ultra-5g-12-gb-256-gb-chernyi-133435348/?c=750000000',
  },  

    // Laptops (categoryId: 2)
    {
      id: 6,
      categoryId: 2,
      likes: 0,
      name: 'Pryme OfficeBook 15.6 (8GB/256GB SSD, Win 11)',
      description:
        'Офисный ноутбук для учёбы и работы: документы, браузер, Zoom. SSD ускоряет загрузку и работу системы.',
      price: 0,
      rating: 4.4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pbb/p49/75516639.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/pbb/p49/75516639.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pde/p46/75516644.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p48/p4a/75516634.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/pryme-officebook-15-6-8-gb-ssd-256-gb-win-11-officebook-n15-148883799/?c=750000000',
    },
    {
      id: 7,
      categoryId: 2,
      likes: 0,
      name: 'Apple MacBook Air 13 (2020, 8GB/256GB SSD, MGN63RU/A)',
      description:
        'Лёгкий и автономный MacBook Air для работы, учёбы и разработки. Удобная экосистема и стабильная производительность.',
      price: 0,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h2d/h82/83648592183326.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h3a/h0d/64213216755742.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000',
    },
    {
      id: 8,
      categoryId: 2,
      likes: 0,
      name: 'Lenovo IdeaPad 3 15.6 (8GB/256GB SSD, DOS)',
      description:
        'Надёжный ноутбук для повседневных задач. Подойдёт для учёбы, браузера и офисных приложений.',
      price: 0,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h6f/hba/64231854538782.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h6f/hba/64231854538782.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h2f/h20/64231858077726.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/ha2/h3f/64231926562846.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15-6-8-gb-ssd-256-gb-dos-15igl05-81wq00errk-102715483/?c=750000000',
    },
    {
      id: 9,
      categoryId: 2,
      likes: 0,
      name: 'Acer Aspire 3 15.6 (8GB/256GB SSD, Win 11 Pro)',
      description:
        'Практичный ноутбук Acer с SSD. Хорош для работы, учёбы и повседневного использования.',
      price: 0,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p24/pae/30100209.jpeg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p24/pae/30100209.jpeg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p24/pae/30100209.jpeg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/acer-aspire-3-15-6-8-gb-ssd-256-gb-win-11-pro-a325-45-zn-n01si-03k--136300221/?c=750000000',
    },
    {
      id: 10,
      categoryId: 2,
      likes: 0,
      name: 'Thunderobot 911S Core D 15.6 (16GB/512GB SSD, без ОС)',
      description:
        'Мощнее офисных: больше памяти и SSD — быстрее система и программы. Подойдёт для тяжёлых задач и многозадачности.',
      price: 0,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h76/h6c/85301691547678.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h76/h6c/85301691547678.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/ha4/hf8/85301691613214.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h98/hae/85301691744286.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/thunderobot-911s-core-d-15-6-16-gb-ssd-512-gb-bez-os-jt009k00f-117046774/?c=750000000',
    },

    // Headphones (categoryId: 3)
    {
      id: 11,
      categoryId: 3,
      likes: 0,
      name: 'Apple AirPods 4 (белый)',
      description:
        'Удобные TWS-наушники для повседневного использования: звонки, музыка, быстрые подключения и комфортная посадка.',
      price: 0,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcb/h97/87309386809374.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hcb/h97/87309386809374.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h9f/had/87309385662494.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-4-belyi-124333372/?c=750000000',
    },
    {
      id: 12,
      categoryId: 3,
      likes: 0,
      name: 'Sony WH-1000XM5 (чёрный)',
      description:
        'Топовые полноразмерные наушники с отличным шумоподавлением. Идеальны для работы, поездок и качественной музыки.',
      price: 0,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9c/h23/65099684020254.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h9c/h23/65099684020254.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/hc7/hde/65099687657502.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h0d/h4e/65099689000990.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm5-chernyi-105259822/?c=750000000',
    },
    {
      id: 13,
      categoryId: 3,
      likes: 0,
      name: 'Xiaomi Redmi Buds 6 Pro (чёрный)',
      description:
        'Беспроводные наушники с хорошим соотношением цена/качество. Подходят для музыки, спорта и звонков.',
      price: 0,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p31/p86/35108439.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p31/p86/35108439.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/pa9/p83/35108441.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p8d/p83/35108442.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/naushniki-xiaomi-redmi-buds-6-pro-chernyi-133094627/?c=750000000',
    },
    {
      id: 14,
      categoryId: 3,
      likes: 0,
      name: 'Apple AirPods Max 2 (фиолетовый)',
      description:
        'Премиальные полноразмерные наушники Apple: качественный звук, комфорт, шумоподавление и стильный дизайн.',
      price: 0,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p38/3402331.jpeg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p18/p38/3402331.jpeg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p2b/p62/3531965.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p66/p16/3402329.jpeg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-max-2-fioletovyi-128589567/?c=750000000',
    },
    {
      id: 15,
      categoryId: 3,
      likes: 0,
      name: 'Huawei FreeBuds Pro 4 (белый)',
      description:
        'Компактные TWS-наушники с хорошим звучанием и удобной посадкой. Отличный вариант для города и поездок.',
      price: 0,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p6f/p6b/107077755.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p6f/p6b/107077755.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/pcd/p67/107077767.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/naushniki-huawei-freebuds-pro-4-belyi-136753476/?c=750000000',
    },

    // Tablets (categoryId: 4)
    {
      id: 16,
      categoryId: 4,
      likes: 0,
      name: 'Apple iPad Pro 12.9 (2022, Wi-Fi, 128GB, серый)',
      description:
        'Большой и мощный iPad для работы, творчества и мультимедиа. Отличный экран и высокая производительность.',
      price: 0,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h0c/h0e/64900017389598.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h0c/h0e/64900017389598.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p2b/pa1/78319822.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p47/pa1/78319823.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-ipad-pro-12-9-2022-wi-fi-12-9-djuim-8-gb-128-gb-seryi-107277956/?c=750000000',
    },
    {
      id: 17,
      categoryId: 4,
      likes: 0,
      name: 'Apple iPad A16 11 (2025, Wi-Fi, 128GB, серебристый)',
      description:
        'Современный iPad 11" для учёбы, чтения и развлечений. Удобен в дороге, лёгкий и автономный.',
      price: 0,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pef/pe8/37011887.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/pef/pe8/37011887.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p85/pe5/37011897.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p69/pe5/37011898.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-serebristyi-138199634/?c=750000000',
    },
    {
      id: 18,
      categoryId: 4,
      likes: 0,
      name: 'Xiaomi Redmi Pad 2 4G 11 (8/256GB, серый)',
      description:
        'Планшет Xiaomi с большим экраном для видео, игр и учёбы. Хороший баланс цены и возможностей.',
      price: 0,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p34/pcd/81439931.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p34/pcd/81439931.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/pbd/p9b/46318883.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/pa0/p9b/46318884.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-pad-2-4g-11-djuim-8-gb-256-gb-seryi-140640417/?c=750000000',
    },
    {
      id: 19,
      categoryId: 4,
      likes: 0,
      name: 'Huawei MatePad 11.5 (2025 PaperMatte, 8/256GB, фиолетовый)',
      description:
        'Планшет Huawei с комфортным экраном PaperMatte — меньше бликов, удобно читать и работать. Хорош для учёбы и заметок.',
      price: 0,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pf4/p12/65766379.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/pf4/p12/65766379.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p7c/p15/65766381.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p98/p15/65766382.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/huawei-matepad-11-5-2025-papermatte-11-5-djuim-8-gb-256-gb-fioletovyi-podarok-145939369/?c=750000000',
    },
    {
      id: 20,
      categoryId: 4,
      likes: 0,
      name: 'G-Vill S10 Ultra Tab 10.1 (32GB/512GB, чёрный)',
      description:
        'Бюджетный планшет для базовых задач: видео, браузер, книги. Подойдёт как простой домашний девайс.',
      price: 0,
      rating: 4.3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p80/pb0/25860494.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p80/pb0/25860494.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/g-vill-s10-ultra-tab-10-1-djuim-32-gb-512-gb-chernyi-135008041/?c=750000000',
    },
  ];

  getCategories(): Category[] {
    return this.categories;
  }

  getProducts(): Product[] {
    return this.products.map(p => ({ ...p, images: [...p.images] }));
  }
}