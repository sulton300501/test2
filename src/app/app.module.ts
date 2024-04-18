import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CreateComponent } from './component/create/create.component';
import { DeleteComponent } from './component/delete/delete.component';
import { GetAllComponent } from './component/get-all/get-all.component';
import { GetByIdComponent } from './component/get-by-id/get-by-id.component';
import { UpdateComponent } from './component/update/update.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreateComponent,
    DeleteComponent,
    GetAllComponent,
    GetByIdComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
