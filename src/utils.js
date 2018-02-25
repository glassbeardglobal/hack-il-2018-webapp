const serialize = (object) => JSON.stringify({
  duration: object.duration,
  city: object.initialCity,
  budget: object.budget,
  interests: keysToArray(object.interests),
  date: object.date.getTime() / 1000,
});

function keysToArray(object) {
  var array = [];
  const keys = Object.keys(object);
  for (var i = 0; i < keys.length; i++) {
    if (object[keys[i]]) {
      array.push(keys[i]);
    }
  }
  return array;
}

export default serialize;
