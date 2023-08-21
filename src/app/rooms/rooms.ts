export interface Room {
    totalRooms : number;
    availableRooms : number;
    bookedRooms: number;
}
export interface RoomList{
    roomNumber:number;
    roomTypes: string;
    amenities: string;
    price: number;
  //  photos: string;
    checkinTime: Date;
    checkoutTime : Date;
}
export interface payhere{
  accountName:string;
  accountNumber:number;
  bankName:string;
  bankBranch:string;
  ifscCode:string;
  amount:number; 
  
}