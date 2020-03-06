import { Widget } from '../../src/classes/widget';
import { Product } from '../../src/classes/product';
import { Campaign } from '../../src/classes/campaign';

describe('Widget class', function () {
  const sandbox = sinon.createSandbox();
  let mockData;

  beforeEach(function () {
    mockData = {
      id: 'some-widget-id',
      algorithm: 'some-algref',
      feature: 'historypersonalized',
      title: 'The hottest of the hottest',
      references: [
        { id: 'some-product-1' },
      ],
      recommendations: [
        { id: 'some-product-2' },
        { id: 'some-product-3' },
      ],
      menu: [
        {
          index: 0,
          campaignId: 'campign-01',
          label: 'campign 1',
          selected: true,
          url: '/v1/something',
        },
        {
          index: 1,
          campaignId: 'campign-02',
          label: 'campign 2',
          selected: true,
          url: '/v1/something',
        },
      ],
      viewUrl: '/v1/events/view?something',
      refreshUrl: '/v1/widgets/?something',
      themeId: 'some-theme-1',
    };
  });

  afterEach(function () {
    sandbox.restore();
  });

  describe('new Widget instance', function () {
    it('should set all data', function () {
      const fields = [
        'id',
        'algorithm',
        'feature',
        'title',
        'viewUrl',
        'refreshUrl',
      ];

      const someWidget = new Widget(mockData);

      fields.forEach((field) => {
        expect(someWidget[field] === mockData[field]);
      });
    });

    it('should map references to an array of Reference objects', function () {
      const someWidget = new Widget(mockData);

      someWidget.references.forEach((reference) => {
        expect(reference).to.be.an.instanceOf(Product);
      });
    });

    it('should map recommendations to an array of Recommendation objects', function () {
      const someWidget = new Widget(mockData);

      someWidget.recommendations.forEach((recommendation) => {
        expect(recommendation).to.be.an.instanceOf(Product);
      });
    });

    it('should map menu to an array of Widget objects', function () {
      const someWidget = new Widget(mockData);

      someWidget.menu.forEach((item) => {
        expect(item).to.be.an.instanceOf(Campaign);
      });
    });

    it('should set the theme', function () {
      const mockTheme = {
        configs: {
          someConfig: 'some-value',
        },
        created: '2019-12-02',
      };

      const someWidget = new Widget(mockData, mockTheme);

      expect(someWidget).to.be.an.instanceOf(Widget);
      expect(someWidget.theme).to.deep.equal(mockTheme);
    });
  });

  describe('sendViewEvent', function () {
    it('should call send with the view url');
  });

  describe('refreshReference', function () {
    it('should call refresh with the refreshUrl');

    it('should call initialize with the returned data');
  });
});
