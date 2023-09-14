import { useState } from 'react';

function TaskListItem({ name, completed }: { name: string, completed: boolean }) {
  // Completion status of a task is set by default by the value coming from props
  const [status, setStatus] = useState<boolean>(completed);

  function changeTaskStatus() {
    setStatus(!status);
  }

  return (
    <li className="TaskListItem">
      <p>
        {name}
        {' '}
        -
        {status ? 'done' : 'todo'}
        <input type="checkbox" value={status ? '1' : '0'} onChange={changeTaskStatus} />
        <button type="button" onClick={changeTaskStatus}>Change</button>
      </p>
    </li>
  );
}

export default TaskListItem;
