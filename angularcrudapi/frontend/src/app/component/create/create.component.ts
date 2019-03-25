import { AccountsService } from './../../accounts.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControlName } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createForm: FormGroup;

  constructor( private accService: AccountsService, private fb: FormBuilder, private rooute: Router ) { }

  ngOnInit() {
    this.createForm = this.fb.group({
      accNumber: [ '', Validators.required ],
      type: ''
    });
  }

  addAccount(accNumber, type) {
    this.accService.addAccounts(accNumber, type).subscribe(() => {
      this.rooute.navigate(['/list']);
    });
  }

}
