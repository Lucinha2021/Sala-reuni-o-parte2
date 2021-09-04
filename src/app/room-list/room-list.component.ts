import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RoomService } from '../room.service';
import { Room } from '../room';
import { Router } from '@angular/router';
import { RoomDetailsComponent } from 'src/app/room-details/room-details.component';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
  room!: Observable<Room[]>;

  constructor(private roomService: RoomService,
    private router: Router) { }

  ngOnInit()  {
    this.reloadData();

  }
reloadData(){
  this.room=this.roomService.getRoomList();
}

deleteRoom(id: number){
  this.roomService.deleteRoom(id)
  .subscribe(
    data=>{
      console.log(data)
      this.reloadData();
    },
    error => console.log(error)
  );
}
roomDetails(id:number){
  this.router.navigate(["details", id]);
}
UpdateRoomComponent(id:number){
  this.router.navigate(["update", id]);
}

}
