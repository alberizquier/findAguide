import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SelectorComponent } from './components/selector/selector.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import {GuiderBudgetComponent} from './components/guider-budget/guider-budget.component';
import {GuiderBudgetHistoricComponent} from './components/guider-budget-historic/guider-budget-historic.component';
import {SideNavBarComponent} from './components/side-nav-bar/side-nav-bar.component';

import { GuiderListComponent } from './components/guider-list/guider-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SelectorComponent,
    SideNavBarComponent,
    RegisterFormComponent,
    GuiderBudgetComponent,
    GuiderBudgetHistoricComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
