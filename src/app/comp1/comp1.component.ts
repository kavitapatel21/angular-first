import { Component, OnInit } from '@angular/core';
import { NumlistService } from '../numlist.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
  providers:[NumlistService]
})
export class Comp1Component {
  list1: string[] = [];
  constructor(private _numlistservice: NumlistService) { }
  ngOnInit(): void {
    this.list1 = this._numlistservice.getnumber();
  }
  addnumber(val: string) {
    this._numlistservice.addnumber(val);
  }
}
