import roomTypeModel from "../models/roomtype.model";

class RoomTypeService {
  // create a room type
  async create(roomTypeData: object) {
    return await roomTypeModel.create(roomTypeData);
  }

  // edit a room type
  async edit(filter: object, updateData: object) {
    return await roomTypeModel.findOneAndUpdate(filter, updateData, {
      new: true,
    });
  }

  // delete a room type
  async delete(filter: object) {
    return await roomTypeModel.findOneAndDelete(filter);
  }

  // fetch a roomtype
  async fetchOne(filter: object) {
    return await roomTypeModel.findOne(filter, { __v: 0 });
  }

  // fetch all roomtype
  async fetchAll(filter: object) {
    return await roomTypeModel.find(filter, { __v: 0 });
  }
}

export default new RoomTypeService()