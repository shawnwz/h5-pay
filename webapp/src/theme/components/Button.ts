/**
 * IMPORTS
 */

import { ComponentStyleConfig } from '@chakra-ui/react';

/**
 * CORE
 */

const Button: ComponentStyleConfig = {
  sizes: {
    lg: {
      fontSize: '2rem',
      paddingX: '1.25rem',
      paddingY: '1rem',
    },
    md: {
      fontSize: '1.75rem',
      paddingX: '1.125rem',
      paddingY: '0.75rem',
    },
    sm: {
      fontSize: '1.5rem',
      paddingX: '1rem',
      paddingY: '0.5rem',
    },
    xs: {
      fontSize: '1.25rem',
      paddingX: '0.7rem',
      paddingY: '0.25rem',
    },
  },
  variants: {
    solid: {
      fontWeight: 'bold',
      textTransform: 'uppercase',
      borderRadius: '2rem',
      fontFamily: 'Gotham',
      boxShadow: 'brand.grey',
      iconSpacing: '0.5rem',
      _focus: {
        boxShadow: 'brand.grey!',
      },
    },
  },
  defaultProps: {
    size: 'md',
  },
};

export default Button;
