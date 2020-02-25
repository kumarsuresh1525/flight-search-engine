import ajax from '../api/AjaxWrapper';

const mockUtil = {
  mockGet: (response) => {
    ajax.get = jest.fn().mockImplementation(() => {
      return {
        then: callback => callback(response)
      };
    });
  }
};


export default mockUtil;
