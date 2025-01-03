import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { product } from '../../../../core/model/product.model';

@Component({
  selector: 'app-detail-store',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule],
  templateUrl: './detail-store.component.html',
  styleUrls: ['./detail-store.component.css']
})
export class DetailStoreComponent implements OnInit {
  quantity: number = 1;
  selectedSize: string | null = null;
  selectedColor: string | null = null;
  activeTab: string = 'description';
  selectedImageIndex: number = 0;

  product: product | null = null; 
  images: string[] = [];
  sizes: string[] = ['S', 'M', 'L', 'XL'];
  relatedProducts: product[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Obtener los datos del producto desde la API
    this.http.get<product>('https://fakestoreapi.com/products/1').subscribe((data: product) => {
      this.product = data;
      this.images = [data.image, data.image, data.image];
    });

    // Obtener productos relacionados
    this.http.get<product[]>('https://fakestoreapi.com/products').subscribe((data: product[]) => {
      this.relatedProducts = data;
    });
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  increaseQuantity(): void {
    this.quantity++;
  }

  selectSize(size: string): void {
    this.selectedSize = size;
  }

  selectImage(index: number): void {
    this.selectedImageIndex = index;
  }

  selectColor(color: string): void {
    this.selectedColor = color;
  }

  showTab(tab: string): void {
    this.activeTab = tab;
  }
}
