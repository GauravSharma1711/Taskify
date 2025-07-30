import axiosInstance from "./axios.js";

const noteService = {

    getAllNotes  : async (projectId) =>{
        const res = await axiosInstance.get(`/note/${projectId}`);
   return res.data;
    },

    getNoteById  : async (noteId) =>{
        const res = await axiosInstance.get(`/note/n/${noteId}`);
           return res.data;
    },

    createNote  : async (projectId,noteData) =>{
        const res = await axiosInstance.post(`/note/${projectId}`,noteData);
         return res.data;
    },
    
updateNote  : async (projectId,noteId,updatedData) =>{
   
    const res = await axiosInstance.put(`/note/${projectId}/n/${noteId}`,updatedData);



 return res.data;
},
deleteNote  : async (id) =>{
    const res = await axiosInstance.delete(`/note/${id}`);
   return res.data;
}

}


export default noteService;