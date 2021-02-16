import { Heading, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import Link from 'next/link';
import useSWR from 'swr';

import CustomerAPI from 'api/CustomerAPI';

import AddAction from 'components/AddAction';
import EditCustomerForm from 'components/form/EditCustomerForm';

export default function CustomerManagement() {
  const { error, data: dataCustomers, mutate } = useSWR('/api/customers', CustomerAPI.list);

  if (!dataCustomers) {
    return 'Loading...';
  }

  return (
    <>
      <Heading as="h1" size="lg">
        Customer Management
        <AddAction onSubmit={CustomerAPI.create} itemName="Customer" formComponent={EditCustomerForm} />
      </Heading>

      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Customer</Th>
          </Tr>
        </Thead>
        <Tbody>
          {dataCustomers.map((customer) => {
            return (
              <Tr>
                <Td>{customer.name}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </>
  );
}
