import { handler,HELLO_MESSAGE } from '../src/handler';
import { APIGatewayProxyEvent } from 'aws-lambda';
import MOCK_APPSYNC_EVENT from './data/appsync-event-mock.json';

test('handler returns a 200 status code with the expected message', async () => {
  const event = {} as APIGatewayProxyEvent;
  const result = await handler(event);
  expect(result.statusCode).toBe(200);
  expect(JSON.parse(result.body)).toEqual({ message: HELLO_MESSAGE});
});
