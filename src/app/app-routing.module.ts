import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { UserListComponent } from './user-list/user-list.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
  },
  {
    path: 'form', component: FormComponent,
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
