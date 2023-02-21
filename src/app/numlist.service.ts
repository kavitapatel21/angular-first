import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumlistService {
list:string[] = ['100'];
  constructor() { }
  addnumber(num:string){
    this.list.push(num);
  }
  getnumber(){
    return this.list;
  }
}
