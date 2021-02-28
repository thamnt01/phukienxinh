import { Routes, RouterModule } from '@angular/router';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';

const routes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
    // canActivate: [AuthorizeGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: () =>
          import('./modules/home/home.module').then(m => m.HomeModule)
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
      {
        path: 'products',
        loadChildren: () =>
          import('./modules/products-site/products-site.module').then(m => m.ProductsSiteModule)
      },
      {
        path: 'product-view',
        loadChildren: () =>
          import('./modules/product-view/product-view.module').then(m => m.ProductViewModule)
      },
    ]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('./modules/auth/login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'sign-up',
        loadChildren: () =>
          import('./modules/auth/sign-up/sign-up.module').then(m => m.SignUpModule)
      },
    ]
  }
];

export const AppRoutes = RouterModule.forRoot(routes);
