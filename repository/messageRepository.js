async function getSomething() {
  var retrievedData = {};
  const retrievedData = await get(url, userToken, patientId);
  const response = mapObject(retrievedData, mappedThing);
  return response;
}

export default {
  getSomething,
};
