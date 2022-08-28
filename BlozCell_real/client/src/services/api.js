import axios from "axios"

export const getUsers = async(token) => {
    try{
        const response = await axios.get(`http://localhost:4000/users`,{
            headers:{
                token:token
            }
        });
        return response
    }
    catch(error){
        console.log(error)
    }
};

export const checkToken = async(token) => {
    try{
        const response = await axios.get('http://localhost:4000/user',{
            headers: {
              token: token,
            },
          })
        return response
    }    catch(error){
        console.log(error)
    }
}

export const deleteUserRest = async(id) => {
    try {
        return await axios.delete(`http://localhost:4000/users/${id}`)

    } catch (error) {
        console.log(error)
    }
}