import { Controller } from 'react-hook-form';
import { default as ReactDatePicker } from 'react-datepicker';

export default function DatePicker({ name, control, ...rest }) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ onChange, value }) => <ReactDatePicker {...rest} selected={value} onChange={onChange} />}
    />
  );
}
