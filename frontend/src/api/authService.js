import axiosInstance from "./axios.js";
import {StorageKeys} from '../utils/constants.js'

const authService = {

    register : async(userData) =>{
        const res = await axiosInstance.post('/auth/register',userData);
       
        
        return res.data;
    },
    
    login : async(userData)=>{
        const res = await axiosInstance.post('/auth/login',userData);
        return res.data;
    },

    logout: async ()=>{
        const res = await axiosInstance.delete('/auth/logout');
        localStorage.removeItem(StorageKeys.ACCESS_TOKEN);
        localStorage.removeItem(StorageKeys.REFRESH_TOKEN);
        return res.data;
    },

    getCurrentUser : async ()=>{
        const res = await axiosInstance.get('/auth/currentUser');
        return res.data;
    },


    forgotPasswordRequest : async (email) =>{
        const res = await axiosInstance.post('/forgotPassword',{email});
        return res.data;

    },
    
    changeCurrentPassword : async (data) =>{
        const res = await axiosInstance.post('/auth/changeCurrentPassword',data);
        return res
    },

    updateProfile : async (data)=>{
         const res = await axiosInstance.post('/auth/updateProfile',data);
     
       
        return res.data
    },

    getAllUsers  : async ()=>{
        const res = await axiosInstance.get('/auth/all');
        return res.data;
    }

}

export default authService