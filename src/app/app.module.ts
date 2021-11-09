import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GoogleChartsModule } from 'angular-google-charts';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {
  DatePipe,
  HashLocationStrategy,
  LocationStrategy,
} from '@angular/common';

// Services
import { ScriptControllerService } from './services/script-controller.service';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AsidebarComponent } from './components/shared/asidebar/asidebar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NoContentComponent } from './components/no-content/no-content.component';
import { ProjectScheduleComponent } from './components/project-created/project-schedule/project-schedule.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfilesComponent } from './components/accounts/profiles/profiles.component';
import { UsersComponent } from './components/accounts/users/users.component';
import { CreateGeneralComponent } from './components/project-create/create-general/create-general.component';

import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'create-project', component: CreateGeneralComponent },
  { path: 'accounts-profiles', component: ProfilesComponent },
  { path: 'accounts-users', component: UsersComponent },
  { path: 'project-schedule', component: ProjectScheduleComponent },
  { path: '**', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AsidebarComponent,
    FooterComponent,
    NoContentComponent,
    ProjectScheduleComponent,
    DashboardComponent,
    ProfilesComponent,
    UsersComponent,
    CreateGeneralComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    GoogleChartsModule, // GoogleChart library
    HttpClientModule, // HttpClientModule - Spring
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  providers: [
    DatePipe,
    ScriptControllerService,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
