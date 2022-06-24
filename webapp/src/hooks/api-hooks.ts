import ky, { Options as KyOptions } from 'ky';
import { H5PayRequest } from '@more/h5pay-types';
import { useCallback, useMemo } from 'react';
import { useMutation, UseMutationOptions } from 'react-query';

function getApiEndpoint(path: string): string {
  const trimmedPath = path.replace(/^\/+/, '');
  return `/api/${trimmedPath}`;
}

const getClient = () => {
  const headers: KyOptions['headers'] = {

  };

  const mutations = {
    h5Pay(req: H5PayRequest): Promise<Record<string, any>> {
      const url = getApiEndpoint('/wxpay/h5');
      return ky.post(url, { headers, json: req }).json();
    },
  };

  return { mutations };
};

function useApi() {
  const client = useMemo(
    () => getClient(),
    [],
  );

  const onApiError = useCallback((err: Error) => {
    console.log(err);
  }, []);

  return { ...client, onApiError };
}

export function useH5PayMutation(
  opts?: UseMutationOptions<Record<string, any>, Error, H5PayRequest>,
) {
  const { mutations: { h5Pay }, onApiError } = useApi();
  return useMutation(
    (req: H5PayRequest) => h5Pay(req),
    { ...opts, onError: onApiError },
  );
}
