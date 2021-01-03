import { Heading, Table, Thead, Tbody, Tr, Th, Td, TableCaption } from '@chakra-ui/react';
import Link from 'next/link';
import useSWR from 'swr';

import OrderAPI from 'api/OrderAPI';
import { currencyFormat } from 'core/utils';

export default function OrderManagement() {
  const { error, data: dataOrders, mutate } = useSWR('/api/orders', OrderAPI.list);

  if (!dataOrders) {
    return 'Loading...';
  }

  return (
    <>
      <Heading as="h1" size="lg">
        Order Management
      </Heading>

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
            let customerName = 'N/A';
            if (order.customer) {
              customerName = order.customer.name;
            }
            return (
              <Tr>
                <Td>{order.time}</Td>
                <Td>{customerName}</Td>
                <Td isNumeric>{currencyFormat(order.total)}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </>
  );
}
