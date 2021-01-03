import { Heading, Table, Thead, Tbody, Tr, Th, Td, TableCaption } from '@chakra-ui/react';
import Link from 'next/link';
import useSWR from 'swr';

import OrderAPI from 'api/OrderAPI';
import ExpenseAPI from 'api/ExpenseAPI';
import { currencyFormat } from 'core/utils';

export default function AdminDashboard() {
  const { error: orderError, data: orderData } = useSWR('/api/orders', OrderAPI.list);
  const { error: expenseError, data: expenseData } = useSWR('/api/expenses', ExpenseAPI.list);

  const merged = (orderData || []).slice();
  merged.push(...(expenseData || []));
  merged.sort((a, b) => {
    return new Date(b).getTime() - new Date(a).getTime();
  });

  return (
    <>
      <Heading as="h1" size="lg">
        Dashboard
      </Heading>

      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Time</Th>
            <Th isNumeric>Amount</Th>
            <Th>Source</Th>
          </Tr>
        </Thead>
        <Tbody>
          {merged.map((item) => {
            let source = 'N/A';
            let isIncome = !!item.customer;
            let amount = 0;

            // income
            if (isIncome) {
              if (item.customer) {
                source = item.customer.name;
              }
              amount = item.total;
            } else {
              amount = item.amount;
            }

            return (
              <Tr>
                <Td>{item.time}</Td>
                <Td isNumeric>{currencyFormat(amount)}</Td>
                <Td>{source}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </>
  );
}
