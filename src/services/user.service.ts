import userModel  from "../models/user.model"

class UserService {
  // create user
  async create(userData: object) {
    return await userModel.create(userData);
  }

  // find user
  async fetchOne(filter: object) {
    return await userModel.findOne(filter);
  }

  async update(filter: object, userData: object) {
    return await userModel.findOneAndUpdate(filter, userData, { new: true });
  }
}
export default new UserService();
