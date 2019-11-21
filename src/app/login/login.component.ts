
import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';

import { Router, ActivatedRoute, Params} from '@angular/router';
import { UserService } from '../user/user.service';
import { User } from '../user/user.model';
import { LoginService } from '../services/login.service';


import { Login } from './login';


@Component({
	selector: 'login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.css'],
  providers:[LoginService]
})

export class loginComponent implements OnInit{
	public titulo = 'login';
  public Login = { username: '' };

 
  public usuarios;
  public login: Login;
  
  
  users: any[] = [];
  username = '';
  password = '';

                    
   


constructor(private loginService: LoginService, private router: Router, private userService: UserService) { this.login = new Login("","");



}
   

   ngOnInit() {
    
    

  }



logIn(username: string, password: string, event: Event) {
    event.preventDefault(); // Avoid default action for the submit button of the login form

  this.router.navigateByUrl('/profile');
  }

  navigate() {
    this.router.navigateByUrl('/home');
  }
}
  