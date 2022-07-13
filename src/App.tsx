import React, { MouseEvent, useEffect } from 'react';
import tasksApi from './api/tasks';
import usersApi from './api/users';

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

  useEffect(() => {
    const newTask = {
      title: 'fasdfs est ratione doloremque quia maiores aut',
      completed: true,
    };

    async function getTask() {
      try {
        const task = await tasksApi.getOne(10);
        console.log(task.title);
      } catch (error) {
        console.log('error: ', error);
      }
    }

    async function getUser() {
      try {
        const task = await usersApi.getOne(10);
        console.log(task.name);
      } catch (error) {
        console.log('error: ', error);
      }
    }

    getTask();
    getUser();

    tasksApi.create(newTask);

    tasksApi.getOne(10);
    tasksApi.getAll();
    tasksApi.create(newTask);
    // async function getTask() {
    //   const res = await fetch('https://jsonplaceholder.typicode.com/todos/${id}');
    //   const data = (await res.json()) as { id: number };
    // }
    // async function updateTask() {
    //   const res = await fetch('https://jsonplaceholder.typicode.com/todos/${id}');
    //   const data = (await res.json()) as { id: number };
    // }
    // async function deleteTask(bpdy) {
    //   const res: Response = await fetch('https://jsonplaceholder.typicode.com/todos/${id}', {
    //     method: 'POST',
    //   });
    //   const data = (await res.json()) as { id: number };
    // }
    // getTask();
  }, []);

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
