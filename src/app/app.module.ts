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
import { NavegadorComponent } from './components/navegador/navegador.component';
import { GuiderProfileComponent } from './components/guider-profile/guider-profile.component';
import { FiltersComponent } from './components/filters/filters.component';
import { MonthDestinationsComponent } from './components/month-destinations/month-destinations.component';
import { EditExperienceComponent } from './components/edit-experience/edit-experience.component';
import { GuiderChatComponent } from './components/guider-chat/guider-chat.component';
import { GuiderListComponent } from './components/guider-list/guider-list.component';
import { GuiderEditProfileComponent } from './components/guider-edit-profile/guider-edit-profile.component';
import { UserChatComponent } from './components/user-chat/user-chat.component';
import { NavBarSupComponent } from './components/nav-bar-sup/nav-bar-sup.component';
import { Chat1Component } from './components/chat1/chat1.component';
import { Chat2Component } from './components/chat2/chat2.component';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { MainComponent } from './components/main/main.component';
import { AuthComponent } from './components/auth/auth.component';
import { MessagesComponent } from './components/messages/messages.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { NewBudgetComponent } from './components/new-budget/new-budget.component';
import { UserEditProfileComponent } from './components/user-edit-profile/user-edit-profile.component';
import { MyTripsComponent } from './components/my-trips/my-trips.component';
import { UserTripsComponent } from './components/user-trips/user-trips.component';

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
    MonthDestinationsComponent,
    EditExperienceComponent,
    GuiderChatComponent,
    GuiderListComponent,
    GuiderEditProfileComponent,
    UserChatComponent,
    NavBarSupComponent,
    Chat1Component,
    Chat2Component,
    DestinationsComponent,
    MainComponent,
    AuthComponent,
    MessagesComponent,
    NewBudgetComponent,
    UserEditProfileComponent,
    MyTripsComponent,
    UserTripsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
