import { Component } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent {
  answer=this.fb.group({
    q1:[null,Validators.required],
    q2:[null,Validators.required],
    q3:[null,Validators.required],
    q4:[null,Validators.required],
    q5:[null,Validators.required],
    q6:[null,Validators.required],
    q7:[null,Validators.required],
    q8:[null,Validators.required],
    q9:[null,Validators.required],
    q10:[null,Validators.required],
  })
  constructor(public quizService:QuizService,public fb:FormBuilder){
    console.log(quizService.questions)
  }

  submit(){
    this.quizService.getResult(this.answer.value)
  }
}
