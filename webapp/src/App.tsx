/**
 * IMPORTS
 */

import { Box, Center, Flex } from '@chakra-ui/react';
import H5Pay from './components/h5pay';

/**
 * CORE
 */

function App(): JSX.Element {
  return (
    <Flex
      h="100vh"
      maxH="100vh"
    >
      <Box
        flexGrow={1}
        overflow="hidden"
      >
        <Center bg="tomato" h="100%" color="white">
          <H5Pay />
        </Center>
      </Box>
    </Flex>

  );
}

export default App;
