import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  searchVisible: boolean = false;

  constructor(private router: Router) {}

  toggleSearch(): void {
    this.searchVisible = !this.searchVisible;
  }

  goToCart(): void {
    this.router.navigate(['/carrito']);
  }

  goToProfile(): void {
    this.router.navigate(['/perfil']);
  }
}
