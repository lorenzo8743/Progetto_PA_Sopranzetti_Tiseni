
export enum errorMessages {
    GenericError = "Error! Server was unable to serve the request",
    Forbidden = "Error! User isn't authorized to perform this operation",
    NotFound = "Error! Requested resource was not found",
    ValidationError = "Error! Invalid or malformed input",
    MissingAuthHeader = "Error! No authorization header",
    InvalidJSONPayload = "Error! JSON payload is not correctly formatted",
    JWTVerifyError = "Error! JWT verification failed",
    InvalidJWTPayload = "Error! One or more values in JWT payload are malformed",
    UnregisteredUser = "Error! User isn't registered",
    SignError = "Error! An error occurred during sign process",
    FileReadingError = "Error! There is a problem in the reading file process, it's impossible to handle the request",
    FileAlreadyExist = "Error! This file already exist in a sign process or it has already been signed by the same signers"
}