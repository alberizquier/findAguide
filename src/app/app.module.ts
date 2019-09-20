import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SelectorComponent } from './components/selector/selector.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { GuiderBudgetComponent} from './components/guider-budget/guider-budget.component';
import { GuiderBudgetHistoricComponent} from './components/guider-budget-historic/guider-budget-historic.component';
import { SideNavBarComponent} from './components/side-nav-bar/side-nav-bar.component';
import { GuiderListComponent } from './components/guider-list/guider-list.component';
import { NavegadorComponent } from './components/navegador/navegador.component';
import { GuiderProfileComponent } from './components/guider-profile/guider-profile.component';
import { FiltersComponent } from './components/filters/filters.component';
import { MonthDestinationsComponent } from './components/month-destinations/month-destinations.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SelectorComponent,
    RegisterFormComponent,
    GuiderListComponent,
    SideNavBarComponent,
    NavegadorComponent,
    GuiderProfileComponent,
    FiltersComponent,
    GuiderBudgetComponent,
    GuiderBudgetHistoricComponent,
    MonthDestinationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
