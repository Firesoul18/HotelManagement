import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from './room';

@Injectable({
  providedIn: 'root'
})

export class RoomsService {

  getRooms(): Observable<Room[]>{
    console.log("Calling Get...")
    // console.log(this.http.get('http://localhost:3000/rooms').subscribe(t=>{console.log(t)}))
    return this.http.get<Room[]>('https://localhost:3000/rooms');
  }

  constructor(private http:HttpClient) { }
}
