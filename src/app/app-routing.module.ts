import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FrontpageComponent} from "./frontpage/frontpage.component";
import {SignupComponent} from "./signup/signup.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {EnterpriseSpaceComponent} from "./enterprise-space/enterprise-space.component";
import {ExamsComponent} from "./questionnaire/exams.component";
import {ContentcontainerComponent} from "./contentcontainer/contentcontainer.component";
import {SignupCandidatComponent} from "./signup-candidat/signup-candidat.component";
import {CreateExamComponent} from "./create-exam/create-exam.component";
import {ExamensComponent} from "./examens/examens.component";
import {CreateExamensComponent} from "./create-examens/create-examens.component";
import {ReponsesOfQuestionComponent} from "./reponses-of-question/reponses-of-question.component";
import {QuestionsOfExamenComponent} from "./questions-of-examen/questions-of-examen.component";
import {CompagneExamenComponent} from "./compagne-examen/compagne-examen.component";
import {CreateCompagneExamenComponent} from "./create-compagne-examen/create-compagne-examen.component";
import {ExamensOfCompagneComponent} from "./examens-of-compagne/examens-of-compagne.component";
import {InviteCandidatComponent} from "./invite-candidat/invite-candidat.component";
import {ExaminedComponent} from "./examined/examined.component";
import {ExaminedQuestionsComponent} from "./examined-questions/examined-questions.component";
import {AdminSpaceComponent} from "./admin-space/admin-space.component";
import {AdminSpaceCandidatComponent} from "./admin-space-candidat/admin-space-candidat.component";
import {AdminSpaceCandidatEditComponent} from "./admin-space-candidat-edit/admin-space-candidat-edit.component";
import {AdminSpaceQuestionsComponent} from "./admin-space-questions/admin-space-questions.component";
import {AdminSpaceQuestionsEditComponent} from "./admin-space-questions-edit/admin-space-questions-edit.component";
import {CreateQuestionAdminComponent} from "./create-question-admin/create-question-admin.component";
import {ClassementComponent} from "./classement/classement.component";
import {ConsultClassementComponent} from "./consult-classement/consult-classement.component";
import {ListCandidatComponent} from "./list-candidat/list-candidat.component";

const routes: Routes = [
                        {path:"",component:FrontpageComponent},
                        {path:'signIn',component:SignInComponent},
                        {path:'signUp',component:SignupComponent},
                        {path:'signUpCandidat',component:SignupCandidatComponent},
                        {path:'examined/:id',component:ExaminedComponent},
                        {path:'admin',component:AdminSpaceComponent ,children:[
                            {path: 'candidat',component: AdminSpaceCandidatComponent},
                            {path: 'candidat/edit/:id',component: AdminSpaceCandidatEditComponent},
                            {path: 'Questions',component: AdminSpaceQuestionsComponent},
                            {path:'question/edit/:id',component: AdminSpaceQuestionsEditComponent},
                            {path:'question/add',component: CreateQuestionAdminComponent}

                          ]},
  {path:'examinedQuestions/:id',component:ExaminedQuestionsComponent},

  {path:'entrepriseSpace',component:EnterpriseSpaceComponent,
                          children:[{path:'Questionnaire',component:ExamsComponent},
                            {path:'examens',component:ExamensComponent},
                            {path:'portal',component:ContentcontainerComponent},
                            {path:'createQuestionnaire',component:CreateExamComponent},
                            {
                              path:'createExamens',component:CreateExamensComponent
                            },
                            {
                              path:'reponses/:id',component:ReponsesOfQuestionComponent
                            },
                            {
                              path:'questionsOfExamen/:id',component:QuestionsOfExamenComponent
                            },
                            {
                              path:'compagneExamen',component:CompagneExamenComponent
                            },
                            {
                              path:'createCompagneExamen',component:CreateCompagneExamenComponent
                            },
                            {
                              path:'ExamensOfCompagne/:id',component:ExamensOfCompagneComponent
                            },
                            {
                              path:'inviteCandidat/:id',component:InviteCandidatComponent
                            },
                            {
                              path:'classement',component:ClassementComponent

                            },
                            {
                              path:'ConsultClassement/:id',component:ConsultClassementComponent

                            },
                            {
                              path:'listCandidatsOfCom/:id',component: ListCandidatComponent
                            }
                          ]}

                    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
