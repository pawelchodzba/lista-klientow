import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators} from '@angular/forms';
import { MaterialModule } from '../../material/material.module';


@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css']
})
export class FormContactComponent implements OnInit {
  @Input() Person ;
  selected;
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    const Value = this.setValueForm(false);
    this.buildForm(Value);
  }
  buildForm(Value): void {
    this.form = this.formBuilder.group({
      alias: [Value.alias , { validators: [Validators.required, Validators.maxLength(24) ]}],
      first_name: [Value.first_name, { validators: [ Validators.required, Validators.maxLength(24) ]}],
      last_name: [Value.last_name, { validators: [ Validators.required, Validators.maxLength(24) ]}],
      email: [Value.email, { validators: [ Validators.required, Validators.maxLength(32), Validators.email  ]}],
      telephon: [Value.telephon, { validators: [ Validators.required, Validators.maxLength(12), Validators.pattern('[0-9]{9}') ]}],
      sex: [Value.sex, Validators.required]
    });
}
  setValueForm(Person) {
    if (Person) {
      return{
        alias: Person.alias,
        first_name: Person.first_name,
        last_name: Person.last_name,
        email: Person.email,
        telephon: Person.telephon,
        sex: Person.sex,
      };
    } else {
      return {
        alias: '',
        first_name: '',
        last_name: '',
        email: '',
        telephon: '',
        sex: 'k',
      };
    }
  }

}
