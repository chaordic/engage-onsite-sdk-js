import helpers from '../helpers';

const { error } = console;

export async function send(url) {
  helpers.ajax({
    url,
    error: (err) => {
      error(err);
    },
  });
}
