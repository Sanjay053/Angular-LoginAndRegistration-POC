import { Component } from '@angular/core';
import { faBars, faUserPlus, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { LogInComponent } from '../log-in/log-in.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, SignUpComponent, LogInComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  faBars = faBars;
  faSignIn = faSignInAlt;
  faSignUp = faUserPlus;
  showModal = false;
  isLoginPage = false;
  title = 'Reactive Form POC'

  showMenu = true;

  toggleNavbar() {
    this.showMenu = !this.showMenu;
  }

  loginOpenHandler(event: boolean){
    this.isLoginPage = event
  }

  loginPage() {
    this.isLoginPage = !this.isLoginPage;
  }

  closeLoginHandler(event: boolean) {
    this.isLoginPage = event
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }
  closeModalHandler(event: boolean) {
    this.showModal = event;
  }
}
