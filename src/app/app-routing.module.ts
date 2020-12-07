import { EtdProfileComponent } from './components/etudiant/etd-profile/etd-profile.component';
import { EtdAcueilComponent } from './components/etudiant/etd-acueil/etd-acueil.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EtdNotesComponent } from './components/etudiant/etd-notes/etd-notes.component';
import { EtdAbsencesComponent } from './components/etudiant/etd-absences/etd-absences.component';
import { EtdReleveNotesComponent } from './components/etudiant/etd-releve-notes/etd-releve-notes.component';
import { EtdPlanExamsComponent } from './components/etudiant/etd-plan-exams/etd-plan-exams.component';
import { EtdNotesPersoComponent } from './components/etudiant/etd-notes-perso/etd-notes-perso.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { FormationsComponent } from './components/formations/formations.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StudentsComponent } from './components/admin/students/students.component';
import { UpdateStudentComponent } from './components/admin/update-student/update-student.component';
import { UpdateStudentsComponent } from './components/admin/update-students/update-students.component';
import { CreateStudentComponent } from './components/admin/create-student/create-student.component';

const routes: Routes = [
  { path: 'etd-acceuil', component: EtdAcueilComponent  },
  { path: 'profile', component: EtdProfileComponent   },
  { path: 'notes', component: EtdNotesComponent  },
  { path: 'absences', component: EtdAbsencesComponent  },
  { path: 'etd-acceuil/releve-notes', component: EtdReleveNotesComponent},
  { path: 'etd-acceuil/plan-exams', component: EtdPlanExamsComponent},
  { path: 'etd-acceuil/notes-perso', component: EtdNotesPersoComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'login', component: LoginComponent},
  { path: 'formations', component: FormationsComponent},
  { path: 'students', component: StudentsComponent},
  { path: 'update-student', component: UpdateStudentComponent},
  { path: 'students/update-students', component: UpdateStudentsComponent},
  { path: 'students/create-student', component: CreateStudentComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'sign-up', component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
