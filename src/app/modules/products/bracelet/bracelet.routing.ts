import { Routes, RouterModule } from '@angular/router';
import { BraceletComponent } from './bracelet.component';

const routes: Routes = [
  { path: '', component: BraceletComponent },
];

export const BraceletRoutes = RouterModule.forChild(routes);
