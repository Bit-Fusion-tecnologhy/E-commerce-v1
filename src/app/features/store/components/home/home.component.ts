import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductsService } from '../../../../core/services/products/products.service';
import { TruncatePipe } from "../../../shared/pipes/home/truncate.pipe";
import { Router } from '@angular/router';

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
  
  constructor(private productService: ProductsService, private router: Router) { }
  
  ngOnInit(): void {
    this.productService.getProducts().subscribe((xdat) => (
      this.listProducts = xdat,
      this.listProductsView = this.listProducts.slice(0, 6)
    ))
  }

  navegar() {
    this.router.navigate(['detail'], { relativeTo: this.router.routerState.root.firstChild });
  }
  
}