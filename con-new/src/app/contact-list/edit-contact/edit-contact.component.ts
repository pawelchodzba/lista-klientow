import { Component, OnInit, ViewChild, AfterViewInit  } from '@angular/core';
import { ContactListService } from '../contact-list.service';
import { ActivatedRoute } from '@angular/router';
import { FormContactComponent } from '../form-contact/form-contact.component';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';



@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit, AfterViewInit {
   @ViewChild('formContact') formContact: FormContactComponent;
   Person;
   Error;
  constructor(
    private contactListService: ContactListService,
    private route: ActivatedRoute,
    private rout: Router,
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
   },
      (error) => {this.rout.navigate(['/', 'clients']);
    });
  }
  updateContact(): void {
    const ValuesForm = this.formContact.form.value;
    ValuesForm.id = this.Person.id;
    this.contactListService.upDataPerson(ValuesForm).subscribe((data) => {
      this.showSuccess('Dane Klienta  ' +  ValuesForm.alias + ' zotały zaktualizowane');
      this.reloadTab();
    },
    (error) => {console.log(error); }
  );

  }
  reloadTab(): void {
    this.contactListService.reLoadTab();
 }
  showSuccess(text): void {
    this.toastr.success(text);
  }

}
