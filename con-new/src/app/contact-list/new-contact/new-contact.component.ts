import { Component , ViewChild} from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormContactComponent } from './../form-contact/form-contact.component';
import { ContactListService } from './../contact-list.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent  {
 @ViewChild('formContact') formContact: FormContactComponent;
  constructor(
    private contactListService: ContactListService,
    // private dialogRef: MatDialogRef<NewContactComponent>,
      private toastr: ToastrService
  ) { }
  createContact(alias: string): void {
   this.contactListService.addPerson(this.formContact.form.value).subscribe((data) => {
      this.showSuccess('Klient ' + alias + '  został dodany do listy kontaktów');
      this.reloadTab();
   },
    (error) => {console.log(error); } );


  }
  showSuccess(text: string): void {
    this.toastr.success(text);
  }
  reloadTab(): void {
    this.contactListService.reLoadTab();
}

}
