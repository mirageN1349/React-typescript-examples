import React, { MouseEvent, ReactNodeArray } from 'react';

import './App.css';
import { Button } from './components/Button';
import { Select, SelectOption } from './components/Select';

type Status = 'start' | 'progress' | 'end';
function App() {
  const options: SelectOption<Status>[] = [
    {
      label: '1',
      value: 'progress',
    },
    {
      label: '2',
      value: 'start',
    },
    {
      label: '3',
      value: 'end',
    },
  ];

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    console.log('click');
  }

  // const nodeArr: ReactNodeArray = [Button, Select].map(Component => {
  //   return <Component />;
  // });

  return (
    <div>
      <Select<Status> options={options} value="progress" />
      <Button type="submit" onClick={handleClick}>
        1343
      </Button>
    </div>
  );
}

export default App;
