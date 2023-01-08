import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit{

  constructor(private http:HttpClient){

  }
  ngOnInit(): void{
  this.getUsers();
  }

  getUsers(){
    const url="https://jsonplaceholder.typicode.com/users";
    this.http.get(url).subscribe((response)=>{
     console.log('response', response);
    })
  }

}
