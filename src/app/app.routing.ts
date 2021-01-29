import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
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
        path: 'ring',
        loadChildren: () =>
          import('./modules/products/ring/ring.module').then(m => m.RingModule)
      },
      {
        path: 'bracelet',
        loadChildren: () =>
          import('./modules/products/bracelet/bracelet.module').then(m => m.BraceletModule)
      },
      {
        path: 'clothing-accessories',
        loadChildren: () =>
          import('./modules/products/clothing-accessories/clothing-accessories.module').then(m => m.ClothingAccessoriesModule)
      },
      {
        path: 'erring',
        loadChildren: () =>
          import('./modules/products/earring/earring.module').then(m => m.EarringModule)
      },
      {
        path: 'glasses',
        loadChildren: () =>
          import('./modules/products/glasses/glasses.module').then(m => m.GlassesModule)
      },
      {
        path: 'hair-accessories',
        loadChildren: () =>
          import('./modules/products/hair-accessories/hair-accessories.module').then(m => m.HairAccessoriesModule)
      },
      {
        path: 'hat',
        loadChildren: () =>
          import('./modules/products/hat/hat.module').then(m => m.HatModule)
      },
      {
        path: 'nail',
        loadChildren: () =>
          import('./modules/products/nail/nail.module').then(m => m.NailModule)
      },
      {
        path: 'necklace',
        loadChildren: () =>
          import('./modules/products/necklace/necklace.module').then(m => m.NecklaceModule)
      },
      {
        path: 'other',
        loadChildren: () =>
          import('./modules/products/other/other.module').then(m => m.OtherModule)
      },
      {
        path: 'underwear',
        loadChildren: () =>
          import('./modules/products/underwear/underwear.module').then(m => m.UnderwearModule)
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
