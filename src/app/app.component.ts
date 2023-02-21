import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, NgForm, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-first';

  signupForm: FormGroup;
  FirstName: string = "";
  LastName: string = "";
  Email: string = "";
  Password: string = "";
  forbiddenUsernames = ['test1', 'test2'];

  constructor(frmbuilder: FormBuilder) {
    this.signupForm = frmbuilder.group({
      //without validators
      //fname: new FormControl(),
      //lname: new FormControl(),
      //email: new FormControl(),
      //password: new FormControl(),
      fname: [null, [Validators.required, this.forbiddenName.bind(this)]],
      lname: [null, [Validators.required, Validators.maxLength(5)]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
      hobbies: new FormArray([])
    });
  }

  PostData(signupForm: any) {
    console.log(this.signupForm.getRawValue());
    console.log(this.signupForm.getRawValue().fname);

    //this.FirstName = signupForm.controls.fname.value;
    //this.LastName = signupForm.controls.lname.value;
    //this.Email = signupForm.controls.email.value;
    //console.log(this.FirstName);
    console.log(signupForm.controls);
  }

  /**get signupFormControl() {
    return this.signupForm['controls'];
  }*/

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  get refForm() {
    return this.signupForm.get('hobbies') as FormArray;
  }

  forbiddenName(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { 'nameIsForbidden': true };
    }
    return { 'nameIsForbidden': false };
  }

}
