import development from './environment/development.json';
import production from './environment/production.json';
import staging from './environment/staging.json';

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

export default {
    development,
    production,
    staging,
    getBaseUrlByEnv
}