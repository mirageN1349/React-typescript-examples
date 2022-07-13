import { User } from '../@types/entities/User';
import { BaseApi } from './base';

class UsersApi extends BaseApi {
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
    return BaseApi.get<User>(id, { query });
  }

  getAll(query?: Record<string, string>) {
    return BaseApi.get<User[]>('', {
      query,
    });
  }

  create(task: User) {
    return BaseApi.post<User>(task, '');
  }

  delete() {
    //
  }

  update() {
    //
  }
}

const usersApi = new UsersApi('https://jsonplaceholder.typicode.com/users/');
export default usersApi;
