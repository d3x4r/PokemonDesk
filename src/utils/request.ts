import url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

const req = async (endpoint: string, query: object) => {
  const uri = url.format(getUrlWithParamsConfig(endpoint, query));
  const response = await fetch(uri).then((res) => res.json());
  return response;
};

export default req;
