import {
  Button, Flex,
} from '@chakra-ui/react';
import {
  Amount, H5Info, H5PayRequest, SceneInfo,
} from '@more/h5pay-types';
import { v4 as uuid } from 'uuid';
import { useSearchParam } from 'react-use';
import { useH5PayMutation } from '../../hooks/api-hooks';

function H5Pay(): JSX.Element {
  const h5Pay = useH5PayMutation({
    onSuccess: (res) => {
      console.log(res);
      console.log(res.h5_url);
      window.location.replace(res.h5_url);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const { REACT_APP_H5_PAY_NOTIFY_URL = ' ' } = process.env;

  const total = useSearchParam('total');
  const attach = useSearchParam('attach');
  if (!total || !Number(total)) {
    // eslint-disable-next-line max-len
    return <p>{"Missing 'total' in query parameters, or 'total' is not a number"}</p>; // eslint-disable-line react/jsx-curly-brace-presence
  }
  if (!attach) {
    return <p>{"Missing 'attach' in query parameters"}</p>; // eslint-disable-line react/jsx-curly-brace-presence
  }

  const amount: Amount = {
    total: Number(total),
    currency: 'CNY',
  };

  const sceneInfo = {} as SceneInfo;

  const h5Info = {} as H5Info;

  h5Info.type = 'test';
  h5Info.app_name = 'h5-pay';
  h5Info.app_url = 'more.com';
  sceneInfo.payer_client_ip = '0.0.0.0';
  sceneInfo.device_id = '0000';
  sceneInfo.h5_info = h5Info;

  const h5PayRequest: H5PayRequest = {
    description: 'default description',
    out_trade_no: uuid().replace(/-/g, ''),
    attach,
    notify_url: REACT_APP_H5_PAY_NOTIFY_URL.concat('/').concat(attach),
    amount,
    scene_info: sceneInfo,
  };

  const pay = async () => {
    console.log(h5PayRequest);
    h5Pay.mutate(h5PayRequest);
  };
  const isH5PayLoading = false;

  return (
    <Flex flexDirection="column">
      <Flex flexDirection="column" marginBottom="1rem">
        <p>
          Amount is:
          {amount.total}
        </p>
        <p>
          Attach is:
          {attach}
        </p>
        <p>
          Out trade number is:
          {h5PayRequest.out_trade_no}
        </p>
        <p>
          Notify URL is:
          {h5PayRequest.notify_url}
        </p>
      </Flex>
      <Button
        colorScheme="blue"
        variant="solid"
        onClick={pay}
        isLoading={isH5PayLoading}
      >
        PAY
      </Button>
    </Flex>

  );
}

export default H5Pay;
