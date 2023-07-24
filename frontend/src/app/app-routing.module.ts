import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { ResultComponent } from './result/result.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  {path:"",component:RegistrationComponent},
  {path:"quiz",component:QuizComponent},
  {path:"result",component:ResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
