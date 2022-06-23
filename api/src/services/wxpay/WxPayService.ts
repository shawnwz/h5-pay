import { H5PayRequest } from '@more/h5pay-types';
import { IwxPayService } from './types';
import { WxPayClient } from '../../clients/wxpay-api';

export class WxPayService implements IwxPayService {
  readonly wxPayApi: WxPayClient;

  constructor(wxPayApi: WxPayClient) {
    this.wxPayApi = wxPayApi;
  }

  h5Pay(req: H5PayRequest): Promise<Record<string, any>> {
    return this.wxPayApi.h5Pay(req);
  }
}
