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

const { pages } = engageOnsiteSdkJs;

pages.getRecommendations({...});
```

- es6 style
```javascript
import { pages } from '@linx-impulse/engage-onsite-sdk-js';

pages.getRecommendations({...});
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

  engageOnsiteSdkJs.pages.getRecommendations({...});
</script>
```

### Release conventions
When releasing a new version of this sofware, we should follow the standards described in https://semver.org/

The commands below already follow those guidelines so you should just run:

```
npm run release
```

or

```
yarn release
```

In case of a prerelease version. We can use the optional parameter:

```
--prerelease [alpha|beta|rc]
```

When deciding the prerelease tag, we should follow the guidelines described in https://www.drupal.org/node/467020
