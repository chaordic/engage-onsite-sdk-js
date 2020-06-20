import Product from '../../src/classes/product';

describe('Product class', function () {
  const sandbox = sinon.createSandbox();
  let mockProduct;

  beforeEach(function () {
    mockProduct = {
      id: 'some-product-1',
      name: 'Sample product',
      price: 199.9,
      oldPrice: 189.9,
      url: '//sample.com/product-1',
      images: {
        default: '//images.sample.com/some-product-1.jpg',
      },
      brand: 'sample',
      installments: {
        count: 10,
        price: 19.99,
      },
      status: 'available',
      categories: [
        {
          id: '123',
          name: 'some-category',
          parents: [],
        },
      ],
      tags: [],
      details: {},
      skus: [{
        status: 'available',
        sku: '456',
      }],
      clickUrl: '/v1/events/click?something',
    };
  });

  afterEach(function () {
    sandbox.restore();
  });

  describe('new Product instance', function () {
    it('should have all properties passed in the constructor', function () {
      const someProduct = new Product(mockProduct);

      Object.keys(mockProduct).forEach((key) => {
        expect(someProduct[key]).to.deep.equal(mockProduct[key]);
      });
    });
  });

  describe('sendClickEvent', function () {
    it('should call send with the url property');
  });
});
