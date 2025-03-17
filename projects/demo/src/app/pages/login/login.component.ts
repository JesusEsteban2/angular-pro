import { Component, } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'cas-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export default class LoginComponent {
  data = {
    formUser: '',
    formPass: '',
  };

  onSubmit() {
    console.log(this.data.formUser, this.data.formPass);
  }
}
