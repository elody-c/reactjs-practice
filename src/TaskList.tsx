import TaskListItem from './TaskListItem';

interface Task {
  id: number,
  name: string,
  completed: boolean,
}
function TaskList() {
  const data = [{ id: 0, name: 'buy fruits', completed: false }, { id: 1, name: 'buy cheese', completed: false }, { id: 2, name: 'buy fish', completed: true }];

  return (
    <ul className="TaskList">
      {
        data.map((task:Task) => (
          <TaskListItem key={task.id} name={task.name} completed={task.completed} />
        ))
      }
    </ul>
  );
}

export default TaskList;
