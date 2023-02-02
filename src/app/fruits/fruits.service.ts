import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Fruits } from './fruits';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FruitsService {
   url ='http://localhost:3000/fruits/'
  constructor(private http : HttpClient) { }

  get()
  {
    return this.http.get<Fruits[]>('http://localhost:3000/fruits');
  }
  post(postValue : Fruits)
  {
    return this.http.post<Fruits>('http://localhost:3000/fruits',postValue);
  }
  getById(id:number)
  {
    // var x = 4,
    // toString = id.toString(),
    // toConcat = id + "";
    console.log(id);
    // let url = 'http://localhost:3000/fruits/'
    // console.log(url + id);
    return this.http.get<Fruits>(this.url + id);
  }
  update(payLoad : Fruits)
  {
    return this.http.put(this.url + payLoad.id , payLoad);
  }
  delete(id:number)
  {
    return this.http.delete<Fruits>(this.url + id);
    
  }
}
