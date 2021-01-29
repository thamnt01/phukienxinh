import { Routes, RouterModule } from '@angular/router';
import { GlassesComponent } from './glasses.component';

const routes: Routes = [
  { path: '', component: GlassesComponent },
];

export const GlassesRoutes = RouterModule.forChild(routes);
