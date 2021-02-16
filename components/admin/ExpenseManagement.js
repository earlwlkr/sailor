import { Heading, Table, Thead, Tbody, Tr, Th, Td, TableCaption } from '@chakra-ui/react';
import Link from 'next/link';
import useSWR from 'swr';

import ExpenseAPI from 'api/ExpenseAPI';
import { currencyFormat } from 'core/utils';

export default function ExpenseManagement() {
  const { error, data: dataExpenses, mutate } = useSWR('/api/expenses', ExpenseAPI.list);

  if (!dataExpenses) {
    return 'Loading...';
  }

  return (
    <>
      <Heading as="h1" size="lg">
        Expense Management
      </Heading>

      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Time</Th>
            <Th>Source</Th>
            <Th isNumeric>Amount</Th>
          </Tr>
        </Thead>
        <Tbody>
          {dataExpenses.map((expense) => {
            let customerName = 'N/A';
            if (expense.customer) {
              customerName = expense.customer.name;
            }
            return (
              <Tr>
                <Td>{expense.time}</Td>
                <Td>{expense.description}</Td>
                <Td isNumeric>{currencyFormat(expense.total)}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </>
  );
}
