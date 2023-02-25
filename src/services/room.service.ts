import roomModel from "../models/room.model";

class RoomService {
  // create a room
  public async create(roomData: object): Promise<object> {
    return await roomModel.create(roomData);
  }

  // edit a room
  public async edit(filter: object, updateData: object): Promise<object> {
    return await roomModel.findOneAndUpdate(filter, updateData, { new: true });
  }

  // delete a room
  public async delete(filter: object): Promise<object> {
    return await roomModel.findOneAndDelete(filter);
  }

  // fetch a room
  public async fetchOne(filter: object): Promise<object> {
    return await roomModel.findOne(filter, { __v: 0 }).populate("roomType");
  }

  // fetch all rooms
  public async fetchAll(filter: object): Promise<object> {
    return await roomModel.find(filter, { __v: 0 }).populate("roomType");
  }
}

export default new RoomService();
