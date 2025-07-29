import { create } from 'zustand';
import toast from 'react-hot-toast';
import projectService from '../api/projectService';

const useProjectStore = create((set, get) => ({
  projects: [],
  myProjects: [],
  selectedProject: null,
  projectMembers: [],

 
  fetchAllProjects: async () => {
    try {
      const res = await projectService.getAllProjects();
      set({ projects: res.projects });
    } catch (error) {
      toast.error("Failed to fetch all projects");
      console.error("fetchAllProjects error:", error);
    }
  },

 
  fetchMyProjects: async () => {
    try {
      const res = await projectService.getProjectsByMe();
      set({ myProjects: res.myprojects });
      
    } catch (error) {
      toast.error("Failed to fetch my projects");
      console.error("fetchMyProjects error:", error);
    }
  },

  
  fetchProjectById: async (projectId) => {
    try {
      const res = await projectService.getProjectById(projectId);
      set({ selectedProject: res.project });
    } catch (error) {
      toast.error("Failed to fetch project");
      console.error("fetchProjectById error:", error);
    }
  },

  
  createProject: async (projectData) => {
    try {
      const res = await projectService.CreateProject(projectData);
      toast.success("Project created");
      // Add to myProjects state
      set((state) => ({
        myProjects: [...state.myProjects, res.project]
      }));
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to create project");
      console.error("createProject error:", error);
    }
  },

  // Update project
  updateProject: async (projectId, updatedData) => {
    try {
      await projectService.updateProject(projectId, updatedData);
      toast.success("Project updated");
      await get().fetchMyProjects(); // Refresh projects
    } catch (error) {
      toast.error("Failed to update project");
      console.error("updateProject error:", error);
    }
  },

  
  deleteProject: async (projectId) => {
    try {
      await projectService.deleteProject(projectId);
      toast.success("Project deleted");
      set((state) => ({
        myProjects: state.myProjects.filter(p => p._id !== projectId)
      }));
    } catch (error) {
      toast.error("Failed to delete project");
      console.error("deleteProject error:", error);
    }
  },

  
  fetchProjectMembers: async (projectId, memberId) => {
    try {
      const res = await projectService.getProjectMembers(projectId, memberId);
      set({ projectMembers: res.projectMembers });
    } catch (error) {
      toast.error("Failed to fetch project members");
      console.error("fetchProjectMembers error:", error);
    }
  },


  addMemberToProject: async (projectId, memberId) => {
    try {
      await projectService.addProjectMembers(projectId, memberId);
      toast.success("Member added");
      await get().fetchProjectMembers(projectId, memberId); // Refresh members
    } catch (error) {
      toast.error("Failed to add member");
      console.error("addMemberToProject error:", error);
    }
  },

  // Update member role
  updateMemberRole: async (projectId, memberId) => {
    try {
      await projectService.updateProjectMembers(projectId, memberId);
      toast.success("Member role updated");
      await get().fetchProjectMembers(projectId, memberId);
    } catch (error) {
      toast.error("Failed to update member role");
      console.error("updateMemberRole error:", error);
    }
  },

  // Delete member
  deleteMember: async (projectId, memberId) => {
    try {
      await projectService.deleteProjectMembers(projectId, memberId);
      toast.success("Member removed");
      await get().fetchProjectMembers(projectId, memberId);
    } catch (error) {
      toast.error("Failed to remove member");
      console.error("deleteMember error:", error);
    }
  },

 
}));

export default useProjectStore;
