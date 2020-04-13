import { RequestInterceptor, HandlerInput } from 'ask-sdk-core';

class RequestLoggingInterceptor implements RequestInterceptor {
    process = (handlerInput: HandlerInput) => new Promise<void>((resolve, reject) => {
      // eslint-disable-next-line no-console
      console.log(`Incoming request:\n${JSON.stringify(handlerInput.requestEnvelope.request)}`);
      resolve();
    })
}

export default RequestLoggingInterceptor;
