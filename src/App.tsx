import { useState, useEffect, useCallback } from 'react';
import TaskList from './TaskList';
import HttpHelper from './HttpHelper';

const DATA_SOURCE_URL = 'https://api.github.com/users/elody-c';

interface GitProfile {
  login: string,
  id: string,
}
/*
type PromiseResolve<T> = (value?: T | PromiseLike<T>) => void;
type PromiseReject = (error?: Error) => void;

type Callback = (error?: Error, data?: number) => void;

function getData(callback: Callback) {
  setTimeout(() => {
    if (Math.random() < 0.25) {
      callback(new Error('Error in retrieving data.'));
    }
    else {
      const data = Math.random();
      callback(undefined, data);
    }
  }, 500);
} // getData
function getDataPromise() {
  return new Promise((resolve: PromiseResolve<number>, reject: PromiseReject): void => {
    getData((error, data) => {
      if (error) reject(error);
      else resolve(data);
    });
  });
}

async function calldata() {
  await getDataPromise().then(
    (data) => { // resolve()
      console.log('Process 1:', data);
      return getDataPromise();
    },
  );
}
*/

function App() {
  const [data, setData] = useState<GitProfile>();

  useEffect(() => {
    // declare the async data fetching function
    const fetchData = async () => {
      const json = await HttpHelper.request<GitProfile>(DATA_SOURCE_URL,console.log);
      setData(json);
      // SIMPLE VERSION
      // get the data from the api
      // const response = await fetch(DATA_SOURCE_URL);
      // convert the data to json
      // const json = await response.json() as GitProfile;

      // set state with the result
    };

    // call the function
    fetchData().catch(console.error);
  }, []);
  return (
    <div className="App">
      <h1>
        Hello World -
        {data?.login}
      </h1>
      <TaskList />
    </div>
  );
}

export default App;
