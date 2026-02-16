import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// 1. Импортируем наш список товаров
import { ProductList } from './components/product-list/product-list'; 

@Component({
  selector: 'app-root',
  standalone: true,
  // 2. Добавляем ProductList в список разрешенных импортов
  imports: [RouterOutlet, ProductList], 
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'online-store';
}