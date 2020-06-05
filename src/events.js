import { send } from './facades/events';

export default {
  /**
   * Sends a request to register an event.
   *
   * @example
   * const pageSchema = sendEvent({
   *  url: https://recs.chaordicsystems.com/v1/events/view/viewId?12345,
   * })
   *
   * @param {string} url - The request url of the event.
   */
  sendEvent: function sendEvent(url) {
    send(url);
  },
};
