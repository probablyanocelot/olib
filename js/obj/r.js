/**
 * Filters an object based on a query.
 * @param {Object} obj - The object to filter.
 * @param {string} query - The property name to filter by.
 * @return {Object} An object containing only the properties that have the specified query.
 * @example
 * itemsWithDex = filter(G.items, 'dex')
 * console.log(itemsWithDex)
 */
const filter = (obj, query) =>
  Object.fromEntries(
    Object.entries(obj).filter(([key, subObj]) => subObj.hasOwnProperty(query)),
  );

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

module.exports = {
  filter,
  filterBy,
};
