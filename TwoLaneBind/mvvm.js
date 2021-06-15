class MVVM {
  constructor(el, data) {
    this.el = document.querySelector(el);
    this._data = data;

    this.initData();
  }

  init() {
    const _this = this;
    console.log(this);
    this.data = {}
    for (let key in this._data) {
      Object.defineProperty(this._data, key, {
        get() {
          return this._data[key];
        },
        set() {
          _this._data[key] = newValue;
        }
      })
    }
    console.log(this.data);
  }
}