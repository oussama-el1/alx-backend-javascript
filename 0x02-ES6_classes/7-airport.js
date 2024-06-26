export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  set name(newname) {
    if (typeof newname === 'string') {
      this._name = newname;
    }
  }

  get name() {
    return this._name;
  }

  set code(newcode) {
    if (typeof newcode === 'string') {
      this._code = newcode;
    }
  }

  get code() {
    return this._code;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
