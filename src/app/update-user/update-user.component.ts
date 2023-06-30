import { Component,OnInit } from '@angular/core';
import { UserServiceService } from "../user-service.service";
import { UserModelModule } from "../user-model/user-model.module";
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit{

  id!: number;
  users: UserModelModule = new UserModelModule();
  constructor(private userservice:UserServiceService,
    private route: ActivatedRoute,
    private router: Router) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.userservice.getEmployeeById(this.id).subscribe(data =>{
      this.users = data;
    }, error => console.log(error));
  }
    onSubmit(){
      this.userservice.updateemployee(this.id, this.users).subscribe (data =>{
        this.goToUserList();
      }
      ,error => console.log(error));
    }
    goToUserList(){
      this.router.navigate(['/read-users']);
    }
  
}
