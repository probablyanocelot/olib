class AnObj {
  constructor(args) {
    this.args = args;
    this.obj = {};
  }
  set(key, value) {
    this.obj[key] = value;
  }
  get(key) {
    return this.obj[key];
  }
  _return() {
    return this.obj;
  }
}
// orig name: create_live_class.js

function LiveClass(source) {
  return new Proxy(source, {
    get(target, prop, receiver) {
      if (prop === "set") {
        return (key, value) => {
          target[key] = value;
          return true;
        };
      }
      if (prop === "get") {
        return (key) => target[key];
      }
      return Reflect.get(target, prop, receiver);
    },
    // set(target, prop, value) {
    //   target[prop] = value;
    //   return true;
    // },
  });
}

module.exports = { LiveClass, AnObj };
