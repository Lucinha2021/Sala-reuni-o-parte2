import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateRoomComponent } from './create-room/create-room.component';


@Injectable({
  providedIn: 'root'
})
export class RoomService {
  
  private baseUrl = 'http://localhost:8087/api/vl/rooms';

  constructor(private http: HttpClient) {}

  getRoom (id:number): Observable<any>
{

   return this.http.get('${this.baseUrl}/${id}');
}

CreateRoom(room:Object): Observable<Object>{
  return this.http.post('${this.baseUrl}', room);
}

updateRoom (id:number, value: any) : Observable<object>{
  return this.http.put ('${this.baseUrl}/$ {id}', value)
}

deleteRoom(id:number): Observable<any>{
  return this.http.delete('${this.baseUrl}/${id}',{responseType: 'text'});

}
getRoomList(): Observable<any>{
  return this.http.get('${this.baseUrl}');
}
}