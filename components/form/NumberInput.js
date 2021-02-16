import * as React from 'react';
import { Controller } from 'react-hook-form';
import {
  NumberInput as ChakraNumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';

export default function NumberInput({ name, control, ...rest }) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ onChange, value }) => {
        return (
          <ChakraNumberInput
            {...rest}
            onChange={(value) =>
              onChange(
                value
                  .split('')
                  .filter((i) => !Number.isNaN(+i))
                  .join(''),
              )
            }
            value={new Intl.NumberFormat('vi-VN').format(value || 0)}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </ChakraNumberInput>
        );
      }}
    />
  );
}
