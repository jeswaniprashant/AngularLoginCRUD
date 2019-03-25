import { Accounts } from './../../accounts.model';
import { AccountsService } from './../../accounts.service';
import { MatSnackBar } from '@angular/material';
import { FormGroup, FormBuilder, Validators, FormControlName } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id: string;
  account: any = {};
  updateForm: FormGroup;
  constructor( private accService: AccountsService, private router: Router, private route: ActivatedRoute,
               private snackBar: MatSnackBar, private fb: FormBuilder  ) { this.createForm(); }

               createForm() {
                 this.updateForm = this.fb.group({
                   accNumber: ['', Validators.required],
                   type: ''
                 });
               }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.accService.getAccountsbyId(this.id).subscribe((res: any) => {
        console.log(res);
        this.account = res.data.account;
        this.updateForm.get('accNumber').setValue(this.account.accNumber);
        this.updateForm.get('type').setValue(this.account.type);
      });
    });
  }

  updateAccount( accNumber, type ) {
    console.log(accNumber + type);
    this.accService.updateAccount(this.id, accNumber, type).subscribe(() => {
      this.snackBar.open('Account Updated Successfully');
      this.router.navigate(['/list']);
    });
  }

}
