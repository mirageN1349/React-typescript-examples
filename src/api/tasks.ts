import { Task } from '../@types/entities/Task';
import { BaseApi } from './base';

class TasksApi extends BaseApi {
  // getOne(id: number) {
  //   return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
  //     method: 'GET',
  //   });
  // }

  // getOne(id: number) {
  //   return BaseApi.baseFetch({
  //     method: 'GET',
  //     url: id,
  //   });
  // }

  // getOne<T>(id: number) {
  //   return BaseApi.get<T>(id);
  // }

  constructor(baseUrl: string) {
    super(baseUrl);
  }

  getOne(id: number, query?: Record<string, string>) {
    return BaseApi.get<Task>(id, { query });
  }

  getAll(query?: Record<string, string>) {
    return BaseApi.get<Task[]>('', {
      query,
    });
  }

  create(task: Task) {
    return BaseApi.post<Task>(task, '');
  }

  delete() {
    //
  }

  update() {
    //
  }
}

const tasksApi = new TasksApi('https://jsonplaceholder.typicode.com/todos/');
export default tasksApi;
