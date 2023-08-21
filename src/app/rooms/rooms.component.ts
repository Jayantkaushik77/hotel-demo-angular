import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';
import { payhere } from './rooms';

@Component({
  selector: 'jsw-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  hotelName = 'Hilton Hotel';

  numberOfRooms = 10;

  tmrooms = false;

  rooms: Room = {
    totalRooms: 30,
    availableRooms: 10,
    bookedRooms: 5,


  }
  roomList: RoomList[] = [ ];
  payHere: payhere[] = [ ];
  constructor() { }

  ngOnInit(): void { 
    this.payHere=[
      {
        accountName:'Jayant Kaushik',
        accountNumber:892348902,
        ifscCode:'Bhdd',
        bankName:'HDFC',
        bankBranch:'BHIWANI',
        amount:324,


      }
    ]
    this.roomList= [
      {
        roomNumber:1,
        roomTypes: 'Dulex Room',
        amenities: 'Air Condintior, Wifi, TV',
        price: 900,
       // photos: 'http:fgsddsgffdf',
        checkinTime: new Date,
        checkoutTime: new Date,
      },
      {
        roomNumber:2,
        roomTypes: 'Extra Dulex Room',
        amenities : 'Air Condintior, Wifi, TV',
        price : 1900,
      //  photos : 'http:fgsddsgffsdfdsfsdf',
        checkinTime : new Date,
        checkoutTime : new Date,
      },
      {
        roomNumber : 3,
        roomTypes: 'Single Room',
        amenities : 'Air Condintior, Wifi, TV',
        price : 500,
      //  photos : 'http:fgsddsgffdsfdf',
        checkinTime : new Date,
        checkoutTime : new Date,
      }
    ]
  }


  toggle() {
    this.tmrooms = !this.tmrooms;
  }

  selectRoom(room:RoomList) {
    console.log(room);
  }
  addroom(){
    const room : RoomList={
      roomNumber: 4,
      roomTypes: 'Special Room',
      amenities: 'Air Condintior, Wifi, TV, Moon,',
      price: 6000,
      checkinTime: new Date,
      checkoutTime: new Date,
    };
    this.roomList.push(room);

  }
 

  

}
