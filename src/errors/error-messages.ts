
export enum errorMessages {
    GenericError = "Error! Server was unable to serve the request",
    Forbidden = "Error! This operation is forbidden to the current user",
    Unauthorized = "Error! User isn't authorized to perform this operation",
    NotFound = "Error! Requested resource was not found",
    ValidationError = "Error! Invalid or malformed input",
    MissingAuthHeader = "Error! No authorization header",
    InvalidJSONPayload = "Error! JSON payload is not correctly formatted or you are trying to put a JSON body in a get request",
    JWTVerifyError = "Error! JWT verification failed",
    InvalidJWTPayload = "Error! One or more values in JWT payload are malformed",
    UnregisteredUser = "Error! User isn't registered",
    SignError = "Error! An error occurred during sign process",
    FileReadingError = "Error! There is a problem in the reading file process, it's impossible to handle the request",
    FileAlreadyExist = "Error! There is already an active sign process involving this file or file has already been signed by the same signers",
    InvalidFormPayload = "Error! Form payload are incorrect",
    CertCreationError = "Error! An error occured while creating your certificate, please try again",
    CertAlreadyExistErr = "Error! You have already created a valid certificate. If you want to recreate it please invalid the actual certificate",
    InvalidParams = "Error! Invalid params passed in the request",
    InvalidId = "Error! The specified id doesn't exist please try another id",
    BadChallengingString = "Error! Provided challenging codes are not correct please retry",
    ChallengingCodeExpired = "Error! Provided challenging codes are expired. Please request new challenging numbers to sign document",
    SignerNotAdmitted = "Error! You are not allowed to sign this document. Please specify correct document id",
    SignAlreadyDone = "Error! You cannot sign again this document",
    CertificateNotFound = "Error! There's not a certificate associated to current user",
    InvalidTokenNumber = "Error! No token number provided or it is an invalid value. Note: token number must be a positive integer",
    InvalidUserEmail = "Error! User with given email doesn't exist, please try another email"

}