import { ajax } from '@linx-impulse/commons-js/http/ajax';

const { error } = console;

export async function send(url) {
  ajax({
    url,
    error: (err) => {
      error(err);
    },
  });
}
