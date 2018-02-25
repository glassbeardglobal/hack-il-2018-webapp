import serialize from '../../utils';
import queryString from 'query-string';

const urlFetchExperiences = (data) => {
  console.log('Sending', data);
  const body = serialize(data);
  console.log('serialized', body);
  fetch(`https://hackillinois-amadeus-2018.appspot.com`, {
    method: 'POST',
    body,
  }).then((res) => {
    if (res.ok) {
      console.log(res);
      return res.json();
    }
    return new Error("Error fetching experiences");
  });
};

export default urlFetchExperiences;
