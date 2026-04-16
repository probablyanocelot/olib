class BuildObject {
  constructor() {
    this.obj = {};
  }
  setProperty(key, value) {
    this.obj[key] = value;
  }
  getProperty(key) {
    return this.obj[key];
  }
  getObj() {
    return this.obj;
  }
}

export default BuildObject;
