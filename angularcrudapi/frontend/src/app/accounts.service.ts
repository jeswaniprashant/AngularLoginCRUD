import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor( private http: HttpClient ) { }

  getAccounts() {
    return this.http.get(`http://localhost:3000/accs`);
  }

  getAccountsbyId(id) {
    return this.http.get(`http://localhost:3000/accs/${id}`);
  }
  addAccounts(accNumber, type) {
    const acc = {
      accNumber,
      type
    };
    return this.http.post(`http://localhost:3000/accs`, acc);
  }

  updateAccount(id, accNumber, type) {
    const acc = {
      accNumber,
      type
    };
    console.log(acc);
    return this.http.put(`http://localhost:3000/accs/${id}`, acc);
  }

  deleteAccount(id) {
    return this.http.delete(`http://localhost:3000/accs/${id}`);
  }
}


