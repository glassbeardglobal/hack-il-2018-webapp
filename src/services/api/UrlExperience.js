const urlFetchExperiences = (body) => {
  console.log('body', body);
  fetch(`http://3e44c71f.ngrok.io`, {
    method: 'POST',
    body,
    headers: {
      'content-type': 'application/json'
    },
  }).then(async (res) => {
    if (res.ok) {
      const json = await res.json();
      console.log('Resulting json', json);
      return json;
    }
    return new Error("Error fetching experiences");
  });
};

export default urlFetchExperiences;
