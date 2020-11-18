import url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

const req = async (endpoint: string) => {
  const uri = url.format(getUrlWithParamsConfig(endpoint));
  const response = await fetch(uri).then((res) => res.json());
  return response;
};

export default req;
