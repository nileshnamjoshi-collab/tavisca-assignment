import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddLinksComponent } from './addsports.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AddLinksComponent', () => {
  let component: AddLinksComponent;
  let fixture: ComponentFixture<AddLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddLinksComponent],
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
      ],
      providers: [provideMockStore()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have title 'Add Sport'`, () => {
    fixture.detectChanges();
    expect(component.addSportTitle).toContain('Add Sport');
  });

  it(`should render title contain 'Add Sport'`, () => {
    const compiled = fixture.nativeElement;
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    expect(compiled.querySelector('p').textContent).toContain(
      component.addSportTitle
    );
  });

  it(`should have title 'Update Sport'`, () => {
    fixture.detectChanges();
    expect(component.updateSportTitle).toContain('Update Sport');
  });

  it(`should have showUpdateForm declared`, () => {
    fixture.detectChanges();
    expect(component.showUpdateForm).toBeDefined();
  });

  it('should have getSports Called', () => {
    spyOn(component, 'getSports');
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();
    expect(component.getSports).toHaveBeenCalled();
  });

  it('should have isRegisterFormToUpdate Called', () => {
    spyOn(component, 'isRegisterFormToUpdate');
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();
    expect(component.isRegisterFormToUpdate).toHaveBeenCalled();
  });
});
