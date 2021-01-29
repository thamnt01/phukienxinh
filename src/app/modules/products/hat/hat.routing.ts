import { Routes, RouterModule } from '@angular/router';
import { HatComponent } from './hat.component';

const routes: Routes = [
  { path: '', component: HatComponent },
];

export const HatRoutes = RouterModule.forChild(routes);
