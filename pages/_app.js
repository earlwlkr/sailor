import * as React from 'react';
import { AuthProvider } from 'contexts/AuthContext';
import { ChakraProvider } from '@chakra-ui/react';

import 'react-datepicker/dist/react-datepicker.css';
import '../styles/datepicker.css';
import '../styles/auto-suggest.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </AuthProvider>
  );
}
