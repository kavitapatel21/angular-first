import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private router: Router,
    private route: ActivatedRoute) {
  }
  onReload() {
    this.router.navigate(['../contact'], { relativeTo: this.route });
  }
}
