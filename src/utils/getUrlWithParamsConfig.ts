import config from '../config';

const getUrlWithParamsConfig = (endpoingConfig: string) => {
  return {
    ...config.client.server,
    ...config.client.endpoint[endpoingConfig as keyof typeof config.client.endpoint].uri,
  };
};

export default getUrlWithParamsConfig;
