const DetailsCard = ({ details }) => {
  const { title, image, price,name,email } = details || {};

  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="course"
            className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
            src={image}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              Course NAME
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {title}
            </h1>
             
            <p className="text-xl font-medium py-4">{details.details}</p>
            <div className="flex justify-between mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                          <h2 className="font-medium">Instractor:{ name}</h2>
                          <h2 className="font-medium">Email:{ email}</h2>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                $ {price}
              </span>
              <button className="flex ml-auto text-white bg-[#332883] border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded">
                Pay
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default DetailsCard;
