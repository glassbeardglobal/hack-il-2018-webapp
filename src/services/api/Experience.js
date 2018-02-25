const Experience = formData => {
  return fetch(`http://3e44c71f.ngrok.io`, {
    method: 'POST',
    body: formData,
    headers: {
      Accept: 'application/json',
      'content-type': 'application/json',
    },
  }).then(async res => {
    if (res.ok) {
      const json = await res.json();
      return json;
    }
    return new Error('Error fetching experiences');
  });
};

export default Experience;
