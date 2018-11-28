import config from './config.json';
import {
  getPageRecommendations as getRecommendations,
} from './facades/recsApiFacade';

export const validatePageRecommendations = ({
  apiKey,
  secretKey,
  name,
  source,
  deviceId,
  url,
  categoryId = [],
  tagId = [],
  productId = [],
  userId,
  productFormat,
  salesChannel,
  dummy = false,
  homologation = false,
  showOnlyAvailable = true,
}) => {
  if (!apiKey || typeof apiKey !== 'string') {
    throw new Error('apiKey is invalid');
  }

  if (!secretKey || typeof secretKey !== 'string') {
    throw new Error('secretKey is invalid');
  }

  if (
    !name
    || typeof name !== 'string'
    || config.pageType.indexOf(name) === -1
  ) {
    throw new Error('name is invalid');
  }

  if (!source || typeof source !== 'string') {
    throw new Error('source is invalid');
  }

  if (!deviceId || typeof deviceId !== 'string') {
    throw new Error('deviceId is invalid');
  }

  if (typeof url !== 'string') {
    throw new Error('url is invalid');
  }

  if (
    !Array.isArray(categoryId)
    || categoryId.filter(i => typeof i !== 'string').length
  ) {
    throw new Error('categoryId is invalid');
  }

  if (
    !Array.isArray(tagId)
    || tagId.filter(i => typeof i !== 'string').length
  ) {
    throw new Error('tagId is invalid');
  }

  if (
    !Array.isArray(productId)
    || productId.filter(i => typeof i !== 'string').length
  ) {
    throw new Error('productId is invalid');
  }

  if (typeof userId !== 'string') {
    throw new Error('userId is invalid');
  }

  if (
    typeof productFormat !== 'string'
    || (
      typeof productFormat === 'string'
      && productFormat.length
      && config.responseType.indexOf(productFormat) === -1
    )
  ) {
    throw new Error('productFormat is invalid');
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
};

export const getPageRecommendations = async (params) => {
  validatePageRecommendations(params);
  return getRecommendations(params);
};
