import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fruits } from '../fruits';
import { FruitsService } from '../fruits.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  fruitForm : Fruits = {
    id : 0,
    Name: '',
    Quantity: 0,
    Price: 0,
    name: undefined
  }

  constructor(private fruitService : FruitsService, private route : ActivatedRoute, private router : Router ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getDataById(id);
    });
  }

  getDataById(id:number)
  {
    this.fruitService.getById(id).subscribe((data)=>{
      console.log(data);
      this.fruitForm = data;
    });
  }
  updateData()
  {
    this.fruitService.update(this.fruitForm).subscribe({next:(data)=>{
      this.router.navigate(["/fruits/home"]);
    }
    })
  }
}
