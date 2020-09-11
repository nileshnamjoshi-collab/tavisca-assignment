import { TestBed, async, inject } from '@angular/core/testing';
import { SportsListService } from './sports.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('SportsListService', () => {
  let service: SportsListService;
  let httpMock: HttpTestingController;
  let dummyAddPosts = [];
  let loginDummyPosts = [];
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpClientTestingModule,
      ],
      providers: [SportsListService],
    });
    service = TestBed.inject(SportsListService);
    httpMock = TestBed.get(HttpTestingController);
    dummyAddPosts = [
      {
        id: '10',
        sportsTitle: 'wrestling and martial arts',
        description: 'is an ancient martial arts style of fighting',
        category: 'Dual Sports'
      }];
    loginDummyPosts = [
        { id: '1', username: 'testadmin', password: 'admin'},
      ];
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have baseRefUrl', () => {
    expect(service.baseRefUrl).toBeDefined();
  });

  it(`should have baseRefUrl contain 'http://localhost:3000'`, () => {
    expect(service.baseRefUrl).toContain('http://localhost:3000');
  });

  it(`should fetch sports as an Observable`, async(inject([HttpTestingController, SportsListService],
    (httpClient: HttpTestingController, sportService: SportsListService) => {

      sportService.getSports().subscribe((sports: any) => {
        expect(sports.length).toBeGreaterThan(0);
      });

      const req = httpMock.expectOne(sportService.baseRefUrl + '/data');
      expect(req.request.method).toBe('GET');
      req.flush(dummyAddPosts);
      httpMock.verify();
    })));

  it(`should fetch login Details as an Observable`, async(inject([HttpTestingController, SportsListService],
    (httpClient: HttpTestingController, sportService: SportsListService) => {

      sportService.getLoginCheck().subscribe((sports: any) => {
        expect(sports.length).toBeGreaterThan(0);
      });

      const req = httpMock.expectOne(sportService.baseRefUrl + '/login');
      expect(req.request.method).toBe('GET');
      req.flush(loginDummyPosts);
      httpMock.verify();
    })));

  it('should post the sport data', () => {
    service.addSport(dummyAddPosts)
      .subscribe((data: any) => {
        expect(data.category).toBe('Dual Sports');
      });

    const req = httpMock.expectOne(service.baseRefUrl + '/data');
    expect(req.request.method).toBe('POST');

    req.flush(dummyAddPosts);
    httpMock.verify();
  });

  it('should post the login data', () => {
    service.addLogin(loginDummyPosts)
      .subscribe((data: any) => {
        expect(data.username).toBe('testadmin');
      });

    const req = httpMock.expectOne(service.baseRefUrl + '/login');
    expect(req.request.method).toBe('POST');

    req.flush(loginDummyPosts);
    httpMock.verify();
  });

  it('should put the sport data', () => {
    service.updateSport(dummyAddPosts[0]).subscribe((data: any) => {
        expect(data.category).toBe('Dual Sports');
      });

    const req = httpMock.expectOne(service.baseRefUrl + '/data/10' );
    expect(req.request.method).toBe('PUT');

    req.flush(dummyAddPosts);
    httpMock.verify();
  });

  it('should delete the correct sport data', () => {
    service.deleteSportsById(3).subscribe((data: any) => {
      expect(data).toBe(3);
    });

    const req = httpMock.expectOne(service.baseRefUrl + '/data/3' );
    expect(req.request.method).toBe('DELETE');

    req.flush(3);
    httpMock.verify();
  });

});
