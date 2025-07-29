import axiosInstance from "./axios.js";

const taskService = {
  
  createTask: async (projectId, assignedTo, taskData) => {
    const res = await axiosInstance.post(`/task/${projectId}/n/${assignedTo}`, taskData);
    return res.data;
  },

  
  updateTask: async (taskId, updatedData) => {
    const res = await axiosInstance.put(`/task/${taskId}`, updatedData);
    return res.data;
  },

 
  getTasks: async (projectId) => {
    const res = await axiosInstance.get(`/task/${projectId}`);
    return res.data;
  },

 
  getTaskById: async (taskId) => {
    const res = await axiosInstance.get(`/task/n/${taskId}`);
    return res.data;
  },


  deleteTask: async (taskId) => {
    const res = await axiosInstance.delete(`/task/${taskId}`);
    return res.data;
  },

 
  createSubTask: async (taskId, subTaskData) => {
    const res = await axiosInstance.post(`/task/${taskId}`, subTaskData);
    return res.data;
  },


  updateSubTask: async (subTaskId, updatedData) => {
    const res = await axiosInstance.put(`/task/n/${subTaskId}`, updatedData);
    return res.data;
  },

  
  deleteSubTask: async (subTaskId) => {
    const res = await axiosInstance.delete(`/task/n/${subTaskId}`);
    return res.data;
  },

  getAllSubtasks : async(taskId)=>{
const res = await axiosInstance.get(`/task/s/${taskId}`);
    return res.data;
  }
};

export default taskService;
