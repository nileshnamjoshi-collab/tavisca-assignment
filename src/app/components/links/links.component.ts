import { SportsListService } from './../../service/sports.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, selectAuthState } from 'src/app/store/app.states';
import { ListSports, DeleteSports } from 'src/app/store/actions/auth.action';

@Component({
  selector: 'app-listing-page',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css'],
  providers: [SportsListService],
})
export class LinksComponent implements OnInit {
  public headerTitle = 'Links';
  public loginData: Array<any> = [];
  public sportsData = [];
  public userLoginStatus = false;
  public tableTitle = 'Links details';
  getState: Observable<any>;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>
  ) {
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit(): void {
    this.store.dispatch(new ListSports());
    this.store.subscribe((data) => {
      if (data && data.sport && data.sport.sports) {
        this.sportsData = data.sport.sports;
      }
      console.log(this.sportsData);
    });

    this.activatedRoute.params.subscribe(
      (param) => {
        this.userLoginStatus = param.term;
      },
      (error) => {
        console.log('Error in Fetch Route Parameter');
      }
    );
  }

  updateSports(id: any): void {
    this.router.navigate(['/addsports', id]);
  }

  deleteSports(id: any): void {
    if (confirm('Are you sure to delete sport')) {
      this.store.dispatch(new DeleteSports(id));
      this.store.dispatch(new ListSports());
    } else {
    }
  }

  addSports(): void {
    this.router.navigate(['/addsports']);
  }
}
