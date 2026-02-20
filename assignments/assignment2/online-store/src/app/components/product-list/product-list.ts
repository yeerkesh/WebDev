import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Нужно для *ngFor и *ngIf
import { FormsModule } from '@angular/forms'; // Нужно для [(ngModel)]
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-list.html', 
  styleUrls: ['./product-list.css']
})
export class ProductListComponent implements OnInit {
  // 1. Оригинальный массив (Task 1)
  products: Product[] = [
    { name: 'iPhone 13', description: 'The latest iPhone with A15 chip and dual-camera.', price: '429,990 KZT', image: 'https://cdn.new-brz.net/app/public/models/MLPG3HU-A/large/j/210927160021538368.jpg', rating: 4.8 },
    { name: 'iPhone 12', description: 'Powerful performance with A14 Bionic chip.', price: '339,990 KZT', image: 'https://cdn.new-brz.net/app/public/models/MGE33/large/j/201230150028538204.jpg', rating: 4.5 },
    { name: 'iPhone 11 Pro', description: 'Triple-camera system for pro photography.', price: '179,990 KZT', image: 'https://apple-com.ru/image/cache/catalog/product/iPhone%2011/iphone_11_pro_mg_2-300x300h.jpg.webp', rating: 4.7 }
  ];

  // 2. Переменные для поиска (Task 2)
  searchQuery: string = '';
  filteredProducts: Product[] = [];

  ngOnInit(): void {
    this.filteredProducts = this.products;
  }

  filterProducts(): void {
    const query = this.searchQuery.toLowerCase();
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(query) 
    );
  }
}