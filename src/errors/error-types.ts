import { errorMessages } from "./error-messages";
export interface ErrorMsg{
    status: number;
    message: string;
}

//TODO: completare con tutti gli errori che risulteranno necessari

export class GenericError extends Error implements ErrorMsg {
    status: number;

    constructor(message?: string, status?: number){
        super();
        Error.captureStackTrace(this, this.constructor);
        this.name = this.constructor.name;
        this.message = message || errorMessages.GenericError;
        this.status = status || 500;
    }
}

export class SignError extends GenericError implements ErrorMsg {
    constructor(){
        super (errorMessages.SignError);
    }
}

export class Forbidden extends GenericError implements ErrorMsg{

    constructor(message?: string) {
        super(message || errorMessages.Forbidden, 403);
    }
}
export class Unauthorized extends GenericError implements ErrorMsg{

    constructor(message?: string) {
        super(message || errorMessages.Unauthorized, 401);
    }
}

export class MissingAuthHeader extends Forbidden implements ErrorMsg{

    constructor(){
        super(errorMessages.MissingAuthHeader);
    }
}

export class JWTVerifyError extends Forbidden implements ErrorMsg{

    constructor(){
        super(errorMessages.JWTVerifyError);
    }
}

export class UnregisteredUser extends Forbidden implements ErrorMsg{

    constructor(){
        super(errorMessages.UnregisteredUser);
    }
}

export class NotFound extends GenericError implements ErrorMsg{
    constructor(message?: string){
        super(message || errorMessages.NotFound, 404);
    }

}

export class InvalidId extends NotFound implements ErrorMsg{
    constructor(){
        super(errorMessages.InvalidId);
    }
}

export class ValidationError extends GenericError implements ErrorMsg{
    constructor(message?: string){
        super(message || errorMessages.ValidationError, 400);
    }

}

export class InvalidJSONPayload extends ValidationError implements ErrorMsg{
    constructor(){
        super(errorMessages.InvalidJSONPayload);
    }
}

export class InvalidJWTPayload extends ValidationError implements ErrorMsg{
    constructor(){
        super(errorMessages.InvalidJWTPayload);
    }
}

export class InvalidFormPayload extends ValidationError implements ErrorMsg{
    constructor(){
        super(errorMessages.InvalidFormPayload);
    }
}

export class InvalidParams extends ValidationError implements ErrorMsg{
    constructor(){
        super(errorMessages.InvalidParams);
    }
}

export class FileReadingError extends GenericError implements ErrorMsg{
    constructor(){
        super(errorMessages.FileReadingError);
    }
}

export class FileAlreadyExistError extends Forbidden implements ErrorMsg{
    constructor(){
        super(errorMessages.FileAlreadyExist);
    }
}

export class CertCreationError extends GenericError implements ErrorMsg{
    constructor(){
        super(errorMessages.CertCreationError);
    }
}

export class CertAlreadyExistErr extends Forbidden implements ErrorMsg{
    constructor(){
        super(errorMessages.CertAlreadyExistErr);
    }
}

export class BadChallengingString extends Unauthorized implements ErrorMsg{
    constructor() {
        super(errorMessages.BadChallengingString);
    }
}

export class ChallengingCodeExpired extends Unauthorized implements ErrorMsg{

    constructor() {
        super(errorMessages.ChallengingCodeExpired);
    }
}

export class SignerNotAdmitted extends Forbidden implements ErrorMsg{
    constructor() {
        super(errorMessages.SignerNotAdmitted);
    }
}

export class SignAlreadyDone extends Forbidden implements ErrorMsg{
    constructor() {
        super(errorMessages.SignAlreadyDone);
    }
}

export class CertificateNotFound extends NotFound implements ErrorMsg{
    constructor() {
        super(errorMessages.CertificateNotFound);
    }
}



export enum ErrEnum {
    GenericError,
    Forbidden,
    NotFound,
    ValidationError,
    MissingAuthHeader,
    InvalidJSONPayload,
    JWTVerifyError,
    InvalidJWTPayload,
    UnregisteredUser,
    SignError,
    FileReadingError,
    FileAlreadyExistError,
    InvalidFormPayload,
    CertCreationError,
    CertAlreadyExistErr,
    InvalidParams,
    InvalidId,
    BadChallengingString,
    ChallengingCodeExpired,
    SignAlreadyDone,
    SignerNotAdmitted,
    CertificateNotFound
}