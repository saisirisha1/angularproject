import { Component,OnInit } from '@angular/core';
import { CommentsService } from '../services/comments.service';
import { Comment } from '../models/comment'

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit{
  comments: Comment[] =[];
  employees: any =[];
  constructor( private commentService: CommentsService){}

  ngOnInit(){
 this.commentService.getAllComments().subscribe((response: Comment[])=>{
  this.comments = response;
 })

 this.getUsers();

//  this.commentService.getAllEmployees().subscribe((empResponse)=>{
//   this.employees = empResponse;
//  })
 
  }

  getUsers(){
    this.commentService.getAllEmployees().subscribe((empResponse)=>{
      this.employees = empResponse;
     })
  }
  

  deleteUser(id:number){
    this.commentService.deleteEmployee(id).subscribe((delResponse)=>{
      // this.employees = delResponse;
      this.getUsers();
     })
  }
  

  

}
