import { Component, OnInit } from '@angular/core';
import { Room } from '../room';
import { RoomsService } from '../rooms-service.service';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css']
})
export class RoomsListComponent implements OnInit{

  rooms!:Room[]

  constructor(public serv: RoomsService){
  }

  ngOnInit(){
    this.serv.getRooms().subscribe(d=>{this.rooms=d});
    console.log("Printing>>>"+this.rooms)
  }

}
