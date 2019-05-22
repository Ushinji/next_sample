import * as React from 'react';

const useBool = (initialValue: boolean): [boolean, () => void, () => void] => {
  const [value, setValue] = React.useState(initialValue);
  return [value, () => setValue(true), () => setValue(false)];
};

export default useBool;
