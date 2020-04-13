
import { SkillBuilders } from 'ask-sdk-core';
import LaunchHandler from './handlers/built-in/Launch';
import HelloWorldHandler from './handlers/built-in/HelloWorld';
import RequestLoggingInterceptor from './interceptors/RequestLogging';
import ResponseLoggingInterceptor from './interceptors/ResponseLogging';
import CustomErrorHandler from './handlers/Error';
import BuiltinAmazonHelpHandler from './handlers/built-in/AMAZON.Help';
import BuiltinAmazonCancelHandler from './handlers/built-in/AMAZON.Cancel';
import BuiltinAmazonStopHandler from './handlers/built-in/AMAZON.Stop';

function buildLambdaSkill(): any {
  return SkillBuilders.custom()
    .addRequestHandlers(
      new LaunchHandler(),
      new HelloWorldHandler(),
      new BuiltinAmazonHelpHandler(),
      new BuiltinAmazonCancelHandler(),
      new BuiltinAmazonStopHandler(),
    )
    .addRequestInterceptors(
      new RequestLoggingInterceptor(),
    ).addResponseInterceptors(
      new ResponseLoggingInterceptor(),
    )
    .addErrorHandlers(
      new CustomErrorHandler(),
    )
    .lambda();
}

// eslint-disable-next-line import/prefer-default-export
export const handler = buildLambdaSkill();
