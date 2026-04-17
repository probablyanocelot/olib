const { LiveClass } = require("../obj/index.js");

const plane = {
  bounds: {
    x: [-100, 100],
    y: [-100, 100],
  },
};

const Grapher = LiveClass(plane);

Grapher.set("points", []);

Grapher.set("isInBounds", function (x, y) {
  const xInBounds = this.bounds.x[0] <= x && x <= this.bounds.x[1];
  const yInBounds = this.bounds.y[0] <= y && y <= this.bounds.y[1];
  return { x: xInBounds, y: yInBounds };
});

Grapher.set("plot", function (x, y) {
  const result = { pass: false };
  if (!this.isInBounds(x, y).x || !this.isInBounds(x, y).y) {
    result.x = this.isInBounds(x, y).x;
    result.y = this.isInBounds(x, y).y;
    return result;
  }

  result.pass = true;
  result.x = x;
  result.y = y;
  const point = [x, y];
  this.points.push(point);
  return result;
});
console.log(Grapher.plot(850, 750));
console.log(`Grapher.points: ${JSON.stringify(Grapher.points)}`);
console.log(`Grapher object: ${JSON.stringify(Grapher)}`);
module.exports = { Grapher };
