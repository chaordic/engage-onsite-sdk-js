import { refresh } from '../facades/pages';

/**
 * Class representing a Campaign
 *
 * In the context of a push widget, a campaign corresponds to an item
 * on the widget's menu. Each campaign has a set of recommendations that
 * will be shown on the parent widget at a given moment.
 */
export default class Campaign {
  /** Campaign Constructor
   *
   * @param {object} data - Campaign data.
   * @param {number} data.index - The index of the campaign in the menu.
   * @param {string} data.campaignId - The campaign unique identifier.
   * @param {string} data.label - The campaign label.
   * @param {boolean} data.selected - Indicates that the campaign is the currently selected
   * option in the menu. In other words this is the option being shown on the widget.
   * @param {string} data.url - Url for making the request to get the campaign recommendations.
   * @param {function} data.callback - Callback to execute when data is returned from the select
   * method.
   */
  constructor({
    index,
    campaignId,
    label,
    selected,
    url,
    callback,
  }) {
    /**
     * The index of the campaign in the menu.
     * @type {Number}
     */
    this.index = index;

    /**
     * The campaign unique identifier.
     * @type {string}
     */
    this.campaignId = campaignId;

    /**
     * The campaign label, this label is registered and can be changed
     * on the dashboard.
     * @type {string}
     */
    this.label = label;

    /**
     * Indicates that the campaign is the currently selected option in the menu. In other
     * words this is the option being shown on the widget.
     * @type {boolean}
     */
    this.selected = selected;

    /**
     * Url for making the request to get the campaign recommendations. The method
     * select should be preferred.
     * @type {string}
     */
    this.url = url;

    /**
     * Callback to execute when data is returned from the select method.
     * @type {function}
     */
    this.initialize = callback;
  }

  /**
   * Marks this item as the selected option in the menu
   * and refreshes the parent widget with the new data.
   * @returns {void}
   */
  async select() {
    const data = await refresh(this.url);

    if (typeof this.initialize === 'function') {
      this.initialize(data);
    }
  }
}
