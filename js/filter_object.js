const filterObject = (obj, query) =>
  Object.fromEntries(
    Object.entries(obj).filter(([key, subObj]) => subObj.hasOwnProperty(query))
  );
show_json(filterObject(G.sets, 'int'))