import { Component, OnInit } from '@angular/core';
import { ContactListService } from '../contact-list.service';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../../contact-list/models/person';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  Person: Person;
  constructor(
    private contactListService: ContactListService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loadContact();
  }
  loadContact(): void {
    const id = this.route.snapshot.params['id'];
    this.contactListService.getPerson(id).subscribe((person) => {
     this.Person = person;
    });

  }
}
