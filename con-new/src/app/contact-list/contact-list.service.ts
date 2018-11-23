import { Injectable } from '@angular/core';
import { Person } from './models/person';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { RequestOptions, Headers,  Http, Response } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent  } from './list/list.component';


@Injectable({
  providedIn: 'root'
})
export class ContactListService {
  ListContext;
  private headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
  private options = new RequestOptions({ headers: this.headers });


 constructor(private http: Http ) { }

  addPerson(person: Person): void {
     const phpUrl = 'http://localhost/connect_list/back-end/create.php';
   // const phpUrl = '../back-end/create.php';
    this.http.post(phpUrl, person, this.options)
      .subscribe((data) => {this.reLoadTab();
    });
  }
  read(): Observable<Person[]> {
        const phpUrl = 'http://localhost/connect_list/back-end/read.php';
        // const phpUrl = '../back-end/read.php';
    return this.http.get(phpUrl)
    .pipe(map((res: Response) => res.json())) ;
  }
  getPerson(id: string): Observable<Person> {
    const phpUrl = 'http://localhost/connect_list/back-end/read_one.php?id=' + id;
    // const phpUrl = '../../../back-end/read_one.php?id=' + id;
    return this.http.get(phpUrl)
      .pipe(map((res: Response) => res.json()));
  }
  upDataPerson(person): void {
    const phpUrl = 'http://localhost/connect_list/back-end/update.php';
    // const phpUrl = '../../../../clientlist/back-end/update.php';
    this.http.post(phpUrl, person, this.options).subscribe((data) => {
      this.reLoadTab();
    });
  }
  deletePerson(personId): void {
    const phpUrl = 'http://localhost/connect_list/back-end/delete.php';
    // const phpUrl = '../back-end/delete.php';
    this.http.post(phpUrl, {id: personId}, this.options).subscribe((data) => {
      this.reLoadTab();
    });
  }
  fowardRefTab(ListContext): void {
    this.ListContext = ListContext;
  }
  reLoadTab(): void {
    this.ListContext.refreshPage();
  }
}


