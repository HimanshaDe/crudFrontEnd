import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs';
import { UserModelModule } from "./user-model/user-model.module";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private baseURL= 'http://localhost:8080/user';

  constructor(private http: HttpClient) { }

  getUserList(): Observable<any>{
    return this.http.get(`${this.baseURL}/getUsers`);
  }

  createuser(users: UserModelModule): Observable<Object>{
    return this.http.post(`${this.baseURL}/saveUsers`,users);
  }

  updateemployee(id:number, users:UserModelModule): Observable<Object>{
    return this.http.put(`${this.baseURL}/updateusers/${id}`, users);
  }
  deleteuser(id:number):Observable<Object>{
    return this.http.delete(`${this.baseURL}/deleteuser/${id}`);
  }

  getEmployeeById(id:number): Observable<UserModelModule>{
    return this.http.get<UserModelModule> (`${this.baseURL}/getuser/${id}`);
  }
}
