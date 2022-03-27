import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerDetails } from 'src/app/models/CustomerDetails';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  customer: CustomerDetails = new CustomerDetails;

  constructor(private route: ActivatedRoute,private router: Router,
    private customerService: UserService) { }

  ngOnInit() {
    this.customer = this.customerService.getUpdateId();
  }

  /**
   * update user details by calling backend services
   */
  updateUser() {
    this.customerService.updateCustomer((this.customer.id).toString(), this.customer)
      .subscribe({
        next: data => { console.log(data)}, error: error => {console.log(error)}
      });
    this.gotoList();
  }

  onSubmit() {
    this.updateUser();    
  }

  gotoList() {
    this.router.navigate(['/user']).then(() => {
      window.location.reload();
    });
  }

}
