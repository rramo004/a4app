import { PasswordValidators } from './password.validators';
import { Component, } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'newpassword',
  templateUrl: './newpassword.component.html',
  styleUrls: ['./newpassword.component.css']
})
export class NewpasswordComponent {
  form = new FormGroup( {
    oldpassword: new FormControl('', Validators.required, PasswordValidators.shouldBeSameAsOld),
    newpassword: new FormControl('', Validators.required),
    confirmpassword: new FormControl('',Validators.required)
  }, PasswordValidators.shouldBeSameAsNew);

  get oldpassword() {
    return this.form.get('oldpassword');
  }

  get newpassword() {
    return this.form.get('newpassword');
  }

  get confirmpassword() {
    return this.form.get('confirmpassword');
  }

  changePassword() {
    console.log("Password Changed!");
  }
}
