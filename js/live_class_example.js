function windowConfig() {
  if (typeof require !== "function") performance_trick();
  try {
    const { webFrame } = require("electron");
    function zoom(zoomFactor) {
      webFrame.setZoomFactor(zoomFactor);
    }
    zoom(0.5);
  } catch (e) {
    console.log(e);
  }
}

function createLiveClass(source) {
  return new Proxy(source, {
    get(target, prop) {
      return target[prop];
    },
    set(target, prop, value) {
      target[prop] = value;
      return true;
    },
  });
}

class Bot {
  constructor(data = parent.character) {
    this._data = data;
  }
  get data() {
    return this._data;
  }

  get x() {
    return this.data?.x;
  }

  init() {}
  skills() {
    let skillsArray = [];
    Object.keys(G.skills).forEach((skill) => {
      if (skill?.class === character.ctype) skillsArray.push(skill);
    });

    return skillsArray;
  }
}

windowConfig();
let bot = new Bot();
bot.init();
