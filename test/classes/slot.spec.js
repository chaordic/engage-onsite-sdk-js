import { Slot } from '../../src/classes/slot';
import { Widget } from '../../src/classes/widget';

describe('Slot class', function () {
  describe('new Slot instance', function () {
    it('should have the id passed on constructor', function () {
      const mockData = {
        slotId: 'top',
        widgets: [
          { id: 'some-id-1' },
          { id: 'some-id-2' },
        ],
      };

      const newSlot = new Slot(mockData);

      expect(newSlot.slotId).to.equal(mockData.slotId);
      newSlot.widgets.forEach((widget) => {
        expect(widget).to.be.an.instanceOf(Widget);
      });
    });
  });
});
