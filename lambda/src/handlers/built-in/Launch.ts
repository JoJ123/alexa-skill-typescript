import { HandlerInput, RequestHandler } from 'ask-sdk-core';

class LaunchHandler implements RequestHandler {
  canHandle = (handlerInput: HandlerInput) => {
    const { request } = handlerInput.requestEnvelope;
    return request.type === 'LaunchRequest';
  }

  handle = (handlerInput: HandlerInput) => {
    const speechText = 'Welcome to the Alexa Skills Kit, you can say hello!';

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard('Hello World', speechText)
      .getResponse();
  }
}

export default LaunchHandler;
