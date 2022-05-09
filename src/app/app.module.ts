import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { ContentComponent } from './content/content.component';
import { EnterpriseSpaceComponent } from './enterprise-space/enterprise-space.component';
import { EntrepriseFunctComponent } from './entreprise-funct/entreprise-funct.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HeaderComponent } from './header/header.component';
import { ExamsComponent } from './questionnaire/exams.component';
import { ContentcontainerComponent } from './contentcontainer/contentcontainer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupCandidatComponent } from './signup-candidat/signup-candidat.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { CreateExamComponent } from './create-exam/create-exam.component';
import { ExamensComponent } from './examens/examens.component';
import { CreateExamensComponent } from './create-examens/create-examens.component';
import { CompagneExamenComponent } from './compagne-examen/compagne-examen.component';
import { ReponsesOfQuestionComponent } from './reponses-of-question/reponses-of-question.component';
import { QuestionsOfExamenComponent } from './questions-of-examen/questions-of-examen.component';
import { CreateCompagneExamenComponent } from './create-compagne-examen/create-compagne-examen.component';
import { ExamensOfCompagneComponent } from './examens-of-compagne/examens-of-compagne.component';
import { InviteCandidatComponent } from './invite-candidat/invite-candidat.component';
import { ExaminedComponent } from './examined/examined.component';
import { ExaminedQuestionsComponent } from './examined-questions/examined-questions.component';
import { AdminSpaceComponent } from './admin-space/admin-space.component';
import { AdminSpaceCandidatComponent } from './admin-space-candidat/admin-space-candidat.component';
import { AdminSpaceCandidatEditComponent } from './admin-space-candidat-edit/admin-space-candidat-edit.component';
import { AdminSpaceQuestionsComponent } from './admin-space-questions/admin-space-questions.component';
import { AdminSpaceQuestionsEditComponent } from './admin-space-questions-edit/admin-space-questions-edit.component';
import { CreateQuestionAdminComponent } from './create-question-admin/create-question-admin.component';
import { ClassementComponent } from './classement/classement.component';
import { ConsultClassementComponent } from './consult-classement/consult-classement.component';
import { ListCandidatComponent } from './list-candidat/list-candidat.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    ContentComponent,
    EnterpriseSpaceComponent,
    EntrepriseFunctComponent,
    FrontpageComponent,
    SignInComponent,
    HeaderComponent,
    ExamsComponent,
    ContentcontainerComponent,
    SignupCandidatComponent,
    CreateExamComponent,
    ExamensComponent,
    CreateExamensComponent,
    CompagneExamenComponent,
    ReponsesOfQuestionComponent,
    QuestionsOfExamenComponent,
    CreateCompagneExamenComponent,
    ExamensOfCompagneComponent,
    InviteCandidatComponent,
    ExaminedComponent,
    ExaminedQuestionsComponent,
    AdminSpaceComponent,
    AdminSpaceCandidatComponent,
    AdminSpaceCandidatEditComponent,
    AdminSpaceQuestionsComponent,
    AdminSpaceQuestionsEditComponent,
    CreateQuestionAdminComponent,
    ClassementComponent,
    ConsultClassementComponent,
    ListCandidatComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
