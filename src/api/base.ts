// Record<string, string>
// {
//   string: string
// }

interface RequestOptions extends RequestInit {
  method: 'POST' | 'GET' | 'DELETE';
  query?: Record<string, string>;
  url?: string | number;
}

export class BaseApi {
  static baseUrl: string;

  constructor(baseUrl: string) {
    // нужно поправить баг с перезаписыванием ссылки
    BaseApi.baseUrl = baseUrl;
  }

  private static async baseFetch<T>({ url = '', query, ...options }: RequestOptions): Promise<T> {
    const res = await fetch(BaseApi.baseUrl + url + '?' + new URLSearchParams(query), options);
    return res.json();
  }

  static get<T>(url: string | number, options?: Omit<RequestOptions, 'method' | 'url'>) {
    return this.baseFetch<T>({ ...options, url, method: 'GET' });
  }

  static post<T>(body: unknown, url: string | number, options?: Omit<RequestOptions, 'method' | 'url' | 'body'>) {
    return this.baseFetch<T>({ ...options, url, body: JSON.stringify(body), method: 'POST' });
  }

  static update() {
    //
  }

  static delete() {
    //
  }
}
