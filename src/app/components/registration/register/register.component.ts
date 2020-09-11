import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.states';
import { SignUp } from 'src/app/store/actions/auth.action';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  public registerForm: any;
  public SportsData: any;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit(register: any): void {
    const payload = {
      username: register.username,
      password: register.password,
    };
    this.store.dispatch(new SignUp(payload));
  }
}
