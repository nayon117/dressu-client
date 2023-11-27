import axiosSecure from "."

// save user information in database
export const saveUser = async (user) => {
    const currentUser = {
        name:user?.displayName,
        email: user?.email,
        role: 'student',
        image:user?.photoURL
        
    }
    const { data } = await axiosSecure.put(`/users/${user?.email}`,currentUser)
    return data;
}

// get token 
export const getToken = async (email) => {
    const { data } = axiosSecure.post('/jwt', email)
    return data;
}

// clear token from browser
export const clearCookie = async () => {
    const { data } = await axiosSecure.get('/logout',)
    return data;
}

// get user role
export const getRole = async (email) => {
    const { data } = await axiosSecure(`/user/${email}`)
    return data?.role ;
}

// get all users 
export const getAllUsers = async () => {
    const { data } = await axiosSecure('/users')
    return data ;
}

// update user role
export const updateRole = async ({email,role}) => {
    const currentUser = {
         email,role
    }
    const { data } = await axiosSecure.put(`/users/update/${email}`,currentUser)
    return data;
}