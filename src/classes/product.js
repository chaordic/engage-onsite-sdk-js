import { send } from '../facades/events';

/**
 * Class representing a product
 *
 * This class is used to represent products in both reference and recommendation
 * contexts, the properties accessible depend on the parameter productFormat
 * that was passed when calling the getRecommendation function. The id property
 * and the sendClickEvent method will always be available.
 */
export class Product {
  /**
   * Product constructor
   *
   * @param {object} data - Product data.
   * @param {string} data.id - The product's unique identifier.
   */
  constructor(data = {}) {
    /**
     * The product's unique identifier.
     * @type {string}
     */
    this.id = data.id;

    Object.keys(data).forEach((key) => {
      if (key !== 'id') {
        this[key] = data[key];
      }
    });
  }

  /**
   * Sends a click event.
   * @returns {void}
   */
  sendClickEvent() {
    send(this.clickUrl);
  }
}
