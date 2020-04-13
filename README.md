# Alexa Typescript Template
Boilerplate to start a typescript alexa skill with aws lambda.


# Preparation

 1. Setup a free aws developer account: [https://console.aws.amazon.com/](https://console.aws.amazon.com/)
 2. Setup a free alexa developer account: [https://developer.amazon.com/alexa/](https://developer.amazon.com/alexa/)

> **_Windows_** Execute the following with PowerShell
 
```
yarn global add ask-cli
```

> **_Windows_** If you face issues with the ask-cli check this issue: https://github.com/alexa/ask-cli/issues/59#issuecomment-595696297

[Init ask-cli](https://developer.amazon.com/de-DE/docs/alexa/smapi/quick-start-alexa-skills-kit-command-line-interface.html)


# Deploy the alexa skill
> **_Execute_** Root directory
```
yarn bundle
yarn deploy
```