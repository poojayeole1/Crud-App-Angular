import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fruits } from '../fruits';
import { FruitsService } from '../fruits.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  fruitForm: Fruits = {
    id: 0,
    Name: '',
    Price: 0,
    Quantity: 0,
    name: undefined
  };

  constructor(private fruitSvc : FruitsService, private router:Router) { }

  ngOnInit(): void {
  }
Create()
{
  this.fruitSvc.post(this.fruitForm).subscribe({
    next:(data)=>{
      this.router.navigate(['/fruits/home'])
    },
    error:(err)=>
    {
      console.log(err);
    }

  });
}
}
