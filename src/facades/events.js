import helpers from '../helpers';

const { error } = console;

export async function send(url) {
  try {
    helpers.ajax({
      url,
    });
  } catch (err) {
    error(err);
  }
}
