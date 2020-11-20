import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { MaterialsHomePageComponent } from './materials-home-page/materials-home-page.component';

const routes: Routes = [
  { path: "login", component: LoginPageComponent },

  { path: "", component: MaterialsHomePageComponent, pathMatch: "full"},
  { path: "materials", component: MaterialsHomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
