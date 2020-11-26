import config from '../config';

const getUrlWithParamsConfig = (endpoingConfig: string, query: object) => {
  const url = {
    ...config.client.server,
    ...config.client.endpoint[endpoingConfig as keyof typeof config.client.endpoint].uri,
    query: {},
  };

  const pathname = (Object.keys(query) as Array<keyof typeof query>).reduce((acc, key) => {
    if (acc.indexOf(`{${key}}`) !== -1) {
      const result = acc.replace(`{${key}}`, query[key]);
      // eslint-disable-next-line no-param-reassign
      delete query[key];
      return result;
    }

    return acc;
  }, url.pathname);

  url.pathname = pathname;

  url.query = {
    ...query,
  };
  return url;
};

export default getUrlWithParamsConfig;
