import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomerDetails } from 'src/app/models/CustomerDetails';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {

  customerList=Array();

  constructor(private customerService: UserService,
    private router: Router) {}

  ngOnInit() { 
    this.reloadData(); 
  }

  /**
   * reload and shows updated data on UI
   */
  reloadData() {
    this.customerService.getCustomerList().subscribe({
      next: data => {
        this.customerList = data.customers;
      },
      error: err => {
      }
    });
  }

  /**
   * update the customer details
   * @param customer 
   */
  updateCustomer(customer: CustomerDetails){
    this.customerService.setUpdateId(customer);
    this.router.navigate(['/update']);
  }

  /**
   * deletes the customer details by ID
   * @param id 
   */
  deleteCustomer(id: string) {
    this.customerService.deleteCustomer(id)
      .subscribe({
        next: data => {
          console.log(data);
          this.reloadData();
        },
        error: error => {console.log(error)}
      });
  }
}
