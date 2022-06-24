export interface H5PayRequest {
  description: string,
  out_trade_no: string,
  attach: string,
  notify_url: string,
  amount: Amount,
  scene_info: SceneInfo,
}

export interface Amount {
  total: number,
  currency: string,
}

export interface SceneInfo {
  payer_client_ip: string,
  device_id: string,
  h5_info: H5Info,
}

export interface H5Info {
  type: string,
  app_name: string,
  app_url: string,
}

export interface H5PayResponse {
  status: string,
  h5_url: string,
}
