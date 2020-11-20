import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { MaterialsHomePageComponent } from './materials-home-page/materials-home-page.component';
import { MaterialsOrderPageComponent } from './materials-order-page/materials-order-page.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [
  { path: "login", component: LoginPageComponent },
  { path: "error", component: ErrorPageComponent },

  // Materials
  { path: "", component: MaterialsHomePageComponent, pathMatch: "full"},
  { path: "materials", component: MaterialsHomePageComponent },
  { path: "materials/order/:id", component: MaterialsOrderPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
