import {
  Button,
  ButtonGroup,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';

import EditOrderForm from 'components/EditOrderForm';

import OrderAPI from 'api/OrderAPI';

function CreateOrderAction() {
  const { isOpen: isNewOrderModalOpen, onOpen: onNewOrderModalOpen, onClose: onNewOrderModalClose } = useDisclosure();

  async function submitCreateOrder(values) {
    try {
      await OrderAPI.create(values);
      onNewOrderModalClose();
    } catch (error) {
      console.log('create order error', error);
    }
  }

  return (
    <>
      <Button onClick={onNewOrderModalOpen}>New Order</Button>

      <Modal isOpen={isNewOrderModalOpen} onClose={onNewOrderModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create new order</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <EditOrderForm onSubmit={submitCreateOrder} />
          </ModalBody>

          <ModalFooter>
            {/* <Button onClick={submitCreateOrder} colorScheme="blue" mr={3}>
              Create
            </Button>
            <Button onClick={onNewOrderModalClose} variant="ghost">
              Cancel
            </Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default function Header() {
  return (
    <div style={{ marginBottom: 12 }}>
      <CreateOrderAction />
      <Button>New Expense</Button>
    </div>
  );
}
