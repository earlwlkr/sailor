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

import { useAuthState, useAuthFunctions } from 'contexts/AuthContext';

function SignIn() {
  const router = useRouter();
  const { handleSubmit, errors, register, formState } = useForm();

  const { signIn } = useAuthFunctions();
  const { userToken } = useAuthState();
  console.log('userToken', userToken);
  if (userToken) {
    router.push('/');
    return;
  }

  function validateEmail(value) {
    if (!value) {
      return 'Email is required';
    } else return true;
  }

  function validatePassword(value) {
    if (!value) {
      return 'Password is required';
    } else return true;
  }

  async function onSubmit(values) {
    try {
      await signIn(values);
    } catch (err) {}
  }

  return (
    <Center marginTop={30}>
      <Grid templateColumns="repeat(1, 1fr)" gap={3}>
        <form method="post" onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={errors.email}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input name="email" placeholder="Input your email" ref={register({ validate: validateEmail })} />
            <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.password}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              name="password"
              placeholder="Input your password"
              type="password"
              ref={register({ validate: validatePassword })}
            />
            <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
          </FormControl>
          <Button mt={4} colorScheme="teal" isLoading={formState.isSubmitting} type="submit">
            Login
          </Button>
        </form>
      </Grid>
    </Center>
  );
}

export default SignIn;
