import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  users = [
    {
      id: 1,
      name: 'first',
    },
    {
      id: 2,
      name: 'sec',
    },
    {
      id: 3,
      name: 'third',
    }
  ];
}
