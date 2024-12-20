import { Routes } from '@angular/router';
import { ComponentsComponent } from './features/store/components/components.component';
import { AdminComponent } from './features/dashboard/admin/admin.component';
import { HomeComponent } from './features/store/components/home/home.component';
<<<<<<< HEAD
import { ProductsComponent } from './features/store/components/products/products.component';
=======
>>>>>>> 6cd88a5ca88e74162c07a7f7a6be51c3514c3470

export const routes: Routes = [
    { path: '', redirectTo: '/store', pathMatch: 'full' },
    { path: 'store', component: ComponentsComponent, children:[
        {path:'', redirectTo:'home', pathMatch:'full'},
<<<<<<< HEAD
        {path:'home',component:HomeComponent},
        {path:'products', component:ProductsComponent}
=======
        {path:'home',component:HomeComponent}
>>>>>>> 6cd88a5ca88e74162c07a7f7a6be51c3514c3470
    ] },
    { path: 'dashboard', component: AdminComponent }
  ];
