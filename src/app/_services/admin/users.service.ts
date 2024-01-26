import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {ManageUsers} from "../../_models/manageUsers";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseUrl = 'https://user-assessment-api.vercel.app/';

  constructor(private http: HttpClient) { }

  users: ManageUsers[] = [];
  getUsers():Observable<ManageUsers[]>{
    return this.http.get<ManageUsers[]>(this.baseUrl + 'api/users').pipe(
      tap(users => this.users = users)
    )
  }
}
