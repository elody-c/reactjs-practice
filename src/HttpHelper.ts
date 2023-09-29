import HttpHelperErrorFunction from './HttpHelperErrorFunction';

class HttpHelper {
  static async request<TResponse>(
    url: string,
    errorCallback: HttpHelperErrorFunction,
  ): Promise<TResponse> {
    return fetch(url)
      .then((response) => response.json())
      .catch((error:string) => {
        errorCallback(error);
      }) as Promise<TResponse>;
  }
}

export default HttpHelper;
