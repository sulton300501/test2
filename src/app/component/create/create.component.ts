import { Component } from '@angular/core';
import { CreateUser } from '../../models/createUser';
import { CrudService } from '../../service/crud.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  isSubmitted: boolean = false;

  resultData! : CreateUser;

  setValue: CreateUser = {
    name: "",
    email: "",
    password: "",
    login: "",
    role: ""
  }

  constructor(private crudService: CrudService) {

  }


  createUser(data: CreateUser) {
    this.crudService.createUser(data).subscribe({
     next: (result) => {
       this.resultData = result;
       this.isSubmitted=true
       console.log(result);
     },
     error: (err) => {
       console.log(`Error ketti: ${err}`);
     }
   });
 }

 setUser() {
   this.createUser(this.setValue);
   
 }

}
