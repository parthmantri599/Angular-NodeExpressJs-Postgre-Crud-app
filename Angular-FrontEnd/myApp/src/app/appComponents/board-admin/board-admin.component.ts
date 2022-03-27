import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerDetails } from 'src/app/models/CustomerDetails';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {

  customer: CustomerDetails = new CustomerDetails();

  submitted = false;

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit() {
  }

  /**
   * Creates new customer 
   */
  createNewCustomer() {
    this.userService.createCustomer(this.customer).subscribe({
      next: data => {console.log(data)}, 
      error: error => {console.log(error)}
    });
    this.gotoList();
  }

  /**
   * Calls createNewCustomerMethod and sets submitted flag as true
   */
  onSubmit() {
    this.submitted = true;
    this.createNewCustomer();    
  }

  /**
   * navigates to user page
   */
  gotoList() {
    this.submitted = false;
    this.router.navigate(['/user']);
  }

  showCreateCustomerForm() {
    this.submitted = true;
  }
}
