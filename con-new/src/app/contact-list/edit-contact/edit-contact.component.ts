import { Component, OnInit, ViewChild, AfterViewInit  } from '@angular/core';
import { ContactListService } from '../contact-list.service';
import { ActivatedRoute } from '@angular/router';
import { FormContactComponent } from '../form-contact/form-contact.component';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit, AfterViewInit {
   @ViewChild('formContact') formContact: FormContactComponent;
   Person;
  constructor(
    private contactListService: ContactListService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) { }
  ngAfterViewInit() {

  }
  ngOnInit() {
    this.loadContact();
  }
  loadContact(): void {
    const id = this.route.snapshot.params['id'];
    this.contactListService.getPerson(id).subscribe((person) => {
      this.formContact.buildForm(this.formContact.setValueForm(person));
      this.Person = person;
      this.Person.id  = id;
   });
  }
  updateContact(): void {
    const ValuesForm = this.formContact.form.value;
    ValuesForm.id = this.Person.id;
    this.contactListService.upDataPerson(ValuesForm);
    this.showSuccess('Dane Klienta  ' +  ValuesForm.alias + ' zotały zaktualizowane');
  }
  reloadTab(): void {
    this.contactListService.reLoadTab();
 }
  showSuccess(text): void {
    this.toastr.success(text);
  }

}
