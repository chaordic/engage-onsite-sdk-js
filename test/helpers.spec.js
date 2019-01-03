import {
  formatTags,
  getFirstCategoryChild,
  formatCategories,
} from '../src/helpers';

describe('helpers', () => {
  describe('formatTags', () => {
    describe('when is passed a list of tags', () => {
      it('should return the same list when is a just list of string', () => {
        const tags = ['tag1', 'tag2'];
        const result = formatTags([...tags]);
        expect(result).to.deep.equal(tags);
      });

      it('should return a list of string parsed from list of object', () => {
        const tags = [{ id: 'tag1' }, { id: 'tag2' }];
        const result = formatTags([...tags]);
        expect(result).to.deep.equal(['tag1', 'tag2']);
      });
    });
  });

  describe('getFirstCategoryChild', () => {
    describe('when looking for first child in list o categories', () => {
      it('should return a object that the item is in list of parents', () => {
        const categories = [
          {
            id: 'cat1',
          },
          {
            id: 'cat2',
            parents: ['cat1'],
          },
        ];
        const item = {
          id: 'cat1',
        };

        const result = getFirstCategoryChild(categories, item);
        expect(result).to.deep.equal({
          id: 'cat2',
          parents: ['cat1'],
        });
      });

      it('should not return a object that the item is in list of parents', () => {
        const categories = [
          {
            id: 'cat1',
          },
          {
            id: 'cat2',
            parents: ['cat1'],
          },
        ];
        const item = {
          id: 'cat3',
        };

        const result = getFirstCategoryChild(categories, item);
        expect(result).to.undefined;
      });
    });
  });

  describe('formatCategories', () => {
    describe('when is passed a list of categories', () => {
      it('should return the same list when is a just list of string', () => {
        const categories = ['cat1', 'cat1'];
        const result = formatCategories([...categories]);
        expect(result).to.deep.equal(categories);
      });

      it('should return a list of string when is a list of object', () => {
        const categories = [
          {
            id: 'cat1',
          },
          {
            id: 'cat2',
          },
        ];
        const result = formatCategories([...categories]);
        expect(result).to.deep.equal(['cat1']);
      });

      it('should return a list of string when is a list of object and having a parents props', () => {
        const categories = [
          {
            id: 'cat1',
          },
          {
            id: 'cat2',
            parents: ['cat1'],
          },
        ];
        const result = formatCategories([...categories]);
        expect(result).to.deep.equal(['cat1', 'cat2']);
      });
    });
  });
});
