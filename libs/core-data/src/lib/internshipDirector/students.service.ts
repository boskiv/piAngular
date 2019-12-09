import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';





@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
 url : string = "http://localhost:9080/piPfe-web/rest/students" 
  constructor(private http: HttpClient) { }
 
  findall(): Observable<any> {
   //let profile = student.profile;
   return this.http.get<student[]>(this.url+'/allStudent');
   
  } 


  findStudentByEmail(ok) {

    return this.http.get<student[]>(this.url+'/getStudentByEmail/?email='+ok);
    
   } 

   studentWithOutPfefile(): Observable<any> {
    //let profile = student.profile;
    return this.http.get<student[]>(this.url+'/getStudentWithoutPFE');
    
   } 

   studentWithPfefile(): Observable<any> {
    //let profile = student.profile;
    return this.http.get<student[]>(this.url+'/getStudentwithPfe');
    
   }

   studentRejectPfe(): Observable<any> {
    //let profile = student.profile;
    return this.http.get<student[]>(this.url+'/getStudentRefusePFE');
    
   }

   sendMailRappel(): Observable<any> {

    return this.http.post(this.url+'/sendMailRappel', this.httpOptions);
   }


   pfeFileOfStudent(ok) {

    return this.http.get<student[]>(this.url+'/hasPfeFile?student_id='+ok);
    
   } 

   login(user) {
    return this.http.post(this.url+"login",user,this.httpOptions); 
   }
  
   signUp(user) {
    return this.http.post(this.url+"signUp",user,this.httpOptions); 
   }

}
export interface student {
  constructor(id: string, name: string, lastname: string )
  id: String;  
  name: String;  
  lastname: String;  

}