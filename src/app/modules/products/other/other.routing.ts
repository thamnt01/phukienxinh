import { Routes, RouterModule } from '@angular/router';
import { OtherComponent } from './other.component';

const routes: Routes = [
  { path: '', component: OtherComponent },
];

export const OtherRoutes = RouterModule.forChild(routes);
