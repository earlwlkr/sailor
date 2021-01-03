import * as React from 'react';
import { AuthProvider } from 'contexts/AuthContext';
import { ChakraProvider } from '@chakra-ui/react';

export default function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </AuthProvider>
  );
}
