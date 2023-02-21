import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent{
  users: {id: number, name: string};

  constructor(private route: ActivatedRoute){
    this.users = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    }
    this.route.params.subscribe(
      (params: Params) => {
        this.users.id = params['id'];
        this.users.name = params['name'];
      }
    );
  }
}
