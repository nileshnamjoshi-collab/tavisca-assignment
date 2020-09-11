import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.states';
import { LogOut } from 'src/app/store/actions/auth.action';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public userLoginStatus: boolean;
  public setDark = false;
  @Output() mode = new EventEmitter<boolean>();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (param) => {
        this.userLoginStatus = param.term;
      },
      (error) => {
        console.log('Error in Fetching Parameter of Login API');
      }
    );
  }

  register(): void {
    this.router.navigate(['/registermodule']);
  }

  logout(): void {
    this.store.dispatch(new LogOut());
    this.router.navigate(['/login']);
  }

  changeTheme(): void {
    this.setDark = !this.setDark;
    this.mode.emit(this.setDark);
  }
}
