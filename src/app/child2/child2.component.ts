import { Component, Input } from '@angular/core';

type Employee ={
  eId:number;
  name: string;
  sal: number;
  gender: string;
}

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component {
@Input() aa: any;
@Input() employeesNew :Employee[] | undefined;

}