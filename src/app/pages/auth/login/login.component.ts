import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
formGroup!:FormGroup
  constructor(private router:Router,private formBulider:FormBuilder,private _authsercice:AuthService) { }

  ngOnInit(): void {
  this.formGroup = this.formBulider.group({
    email: [null,[ Validators.required, Validators.email]],
    password: [
      null,[
      Validators.required,
      Validators.pattern(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)]
    ],
  })
  }
  loginClick(){
   this._authsercice.login(this.email.value,this.password.value);
    this.router.navigate(['/startup/all-startup'])

  }

  get email() {
    return this.formGroup.controls['email'] as FormControl;
  }
//p0asdew%1P
  get password() {
    return this.formGroup.controls['password'] as FormControl;
  }

}
