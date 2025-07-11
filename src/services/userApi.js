import { axiosClient } from "../utils/AxiosClient"

export const handleGetUser= async()=>{
   return  axiosClient.get('/user/getuser');
}

export const handleGetAuthorProfile=async({id})=>{
   return axiosClient.get(`/user/getuser/${id}`)
}


export const handleLogout=async()=>{
   return axiosClient.post('/auth/logout');
}