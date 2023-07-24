import { Component } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import {
  AbstractControl,
  FormBuilder,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent {
  feedback = '';
  improvementSuggestion = '';
  feedbackForm = this.fb.group({
    feedback: ['', [Validators.required, this.maxLengthValidator(500)]],
  });
  imrovementForm = this.fb.group({
    improvementSuggestion: [
      '',
      [Validators.required, this.maxLengthValidator(500)],
    ],
  });
  constructor(public fb: FormBuilder, public quizService: QuizService) {}

  submitFeedBack() {
    console.log(this.feedbackForm.value);
  }

  submitImprovementSuggestion() {
    console.log(this.imrovementForm.value);
  }
  maxLengthValidator(maxLength: number) {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value && control.value.length > maxLength) {
        return { maxLengthExceeded: true };
      }
      return null;
    };
  }
}
