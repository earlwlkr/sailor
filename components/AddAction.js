import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';

export default function CreateAction({ onSubmit, itemName, formComponent }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  async function handleSubmit(values) {
    try {
      await onSubmit(values);
      onClose();
    } catch (error) {
      console.log('create error', error);
    }
  }

  return (
    <>
      <Button onClick={onOpen}>New {itemName}</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add {itemName}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <formComponent onSubmit={handleSubmit} />
          </ModalBody>

          <ModalFooter>
            {/* <Button onClick={submitCreateCustomer} colorScheme="blue" mr={3}>
              Create
            </Button>
            <Button onClick={onClose} variant="ghost">
              Cancel
            </Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
