import {  APIGatewayProxyResult } from 'aws-lambda';
import {generateUploadURL,generateDownloadURL} from './service/s3-client';
import  { ApiRequestEvent }  from './model/api-request-event';
import { apiResponse } from './model/api-reponse'
import { HttpStatus } from './model/http-status-codes'
export const UNKNOWN_REQUEST_ERROR = 'ERROR : UNKNOWN REQUEST'
export const UNKNOWN_URL_UPLOAD_ERROR = 'ERROR : generating upload URL'
export const UNKNOWN_URL_DOWNLOAD_ERROR = 'ERROR : generating download URL'
export const MISSING_PARAMETERS_ERROR = 'ERROR : Missing required parameter(s):'
export const DEAFULT_EXPIRES_IN = 5000

export const BAD_URL_TYPE_RESPONSE = apiResponse(HttpStatus.BadRequest,UNKNOWN_REQUEST_ERROR);
export const BAD_UPLOAD_URL_RESPONSE = apiResponse(HttpStatus.InternalServerError,UNKNOWN_URL_UPLOAD_ERROR);
export const BAD_DOWNLOAD_URL_RESPONSE = apiResponse(HttpStatus.InternalServerError,UNKNOWN_URL_DOWNLOAD_ERROR);


export enum URL_TYPES{
  UPLOAD ="UPLOAD",
  DOWNLOAD = "DOWNLOAD"
}

export const handler = async (event: ApiRequestEvent ): Promise<APIGatewayProxyResult> => {
  
  

  const eventPretty = JSON.stringify(event);
  console.log('event passed in ' + eventPretty + '\n');


  const urlType = event?.arguments?.urlType ;
  const bucketName =  event?.arguments?.bucket ;
  const key =  event?.arguments?.key ;
  const expiresIn = DEAFULT_EXPIRES_IN;

  validateEventData(urlType,bucketName,key)

  console.log('url-type ' + urlType)

  switch(urlType)
  {
    case URL_TYPES.UPLOAD:
      return await getUploadURL(bucketName,key,expiresIn);
    case URL_TYPES.DOWNLOAD:
      return await getDownloadURL(bucketName,key,expiresIn);
    default :
      console.error("error " + UNKNOWN_REQUEST_ERROR)
      return BAD_URL_TYPE_RESPONSE;

  }

};

export const getUploadURL = async (bucketName:string, key:string, expiresIn:number):Promise<APIGatewayProxyResult>=> {
  console.log('getUploadURL')
  try {
  
    const url = await generateUploadURL(bucketName, key, expiresIn );
    console.log('url ' + url)
    return apiResponse(HttpStatus.OK,url);
  } catch (error) {
    console.error("Error generating upload URL:", error);
    return BAD_UPLOAD_URL_RESPONSE;
  }
};

export const getDownloadURL = async (bucketName:string, key:string, expiresIn:number):Promise<APIGatewayProxyResult> => {
  console.log('getDownloadURL')
  try {

    const url = await generateDownloadURL(bucketName, key, expiresIn );
    return apiResponse(HttpStatus.OK,url);
  } catch (error) {
    console.error("Error generating download URL:", error);
    return BAD_DOWNLOAD_URL_RESPONSE;
    };

};


export function validateEventData(urlType:string,bucketName:string,key:string){

  if (!urlType || !bucketName || !key) {
    const missingParams = [];
    if (!urlType) missingParams.push('urlType');
    if (!bucketName) missingParams.push('bucket');
    if (!key) missingParams.push('key');
      return apiResponse(HttpStatus.InternalServerError,`${MISSING_PARAMETERS_ERROR} ${missingParams.join(', ')}`)
    };

}

