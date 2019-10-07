import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Chat1Component } from './components/chat1/chat1.component';
import { Chat2Component } from './components/chat2/chat2.component';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { EditExperienceComponent } from './components/edit-experience/edit-experience.component';
import { FiltersComponent } from './components/filters/filters.component';
import { GuiderBudgetComponent } from './components/guider-budget/guider-budget.component';
import { GuiderBudgetHistoricComponent } from './components/guider-budget-historic/guider-budget-historic.component';
import { GuiderChatComponent } from './components/guider-chat/guider-chat.component';
import { GuiderEditProfileComponent } from './components/guider-edit-profile/guider-edit-profile.component';
import { GuiderListComponent } from './components/guider-list/guider-list.component';
import { GuiderProfileComponent } from './components/guider-profile/guider-profile.component';
import { LoginComponent } from './components/login/login.component';
import { MonthDestinationsComponent } from './components/month-destinations/month-destinations.component';
import { NavBarSupComponent } from './components/nav-bar-sup/nav-bar-sup.component';
import { NavegadorComponent } from './components/navegador/navegador.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { SelectorComponent } from './components/selector/selector.component';
import { SideNavBarComponent } from './components/side-nav-bar/side-nav-bar.component';
import { UserChatComponent } from './components/user-chat/user-chat.component';
import { AuthComponent } from './components/auth/auth.component';
import { MainComponent } from './components/main/main.component';
import { MessagesComponent } from './components/messages/messages.component';
import { NewBudgetComponent } from './components/new-budget/new-budget.component';
import { UserEditProfileComponent } from './components/user-edit-profile/user-edit-profile.component';


const routes: Routes = [
  { path: '', component: AuthComponent, pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'chat1', component: Chat1Component },
  { path: 'chat2', component: Chat2Component },
  { path: 'destinations', component: DestinationsComponent },
  { path: 'edit-experience', component: EditExperienceComponent },
  { path: 'filters', component: FiltersComponent },
  { path: 'guider-budget', component: GuiderBudgetComponent },
  { path: 'guider-budget-historic', component: GuiderBudgetHistoricComponent },
  { path: 'guider-chat', component: GuiderChatComponent },
  { path: 'guider-edit-profile', component: GuiderEditProfileComponent },
  { path: 'guider-list', component: GuiderListComponent },
  { path: 'guider-profile', component: GuiderProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'month-destinations', component: MonthDestinationsComponent },
  { path: 'nav-bar-sup', component: NavBarSupComponent },
  { path: 'navegador', component: NavegadorComponent },
  { path: 'selector', component: SelectorComponent },
  { path: 'register-form', component: RegisterFormComponent },
  { path: 'side-nav-bar', component: SideNavBarComponent },
  { path: 'user-chat', component: UserChatComponent },
  { path: 'new-budget', component: NewBudgetComponent },
  { path: 'user-edit-profile', component: UserEditProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
