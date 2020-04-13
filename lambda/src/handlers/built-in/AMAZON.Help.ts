import { HandlerInput, RequestHandler } from 'ask-sdk-core';

class BuiltinAmazonHelpHandler implements RequestHandler {
    canHandle = (handlerInput: HandlerInput) => {
      const { request } = handlerInput.requestEnvelope;
      return request.type === 'IntentRequest' && request.intent.name === 'AMAZON.HelpIntent';
    }

    handle = (handlerInput: HandlerInput) => {
      const speakOutput = 'You can say hello to me! How can I help?';

      return handlerInput.responseBuilder
        .speak(speakOutput)
        .reprompt(speakOutput)
        .getResponse();
    }
}

export default BuiltinAmazonHelpHandler;
