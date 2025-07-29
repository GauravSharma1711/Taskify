
import axiosInstance from "./axios.js";

const projectService = {

    getAllProjects : async ()=>{
        const res = await axiosInstance.get('/project/all');
         return res.data;
    },

    getProjectsByMe : async ()=>{
        const res = await axiosInstance.get('/project/me');
        return res.data
    },

     getProjectById : async (projectId)=>{
        const res = await axiosInstance.get(`/project/${projectId}`);
         return res.data;
    },
    CreateProject : async (projectData)=>{
        const res = await axiosInstance.post('/project/create',projectData);
        return res.data;
    },

  updateProject: async (projectId, updatedData) => {
  const res = await axiosInstance.put(`/project/${projectId}`, updatedData);
  return res.data;
},

  deleteProject: async (projectId) => {
  const res = await axiosInstance.delete(`/project/${projectId}`);
  return res.data;
},
getProjectMembers: async (projectId,memberId) => {
  const res = await axiosInstance.get(`/${projectId}/n/${memberId}`);
  return res.data;
},
addProjectMembers: async (projectId,memberId) => {
  const res = await axiosInstance.post(`/${projectId}/n/${memberId}`);
  return res.data;
},
updateProjectMembers: async (projectId,memberId) => {
  const res = await axiosInstance.put(`/${projectId}/n/${memberId}`);
  return res.data;
},
deleteProjectMembers: async (projectId,memberId) => {
  const res = await axiosInstance.delete(`/${projectId}/n/${memberId}`);
  return res.data;
},

}


export default projectService;