import api from '../api/API'

export const login=async(data)=>{
    try{
        const res=api.post('/login',data)
        return res.data
    }catch(e){
        throw e
    }
}