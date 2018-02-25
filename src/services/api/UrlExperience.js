const urlFetchExperiences = (body) => {
  fetch(`3e44c71f.ngrok.io`, {
    method: 'POST',
    body,
    headers: {
      'content-type': 'application/json'
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return new Error("Error fetching experiences");
  });
};

export default urlFetchExperiences;
