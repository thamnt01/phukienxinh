import { Routes, RouterModule } from '@angular/router';
import { NecklaceComponent } from './necklace.component';

const routes: Routes = [
  { path: '', component: NecklaceComponent },
];

export const NecklaceRoutes = RouterModule.forChild(routes);
