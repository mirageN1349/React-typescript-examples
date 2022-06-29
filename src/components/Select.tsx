import ReactSelect from 'react-select';

// value - object -> string
// Array<SelectOption>
// SelectOption[]

type Props<V> = {
  value?: V;
  options: SelectOption<V>[];
};

export type SelectOption<V> = {
  label: string;
  value: V;
};

export function Select<V extends string | number | boolean>({ options, value }: Props<V>) {
  // string -> SelectOption

  const selectedValue = value
    ? {
        value,
        label: options.find(opt => opt.value === value)?.label,
      }
    : null;

  return <ReactSelect value={selectedValue} options={options} />;
}
