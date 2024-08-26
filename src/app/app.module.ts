import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { HttpClientModule} from '@angular/common/http';
import { UserListComponent } from './user-list/user-list.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { AppendPipe, FilterPipe } from './data,pipe';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    ListComponent,
    ReactiveFormComponent,
    UserListComponent,
    PipeDemoComponent,
    AppendPipe,
    FilterPipe,
    TemplateDrivenFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
