import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { EtdProfileComponent } from './components/etudiant/etd-profile/etd-profile.component';
import { EtdAbsencesComponent } from './components/etudiant/etd-absences/etd-absences.component';
import { EtdAcueilComponent } from './components/etudiant/etd-acueil/etd-acueil.component';
import { EtdNotesComponent } from './components/etudiant/etd-notes/etd-notes.component';
import { EtdReleveNotesComponent } from './components/etudiant/etd-releve-notes/etd-releve-notes.component';
import { EtdPlanExamsComponent } from './components/etudiant/etd-plan-exams/etd-plan-exams.component';
import { EtdNotesPersoComponent } from './components/etudiant/etd-notes-perso/etd-notes-perso.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { FormationsComponent } from './components/formations/formations.component';
import { FormationComponent } from './components/formation/formation.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StudentsComponent } from './components/admin/students/students.component';
import { CreateStudentComponent } from './components/admin/create-student/create-student.component';
import { UpdateStudentComponent } from './components/admin/update-student/update-student.component';
import { UpdateStudentsComponent } from './components/admin/update-students/update-students.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    EtdProfileComponent,
    EtdAbsencesComponent,
    EtdAcueilComponent,
    EtdNotesComponent,
    EtdReleveNotesComponent,
    EtdPlanExamsComponent,
    EtdNotesPersoComponent,
    ContactComponent,
    LoginComponent,
    SignUpComponent,
    FormationsComponent,
    FormationComponent,
    DashboardComponent,
    StudentsComponent,
    CreateStudentComponent,
    UpdateStudentComponent,
    UpdateStudentsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
   HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
