import development from './environment/development.json';
import production from './environment/production.json';
import staging from './environment/staging.json';
import common from './environment/common.json';

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

// Merge common configs to thrid environments.
Object.assign(development, common);
Object.assign(production, common);
Object.assign(staging, common);

export default {
  development,
  production,
  staging,
  getBaseUrlByEnv
}
