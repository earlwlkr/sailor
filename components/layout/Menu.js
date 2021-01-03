import { Box } from '@chakra-ui/react';
import Link from 'next/link';

export default function AppMenu() {
  return (
    <Box p="4" shadow="md" maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Box p="1">
        <Link href="/admin">Dashboard</Link>
      </Box>
      <Box p="1">
        <Link href="/admin/orders">Orders</Link>
      </Box>
      <Box p="1">
        <Link href="/admin/expenses">Expenses</Link>
      </Box>
      <Box p="1">
        <Link href="/admin/customers">Customers</Link>
      </Box>
      <Box p="1">
        <Link href="/admin/products">Products</Link>
      </Box>
    </Box>
  );
}
