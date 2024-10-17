import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent implements OnInit {
  userLogin : FormGroup;
  errorMessage = '';

  constructor(private formBuilder: FormBuilder, private router: Router){
    this.userLogin = this.formBuilder.group({
      email : ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.maxLength(12), Validators.minLength(8)]]
    })
  }

  @Output() islogin = new EventEmitter<boolean>();

ngOnInit(): void {
  this.islogin.emit(true)
}

logIn(){
  if(this.userLogin.valid){
    localStorage.setItem('isLoggedIn','true');
    this.islogin.emit(false)
    console.log(this.userLogin);
  }else{
    this.errorMessage = 'Please fill the required field'
  }
  }

  closeModal(){
    this.islogin.emit(false)
  }

}
