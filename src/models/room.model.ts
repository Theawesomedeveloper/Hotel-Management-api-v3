import { Schema, model } from "mongoose";

const roomSchema: Schema = new Schema({
  roomId: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  roomType: {
    type: Schema.Types.ObjectId,
    ref: "RoomType",
  },
});

export default model("Room", roomSchema);
