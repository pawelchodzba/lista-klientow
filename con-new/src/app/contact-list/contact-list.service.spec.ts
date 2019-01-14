import {TestBed, inject} from '@angular/core/testing';
import {ContactListService} from './contact-list.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Person} from './models/person';
import { DeviceDetectorService } from 'ngx-device-detector';
import { HttpErrorResponse } from '@angular/common/http/src/response';


describe('ContactListService', () => {
  let service: ContactListService;
  let httpMock:  HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ContactListService, DeviceDetectorService]
    });
    service = TestBed.get(ContactListService);
    httpMock = TestBed.get(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });

    it('should read() retrive persons data', () => {
      const dummy: Person[] = [
        // tslint:disable-next-line:max-line-length
        {id: '1', alias: 'zgred', first_name: 'pawel', last_name: 'pawulon', email: 'dssd@fddf', telephon: '123456789', sex: 'k', photo: 'string'},
        // tslint:disable-next-line:max-line-length
        {id: '2', alias: 'zgred', first_name: 'pawel', last_name: 'pawulon', email: 'dssd@fdd1', telephon: '123456781', sex: 'm', photo: 'string'}
      ];
      service.read().subscribe(persons => {
        expect(persons.length).toBe(2);
        expect(persons).toEqual(dummy);
      });
      const request = httpMock.expectOne('http://localhost/contact-new/back-end/read.php');
      expect(request.request.method).toBe('GET');
      request.flush(dummy);
    });

    it('should getPerson() retrive person data', () => {
      const id = '1';
      // tslint:disable-next-line:max-line-length
      const dummy: Person = {id: id, alias: 'zgred', first_name: 'pawel', last_name: 'pawulon', email: 'dssd@fddf', telephon: '123456789', sex: 'k', photo: 'string'};

      service.getPerson(id).subscribe(persons => {
        expect(persons).toEqual(dummy);
      });
      const request = httpMock.expectOne('http://localhost/contact-new/back-end/read_one.php?id=' + id);
      expect(request.request.method).toBe('GET');
      request.flush(dummy);
    });

  it('test error read', () => {
    const errorMessage = '404 error';
    service.read().subscribe(
      data => fail('should return  404 error'),
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(404);
        expect(error.error).toEqual(errorMessage);
      }
    );
    const request = httpMock.expectOne('http://localhost/contact-new/back-end/read.php');
    // request.flush(errorMessage, {status: 404, statusText: 'Not Found' });
  });
  it('test error getPerson', () => {
    const id = '1';
    const errorMessage = '404 error';
    service.getPerson(id).subscribe(
      data => fail('should return  404 error'),
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(404);
        expect(error.error).toEqual(errorMessage);
      }
    );
    const request = httpMock.expectOne('http://localhost/contact-new/back-end/read_one.php?id=' + id);
    // request.flush(errorMessage, {status: 404, statusText: 'Not Found' });
  });

});
