import { Routes } from '@angular/router';
import { ComponentsComponent } from './features/store/components/components.component';
import { AdminComponent } from './features/dashboard/admin/admin.component';
import { HomeComponent } from './features/store/components/home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: '/store', pathMatch: 'full' },
    { path: 'store', component: ComponentsComponent, children:[
        {path:'', redirectTo:'home', pathMatch:'full'},
        {path:'home',component:HomeComponent}
    ] },
    { path: 'dashboard', component: AdminComponent }
  ];
