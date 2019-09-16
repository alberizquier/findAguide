import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SelectorComponent } from './components/selector/selector.component';
import { TestComponent } from './components/test/test.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SelectorComponent,
    TestComponent,
    RegisterFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
