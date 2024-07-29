const handler = require('../dist/handler.js')
const MOCK_APPSYNC_EVENT = require('../test/data/appsync-event-mock.json')



// Define a sample context object
const context = {
    functionName: 'localTestFunction',
    functionVersion: '1',
    invokedFunctionArn: 'arn:aws:lambda:local:123456789012:function:localTestFunction',
    memoryLimitInMB: '128',
    awsRequestId: 'local-aws-request-id',
    logGroupName: '/aws/lambda/localTestFunction',
    logStreamName: 'local-log-stream',
    getRemainingTimeInMillis: () => 3000,
    done: (err, res) => {
        console.log('Lambda function done. Error:', err, 'Result:', res);
    }
};

handler.handler(MOCK_APPSYNC_EVENT, context)
.then(response => {
    console.log('Lambda function response:', response);
})
.catch(error => {
    console.error('Lambda function error:', error);
});