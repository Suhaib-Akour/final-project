import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { UserCredential } from '@firebase/auth-types';
import IUser from '../interfaces/create-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggdIn$ = new BehaviorSubject<boolean>(!!localStorage.getItem('token'));
  dbPath = '/users';

  constructor(private router: Router,private angularFireAuth:AngularFireAuth,private angularFireDatabase:AngularFireDatabase) { }
  get isloggedIn(): boolean {

    return this.isLoggdIn$.getValue();
  }
  login(email:any,password:any):Observable<any> {
    localStorage.setItem('token', 'qwe123');
    this.isLoggdIn$.next(true);
    return from (this.angularFireAuth.signInWithEmailAndPassword(email,password))
  }

   createUser(email: string, password: string): Observable<UserCredential> {
     return from(
       this.angularFireAuth.createUserWithEmailAndPassword(email, password)
     );
   }
  logout():Observable<any> {
    localStorage.removeItem('token');
    this.isLoggdIn$.next(false);
    this.router.navigate(['/auth/login']);
    return from(this.angularFireAuth.signOut())
  }


  public createUsersData(userId: any, userData: IUser) {
    this.angularFireDatabase.list('/users').update(userId, {
      name:userData.name,
      email: userData.email,
      age: userData.age,
      userId: userId,
      role:'Enduser',
    });
  }


  // getUsersById(uid: any) {
  //   return this.db.object('/users/' + uid);
  // }


  // geerD(): Observable<any> {
  //   return this._authFire.authState.pipe(
  //     switchMap((user) => {
  //       return this.getUsersById(user?.uid)
  //         .valueChanges()
  //         .pipe(
  //           map((user) => {
  //             return user;
  //           })
  //         );
  //     })
  //   );
  // }


}
