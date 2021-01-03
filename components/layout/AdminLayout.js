import { Grid, GridItem, Box, Table, Thead, Tbody, Tr, Th, Td, TableCaption } from '@chakra-ui/react';

import Header from 'components/layout/Header';
import Menu from 'components/layout/Menu';

import { useAuthState } from 'contexts/AuthContext';

export default function AdminLayout({ children }) {
  const { user, isLoading } = useAuthState();

  if (!user && isLoading) {
    return (
      <p>
        <a href="/auth/login">Sign in</a>
      </p>
    );
  }

  return (
    <div>
      <Header />
      <Grid templateColumns="repeat(6, 1fr)" gap={4}>
        <GridItem colSpan={{ md: 1, sm: 6 }}>
          <Menu />
        </GridItem>
        <GridItem colSpan={{ md: 4, sm: 6 }}>{children}</GridItem>
      </Grid>
    </div>
  );
}
