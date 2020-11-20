import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialModule } from './angular-material.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { NavComponent } from './shared/nav/nav.component';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialsHomePageComponent } from './materials-home-page/materials-home-page.component';
import { MaterialsOrderPageComponent } from './materials-order-page/materials-order-page.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { MaterialsListComponent } from './components/materials-list/materials-list.component';
import { OrderCardComponent } from './components/order-card/order-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    NavComponent,
    MaterialsHomePageComponent,
    MaterialsOrderPageComponent,
    ErrorPageComponent,
    MaterialsListComponent,
    OrderCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    

  ],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
        JwtHelperService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
