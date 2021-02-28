import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { AppRoutes } from './app.routing';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { SharedModule } from './_shared/shared.module';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { API_BASE_URL } from './_shared/components/services/identity-api';
import { environment } from 'src/environments/environment';
import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    ContentLayoutComponent,
    AuthLayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ApiAuthorizationModule,
    AppRoutes,
    SharedModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: API_BASE_URL, useValue: environment.apiUrl },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
