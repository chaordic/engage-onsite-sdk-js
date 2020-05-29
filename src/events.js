import { send } from './facades/events';

export default {
  sendEvent: function sendEvent(url) {
    send(url);
  },
};
