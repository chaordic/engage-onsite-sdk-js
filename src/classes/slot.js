import { Widget } from './widget';

export class Slot {
  constructor({ slotId, widgets, injectionRules }, themes = {}, ProductClass) {
    this.slotId = slotId;
    this.widgets = (widgets || []).map(
      (widget) => new Widget(widget, themes[widget.themeId], ProductClass),
    );
    this.injectionRules = injectionRules;
  }
}
