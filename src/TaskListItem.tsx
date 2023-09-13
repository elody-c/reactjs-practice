import { useState } from 'react';

function TaskListItem({ name, completed }:{ name: string, completed:boolean }) {
  // Completion status of a task is set by default by the value coming from props
  const [status, setStatus] = useState<boolean>(completed);

  function handleButtonClick() {
    setStatus(!status);
  }

  return (
    <li className="TaskListItem">
      <p>
        {name}
        {' '}
        -
        {status ? 'done' : 'todo'}
        <button type="button" onClick={handleButtonClick}>Change</button>
      </p>
    </li>
  );
}

export default TaskListItem;
