import {
  Button, Flex, FormControl, Input, FormLabel,
} from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { H5Info, H5PayRequest, SceneInfo } from '@more/h5pay-types';
import { v4 as uuid } from 'uuid';
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

  const sceneInfo = {} as SceneInfo;
  const h5Info = {} as H5Info;
  h5Info.type = 'test';
  h5Info.app_name = 'h5-pay';
  h5Info.app_url = 'more.com';
  sceneInfo.payer_client_ip = '0.0.0.0';
  sceneInfo.device_id = '0000';
  sceneInfo.h5_info = h5Info;

  const onSubmit: SubmitHandler<H5PayRequest> = async (req: H5PayRequest) => {
    console.log(req);
    req.amount.currency = 'CNY';
    req.description = '测试';
    req.out_trade_no = uuid().replace(/-/g, '');
    req.notify_url = 'https://test.aibmore.cn/notify';
    req.scene_info = sceneInfo;

    h5Pay.mutate(req);
  };
  const isH5PayLoading = false;
  const {
    register,
    handleSubmit,
    formState: {
      isValid,
    },
  } = useForm<H5PayRequest>({ mode: 'onChange' });
  return (
    <Flex justifyContent="center" alignItems="center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl
          isInvalid={false}
          isDisabled={false}
        >
          <FormLabel>Amount</FormLabel>
          <Input
            {...register('amount.total')}
            type="number"
            isRequired
            size="lg"
            width="100"
            defaultValue={1}
            borderColor="brand.purple"
            _focus={{
              borderColor: 'brand.purple',
              boxShadow: 'brand.purple',
            }}
            errorBorderColor="brand.orange"
          />
          <FormLabel>Attach</FormLabel>
          <Input
            {...register('attach')}
            size="lg"
            width="100"
            borderColor="brand.purple"
            _focus={{
              borderColor: 'brand.purple',
              boxShadow: 'brand.purple',
            }}
            errorBorderColor="brand.orange"
          />
        </FormControl>
        <Button
          colorScheme="blue"
          variant="solid"
          type="submit"
          isLoading={isH5PayLoading}
          isDisabled={!isValid}
        >
          PAY
        </Button>

      </form>

    </Flex>
  );
}

export default H5Pay;
