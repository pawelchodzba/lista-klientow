import { HeaderComponent} from './header.component';
import { TestBed } from '@angular/core/testing';
import { MaterialModule } from '../../material/material.module';
import { AuthService } from '../../auth/auth.service';
import { NgZone } from '@angular/core';
import { MatDialog } from '@angular/material';
import {ScrollDispatcher} from '@angular/cdk/scrolling';
import { AuthServiceMock } from '../../spec-helpers/AuthServiceMock';

describe('heder', () => {
  let component: HeaderComponent;
  let authService: AuthService;
  // let ngZone: NgZone;
  // let matDialog: MatDialog;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [MaterialModule],
      providers: [
        HeaderComponent,
        {provide: AuthService, useClass: AuthServiceMock}
       ]
    });
    component = TestBed.get(HeaderComponent);
    authService = TestBed.get(AuthService);
  // ngZone = TestBed.get(NgZone);
  // matDialog = TestBed.get(MatDialog);
  });
    it('component defined', () => {
      expect(component).toBeDefined();
    });
    it('shrinkToolbar started is falsy', () => {
      expect(component.shrinkToolbar).toBeFalsy();
    });
    it('viewToolbar started is truthy', () => {
      expect(component.viewToolbar).toBeTruthy();
    });
    it('isLoged started is falsy', () => {
      expect(component.isLoged).toBeFalsy();
    });
    it('logName started is falsy', () => {
      expect(component.logName).toBeFalsy();
    });
    it('logOut() invokes authService.logOut()', () => {
      spyOn(authService, 'userLoged');
      component.checkLog();
      expect(authService.userLoged).toHaveBeenCalled();
    });
    it('checkLog() invokes authService.userLoged()', () => {
      spyOn(authService, 'userLoged');
      component.checkLog();
      expect(authService.userLoged).toHaveBeenCalled();
    });
    it('checkLog() shold return boolean', () => {
      spyOn(authService, 'userLoged').and.returnValue(true);
      component.checkLog();
      expect(typeof authService.userLoged()).toBe('boolean');
    });
    it('getNameLogin() property logname is string', () => {
      spyOn(authService, 'getLogName').and.returnValue('string');
      component.getNameLogin();
      expect(typeof component.logName).toBe('string');
    });
    it('getNameLogin() invokes authService.getLogName()', () => {
      spyOn(authService, 'getLogName');
      component.getNameLogin();
      expect(authService.getLogName).toHaveBeenCalled();
    });
  //


});
