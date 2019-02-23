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
import { SpecTable } from '../../spec-helpers/SpecTable';

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
          component = fixture.componentInstance;
          dataSource = fixture.componentInstance.dataSource;
          contactListService = TestBed.get(ContactListService);
          spinerComponent = TestBed.get(SpinerComponent);
        }));
        it('component exist', () => {
          fixture.detectChanges();
          expect(component).toBeDefined();
        });
        it('start error is undefined ', () => {
          expect(component.error).toBeUndefined();
        });
        it('property displayedColumns must be array ', () => {
          expect(Array.isArray(component.displayedColumns)).toBeTruthy();
        });
        it('if component compailed dataSource is created ', () => {
          fixture.detectChanges();
          expect(component.dataSource ).toBeDefined();
        });
        it('start dataSource is undefined ', () => {
          expect(component.dataSource ).toBeUndefined();
        });
        it('start property disabled is true ', () => {
          expect(component.disabled).toBeTruthy();
        });
        it('start property sort is undefined ', () => {
           expect(component.sort).toBeUndefined();
        });
        it('if component compailed property sort is created ', () => {
          fixture.detectChanges();
          expect(component.sort).toBeDefined();
        });
        it('start reference paginator is undefined ', () => {
          expect(component.paginator).toBeUndefined();
        });
        it('if component compailed property paginator is created ', () => {
          fixture.detectChanges();
          expect(component.paginator).toBeDefined();
        });
        it('if component compailed component spiner is created ', () => {
          fixture.detectChanges();
          expect(component.spiner).toBeDefined();
        });
        it('should create table end display table header mock record ', () => {
          fixture.detectChanges();
          tableElement = fixture.nativeElement.querySelector('.mat-table');
          const HEADER_TEXT = ['Pseudonim',  'Imię', 'Nazwisko', 'Adres email', 'Telefon', 'Płeć',  'Photo'];
          const specT = new SpecTable( tableElement, HEADER_TEXT);
        });
  });




});
//////// function getActualTableContent //////////////////////////////////////////////////////////////////////////////////

