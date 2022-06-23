import { H5PayRequest } from '@more/h5pay-types';

export interface IwxPayService {
  h5Pay(req: H5PayRequest): Promise<Record<string, any>>;
}
