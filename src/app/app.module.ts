import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './recruiter/login/login.component';
import { CandidateInputDetailsComponent } from './recruiter/candidate-input-details/candidate-input-details.component';
import { MainLayoutComponentRecruiter } from './recruiter/main-layout/main-layout.component';
import { EmployerSearchComponent } from './employer/employer-search/employer-search.component';
import { ProfilesCardComponent } from './employer/profiles-card/profiles-card.component';
import { ProfileDetailComponent } from './employer/profile-detail/profile-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { MainLayoutComponentEmployer } from './employer/main-layout/main-layout.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { InputTextModule } from 'primeng/inputtext';
import { LoginComponentEmployer } from './employer/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginComponentEmployer,
    CandidateInputDetailsComponent,
    MainLayoutComponentEmployer,
    MainLayoutComponentRecruiter,
    EmployerSearchComponent,
    ProfilesCardComponent,
    ProfileDetailComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
