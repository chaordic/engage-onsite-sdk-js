import { Campaign } from './campaign';
import { Product } from './product';
import { refresh } from '../facades/pages';
import { send } from '../facades/events';

export class Widget {
  constructor({
    id,
    algorithm,
    feature,
    title,
    references,
    recommendations = [],
    menu,
    viewUrl,
    refreshUrl,
  }, theme = {}, ProductClass = Product) {
    this.id = id;
    this.algorithm = algorithm;
    this.feature = feature;
    this.title = title;

    if (references) {
      this.references = (references).map((ref) => new ProductClass(ref));
    }

    this.recommendations = (recommendations).map((rec) => new ProductClass(rec));
    this.viewUrl = viewUrl;
    this.refreshUrl = refreshUrl;

    if (menu) {
      this.menu = (menu).map((item) => new Campaign(item));
    }

    if (ProductClass) {
      this.CustomProductClass = ProductClass;
    }

    this.theme = theme;
  }

  sendViewEvent() {
    send(this.viewUrl);
  }

  async refreshReference() {
    const data = await refresh(this.refreshReference);

    return new Widget(data, this.theme, this.CustomProductClass);
  }
}
