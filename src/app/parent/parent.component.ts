import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

  a=5;
  employeesNew = [
    { eId: 101, name: 'ramu', sal: 5000, gender: 'male' },
    { eId: 104, name: 'latha', sal: 8000, gender: 'female' },
    { eId: 103, name: 'raji', sal: 7000, gender: 'female' },
    { eId: 102, name: 'mohit', sal: 9000, gender: 'male' },
  ];

}
