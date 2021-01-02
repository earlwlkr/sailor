import useSWR from 'swr';

import OrderAPI from 'api/OrderAPI';

export default function OrderManagement() {
  const {
    error,
    data: dataOrders,
    mutate: reloadBooking,
  } = useSWR('/api/orders', OrderAPI.list);

  return dataOrders ? JSON.stringify(dataOrders) : 'test';
}