import { CommonModule, LowerCasePipe } from '@angular/common';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, LowerCasePipe],
  // providers: [FormBuilder],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit {
  profileData: FormGroup;
  @Output() modalClosed: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() logInOpen = new EventEmitter<boolean>();
  erroMessage = '';

  desiginations: string[] = ['Frontend Developer', 'Backend Developer', 'Fullstack Developer', 'UI/UX Designer', 'DevOps Engineer'];

  constructor(private formBuilder: FormBuilder) {
    this.profileData = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      address: [''],
      desigination: ['Backend Developer', Validators.required]
    });
  }

  submit() {
    if (this.profileData.invalid) {
      this.erroMessage = "Please fill the required fields";
    } else {
      this.modalClosed.emit(false);
      console.log(this.profileData.controls['email'].value);
      this.logInOpen.emit(true);
      console.log(this.profileData)
    }
  }

  ngOnInit(): void {
    this.modalClosed.emit(true)
  }

  toggleModal() {
    this.modalClosed.emit(false);
  }
}
