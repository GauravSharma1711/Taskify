import useTaskStore from '../store/taskStore';

const useSubtaskActions = () => {
  const { deleteSubTask, getAllSubTasks } = useTaskStore();

  const handleDeleteSubtask = async (subTaskId, taskId) => {
    try {
      await deleteSubTask(subTaskId);
      await getAllSubTasks(taskId); // refresh subtasks
    } catch (error) {
      console.error("Failed to delete subtask:", error.message);
    }
  };

  return { handleDeleteSubtask };
};

export default useSubtaskActions;
