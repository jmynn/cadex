'use client';
import { ChakraProvider } from '@chakra-ui/react';
import { FunctionComponent, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Providers: FunctionComponent<Props> = ({ children }): ReactNode => {
  return <ChakraProvider>{children}</ChakraProvider>;
};

export default Providers;
