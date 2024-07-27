import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export const HELLO_MESSAGE = 'Hello Chucky !!!';

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  
  
  const eventPretty = JSON.stringify(event);
  console.log('event passed in ' + eventPretty + '\n');
  
  return {
    statusCode: 200,
    body: JSON.stringify({ message: HELLO_MESSAGE}),
  };
};
