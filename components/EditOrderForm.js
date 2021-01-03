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
import DatePicker from 'components/base/DatePicker';

export default function EditOrderForm({ onSubmit }) {
  const { handleSubmit, errors, register, control, formState } = useForm();

  // function validateEmail(value) {
  //   if (!value) {
  //     return 'Email is required';
  //   } else return true;
  // }

  // function validatePassword(value) {
  //   if (!value) {
  //     return 'Password is required';
  //   } else return true;
  // }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.time}>
        <FormLabel htmlFor="time">Order Time</FormLabel>
        <DatePicker
          name="time"
          control={control}
          selected={new Date()}
          showTimeSelect
          dateFormat="dd/MM/yyyy h:mm aa"
        />
        <FormErrorMessage>{errors.time && errors.time.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.subtotal}>
        <FormLabel htmlFor="subtotal">Subtotal</FormLabel>
        <Input name="subtotal" placeholder="Input subtotal" type="number" ref={register()} />
        <FormErrorMessage>{errors.subtotal && errors.subtotal.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.total}>
        <FormLabel htmlFor="total">Total</FormLabel>
        <Input name="total" placeholder="Input total" type="number" ref={register()} />
        <FormErrorMessage>{errors.total && errors.total.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.note}>
        <FormLabel htmlFor="note">Note</FormLabel>
        <Input name="note" placeholder="Input note" type="note" ref={register()} />
        <FormErrorMessage>{errors.note && errors.note.message}</FormErrorMessage>
      </FormControl>
      <Button type="submit">Create Order</Button>
    </form>
  );
}
