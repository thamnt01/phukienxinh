import { Routes, RouterModule } from '@angular/router';
import { UnderwearComponent } from './underwear.component';

const routes: Routes = [
  { path: '', component: UnderwearComponent },
];

export const UnderwearRoutes = RouterModule.forChild(routes);
