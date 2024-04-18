import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../service/crud.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-get-all',
  templateUrl: './get-all.component.html',
  styleUrl: './get-all.component.css'
})
export class GetAllComponent implements OnInit{

constructor(private crudService:CrudService){}


ngOnInit(): void {
  this.getAllUser()
}

users!:User[];

getAllUser(){
this.crudService.getAll().subscribe({
  next:(data)=> {
    this.users = data;
    console.log(data)
  },
  error:(err)=> {
    console.log(err)
  }
})
}

}
