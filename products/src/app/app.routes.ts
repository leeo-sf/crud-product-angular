import { Routes } from '@angular/router';
import { HomeComponent } from './components/page/home/home.component';
import { AboutComponent } from './components/page/about/about.component';
import { AddProductComponent } from './components/page/add-product/add-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "about",
        component: AboutComponent
    },
    {
        path: "product/new",
        component: AddProductComponent
    },
    {
        path: "product/update/:id",
        component: UpdateProductComponent
    }
];
