import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth.service';
import IUser from 'src/app/core/interfaces/create-user';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  formGroup!: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder,private _authService:AuthService) {}
  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: [null, Validators.required],
      age: [null, Validators.required],
      email: [null,[ Validators.required, Validators.email]],
      password: [
        null,[
        Validators.required,
        Validators.pattern(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)]
      ],
    });
  }
  signUpClick() {
    if (this.formGroup.invalid) {
      this.ValidaterFormGroup();
    } else
      this._authService.createUser(this.email.value, this.password.value).subscribe((user)=>{
       this._authService.createUsersData(user.user?.uid,this.formGroup.value as IUser)
       this.router.navigate(['/auth/login'])
      })


  }

  ValidaterFormGroup() {
    Object.keys(this.formGroup.controls).forEach((fild) => {
      const control = this.formGroup.get(fild);
      control?.markAsTouched({ onlySelf: true });
    });
  }

  get name() {
    return this.formGroup.controls['name'] as FormControl;
  }

  get age() {
    return this.formGroup.controls['age'] as FormControl;
  }
  get email() {
    return this.formGroup.controls['email'] as FormControl;
  }

  get password() {
    return this.formGroup.controls['password'] as FormControl;
  }
}
