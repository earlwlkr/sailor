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
import Link from "next/link";
import useSWR from "swr";

import Menu from "components/layout/Menu";

import OrderAPI from "api/OrderAPI";

export default function OrderManagement() {
  const { error, data: dataOrders, mutate } = useSWR(
    "/api/orders",
    OrderAPI.list
  );

  if (!dataOrders) {
    return "Loading...";
  }

  return (
    <>
      <Grid templateColumns="repeat(6, 1fr)" gap={4}>
        <GridItem colSpan={{ md: 1, sm: 6 }}>
          <Menu />
        </GridItem>
        <GridItem colSpan={{ md: 4, sm: 6 }}>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Time</Th>
                <Th>Customer</Th>
                <Th isNumeric>Total</Th>
              </Tr>
            </Thead>
            <Tbody>
              {dataOrders.map((order) => {
                return (
                  <Tr>
                    <Td>{order.time}</Td>
                    <Td>{order.customer}</Td>
                    <Td isNumeric>{order.total}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </GridItem>
      </Grid>
    </>
  );
}
