import { Routes, RouterModule } from '@angular/router';
import { HairAccessoriesComponent } from './hair-accessories.component';

const routes: Routes = [
  { path: '', component: HairAccessoriesComponent },
];

export const HairAccessoriesRoutes = RouterModule.forChild(routes);
