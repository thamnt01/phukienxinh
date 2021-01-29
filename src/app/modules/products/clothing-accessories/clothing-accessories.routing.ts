import { Routes, RouterModule } from '@angular/router';
import { ClothingAccessoriesComponent } from './clothing-accessories.component';

const routes: Routes = [
  { path: '', component: ClothingAccessoriesComponent },
];

export const ClothingAccessoriesRoutes = RouterModule.forChild(routes);
