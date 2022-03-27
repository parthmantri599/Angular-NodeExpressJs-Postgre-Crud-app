import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerDetails } from '../models/CustomerDetails';

const API_URL = 'http://localhost:8080/api/test/'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8080/api/customers/';
  private customerDetails!: CustomerDetails;

  constructor(private http: HttpClient) { }

  setUpdateId(customer: CustomerDetails) {
    this.customerDetails = customer;
  }

  getUpdateId() {
    return this.customerDetails;
  }
  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getCustomerList(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + 'retrieveinfos');
  }

  createCustomer(customer: CustomerDetails): Observable<any> {
    return this.http.post(`${this.baseUrl}`+ 'create', customer);
  }

  updateCustomer(id: string, customer: CustomerDetails): Observable<any> {
    return this.http.put(`${this.baseUrl}`+ 'updatebyid'+`/${id}`, customer);
  }

  deleteCustomer(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + 'deletebyid'+`/${id}`);
  }
}
