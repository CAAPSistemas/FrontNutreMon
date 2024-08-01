import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userDataSubject: BehaviorSubject<UserData | null> = new BehaviorSubject<UserData | null>(null);

  constructor() {}

  setUserData(userData: UserData) {
    this.userDataSubject.next(userData);
  }

  getUserData(): Observable<UserData | null> {
    return this.userDataSubject.asObservable();
  }
}

interface UserData {
  name: string;
  email: string;
  password: string;
}
