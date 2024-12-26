import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../../core/services/products/products.service';
import { product } from '../../../../core/model/product.model';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { machine } from 'node:os';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  currentPage = 1
  products: product[] = []
  filteredProducts: product[] = []
  selectedCategory: string = 'all'
  maxPrice: number = 100
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(
      (data: product[]) => {
        this.products = data
        this.filteredProducts = data.slice()
        this.applyFilters()
      }
    )
  }

  onPageChange(page: number): void {
    this.currentPage = page
    this.scrollToTop()
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  filterProducts(category: string): void {
    this.selectedCategory = category
    console.log("categoria", this.selectedCategory)
    this.applyFilters()
  }

  productsByPrice(event: Event): void {
    const target = event.target as HTMLInputElement | null
    if (target) {
      this.maxPrice = Number(target.value)
      console.log("precio", this.maxPrice)
      this.applyFilters()
    }
  }

  applyFilters(): void {
    this.filteredProducts = this.products.filter(product => {
      const matchesCategory = (product.category === this.selectedCategory) || this.selectedCategory === 'all'
      const matchesPrice = product.price <= this.maxPrice
      return matchesCategory && matchesPrice
    })
    this.currentPage = 1
  }
}
