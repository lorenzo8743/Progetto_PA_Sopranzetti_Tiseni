import { errorFactory } from "../errors/error-factory";
import { ErrEnum } from "../errors/error-types";
import { NextFunction, Response } from "express";
import multer from "multer";

/**
 * Middleware che gestisce gli errori che possono essere generati da un payload JSON 
 * mal formattato
 * @param {any} err 
 * @param {any} req 
 * @param {any} res 
 * @param {NextFunction} next 
 */
export function appErrorHandler (err: any, req:any, res:any, next: NextFunction):void {
    if(err){
        let error = errorFactory.getError(ErrEnum.InvalidJSONPayload)
        res.status(error.status).json(error.message);
    }else{
        next();
    }
}

/**
 * Middleware che gestisce gli errori che possono essere generati dal pacchetto "Multer"
 * @param {any} err 
 * @param {any} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 */
export function multerErrorHandler (err: any, req: any, res: Response, next: NextFunction):void {
    if (err instanceof multer.MulterError){
        next(errorFactory.getError(ErrEnum.InvalidFormPayload));
    }
    else
        next(err);
}

/**
 * Middleware che gestisce gli errori che si possono verificare in tutti i middleware 
 * precedenti della catena
 * @param {any} err 
 * @param {any} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 */
export const errorHandler = (err: any, req: any, res: Response, next: NextFunction) => {
    if(err.status === undefined){
        let error = errorFactory.getError(ErrEnum.GenericError);
        res.status(error.status).send({"error": err.message});
    }
    res.status(err.status).send({"error": err.message});
}

export const signProcessErrorHandler = [multerErrorHandler, errorHandler];