// const { clientConfig } = require("./config");



// module.exports = {
//   clientConfig,
// };

// const { filterBy } = require("./fns");
/**
 * Filters an object based on a predicate function.
 * @param {Object} obj - The object to filter.
 * @param {Function} predicate - A function that takes an item and its key, and returns a boolean.
 * @return {Array} An array of objects with the key and item properties that satisfy the predicate.
 * @example
 * mySkills = filterBy(G.skills, skill => skill?.class?.includes('merchant'))
 * console.log(mySkills)
 */
function filterBy(obj, predicate) {
  return Object.entries(obj)
    .filter(([key, item]) => predicate(item, key))
    .map(([key, item]) => ({ key, ...item }));
}

// module.exports = {
//   filterBy,
// };

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

// init
clientConfig();
let bot = createLiveClass(parent.character);
bot.skills = filterBy(G.skills, (skill) => skill?.class?.includes(bot.ctype));

// module.exports = {
//   bot,
// };
