import { APIGatewayProxyResult } from "aws-lambda/trigger/api-gateway-proxy";

export const apiResponse = (code: number, message: string):APIGatewayProxyResult => {
    return {
        statusCode: code,
        body: JSON.stringify({ message })
    };
};

