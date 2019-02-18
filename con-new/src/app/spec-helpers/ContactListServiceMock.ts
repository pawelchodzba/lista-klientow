import { Person } from '../contact-list/models/person';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

export class ContactListServiceMock {
  read() {
    return of([
      // tslint:disable-next-line:max-line-length
      {id: '1', alias: 'zgred', first_name: 'pawel', last_name: 'pawulon', email: 'dssd@fddf', telephon: '123456789', sex: 'k', photo: 'string'},
      // tslint:disable-next-line:max-line-length
      {id: '2', alias: 'zgred', first_name: 'pawel', last_name: 'pawulon', email: 'dssd@fdd1', telephon: '123456781', sex: 'm', photo: 'string'}
    ]);
    // return new Promise ((resolve, reject) => {
    //  return [
    //     tslint:disable-next-line:max-line-length
    //     {id: '1', alias: 'zgred', first_name: 'pawel', last_name: 'pawulon', email: 'dssd@fddf', telephon: '123456789', sex: 'k', photo: 'string'},
    //     tslint:disable-next-line:max-line-length
    //     {id: '2', alias: 'zgred', first_name: 'pawel', last_name: 'pawulon', email: 'dssd@fdd1', telephon: '123456781', sex: 'm', photo: 'string'}
    //   ];
    //   resolve();
    // });


  }
  fowardRefTab(this) {}

}
