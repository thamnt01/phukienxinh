import { Routes, RouterModule } from '@angular/router';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';

const routes: Routes = [
  { path: 'content-layout', component: ContentLayoutComponent },
];

export const AppRoutes = RouterModule.forRoot(routes);
