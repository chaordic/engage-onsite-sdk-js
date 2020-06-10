import helpers from '../helpers';

const { error } = console;

/**
 * Sends a GET request to a given url.
 *
 * @param {string} url - The url to use
 * in the request.
 */
export async function send(url) {
  try {
    helpers.ajax({
      url,
    });
  } catch (err) {
    error(err);
  }
}
