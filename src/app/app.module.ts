import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NothingComponent } from './nothing/nothing.component';
import { TestService } from './test.service';
import { ProductsComponent } from './products/products.component';
import { NtrComponent } from './ntr/ntr.component';
import { RamComponent } from './ram/ram.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoformComponent } from './todoform/todoform.component';
import { TodoService } from './todo.service';
import { MobileService } from './mobile.service';
import { MobileComponent } from './mobile/mobile.component';
import { FoamComponent } from './foam/foam.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { AsynpipeComponent } from './asynpipe/asynpipe.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

const routes:Routes=[
  {
    path:'',component:HomeComponent
  },
  {
    path:'home',component:HomeComponent,
    children:[
    {path:'home/ntr',component:NtrComponent},
    {path:'home/ram',component:RamComponent}
    ] 
  },
  {
    path:'products',component:ProductsComponent,canActivate:[AuthService]
  },
    {
    path:'**',component:NothingComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductsComponent,
    NtrComponent,
    RamComponent,
    TodolistComponent,
    TodoformComponent,
    MobileComponent,
    FoamComponent,
    ReactiveComponent,
    AsynpipeComponent,
    TemplateDrivenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [TestService,AuthService,TodoService,MobileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
