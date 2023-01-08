import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from '../models/comment'


@Injectable({
  providedIn: 'root',
})
export class CommentsService {
 

  constructor(private httpClient:HttpClient) { }

  getAllComments():Observable<Comment[]>{
    const url = "http://jsonplaceholder.typicode.com/comments"
    return this.httpClient.get<Comment[]>(url);
  }

  getAllEmployees(){
    const empUrl = "http://localhost:3000/employees"
    return this.httpClient.get(empUrl);
  }
  deleteEmployee(id:number){
    const empUrl = `http://localhost:3000/employees/${id}`
    return this.httpClient.delete(empUrl);
  }


}
