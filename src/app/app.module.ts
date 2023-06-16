import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipesComponentComponent } from './recipes-component/recipes-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    RecipesComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
