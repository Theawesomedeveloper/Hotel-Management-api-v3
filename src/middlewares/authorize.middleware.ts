import * as dotenv from 'dotenv';
dotenv.config()
import { Request, Response, NextFunction } from "express"

// Middleware function for authorization based on user role
function authorize(role : string) {
    return function (req: any, res: Response, next : NextFunction) {
        
        
        if (req.user.role !== role) {
            return res.status(403).send('Access denied.');
        }

        next();
    };
}

export default authorize