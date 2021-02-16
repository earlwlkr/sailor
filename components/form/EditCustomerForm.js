import React from 'react';
import { useRouter } from 'next/router';
import {
  Grid,
  Center,
  Button,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import NumberInput from 'components/form/NumberInput';

export default function EditCustomerForm({ onSubmit }) {
  const { handleSubmit, errors, register, control, formState } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.name} mt={3}>
        <FormLabel htmlFor="name">Name</FormLabel>
        <NumberInput name="name" control={control} placeholder="Input name" ref={register()} />
        <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
      </FormControl>
      <Button type="submit" colorScheme="blue" mt={4}>
        Create Customer
      </Button>
    </form>
  );
}
