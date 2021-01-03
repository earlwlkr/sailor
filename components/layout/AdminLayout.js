import {
  Grid,
  GridItem,
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";

import Menu from "components/layout/Menu";

export default function AdminLayout({ children }) {
  return (
    <Grid templateColumns="repeat(6, 1fr)" gap={4}>
      <GridItem colSpan={{ md: 1, sm: 6 }}>
        <Menu />
      </GridItem>
      <GridItem colSpan={{ md: 4, sm: 6 }}>
        {children}
      </GridItem>
    </Grid>
  );
}
