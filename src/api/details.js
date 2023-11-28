import axiosSecure from "."

export const createPaymentIntent = async price => {
    const { data } = await axiosSecure.post('/create-payment-intent', price)
    return data
}
  
// save item info in db
export const saveItemInfo = async paymentInfo => {
    const { data } = await axiosSecure.post('/bookings', paymentInfo)
    return data
  }