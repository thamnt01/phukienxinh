import { Routes, RouterModule } from '@angular/router';
import { EarringComponent } from './earring.component';

const routes: Routes = [
  { path: '', component: EarringComponent },
];

export const EarringRoutes = RouterModule.forChild(routes);
