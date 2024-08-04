// handler.test.ts
import { APIGatewayProxyResult } from 'aws-lambda';
import { generateUploadURL, generateDownloadURL } from '../src/service/s3-client';
import { ApiRequestEvent } from '../src/model/api-request-event';
import { apiResponse } from '../src/model/api-reponse';
import { HttpStatus } from '../src/model/http-status-codes';
import { handler, getUploadURL, getDownloadURL, UNKNOWN_REQUEST_ERROR, UNKNOWN_URL_UPLOAD_ERROR, UNKNOWN_URL_DOWNLOAD_ERROR, DEAFULT_EXPIRES_IN, URL_TYPES, BAD_URL_TYPE_RESPONSE, BAD_UPLOAD_URL_RESPONSE, BAD_DOWNLOAD_URL_RESPONSE } from '../src/handler';
import {API_UPLOAD_REQUEST_MOCK,API_DOWNLOAD_REQUEST_MOCK,API_BAD_BUCKET_REQUEST_MOCK,API_BAD_KEY_REQUEST_MOCK,API_BAD_URLTYPE__REQUEST_MOCK} from '../test/data/request/url-requests'
import {API_REPONSE_BAD_URL_, API_RESPONSE_SUCCESS_DOWNLOAD, API_RESPONSE_SUCCESS_UPLOAD, DOWNLOAD_URL_MOCK, UPLOAD_URL_MOCK} from '../test/data/response/api-mock-responses'



jest.mock('../src/service/s3-client', () => ({
  generateUploadURL: jest.fn(),
  generateDownloadURL: jest.fn(),
}));

describe('Handler', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });




  test('should return upload URL', async () => {

    // ARRANGE 
    (generateUploadURL as jest.Mock).mockResolvedValue(UPLOAD_URL_MOCK);

    // ACT 
    const result = await handler(API_UPLOAD_REQUEST_MOCK);

    // ASSERT 
    expect(result).toStrictEqual(API_RESPONSE_SUCCESS_UPLOAD);

  });

  test('should return donload URL', async () => {

    // ARRANGE 
    (generateDownloadURL as jest.Mock).mockResolvedValue(DOWNLOAD_URL_MOCK);

    // ACT 
    const result = await handler(API_DOWNLOAD_REQUEST_MOCK);
    
    // ASSERT 
    expect(result).toStrictEqual(API_RESPONSE_SUCCESS_DOWNLOAD);

  });

  test('should return unknown request error for invalid urlType', async () => {

    const result = await handler(API_BAD_URLTYPE__REQUEST_MOCK);
    expect(result).toStrictEqual(BAD_URL_TYPE_RESPONSE);
  });

  test('should handle upload URL generation error', async () => {
    const mockError = new Error('Upload URL generation error');
    (generateUploadURL as jest.Mock).mockRejectedValue(BAD_UPLOAD_URL_RESPONSE);

    const result = await getUploadURL('test-bucket', 'test-key', DEAFULT_EXPIRES_IN);
    expect(result).toStrictEqual(BAD_UPLOAD_URL_RESPONSE);
  });

  test('should handle download URL generation error', async () => {
    const mockError = new Error('Upload URL generation error');
    (generateDownloadURL as jest.Mock).mockRejectedValue(BAD_DOWNLOAD_URL_RESPONSE);

    const result = await getDownloadURL('test-bucket', 'test-key', DEAFULT_EXPIRES_IN);
    expect(result).toStrictEqual(BAD_DOWNLOAD_URL_RESPONSE);
  });


});
