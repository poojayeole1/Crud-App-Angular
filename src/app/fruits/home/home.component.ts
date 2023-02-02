import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fruits } from '../fruits';
import { FruitsService } from '../fruits.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allFruits : Fruits[] = [];

  constructor(private fruitSvc : FruitsService, private router : Router) { }

  ngOnInit(): void {

    this.getdata();
  }
  getdata()
  {
   this.fruitSvc.get().subscribe((data)=>
   {
      console.log(data);
      this.allFruits = data;
   }) ;
  }
  deleteData(id : number,index : number)
  {
    let isConfirm = confirm("Are you sure?")
    if(isConfirm)
    {
      this.fruitSvc.delete(id).subscribe((data)=>
      {
        this.allFruits.splice(index, 1);
        console.log(data);
        this.router.navigate(["/fruits/home"]);
      })
    }
  }
 
}
