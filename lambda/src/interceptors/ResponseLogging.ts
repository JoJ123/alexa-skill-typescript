import { HandlerInput, ResponseInterceptor } from 'ask-sdk-core';

class ResponseLoggingInterceptor implements ResponseInterceptor {
    process = (handlerInput: HandlerInput) => new Promise<void>((resolve, reject) => {
      // eslint-disable-next-line no-console
      console.log(`Outgoing response:\n${JSON.stringify(handlerInput.requestEnvelope.request)}`);
      resolve();
    })
}

export default ResponseLoggingInterceptor;
