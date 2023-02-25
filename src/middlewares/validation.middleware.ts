 import * as Joi from "joi";
import { Request, Response, NextFunction } from "express"

export const roomSchemaJoi = Joi.object({
  roomId: Joi.string().required(),
  roomType: Joi.string().required(),
});

export const roomTypeSchemaJoi = Joi.object({
  roomType: Joi.string().required(),
  bedType: Joi.string().required(),
  maxOccupancy: Joi.number().required(),
  pricePerNight: Joi.number().required(),
  amenities: Joi.array().items(Joi.string()),
});

export const userSchemaJoi = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(0).required(),
  role: Joi.string().valid("guest", "admin"),
});

export const validateUserInput = function (type : string) {
  return function (req :any, res: Response, next : NextFunction) {
    const userInput: object = req.body;
    let result : any;
    console.log(userInput)

    if (type === "roomtype") {
      result = roomTypeSchemaJoi.validate(userInput);
    } else if (type === "room") {
      result = roomSchemaJoi.validate(userInput);
    } else if (type === "user") {
      result = userSchemaJoi.validate(userInput);
    } else {
      return res
        .status(422)
        .json({ success: false, message: "internal server error" });
    }

     const { error, value } = result;

    if (error) {
      return res
        .status(400)
        .json({ success: false, message: error.details[0].message });
    }
console.log('done validating')
    next();
  };
};

export const roomSchemaJoiOptional = Joi.object({
  roomId: Joi.string(),
  roomType: Joi.string(),
});

export const roomTypeSchemaJoiOptional = Joi.object({
  roomType: Joi.string(),
  bedType: Joi.string(),
  maxOccupancy: Joi.number(),
  pricePerNight: Joi.number(),
  amenities: Joi.array().items(Joi.string()),
});

export const userSchemaJoiOptional = Joi.object({
  email: Joi.string().email(),
  password: Joi.string().min(0),
  role: Joi.string().valid("guest", "admin"),
});
