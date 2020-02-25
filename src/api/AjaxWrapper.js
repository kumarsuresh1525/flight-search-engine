const BASE_PATH = './assets/data/';
const AjaxWrapper = {
  get: (url) => {
    return fetch(`${BASE_PATH}${url}.json`).then((res) => res.json())
    .then((response) => {
      return response;
    })
  }
};

export default AjaxWrapper;