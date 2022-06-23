import ky, { Options as KyOptions } from 'ky';
import { H5PayRequest } from '@more/h5pay-types';

function getApiEndpoint(path: string): string {
  const trimmedPath = path.replace(/^\/+/, '');
  return `/api/${trimmedPath}`;
}

const getClient = () => {
  const headers: KyOptions['headers'] = {

  };

  const mutations = {
    h5Pay(req: H5PayRequest): Promise<any> {
      const url = getApiEndpoint('/wxpay/h5');
      return ky.post(url, { headers, json: req }).json();
    },
  };

  return { mutations };
};
