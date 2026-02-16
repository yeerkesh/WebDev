import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCard } from '../product-card/product-card'; // Проверь путь к файлу карточки
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
  products: Product[] = [
    {
      id: 1,
      name: 'Apple iPhone 13 128Gb черный',
      description: 'Стильный смартфон с отличной камерой и мощным процессором A15 Bionic.',
      price: 275000,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448265246.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h1a/h44/84378448330782.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/'
    },
    {
      id: 2,
      name: 'Apple AirPods Pro 2 with Type-C',
      description: 'Наушники с лучшим шумоподавлением и чистым звуком для любых устройств.',
      price: 110000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/83819401510942.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/83819401510942.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h03/h70/83819401576478.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h41/h98/83819401642014.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-with-type-c-belyi-113577425/'
    },
    {
      id: 3,
      name: 'Фен Dyson HD15 Supersonic черный',
      description: 'Профессиональный уход за волосами с насадкой для разглаживания непослушных волос.',
      price: 215000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h7b/h7a/81373307568158.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h7b/h7a/81373307568158.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h5b/h6c/81373307699230.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h78/h85/81373307830302.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/dyson-hd15-supersonic-chernyi-110996456/'
    },
    {
      id: 4,
      name: 'Sony PlayStation 5 Slim',
      description: 'Игровая приставка нового поколения в обновленном тонком корпусе.',
      price: 245000,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h52/h64/84511211126814.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h52/h64/84511211126814.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h61/h50/84511211192350.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h22/h71/84511211257886.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696085/'
    },
    {
      id: 5,
      name: 'Смарт-часы Apple Watch Series 9 45 мм',
      description: 'Самые мощные часы Apple с новой функцией управления жестом «Двойное смыкание».',
      price: 195000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h97/h37/83726588280862.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h97/h37/83726588280862.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/ha6/h46/83726588346398.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h88/h52/83726588411934.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-watch-series-9-gps-45-mm-temno-sinii-113398463/'
    },
    {
      id: 6,
      name: 'Колонка Яндекс Станция Миди',
      description: 'Умная колонка с Алисой, Zigbee и мощным звуком в компактном корпусе.',
      price: 65000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h69/h78/84457833070622.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h69/h78/84457833070622.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h58/h28/84457833136158.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h5d/h09/84457833201694.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/jandeks-stantsija-midi-chernyi-114389617/'
    },
    {
      id: 7,
      name: 'Xiaomi Mi Band 8 Global',
      description: 'Популярный фитнес-трекер с ярким AMOLED экраном и быстрой зарядкой.',
      price: 18000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h14/h13/81335431692318.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h14/h13/81335431692318.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hf4/h99/81335431823390.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h87/h85/81335431954462.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-smart-band-8-chernyi-110756466/'
    },
    {
      id: 8,
      name: 'Samsung Galaxy S24 Ultra 256Gb',
      description: 'Флагман с титановым корпусом и искусственным интеллектом Galaxy AI.',
      price: 540000,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h4a/h5d/84963333308446.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h4a/h5d/84963333308446.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h82/h17/84963333439518.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h27/h46/84963333570590.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-12-gb-256-gb-seryi-116043556/'
    },
    {
      id: 9,
      name: 'LEGO Icons Букет цветов',
      description: 'Уникальный конструктор для взрослых, который станет вечным украшением дома.',
      price: 26000,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h35/hbe/63914441539614.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h35/hbe/63914441539614.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hba/h60/63914443931678.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h3f/hf0/63914446356510.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/lego-icons-buket-tsvetov-10280-101140085/'
    },
    {
      id: 10,
      name: 'Кофемашина DeLonghi Magnifica Start',
      description: 'Автоматическая кофемашина для идеального эспрессо и капучино одной кнопкой.',
      price: 185000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h35/hbe/64417124352030.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h35/hbe/64417124352030.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hba/h60/64417126744094.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h3f/hf0/64417129168926.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/delonghi-ecam220-22-gb-magnifica-start-chernyi-106518175/'
    }
  ];
}