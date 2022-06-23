/**
 * IMPORTS
 */

import { Center } from '@chakra-ui/react';
import H5Pay from './components/h5pay/H5Pay';

/**
 * CORE
 */

function App(): JSX.Element {
  return (
    <Center bg="tomato" h="100px" color="white">
      <H5Pay />
    </Center>
  );
}

export default App;
