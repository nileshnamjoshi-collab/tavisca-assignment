import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { tap, map, switchMap, catchError, mergeMap } from 'rxjs/operators';
import {
    AuthActionTypes,
    LogIn, LogInSuccess, LogInFailure,
    SignUp, SignUpSuccess, SignUpFailure, LIST_SPORTS, ListSports,
    ListDataSuccess, ADD_SPORTS, AddSportsSuccess, AddSports, DeleteSportSuccess,
    DELETE_SPORTS, DeleteSports, UPDATE_SPORTS, UpdateSports, UpdateSportsSuccess
} from '../actions/auth.action';
import { SportsListService } from 'src/app/service/sports.service';

@Injectable()

export class AuthEffects {

    constructor(
        private actions: Actions,
        private router: Router,
        private sportsListService: SportsListService
    ) { }

    // effects go here
    @Effect({ dispatch: false })
    LogInSuccess: Observable<any> = this.actions.pipe(
        ofType(AuthActionTypes.LOGIN_SUCCESS),
        tap((user) => {
            localStorage.setItem('token', user.payload.username);
            this.router.navigate(['/list', { term: true }]);
        })
    );

    @Effect({ dispatch: false })
    LogInFailure: Observable<any> = this.actions.pipe(
        ofType(AuthActionTypes.LOGIN_FAILURE),
        tap((user) => {
            alert('Please Enter Valid User Name and Password');
        })
    );

    @Effect({ dispatch: false })
    LogOut: Observable<any> = this.actions.pipe(
        ofType(AuthActionTypes.LOGOUT),
        tap((user) => {
            window.alert('You are Logout Successfully');
        })
    );

    @Effect({ dispatch: true })
    SignUp: Observable<any> = this.actions.pipe(
        ofType(AuthActionTypes.SIGNUP),
        map((action: SignUp) => action.payload),
        mergeMap(payload => {
            return this.sportsListService.addLogin(payload).pipe(
                map((data) => {
                    if (data) {
                        window.alert('User Added Successfully');
                        return new SignUpSuccess(data);
                    }
                })).pipe(catchError((error) => {
                    return of(new SignUpFailure({ error: 'error' }));
                }));
        }));

    @Effect({ dispatch: true })
    ListSports: Observable<any> = this.actions.pipe(
        ofType(LIST_SPORTS),
        map((action: ListSports) => action),
        mergeMap(payload => {
            return this.sportsListService.getSports().pipe(
                map((data) =>
                    new ListDataSuccess(data)));
        }));

    @Effect({ dispatch: true })
    AddSports: Observable<any> = this.actions.pipe(
        ofType(ADD_SPORTS),
        map((action: AddSports) => action.payload),
        mergeMap(payload => {
            return this.sportsListService.addSport(payload).pipe(
                map((data) => {
                    if (data) {
                        return new AddSportsSuccess(data);
                    }
                }));
        }));

    @Effect({ dispatch: true })
    DeleteSports: Observable<any> = this.actions.pipe(
        ofType(DELETE_SPORTS),
        map((action: DeleteSports) => action.payload),
        mergeMap(payload => {
            return this.sportsListService.deleteSportsById(payload).pipe(
                map((data) => {
                    if (data) {
                        window.alert('Sport Deleted Successfully');
                        return new DeleteSportSuccess();
                    }
                }));
        }));

    @Effect({ dispatch: true })
    UpdateSports: Observable<any> = this.actions.pipe(
        ofType(UPDATE_SPORTS),
        map((action: UpdateSports) => action.payload),
        mergeMap(payload => {
            return this.sportsListService.updateSport(payload).pipe(
                map((data) => {
                    if (data) {
                        window.alert('Sport Updated Successfully');
                        return new UpdateSportsSuccess(data);
                    }
                }));
        }));
}
