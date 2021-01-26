import { Routes, RouterModule } from '@angular/router';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: ContentLayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./modules/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'ring',
        loadChildren: () =>
          import('./modules/ring/ring.module').then(m => m.RingModule)
      },
    ]
  },
];

export const AppRoutes = RouterModule.forRoot(routes);
