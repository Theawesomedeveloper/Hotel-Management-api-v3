import { Request, Response } from "express";
import roomTypeService from "../services/roomtype.service";
import { RoomType } from "../interfaces/roomtype.interface";
// const {userSchemaJoiOptional, roomTypeSchemaJoiOptional , roomSchemaJoiOptional} = require('../middlewares/validation.middleware')

class RoomTypeController {
  /**
   * creates a roomtype based on the `request.body`
   */
  public async createRoomType(req: Request, res: Response) {
    // getting user input
    const roomTypeData: RoomType = req.body;

    // check if there is a room type with that name
    const existingRoomType: object = await roomTypeService.fetchOne({
      roomType: roomTypeData.roomType,
    });
    if (existingRoomType)
      return res
        .status(403)
        .json({ success: false, message: "Room type already exists" });

    // if not
    const createdRoomType: object = await roomTypeService.create(roomTypeData);
    return res.status(201).json({
      success: true,
      message: "Roomtype created successfully",
      data: createdRoomType,
    });
  }

  /**
   * fetches a roomtype based on the `request.params`
   * @param {*} req
   * @param {*} res
   * @returns
   */
  public async fetchOneRoomType(req: Request, res: Response) {
    const requestedRoomType: object = req.params;

    // check if there the room type exists
    const foundRoomType: object = await roomTypeService.fetchOne(
      requestedRoomType
    );

    // if not
    if (!foundRoomType)
      return res
        .status(404)
        .json({ success: false, message: "Roomtype not found" });

    return res.status(200).json({
      success: true,
      message: "Roomtype fetched successfully",
      data: foundRoomType,
    });
  }

  /**
   * fetches all roomtypes based on the `request.query`
   * @param {*} req
   * @param {*} res
   * @returns
   */
  public async fetchAllRoomTypes(req: Request, res: Response) {
    const filter: object = req.query;

    const foundRoomTypes: object = await roomTypeService.fetchAll(filter);
    if (!foundRoomTypes)
      return res
        .status(404)
        .json({ success: false, message: "No Roomtypes found" });

    return res.status(200).json({
      success: true,
      message: "Roomtypes fetched successfully",
      data: foundRoomTypes,
    });
  }

  /**
   * deletes a `roomtype` based on the `request.params`
   * @returns { object }
   */
  public async deleteRoomType(req: Request, res: Response): Promise<Response> {
    const requestedRoomType: string = req.params.roomType;

    // checking if such room type exists
    const deletedRoomType: object = await roomTypeService.delete({
      roomType: requestedRoomType,
    });

    if (!deletedRoomType)
      return res
        .status(404)
        .json({ success: false, message: "Roomtype not found" });

    return res.status(200).json({
      success: true,
      message: "Roomtype deleted successfully",
      data: deletedRoomType,
    });
  }

  /**
   * updates a `roomtype` based on the `request.params`
   * @param {*} req
   * @param {*} res
   * @returns
   */
  public async editRoomType(req: Request, res: Response) {
    // getting user inputs
    const requestedRoomType: string = req.params.roomType;
    const updateData: RoomType = req.body;

    // checking if such room type exists
    const existingRoomType: object = await roomTypeService.fetchOne({
      roomType: requestedRoomType,
    });

    if (!existingRoomType)
      return res
        .status(404)
        .json({ success: false, message: "Roomtype not found" });

    if (updateData.roomType) {
      // check if the new roomtype name has been used
      const existingRoomTypeName : object = await roomTypeService.fetchOne({
        roomType: updateData.roomType,
      });

      if (existingRoomTypeName)
        return res
          .status(403)
          .json({ success: false, message: "Roomtype already exists" });
    }

    const updatedRoomType : object = await roomTypeService.edit(
      { roomType: requestedRoomType },
      updateData
    );
    return res.status(200).json({
      success: true,
      message: "Roomtype updated successfully",
      data: updatedRoomType,
    });
  }
}

export default new RoomTypeController();
