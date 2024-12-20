import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../../core/services/products/products.service';
import { product } from '../../../../core/model/product.model';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

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
  constructor(private productsService: ProductsService){}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(
      (data:product[]) => {
        this.products=data
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
}
