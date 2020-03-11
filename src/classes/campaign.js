import { refresh } from '../facades/pages';

export class Campaign {
  constructor({
    index,
    campaignId,
    label,
    selected,
    url,
    callback,
  }) {
    this.index = index;
    this.campaignId = campaignId;
    this.label = label;
    this.selected = selected;
    this.url = url;
    this.initialize = callback;
  }

  async select() {
    const data = await refresh(this.url);

    if (typeof this.initialize === 'function') {
      this.initialize(data);
    }
  }
}
