import config from '../config.json';

export function validate({
  apiKey,
  page,
  source,
  deviceId,
  url,
  categories = [],
  tags = [],
  productIds = [],
  userId,
  productFormat,
  showLayout,
  salesChannel,
  dummy = false,
  homologation = false,
  showOnlyAvailable = true,
}) {
  if (!apiKey || typeof apiKey !== 'string') {
    throw new Error('apiKey is invalid');
  }

  if (
    !page
    || typeof page !== 'string'
    || config.pageType.indexOf(page) === -1
  ) {
    throw new Error('page is invalid');
  }

  if (!source || typeof source !== 'string') {
    throw new Error('source is invalid');
  }

  if (typeof deviceId !== 'string') {
    throw new Error('deviceId is invalid');
  }

  if (url !== undefined && typeof url !== 'string') {
    throw new Error('url is invalid');
  }

  if (
    !Array.isArray(categories)
    || categories.filter((i) => (
      typeof i !== 'string'
    )).length
  ) {
    throw new Error('categories is invalid');
  }

  if (
    !Array.isArray(tags)
    || tags.filter((i) => (
      typeof i !== 'string'
    )).length
  ) {
    throw new Error('tags is invalid');
  }

  if (
    !Array.isArray(productIds)
    || productIds.filter((i) => typeof i !== 'string').length
  ) {
    throw new Error('productIds is invalid');
  }

  if (userId !== undefined && typeof userId !== 'string') {
    throw new Error('userId is invalid');
  }

  if (
    (productFormat !== undefined && typeof productFormat !== 'string')
    || (
      typeof productFormat === 'string'
      && productFormat.length
      && config.responseType.indexOf(productFormat) === -1
    )
  ) {
    throw new Error('productFormat is invalid');
  }

  if (showLayout !== undefined && typeof showLayout !== 'boolean') {
    throw new Error('showLayout is invalid');
  }

  if (salesChannel !== undefined && typeof salesChannel !== 'string') {
    throw new Error('salesChannel is invalid');
  }

  if (dummy !== undefined && typeof dummy !== 'boolean') {
    throw new Error('dummy is invalid');
  }

  if (homologation !== undefined && typeof homologation !== 'boolean') {
    throw new Error('homologation is invalid');
  }

  if (showOnlyAvailable !== undefined && typeof showOnlyAvailable !== 'boolean') {
    throw new Error('showOnlyAvailable is invalid');
  }
}
