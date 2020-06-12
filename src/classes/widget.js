import Campaign from './campaign';
import Product from './product';
import { refresh } from '../facades/pages';
import { send } from '../facades/events';

const { error } = console;

/**
 * Class representing a widget
 *
 * There are several types of widgets, some of them depend on a reference
 * others simply show products based on popularity, and so each widget
 * will have different attributes some of them exclusive to that specific
 * kind of widget.
 */
export default class Widget {
  /**
   * Widget Constructor
   *
   * @param {object} widget - The widget's data.
   * @param {string} widget.id - The widget's unique identifier.
   * @param {string} widget.algorithm - Algorithm used to generate recommendations.
   * @param {string} widget.feature - The type of widget. Ex: mostpopular, push, ultimatebuy.
   * @param {string} widget.title - The title of the widget.
   * @param {Product[]} widget.references - An array of reference products, for widgets that need a
   * reference such as similar items and frequently bought together.
   * @param {Product[]} widget.recommendations - An array of product recommendations.
   * @param {Campaign[]} widget.menu - An array of campaigns. Each campaign corresponds to one menu
   * item.
   * @param {string} widget.viewUrl - Url to send the widget's view event.
   * @param {string} widget.refreshReferenceUrl - Url to get a new reference product
   * and new recommendations, for widget's that use a reference product
   * @param {object} theme - The widget's theme.
   * @param {function} productFactory - A custom callback to instantiate product
   * objects, it receives two parameters, product and widget and must return an
   * instance of a class that represents the product, defaults to a function
   * that uses the {@link Product} class.
   */
  constructor({
    id = '',
    algorithm = '',
    feature = '',
    title = '',
    references = null,
    recommendations = [],
    menu,
    viewUrl = '',
    refreshReferenceUrl = '',
  }, theme = {}, productFactory = (data) => new Product(data)) {
    if (!id) {
      throw new Error('id is invalid');
    }

    if (!viewUrl) {
      throw new Error('viewUrl is invalid');
    }

    /**
     * The widget's unique identifier.
     * @type {string}
     */
    this.id = id;

    /**
     * Algorithm used to generate recommendations.
     * @type {string}
     */
    this.algorithm = algorithm;

    /**
     * The type of widget. Ex: mostpopular, push, ultimatebuy.
     * @type {string}
     */
    this.feature = feature;

    /**
     * The title of the widget. This title can be registered and changed
     * on the dashboard.
     * @type {string}
     */
    this.title = title;

    /**
     * Url to send the widget's view event. The method sendViewEvent should be
     * preferred.
     * @type {string}
     */
    this.viewUrl = viewUrl;

    /**
     * Url to get a new reference product and new recommendations, for widget's that
     * use a reference product. The method refreshReference should be preferred.
     * @type {string}
     */
    this.refreshReferenceUrl = refreshReferenceUrl;

    /**
     * An array of campaigns. Each campaign corresponds to one menu item,
     * this property is only available for some widgets of the 'push' type
     * and is `null` otherwise.
     * For more info on Campaigns see {@link Campaign}.
     * @type {Campaign[]}
     */
    this.menu = null;

    if (menu) {
      this.menu = (menu).map((item) => new Campaign(item));
    }

    /**
     * The widget theme, this property holds all layout
     * settings registered on the dashboard. If the parameter showLayout
     * was passed as false, this property will be unavailable.
     * @type {Object}
     */
    this.theme = theme;

    /**
     * An array of reference products, for widgets that need a reference such as
     * similar items and frequently bought together. Each product is of Product type unless
     * a custom class is passed. For more info
     * on Products see {@link Product}.
     * @type {Product[]}
     */
    this.references = null;

    if (references) {
      this.references = (references).map((product) => productFactory(product, this));
    }

    /**
     * An array of product recommendations. Each product is of Product type unless
     * a custom class is passed. For more info on Products
     * see {@link Product}.
     * @type {Product[]}
     */
    this.recommendations = (recommendations || []).map((product) => productFactory(product, this));

    /**
     * A custom callback to instantiate product
     * objects.
     * @type {function}
     */
    this.productFactory = productFactory;
  }

  /**
   * Sends a view event.
   * @returns {void}
   */
  sendViewEvent() {
    send(this.viewUrl);
  }

  /**
   * Gets new recommendations for the widget and updates it
   * with that new information, for widgets with a reference product
   * such as similar items and frequently bought together.
   * @returns {Widget}
   */
  async refreshReference() {
    try {
      const data = await refresh(this.refreshReferenceUrl);
      const refreshedWidget = new Widget(data, this.theme, this.productFactory);
      return refreshedWidget;
    } catch (err) {
      error(err);
      // return empty result when refresh fail or widget data is invalid
      return null;
    }
  }
}
