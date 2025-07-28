import { create } from 'zustand';
import toast from 'react-hot-toast';
import taskService from '../api/taskService.js';

const useTaskStore = create((set, get) => ({
  projectId: null, // store the current projectId
  allTasks: [],
  allSubtasks: [],
  task: null,
  subTask: null,
  fetchingAllTasks: false,

  setProjectId: (id) => set({ projectId: id }),

  getAllTasks: async (projectId = get().projectId) => {
    try {
      set({ fetchingAllTasks: true });
      const res = await taskService.getTasks(projectId);
      set({ allTasks: res.tasks });
      toast.success('All tasks fetched');
    } catch (error) {
      console.error('Error getting all tasks', error);
      toast.error('Error getting all tasks');
    } finally {
      set({ fetchingAllTasks: false });
    }
  },

  getTaskById: async (taskId) => {
    try {
      const res = await taskService.getTaskById(taskId);
      set({ task: res.task });
      toast.success('Task fetched');
    } catch (error) {
      console.error('Error getting task', error);
      toast.error('Error getting task');
    }
  },

  createTask: async (projectId, assignedTo, taskData) => {
    try {
      set({ projectId }); // Save projectId for future use
      const res = await taskService.createTask(projectId, assignedTo, taskData);
      set({ task: res.task });
      set((state) => ({
        allTasks: [...state.allTasks, res.task]
      }));
      toast.success('Task created');
    } catch (error) {
      console.error('Error creating task', error);
      toast.error('Error creating task');
    }
  },

  updateTask: async (taskId, updatedData) => {
    try {
      const res = await taskService.updateTask(taskId, updatedData);
      set({ task: res.task });

      const projectId = get().projectId;
      if (projectId) await get().getAllTasks(projectId);

      toast.success('Task updated');
    } catch (error) {
      console.error('Error updating task', error);
      toast.error('Error updating task');
    }
  },

  deleteTask: async (taskId) => {
    try {
      await taskService.deleteTask(taskId);
      set({ task: null });
      set((state) => ({
        allTasks: state.allTasks.filter(task => task._id !== taskId)
      }));
      
      const projectId = get().projectId;
      if (projectId) await get().getAllTasks(projectId);

      toast.success('Task deleted');
    } catch (error) {
      console.error('Error deleting task', error);
      toast.error('Error deleting task');
    }
  },

  createSubTask: async (taskId, subTaskData) => {
    try {
      const res = await taskService.createSubTask(taskId, subTaskData);
      set({ subTask: res.subTask });

      const projectId = get().projectId;
      if (projectId) await get().getAllTasks(projectId);

      toast.success('Subtask created');
    } catch (error) {
      console.error('Error creating subtask', error);
      toast.error('Error creating subtask');
    }
  },

  updateSubTask: async (subTaskId, updatedData) => {
    try {
      const res = await taskService.updateSubTask(subTaskId, updatedData);
      set({ subTask: res.subTask });

      const projectId = get().projectId;
      if (projectId) await get().getAllTasks(projectId);

      toast.success('Subtask updated');
    } catch (error) {
      console.error('Error updating subtask', error);
      toast.error('Error updating subtask');
    }
  },

  deleteSubTask: async (subTaskId) => {
    try {
      await taskService.deleteSubTask(subTaskId);
      set({ subTask: null });

      set((state) => ({
        allSubtasks: state.allSubtasks.filter(st => st._id !== subTaskId)
      }));

      const projectId = get().projectId;
      if (projectId) await get().getAllTasks(projectId);

      toast.success('Subtask deleted');
    } catch (error) {
      console.error('Error deleting subtask', error);
      toast.error('Error deleting subtask');
    }
  },
}));

export default useTaskStore;
