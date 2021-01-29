import { Routes, RouterModule } from '@angular/router';
import { NailComponent } from './nail.component';

const routes: Routes = [
  { path: '', component: NailComponent },
];

export const NailRoutes = RouterModule.forChild(routes);
