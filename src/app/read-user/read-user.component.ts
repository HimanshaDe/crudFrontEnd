import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserModelModule} from '../user-model/user-model.module';
import { UserServiceService } from "../user-service.service";

@Component({
  selector: 'app-read-user',
  templateUrl: './read-user.component.html',
  styleUrls: ['./read-user.component.css']
})
export class ReadUserComponent implements OnInit {

  users!: UserModelModule[];
 
  constructor(private userService: UserServiceService,
    private router:Router){}
   

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers(){
    this.userService.getUserList().subscribe(data=>{
      this.users = data;
    })
  }

  userDetails(id: number){
    this.router.navigate(['user-details', id])
  }
  updateEmployee(id: number){
    this.router.navigate(['edit-users', id])
  }
  deleteUser(id: number){
    this.userService.deleteuser(id).subscribe(data =>{
      console.log(data);
      this.getUsers();
    })
  }
  


}
