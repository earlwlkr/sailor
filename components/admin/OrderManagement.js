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

import AdminLayout from "components/layout/AdminLayout";

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
    <AdminLayout>
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
    </AdminLayout>
  );
}
