import Widget from './widget';

/**
 * Class representing a slot
 *
 * Each slot has a set of widgets as well as rules which
 * are registered on the dashboard, these rules define where and how
 * the slot will be rendered in the client's website.
 */
export default class Slot {
  /**
   * Slot Constructor
   *
   * @param {object} slot - The slot data
   * @param {string} slot.slotId - The slot's unique identifier.
   * @param {Widget[]} slot.widgets - An array of Widget objects.
   * @param {object} injectionRules - Rules used to render the slot.
   * @param {object} themes - An object containing the themes returned from the API.
   * @param {function} productFactory - A custom callback to instantiate product
   * objects, it receives two parameters, product and widget and must return an
   * instance of a class that represents the product.
   */
  constructor({ slotId, widgets, injectionRules }, themes = {}, productFactory) {
    /**
     * The slot's unique identifier, this ID is registered and can be changed on the dashboard
     * page. Ex: top, middle, bottom.
     * @type {string}
     */
    this.slotId = slotId;

    /**
     * An array of Widget objects. For more info on widgets see {@link Widget}.
     * @type {Widget[]}
     */
    this.widgets = (widgets || []).map(
      (widget) => new Widget(widget, themes[widget.themeId], productFactory),
    );
    /**
     * Rules used to render the slot. These rules are registered
     * and can be changed on the dashboard.
     * @type {Object}
     */
    this.injectionRules = injectionRules;
  }
}
