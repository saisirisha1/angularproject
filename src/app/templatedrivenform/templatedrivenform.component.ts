import { Component } from '@angular/core';

@Component({
  selector: 'app-templatedrivenform',
  templateUrl: './templatedrivenform.component.html',
  styleUrls: ['./templatedrivenform.component.scss']
})
export class TemplatedrivenformComponent {

  txtValue:string ='';
  
  submitMyFirstForm(myFirstForm : any){
    console.log('myFirstForm', myFirstForm);
  }

}
