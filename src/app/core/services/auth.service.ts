import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { UserCredential } from '@firebase/auth-types';
import IUser from '../interfaces/create-user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggdIn$ = new BehaviorSubject<boolean>(!!localStorage.getItem('token'));
  dbPath = '/users';
  userInfo = new BehaviorSubject<any>({});

  constructor(
    private router: Router,
    private angularFireAuth: AngularFireAuth,
    private angularFireDatabase: AngularFireDatabase
  ) {
    this.authStateSubscripe();
  }
  get isloggedIn(): boolean {
    return this.isLoggdIn$.getValue();
  }
  login(email: any, password: any): Observable<any> {
    return from(
      this.angularFireAuth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        window.alert(error.message);
      })    );
  }
  authStateSubscripe() {
    this.angularFireAuth.authState.subscribe((user) => {
      if (user) {
        if (!this.isloggedIn) {
          this.router.navigate(['/startup/all-startup']);
        }
        // this.getUserById(user.uid);

        localStorage.setItem('token', user.uid);
        this.isLoggdIn$.next(true);
      } else {
        localStorage.removeItem('token');
        this.isLoggdIn$.next(false);
      }
    });
  }
  createUser(email: string, password: string): Observable<UserCredential> {
    return from(
      this.angularFireAuth.createUserWithEmailAndPassword(email, password)
    );
  }
  logout(): Observable<any> {
    localStorage.removeItem('token');
    this.isLoggdIn$.next(false);
    this.router.navigate(['/home']);
    return from(this.angularFireAuth.signOut());
  }

  public createUsersData(userId: any, userData: IUser) {
    this.angularFireDatabase.list('/users').update(userId, {
      name: userData.name,
      email: userData.email,
      age: userData.age,
      userId: userId,
      role: 'Enduser',
    });
  }
  getUserById(userId: string) {
    this.angularFireDatabase
      .object(`${this.dbPath}/${userId}`)
      .valueChanges()
      .subscribe((user) => {
        this.userInfo.next(user);
      });
  }

}
