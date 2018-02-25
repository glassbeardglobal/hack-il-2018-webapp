const fetchExperiences = (formData) => {
  fetch('/api/experiences', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return new Error("Error fetching experiences");
  });
};

export default fetchExperiences;
