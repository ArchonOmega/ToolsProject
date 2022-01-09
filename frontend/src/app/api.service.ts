import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  registerUser(user: any){
    this.http.post('http://backend-notes-list2.apps.eu45.prod.nextcle.com/register', user).subscribe(res => {
      console.log(res);
    })
    
  }
}
