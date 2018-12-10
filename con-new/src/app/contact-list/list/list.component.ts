import { Component, OnInit,  ViewChild } from '@angular/core';
import { ContactListService } from './../contact-list.service';
import { MatDialog, MatTableDataSource, MatTable, MatPaginator, MatSort} from '@angular/material';
import { NewContactComponent } from './../new-contact/new-contact.component';
import { DialogDeleteComponent } from '../../shared/dialog-delete/dialog-delete.component';
import { ToastrService } from 'ngx-toastr';
import { Person } from '../models/person';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

displayedColumns: string[] = ['alias', 'first_name', 'last_name', 'email', 'telephon', 'sex', 'details', 'edit', 'delete'];
dataSource;
error: string;

@ViewChild(MatPaginator) paginator: MatPaginator;
// @ViewChild(MatSort) sort: MatSort;??
constructor(
  private contactListService: ContactListService,
  private dialog: MatDialog,
  private toastr: ToastrService

) {}

  ngOnInit() {
    this.createDataSorce();
    this.giveItToServiceContext();
  }
  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
    }
  }
  createDataSorce(): void {
    this.contactListService.read().subscribe((Persons) => {
      this.dataSource = new MatTableDataSource(Persons['records']);
      this.createPaginator();

    },
      (error) => {
        this.error = error;
       }
    );

  }

  createPaginator(): MatPaginator {
    this.dataSource.paginator = this.paginator;
    return this.paginator;
  }
  refreshPage(): void {
    this.createDataSorce(); // kolejnoć !!!
    this.createPaginator().firstPage();
  }
  createSort(): void {
   // this.dataSource.sort = this.sort;
  }
  giveItToServiceContext(): void {
    this.contactListService.fowardRefTab(this);
  }
  showSuccess(text): void {
     this.toastr.success(text);
  }
  delete(Row): void {
    const dialogRef = this.dialog.open(DialogDeleteComponent, {
      data: {alias: Row.alias}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.contactListService.deletePerson(Row).subscribe((data) => {
          this.showSuccess('client ' + Row.alias + '  został usunięty z listy kontaktów');
          this.refreshPage();
        },
        (error) => {
          this.toastr.error(error, ' Bład');
        }
      );
      }
    });
  }
  openNewContactModal(): void {
     const dialogRef = this.dialog.open(NewContactComponent);
  }

}
