import { Router } from '@angular/router';
import { AccountsService } from './../../accounts.service';
import { Accounts } from './../../accounts.model';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  accounts: Accounts[];
  displayedColumn = ['accNumber', 'type', 'actions'];

  constructor( private accService: AccountsService, private route: Router, private snackBar: MatSnackBar ) { }

  ngOnInit() {
    this.fetchAccounts();
  }

  fetchAccounts() {
    console.log('Data Req');
    this.accService.getAccounts().subscribe((res: any) => {
      this.accounts = res.data.accounts;
      console.log(res.data.accounts);
      console.log('Data requested');
      console.log(this.accounts);
    });
  }

  updateAccount(id) {
    console.log(id);
    this.route.navigate([`/update/${id}`]);
  }

  deleteAccount(id) {
    if ( confirm('Are you sure?') ) {
      this.accService.deleteAccount(id).subscribe(() => {
        this.fetchAccounts();
      });
    }
  }

}
