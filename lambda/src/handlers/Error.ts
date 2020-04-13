import { ErrorHandler, HandlerInput } from 'ask-sdk-core';

class CustomErrorHandler implements ErrorHandler {
  canHandle = (handlerInput: HandlerInput) => true;

  handle = (handlerInput: HandlerInput, error: Error) => {
    const { request } = handlerInput.requestEnvelope;

    // eslint-disable-next-line no-console
    console.log(`Error handled: ${error.message}`);
    // eslint-disable-next-line no-console
    console.log(`Original Request was: ${JSON.stringify(request, null, 2)}`);

    return handlerInput.responseBuilder
      .speak('Sorry, I can not understand the command.  Please say again.')
      .reprompt('Sorry, I can not understand the command.  Please say again.')
      .getResponse();
  }
}

export default CustomErrorHandler;
