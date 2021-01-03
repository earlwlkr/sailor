import { Grid, GridItem, Box, Table, Thead, Tbody, Tr, Th, Td, TableCaption } from '@chakra-ui/react';

import Menu from 'components/layout/Menu';

import { useAuthState } from 'contexts/AuthContext';

export default function AdminLayout({ children }) {
  const { user } = useAuthState();

  if (!user) {
    return (
      <p>
        <a href="/auth/login">Sign in</a>
      </p>
    );
  }

  return (
    <Grid templateColumns="repeat(6, 1fr)" gap={4}>
      <GridItem colSpan={{ md: 1, sm: 6 }}>
        <Menu />
      </GridItem>
      <GridItem colSpan={{ md: 4, sm: 6 }}>{children}</GridItem>
    </Grid>
  );
}
