import { HandlerInput, RequestHandler } from 'ask-sdk-core';

class HelloWorldHandler implements RequestHandler {
    canHandle = (handlerInput: HandlerInput) => {
      const { request } = handlerInput.requestEnvelope;
      return request.type === 'IntentRequest' && request.intent.name === 'HelloWorldIntent';
    }

    handle = (handlerInput: HandlerInput) => {
      const speechText = 'Hello World!';

      return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard('Hello World', speechText)
        .getResponse();
    }
}

export default HelloWorldHandler;
