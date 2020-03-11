import { send } from '../facades/events';

export class Product {
  constructor(data = {}) {
    Object.keys(data).forEach((key) => {
      this[key] = data[key];
    });
  }

  sendClickEvent() {
    send(this.clickUrl);
  }
}
