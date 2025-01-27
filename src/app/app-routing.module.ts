import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { UserListComponent } from './user-list/user-list.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent},
   {
    path: 'login', component: LoginComponent
   },
   {
    path: 'dashboard', component: DashboardComponent,
  },
  {
    path: 'home', component: HomeComponent,
  },
  {
    path: 'form', component: ReactiveFormComponent,
  },
  {
    path: 'list', component: ListComponent,
  },
  {
    path: 'user-list', component: UserListComponent,
  },
  {
    path: 'pipe', component: PipeDemoComponent
  },
  {
    path: 'template-driven-form', component: TemplateDrivenFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
