import { Flex, FormControl, Input } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { H5PayRequest } from '@more/h5pay-types';

function H5Pay(): JSX.Element {
  const onSubmit: SubmitHandler<H5PayRequest> = async (req: H5PayRequest) => {
    console.log(req);
  };
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
          <Input
            {...register('amount')}
            required
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

      </form>

    </Flex>
  );
}

export default H5Pay;
