import config from './config.json';
import {
  getProductsRecommendations as getRecommendations,
} from './facades/recsApiFacade';

export const validateProductsRecommendationsParams = ({
  apiKey = '',
  secretKey = '',
  type = '',
  productId = [],
  categoryId = [],
  tagId = [],
  deviceId = '',
  userId = '',
  productFormat = 'compact',
  useBoughtProducts = false,
  useCartProducts = false,
  useVisitedProducts = false,
  size = 20,
  salesChannel = '',
}) => {
  if (!apiKey || typeof apiKey !== 'string') {
    throw new Error('apiKey is invalid');
  }

  if (!secretKey || typeof secretKey !== 'string') {
    throw new Error('secretKey is invalid');
  }

  if (!type || typeof type !== 'string') {
    throw new Error('type is invalid');
  }

  if (productId !== undefined && !Array.isArray(productId)) {
    throw new Error('productId is invalid');
  }

  if (categoryId !== undefined && !Array.isArray(categoryId)) {
    throw new Error('categoryId is invalid');
  }

  if (tagId !== undefined && !Array.isArray(tagId)) {
    throw new Error('tagId is invalid');
  }

  if (deviceId !== undefined && typeof deviceId !== 'string') {
    throw new Error('deviceId is invalid');
  }

  if (userId !== undefined && typeof userId !== 'string') {
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

  if (useBoughtProducts !== undefined && typeof useBoughtProducts !== 'boolean') {
    throw new Error('useBoughtProducts is invalid');
  }

  if (useCartProducts !== undefined && typeof useCartProducts !== 'boolean') {
    throw new Error('useCartProducts is invalid');
  }

  if (useVisitedProducts !== undefined && typeof useVisitedProducts !== 'boolean') {
    throw new Error('useVisitedProducts is invalid');
  }

  if (size !== undefined && !Number.isInteger(size)) {
    throw new Error('size is invalid');
  }

  if (salesChannel !== undefined && typeof salesChannel !== 'string') {
    throw new Error('salesChannel is invalid');
  }
};

export const getProductsRecommendations = async (params) => {
  validateProductsRecommendationsParams(params);
  return getRecommendations(params);
};
