import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { SportsListService } from 'src/app/service/sports.service';
import { AppState } from 'src/app/store/app.states';
import { LogInSuccess, LogInFailure } from 'src/app/store/actions/auth.action';

@Component({
  selector: 'app-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm: any;
  public isLogin: boolean;

  constructor(
    private fb: FormBuilder,
    private sportsService: SportsListService,
    private router: Router,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit(credentials: any): void {
    this.sportsService.getLoginCheck().subscribe(
      (checklogin) => {
        if (credentials && checklogin) {
          const login = checklogin;
          for (let i = 0; i <= login.length - 1; i++) {
            if (login[i].username === credentials.username) {
              this.isLogin = true;
              this.router.navigate(['/list', { term: true }]);
              alert(`${credentials.username} Login Successfully`);
              this.dispatchAction(credentials, true);
              break;
            } else {
              this.isLogin = false;
            }
          }
        }
        if (this.isLogin === false) {
          this.dispatchAction(credentials, false);
        }
      },
      (error) => {
        console.log('Error in Fetching Login API');
      }
    );
  }

  dispatchAction(credentials, isLogin?): void {
    const payload = {
      username: credentials.username,
      password: credentials.password,
    };
    if (isLogin) {
      (document.getElementById('logout-button') as any).disabled = false;
      this.store.dispatch(new LogInSuccess(payload));
    } else {
      (document.getElementById('logout-button') as any).disabled = true;
      this.store.dispatch(new LogInFailure(payload));
    }
  }
}
