import { MISSING_PARAMETERS_ERROR, UNKNOWN_URL_DOWNLOAD_ERROR } from "../../../src/handler";
import { apiResponse } from "../../../src/model/api-reponse";
import HttpStatus from "../../../src/model/http-status-codes";


export const UPLOAD_URL_MOCK = "http://mock-upload.com"
export const DOWNLOAD_URL_MOCK = "http://mock-download.com"


export const API_RESPONSE_SUCCESS_UPLOAD = apiResponse(HttpStatus.OK,UPLOAD_URL_MOCK);
export const API_RESPONSE_SUCCESS_DOWNLOAD = apiResponse(HttpStatus.OK,DOWNLOAD_URL_MOCK);
export const API_REPONSE_BAD_URL_ = apiResponse(HttpStatus.BadRequest,UNKNOWN_URL_DOWNLOAD_ERROR)
export const MISSING_BUCKET_RESPONSE = apiResponse(HttpStatus.InternalServerError,MISSING_PARAMETERS_ERROR + " bucket")
export const MISSING_KEY_RESPONSE = apiResponse(HttpStatus.InternalServerError,MISSING_PARAMETERS_ERROR + " key")
export const MISSING_URL_TYPE_RESPONSE = apiResponse(HttpStatus.InternalServerError,MISSING_PARAMETERS_ERROR + " urlType")