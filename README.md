# Linx Onsite SDK
SDK to be used as interface over onsite api in client side application that use javascript.

## Installation

### npm:
```bash
$ npm install --save @linx-impulse/engage-onsite-sdk-js
```
### yarn:
```bash
$ yarn add @linx-impulse/engage-onsite-sdk-js
```

Both above can be used as follow
- node
```javascript
const engageOnsiteSdkJs = require('@linx-impulse/engage-onsite-sdk-js');

engageOnsiteSdkJs.validatePageRecommendationsParams({...});
```

- es6 style
```javascript
import { validatePageRecommendationsParams } from '@linx-impulse/engage-onsite-sdk-js';

validatePageRecommendationsParams({...});
```

### CDN:
```html
<script src="https://cdn.jsdelivr.net/npm/@linx-impulse/engage-onsite-sdk-js@0.0.0-alpha.7/dist/engage-onsite-sdk-js.js"></script>
```
> Notice! it is recommended to use the latest version.
> https://www.npmjs.com/package/@linx-impulse/engage-onsite-sdk-js


It will create a global object that can be used as follow:
```html
<script>
  var engageOnsiteSdk = window.linx.engageOnsiteSdk;

  engageOnsiteSdkJs.validatePageRecommendationsParams({...});
</script>
```

## Deploy
The "**deploy**" work together with "**npm**", then you need first setup npm user to publish at the npm repository.

- First, start to login with npm command.
```bash
$ npm login
```
This command will require a "**user**", "**password**" and "**email***". To work together with the **repository** is necessary that your user been a "**@linx-impulse**" member at the npm.
- Second, if you are already logged in with npm, then you do not need to execute the command above

After you setup, or not, your npm user, you need to execute the command below to run the deploy from your machine.
```bash
$ npx run deploy
```
This command will build your project and will generate two files that will be uploaded to npm repository, the first one is the file tha will be used in a "**npm enviroment**", that will be installed by npm in "**node_module**" folder and the second can be used direct from "CDN".
