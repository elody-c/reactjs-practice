import { useState, useEffect } from 'react';
import TaskList from './TaskList';
import HttpHelper from './HttpHelper';

const DATA_SOURCE_URL = 'https://api.github.com/users/elody-cjjjj';

interface GitProfile {
  login: string,
  id: string,
};

function App() {
  const [data, setData] = useState<GitProfile>();

  useEffect(() => {
    // declare the async data fetching function
    const fetchData = async () => {
      const json = await HttpHelper.request<GitProfile>(DATA_SOURCE_URL, console.error);
      setData(json);
      // SIMPLE VERSION
      // get the data from the api
      // const response = await fetch(DATA_SOURCE_URL);
      // convert the data to json
      // const json = await response.json() as GitProfile;
    };

    // call the function
    fetchData().catch(() => {
      console.log('error fetchig data');
    });
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
