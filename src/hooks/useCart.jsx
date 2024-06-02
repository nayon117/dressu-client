import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../api/useAxiosPublic";
import useAuth from "./useAuth";


const useCart = () => {
    //   tanstack query 
    const axiosPublic = useAxiosPublic();
    const {user} = useAuth()
    const {refetch, data:cart=[] } = useQuery({
        queryKey:['cart', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/carts?email=${user.email}`)
            return res.data
        }
    })
    return [cart,refetch]
};
export default useCart;