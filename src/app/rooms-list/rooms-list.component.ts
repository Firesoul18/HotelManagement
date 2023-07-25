import { Component, OnInit } from '@angular/core';
import { Room } from '../room';
import { RoomsService } from '../rooms-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css']
})
export class RoomsListComponent implements OnInit{

  rooms$!:Observable<Room[]>

  constructor(public serv: RoomsService){}

  ngOnInit() {
    this.rooms$=this.serv.getRooms()
  }



}
