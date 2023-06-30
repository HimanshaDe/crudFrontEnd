import { Component, OnInit } from '@angular/core';
import {UserModelModule} from "../user-model/user-model.module";
import { UserServiceService } from "../user-service.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit{
 users : UserModelModule = new UserModelModule();
 constructor(private userservice:UserServiceService,
    private router: Router){}

   ngOnInit(): void {
     
   }

   saveUsers(){
    this.userservice.createuser(this.users).subscribe(data =>{
      console.log(data);
      this.goToUserList();
    },
      error=> console.log(error));
   }

   goToUserList(){
    this.router.navigate(['/users-list']);
   }

  onSubmit(){
    console.log(this.users);
     this.saveUsers();
  }

}
