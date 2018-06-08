function mapObject(input, mapper) {
  return Object.keys(mapper)
    .reduce((obj, key) => {
      obj[key] = mapper[key](input); // eslint-disable-line no-param-reassign
      return obj;
    }, {});
}

const mappedThing2 = {
  thing: input => obj.thing,
  thing2: input => input.thing2,
};

const mappedThing = {
  thing: input => obj.thing,
  thing2: input => input.thing2,
  items: input => input.items.map(
    () => mapObject(this, mappedThing2),
  ),
};

export default {
  mappedThing,
  mapObject,
};
