import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import {generateUploadURL,generateDownloadURL} from './service/s3-client'
export const HELLO_MESSAGE = 'Hello Chucky !!!';

export enum URL_TYPES{
  UPLOAD ="UPLOAD",
  DOWNLOAD = "DOWNLOAD"
}

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  
  

  const eventPretty = JSON.stringify(event);
  console.log('event passed in ' + eventPretty + '\n');


  const urlType = event?.arguments?.urlType || 'unknown';
  const bucketName = 'timmy'
  const key = 'a-key'
  const expiresIn = 5000;

  switch(urlType)
  {

    case URL_TYPES.UPLOAD:
      return await getUploadURL(bucketName,key,expiresIn);
    case URL_TYPES.DOWNLOAD:
      return await getDownloadURL(bucketName,key,expiresIn);
    default :
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "UNKNOW REQUEST"}),
      };




  }

};

export const getUploadURL = async (bucketName:string, key:string, expiresIn:number) => {
  console.log('getUploadURL')
  try {
  
    const url = await generateUploadURL(bucketName, key, expiresIn );
    return {
      statusCode: 200,
      body: JSON.stringify({ "url": url}),
    };
  } catch (error) {
    console.error("Error generating upload URL:", error);
    console.error("error message " + error?.message)
    return {
      statusCode: 500,
      body: JSON.stringify({ "error": "Error generating upload URL",
       
      }),
    };

  }
};

export const getDownloadURL = async (bucketName:string, key:string, expiresIn:number) => {
  console.log('getDownloadURL')
  try {

    const url = await generateDownloadURL(bucketName, key, expiresIn );
    return {
      statusCode: 200,
      body: JSON.stringify({ "url": url}),
    };
  } catch (error) {
    console.error("Error generating download URL:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ "error": "Error generating download URL",
       
      }),
    };

  }
};

