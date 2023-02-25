import { ObjectId } from "mongoose";

export interface Room {
  roomId?: string ;
  roomType?: any | string | ObjectId;
}
