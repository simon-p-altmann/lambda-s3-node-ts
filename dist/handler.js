"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.HELLO_MESSAGE = void 0;
exports.HELLO_MESSAGE = 'Hello Chucky !!!';
const handler = async (event) => {
    const eventPretty = JSON.stringify(event);
    console.log('event passed in ' + eventPretty + '\n');
    return {
        statusCode: 200,
        body: JSON.stringify({ message: exports.HELLO_MESSAGE }),
    };
};
exports.handler = handler;
