import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { LayoutServiceMoc } from '../spec-helpers/layoutServiceMoc';
import { LayoutService } from '../shared/services/layout.service';
describe('AuthService', () => {
  let service: AuthService;
   let  layoutServiceSpy: LayoutService;
   const Spy = jasmine.createSpyObj('LayoutService', ['impossibleWithoutLogging', 'possibleAfterLogging']);
  beforeEach(() => {
    TestBed.configureTestingModule({

    providers: [
      AuthService,
      {provide: LayoutService, useValue: Spy}
    ]
    });
  service = TestBed.get(AuthService);
  layoutServiceSpy = TestBed.get(LayoutService);

});

  it('should be created', () => {
   expect(service).toBeDefined();
  });
  it('logOut() invokes layoutServiceSpy.impossibleWithoutLogging', () => {
    service.logOut();
    expect(layoutServiceSpy.impossibleWithoutLogging).toHaveBeenCalled();
   });
  it('if logOut() method userLoged shuld return false', () => {
    service.logOut();
    expect(service.userLoged()).toBeFalsy();
  });
  it('userLoged() retrive boolean', () => {
   expect(typeof service.userLoged()).toBe('boolean') ;
  });
  it('start service Name log is undefined', () => {
    expect(typeof service.getLogName()).toBe('undefined') ;
   });
   ///////////////////// fake test method//////////////
  it('login() invokes layoutServiceSpy.possibleAfterLogging', () => {
    service.login('admin', 'admin').then(value => {
      expect(layoutServiceSpy.possibleAfterLogging).toHaveBeenCalled();
    });
  });
  it('if login ("admin","admin") method getLogName return "admin"', () => {
    service.login('admin', 'admin').then(value => {
      expect(service.getLogName()).toBe('admin');
    });
  });
  it('if login ("admin","admin")', () => {
    service.login('admin', 'admin').then(value => {
      expect(service.userLoged()).toBeTruthy();
    });
  });
});
