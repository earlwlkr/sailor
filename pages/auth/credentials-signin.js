import React from 'react';
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
import { csrfToken } from 'next-auth/client';
import { useForm } from 'react-hook-form';

function SignIn({ csrfToken }) {
  const { handleSubmit, errors, register, formState } = useForm();

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

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 3000);
    });
  }

  return (
    <Center marginTop={30}>
      <Grid templateColumns="repeat(1, 1fr)" gap={3}>
        <form
          method="post"
          action="/api/auth/callback/credentials"
        >
          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
          <FormControl isInvalid={errors.email}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              name="email"
              placeholder="Input your email"
              ref={register({ validate: validateEmail })}
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.password}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              name="password"
              placeholder="Input your password"
              type="password"
              ref={register({ validate: validatePassword })}
            />
            <FormErrorMessage>
              {errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>
          <Button
            mt={4}
            colorScheme="teal"
            isLoading={formState.isSubmitting}
            type="submit"
          >
            Login
          </Button>
        </form>
      </Grid>
    </Center>
  );
}

SignIn.getInitialProps = async (context) => {
  return {
    csrfToken: await csrfToken(context),
  };
};

export default SignIn;
