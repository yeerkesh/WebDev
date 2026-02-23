import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItem {
  @Input() product!: Product;
  @Output() delete = new EventEmitter<number>();

  selectedImage: string | null = null;

  get mainImage(): string {
    return this.selectedImage ?? this.product.image;
  }

  setImage(url: string) {
    this.selectedImage = url;
  }

  like() {
    this.product.likes += 1;
  }

  requestDelete() {
    const ok = confirm('Delete this product?');
    if (ok) this.delete.emit(this.product.id);
  }

  openKaspi() {
    window.open(this.product.link, '_blank');
  }

  shareWhatsApp() {
    const url = encodeURIComponent(this.product.link);
    window.open(`https://wa.me/?text=Check%20out%20this%20product:%20${url}`, '_blank');
  }

  shareTelegram() {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(this.product.name);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }

  stars(rating: number): string {
    const full = Math.floor(rating);
    const empty = 5 - full;
    return '★'.repeat(full) + '☆'.repeat(empty);
  }
}