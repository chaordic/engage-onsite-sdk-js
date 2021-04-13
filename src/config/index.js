import development from './environment/development.json';
import production from './environment/production.json';
import staging from './environment/staging.json';
import common from './environment/common.json';

/**
 * Creates a copy of the common to replace only the
 * settings of each env above the common ones.
*/
const developmentEnv = Object.assign({}, common);
const productionEnv = Object.assign({}, common);
const stagingEnv = Object.assign({}, common);

/**
 * Set a different environment to get request at server staging or development.
 * 
 * @param {string} env - Environment to set different url's get request.
 */
function getBaseUrlByEnv(env) {
  if (env === 'stg') {
    return staging.onsite.baseURL;
  } else if (env === 'dev') {
    return development.onsite.baseURL;
  }
  return production.onsite.baseURL;
}

// Merge common configs to three environments.
Object.assign(developmentEnv, development);
Object.assign(productionEnv, production);
Object.assign(stagingEnv, staging);

export default {
  development: developmentEnv,
  production: productionEnv,
  staging: stagingEnv,
  getBaseUrlByEnv
}
