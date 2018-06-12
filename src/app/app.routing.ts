import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PressComponent } from './press/press.component';
import { ShopComponent } from './shop/shop.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'store',
    component: ShopComponent
  },
  {
    path: 'press',
    component: PressComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
