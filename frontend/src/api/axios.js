import axios from 'axios'

import {StorageKeys} from '../utils/constants.js'

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api/v1"

const axiosInstance = axios.create({
    baseURL:API_URL,
    withCredentials:true,
    timeout:10000
})

axiosInstance.interceptors.request.use(
    (config) =>  {
        const token = localStorage.getItem(StorageKeys.ACCESS_TOKEN)
        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error)=>Promise.reject(error)
)

axiosInstance.interceptors.response.use(
    (response) => response,

    async(error)=>{
        const originalRequest  = error.config
        if(error.response?.status === 401 && !originalRequest._retry){
              originalRequest._retry = true

              try {
                const refreshToken = localStorage.getItem(StorageKeys.REFRESH_TOKEN);

                if(!refreshToken){
                    localStorage.removeItem(StorageKeys.ACCESS_TOKEN);
                    window.location.href = '/login'
                    return Promise.reject(error);
                }

                const res = await axios.post(
                    `${API_URL}/auth/refreshAccessToken`,
                    {refreshToken},
                    {
                        withCredentials:true
                    }
                )

                  if(res.data?.data?.accessToken){
            localStorage.setItem(StorageKeys.ACCESS_TOKEN,res.data.data.accessToken)
        }
           if(res.data?.data?.refreshToken){
            localStorage.setItem(StorageKeys.REFRESH_TOKEN,res.data.data.refreshToken)
        }

          originalRequest.headers.Authorization = `Bearer ${res.data.data.accessToken}`

          return axiosInstance(originalRequest)

              } catch (error) {
                localStorage.removeItem(StorageKeys.ACCESS_TOKEN)
                localStorage.removeItem(StorageKeys.REFRESH_TOKEN)
                window.location.href='/login'

                return Promise.reject(error)
              }


        }
    }
)

export default axiosInstance