import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { SchoolsComponent } from './schools/schools.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ApplicationsComponent } from './applications/applications.component';
import { ApplyComponent } from './apply/apply.component';
import { DetailsComponent } from './details/details.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import {HttpClientModule}from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    SchoolsComponent,
    DashboardComponent,
    ProfileComponent,
    ApplicationsComponent,
    ApplyComponent,
    DetailsComponent,
    EditprofileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [ HttpClientModule  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
