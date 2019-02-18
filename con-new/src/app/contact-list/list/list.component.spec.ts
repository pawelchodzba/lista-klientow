import {ListComponent } from './list.component';
import {TestBed, ComponentFixture } from '@angular/core/testing';
import { MaterialModule } from '../../material/material.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ContactListServiceMock } from '../../spec-helpers/ContactListServiceMock';
import { ContactListService } from '../contact-list.service';
import { ToastrServiceMock } from '../../spec-helpers/ToastrServiceMock';
import { ToastrService } from 'ngx-toastr';
import { SpinerComponent } from '../../shared/spiner/spiner.component';
import { SpinerMock } from '../../spec-helpers/SpinerMock';
import { MatDialog, MatTableDataSource, MatTable, MatPaginator, MatSort, MatIconModule} from '@angular/material';
import { Person } from 'src/app/contact-list/models/person';
import { fakeAsync } from '@angular/core/testing';
import { async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { tick } from '@angular/core/testing';



// describe('List', () => {

// let component: ListComponent;
// let contactListService: ContactListService;
// let spinerComponent: SpinerComponent;
// beforeEach(() => {
//   TestBed.configureTestingModule({
//     declarations: [ListComponent],
//     imports: [MaterialModule,
//       FormsModule,
//       ReactiveFormsModule,
//       RouterModule,
//       SharedModule

//       ],
//       providers: [
//         ListComponent,
//       {provide: ContactListService, useClass: ContactListServiceMock },
//       {provide: ToastrService, useClass: ToastrServiceMock },
//       {provide: SpinerComponent, useClass: SpinerMock }
//       ]
//   });
//   component = TestBed.get(ListComponent);
//   contactListService = TestBed.get(ContactListService);
//   spinerComponent = TestBed.get(SpinerComponent);
// });
//   it('component exist', () => {
//     expect(component).toBeDefined();
//   });
//   it('start error is undefined ', () => {
//     expect(component.error).toBeUndefined();
//   });
//   it('property displayedColumns must be array ', () => {
//     expect(Array.isArray(component.displayedColumns)).toBeTruthy();
//   });
//   it('start dataSource is undefined ', () => {
//     expect(component.dataSource).toBeUndefined();
//   });
//   it('start dataSource is undefined ', () => {
//     expect(component.disabled).toBeTruthy();
//   });
//   it('start reference sort is undefined ', () => {
//     expect(component.sort).toBeUndefined();
//   });
//   it('start reference paginator is undefined ', () => {
//     expect(component.paginator).toBeUndefined();
//   });
//   it('start reference spiner is undefined ', () => {
//     expect(component.spiner).toBeUndefined();
//   });

// });

describe('allTable', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent],

      imports: [MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        SharedModule,
        RouterTestingModule,
        BrowserAnimationsModule
        ],
        providers: [
          ListComponent,
        {provide: ContactListService, useClass: ContactListServiceMock },
        {provide: ToastrService, useClass: ToastrServiceMock },
        {provide: SpinerComponent, useClass: SpinerMock }
        ]
    }).compileComponents();


  }));
  describe('table', () => {
        let tableElement: HTMLElement;
        let fixture: ComponentFixture<ListComponent>;
        let dataSource: MatTableDataSource<Person>;
        let component: ListComponent;
        let contactListService: ContactListService;
        let spinerComponent: SpinerComponent;
        beforeEach(fakeAsync(() => {
          fixture = TestBed.createComponent(ListComponent);

          fixture.detectChanges();
          // tick(1000);
          tableElement = fixture.nativeElement.querySelector('.mat-table');
          component = fixture.componentInstance;
          dataSource = fixture.componentInstance.dataSource;
          contactListService = TestBed.get(ContactListService);
          spinerComponent = TestBed.get(SpinerComponent);
        }));


        it('tablexxxx', () => {

          // expectTableToMatchContent(tableElement, [
          //   ['alias', 'first_name', 'last_name', 'email', 'telephon', 'sex', 'photo', 'details', 'edit', 'delete']
          // ]);
        });
      });




});






function expectTableToMatchContent (tableElement: Element, expected: any[]) {

  const missedExpectation: string[] = [];

  function checkCellContent(actualCell: string, expectedCell: string) {
    if (actualCell !== expectedCell) {
      missedExpectation.push(`Expected cell contents to be ${expectedCell} but was ${actualCell}`);
    }

  }
}
