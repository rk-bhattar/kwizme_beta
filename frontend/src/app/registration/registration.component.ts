import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { QuizService } from '../services/quiz.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  registrationForm = this.fb.group({
    name: ['', [Validators.required, this.maxLengthValidator(30)]],
    topic: ['', [Validators.required, this.maxLengthValidator(250)]],
  });
  constructor(
    public fb: FormBuilder,
    public quizService: QuizService,
    private modalService: NgbModal
  ) {}

  open(content: any) {
    if (this.registrationForm.valid) {
      this.modalService
        .open(content, { ariaLabelledBy: 'modal-basic-title' })
        .result.then(
          (result) => {
            this.quizService.getQuestions(
              this.registrationForm.value.name,
              this.registrationForm.value.topic
            );
          },
          (reason) => {}
        );
    }
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
