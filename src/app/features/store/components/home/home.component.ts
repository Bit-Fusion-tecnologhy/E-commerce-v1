import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductsService } from '../../../../core/services/products/products.service';
import { TruncatePipe } from "../../../shared/pipes/home/truncate.pipe";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TruncatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  listProducts: any[] = [];
  listProductsView: any[] = [];
  
  constructor(private productService: ProductsService) { }
  
  ngOnInit(): void {
    this.productService.getProducts().subscribe((xdat) => (
      this.listProducts = xdat,
      this.listProductsView = this.listProducts.slice(0, 6)
    ))
  }
}
