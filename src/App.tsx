import React from 'react';

import './App.css';
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

  return (
    <div>
      <Select<Status> options={options} value="progress" />
    </div>
  );
}

export default App;
