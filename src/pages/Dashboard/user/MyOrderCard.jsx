

const MyOrderCard = ({ enroll }) => {
  const {  image, name, brand, short_details,selectedSize } = enroll || {};

  return (
    <div className="relative flex mx-auto w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
        <img src={image} alt="image" className="object-cover w-full h-full" />
      </div>
      <div className="p-6">
        <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
          Product: {name}
        </h6>
        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          Brand: {brand}
        </h4>
        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          Size: {selectedSize}
        </h4>
        <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
         Info: {short_details}
        </p>
       
      </div>
    </div>
  );
};
export default MyOrderCard;
