import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UserModelModule {
    id!: number;
    // id: number | undefined;
    firstname!: String;
    lastname!: String;
    email_id!: String;
 }
