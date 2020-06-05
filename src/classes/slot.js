import { Widget } from './widget';

/**
 * Class representing a slot
 *
 * Each slot has a set of widgets as well as rules which
 * are registered on the dashboard, these rules define where and how
 * the slot will be rendered in the client's website.
 */
export class Slot {
  /**
   * Slot Constructor
   *
   * @param {object} slot - The slot data
   * @param {string} slot.slotId - The slot's unique identifier.
   * @param {Widget[]} slot.widgets - An array of Widget objects.
   * @param {object} injectionRules - Rules used to render the slot.
   * @param {object} themes - An object containing the themes returned from the API.
   * @param {Class} ProductClass - A custom product class to be used in the
   * proprerties that hold product information, defaults to Product.
   */
  constructor({ slotId, widgets, injectionRules }, themes = {}, ProductClass) {
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
      (widget) => new Widget(widget, themes[widget.themeId], ProductClass),
    );
    /**
     * Rules used to render the slot. These rules are registered
     * and can be changed on the dashboard.
     * @type {Object}
     */
    this.injectionRules = injectionRules;
  }
}
