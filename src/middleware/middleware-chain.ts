import { upload } from '../utils/multer-config';
import * as DBMW from './mw-async-db';
import * as AJWT from './mw-auth-JWT';
import * as ERRMW from './mw-error';
import * as VALIDMW from './mw-validation';

/**
 * Variabili che contengono le catene di middleware da usare nelle varie rotte
 */

export const JWT_AUTH_MW = [AJWT.checkHeader, AJWT.checkToken, AJWT.verifyAndAuthenticate,
                                AJWT.checkJWTPayload, DBMW.checkUserAuthJWT];

export const ERR_HANDL_MW = ERRMW.errorHandler;

export const GENERIC_MW = [VALIDMW.RouteNotFound, ERRMW.errorHandler];

export const CERT_CREATION_MW = [VALIDMW.checkCertificateAlreadyExist, ERRMW.errorHandler];

export const CERT_INVALIDATION_MW = [VALIDMW.checkCertificateNotExists, ERRMW.errorHandler]

export const PROC_STATUS_MW = [DBMW.checkId, DBMW.checkIfApplicant, ERRMW.errorHandler];

export const SIGN_PROCESS_MW =[upload.single('document'), DBMW.checkForm_Data, 
                                DBMW.checkIfAlreadyExistOrSigned, DBMW.checkTokenQty, ERRMW.multerErrorHandler, 
                                ERRMW.errorHandler];

export const CANC_PROCESS_MW = [DBMW.checkId, DBMW.checkIfApplicant, DBMW.checkIfCompleted,
                                 ERRMW.errorHandler];

export const SIGN_DOCUMENT_MW = [VALIDMW.checkChallJSONBody, DBMW.checkId, VALIDMW.checkCertificateNotExists, 
                                DBMW.checkSigner, DBMW.checkExpiration, DBMW.checkChallString, ERRMW.errorHandler];

export const DOWNLOAD_DOC_MW = [DBMW.checkId, DBMW.checkIfSignerOrApplicant, DBMW.checkIfSigned, ERRMW.errorHandler];

export const ADMIN_MW = [AJWT.checkIfAdmin, VALIDMW.checkUserEmail, DBMW.checkIfUserEmailExist, VALIDMW.checkTokenNumber, ERRMW.errorHandler];                               
