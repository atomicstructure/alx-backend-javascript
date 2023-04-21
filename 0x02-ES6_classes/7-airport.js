export default class Airport extends Building {
  constructor() {
    super(100000);
    this._hangars = [];
  }

  get hangars() {
    return this._hangars;
  }

  set hangars(hangar) {
    this._hangars.push(hangar);
  }

  evacuationWarningMessage() {
    return 'Evacuate immediately. The airport is on fire.';
  }
}