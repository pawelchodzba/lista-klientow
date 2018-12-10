import { Component, OnInit } from '@angular/core';
import { ContactListService } from '../contact-list.service';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../../contact-list/models/person';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  Person;
  constructor(
    private contactListService: ContactListService,
    private route: ActivatedRoute,
    private toastr: ToastrService

  ) {}

  ngOnInit() {
    this.loadContact();
  }
  loadContact(): void {
    const id = this.route.snapshot.params['id'];
    this.contactListService.getPerson(id).subscribe((person) => {
      this.Person = person;
    },
    (error) => {
      this.toastr.error(error, ' Bład');
     }
  );

  }
}
