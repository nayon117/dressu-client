import axiosSecure from "."

// save user information in database
export const saveUser = async (user) => {
    const currentUser = {
        email: user?.email,
        role: 'student',
        status:'verified'
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