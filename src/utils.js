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
  console.log('keys', keys);
  console.log('length', keys.length);
  for (var i = 0; i < keys.length; i++) {
    console.log('object', object[keys[i]]);
    if (object[keys[i]]) {
      console.log('pushing', keys[i]);
      array.push(keys[i]);
    }
  }
  console.log('array', array);
  return array;
}

export default serialize;
