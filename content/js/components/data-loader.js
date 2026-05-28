// This is used by the components in this folder to load
// JSON public data from various places
const fetchJSON = async url => {
  var result = {};
  const response = await fetch(url);
  if (response.status == 200) {
    const data = await response.text();
    result = JSON.parse(data);
  }
  return result;
}

export default fetchJSON;