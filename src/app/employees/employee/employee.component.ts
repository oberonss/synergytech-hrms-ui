import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  constructor(private _router: Router){

  }

  showaddemployee(){
    this._router.navigateByUrl('/addeditemployee');
  }

  showeditemployee(){
    this._router.navigateByUrl('/addeditemployee');
  }
}
