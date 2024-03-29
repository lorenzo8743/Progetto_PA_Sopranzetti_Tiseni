import {ErrorMsg, ErrEnum, GenericError, Forbidden, NotFound, ValidationError, MissingAuthHeader, InvalidJSONPayload, JWTVerifyError, InvalidJWTPayload, UnregisteredUser, SignError, FileReadingError, FileAlreadyExistError, InvalidFormPayload, CertCreationError, InvalidId, CertAlreadyExistErr, InvalidParams, BadChallengingString, ChallengingCodeExpired, SignerNotAdmitted, SignAlreadyDone, CertificateNotFound, InvalidTokenNumber, InvalidEmail, DocumentAlreadySigned, DocumentNotSigned, NotEnoughToken, NoChallCodes, CannotCancel, RouteNotFound, ChallCodesNotRequested, WrongAuthHeader, UnregisteredSigner} from "./error-types";

/**
 * Funzione invocata per costruire l'errore desiderato tra quelli personalizzati utilizzando
 * un enum appositamente definito.
 */
export const errorFactory = {
    getError: (errType:ErrEnum): ErrorMsg => {
        let returnValue: ErrorMsg;
        switch (errType) {
            case ErrEnum.Forbidden:
                returnValue = new Forbidden();
                break;
            case ErrEnum.NotFound:
                returnValue = new NotFound();
                break;
            case ErrEnum.ValidationError:
                returnValue = new ValidationError();
                break;
            case ErrEnum.RouteNotFound:
                returnValue = new RouteNotFound();
                break;
            case ErrEnum.MissingAuthHeader:
                returnValue = new MissingAuthHeader();
                break;
            case ErrEnum.WrongAuthHeader:
                returnValue = new WrongAuthHeader();
                break;
            case ErrEnum.InvalidJSONPayload:
                returnValue = new InvalidJSONPayload();
                break;
            case ErrEnum.JWTVerifyError:
                returnValue = new JWTVerifyError();
                break;
            case ErrEnum.InvalidJWTPayload:
                returnValue = new InvalidJWTPayload();
                break;
            case ErrEnum.UnregisteredUser:
                returnValue = new UnregisteredUser();
                break;
            case ErrEnum.UnregisteredSigner:
                returnValue = new UnregisteredSigner();
                break;
            case ErrEnum.SignError:
                returnValue = new SignError();
                break;
            case ErrEnum.FileReadingError:
                returnValue = new FileReadingError();
                break;
            case ErrEnum.FileAlreadyExistError:
                returnValue = new FileAlreadyExistError();
                break;
            case ErrEnum.InvalidFormPayload:
                returnValue = new InvalidFormPayload();
                break;
            case ErrEnum.CertCreationError:
                returnValue = new CertCreationError();
                break;
            case ErrEnum.CertAlreadyExistErr:
                returnValue = new CertAlreadyExistErr();
                break;
            case ErrEnum.InvalidParams:
                returnValue = new InvalidParams();
                break;
            case ErrEnum.InvalidId:
                returnValue = new InvalidId();
                break;
            case ErrEnum.BadChallengingString:
                returnValue = new BadChallengingString();
                break;
            case ErrEnum.ChallengingCodeExpired:
                returnValue = new ChallengingCodeExpired();
                break;
            case ErrEnum.SignerNotAdmitted:
                returnValue = new SignerNotAdmitted();
                break;
            case ErrEnum.SignAlreadyDone:
                returnValue = new SignAlreadyDone();
                break;
            case ErrEnum.CertificateNotFound:
                returnValue = new CertificateNotFound();
                break;
            case ErrEnum.InvalidTokenNumber:
                returnValue = new InvalidTokenNumber();
                break;
            case ErrEnum.InvalidEmail:
                returnValue = new InvalidEmail();
                break;
            case ErrEnum.DocumentAlreadySigned:
                returnValue = new DocumentAlreadySigned();
                break;
            case ErrEnum.DocumentNotSigned:
                returnValue = new DocumentNotSigned();
                break;
            case ErrEnum.NotEnoughToken:
                returnValue = new NotEnoughToken();
                break;
            case ErrEnum.NoChallCodes:
                returnValue = new NoChallCodes();
                break;
            case ErrEnum.CannotCancel:
                returnValue = new CannotCancel();
                break;
            case ErrEnum.ChallCodesNotRequested:
                returnValue = new ChallCodesNotRequested();
                break;
            case ErrEnum.GenericError:
                returnValue = new GenericError();
                break;
            default:
                returnValue = new GenericError();
                break;
        }
        return returnValue;
    }
}