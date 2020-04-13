import { HandlerInput, RequestHandler } from 'ask-sdk-core';

class BuiltinAmazonStopHandler implements RequestHandler {
    canHandle = (handlerInput: HandlerInput) => {
      const { request } = handlerInput.requestEnvelope;
      return request.type === 'IntentRequest' && request.intent.name === 'AMAZON.StopIntent';
    }

    handle = (handlerInput: HandlerInput) => {
      const speakOutput = 'Goodbye!';
      return handlerInput.responseBuilder
        .speak(speakOutput)
        .getResponse();
    }
}

export default BuiltinAmazonStopHandler;
