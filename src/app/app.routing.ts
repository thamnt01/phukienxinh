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
          import('./modules/products/ring/ring.module').then(m => m.RingModule)
      },
      {
        path: 'cart',
        loadChildren: () =>
          import('./modules/cart/cart.module').then(m => m.CartModule)
      },
      {
        path: 'payment',
        loadChildren: () =>
          import('./modules/payment/payment.module').then(m => m.PaymentModule)
      },
      {
        path: 'blog-topic',
        loadChildren: () =>
          import('./modules/blog-topic/blog-topic.module').then(m => m.BlogTopicModule)
      },
    ]
  },
];

export const AppRoutes = RouterModule.forRoot(routes);
