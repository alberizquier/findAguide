import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SelectorComponent } from './components/selector/selector.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { GuiderListComponent } from './components/guider-list/guider-list.component';
import { GuiderProfileComponent } from './components/guider-profile/guider-profile.component';
import { GuiderEditProfileComponent } from './components/guider-edit-profile/guider-edit-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SelectorComponent,
    RegisterFormComponent,
    GuiderListComponent,
    GuiderProfileComponent,
    GuiderEditProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
