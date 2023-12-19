import DeleteForm from '@/components/DeleteForm';
import TaskForm from '@/components/TaskFormCustom';

import TaskList from '@/components/TaskList';

const Tasks = () => {
  return (
    <div className='max-w-lg'>
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default Tasks;
