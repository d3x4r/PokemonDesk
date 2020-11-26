import config from '../config';

const getUrlWithParamsConfig = (endpoingConfig: string, query: object) => {
  return {
    ...config.client.server,
    ...config.client.endpoint[endpoingConfig as keyof typeof config.client.endpoint].uri,
    query: {
      ...query,
    },
  };
};

export default getUrlWithParamsConfig;
