import toast from "react-hot-toast";

const NewsLetter = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    console.log(email);
    toast.success("subscription successful ");
  };

  return (
    <div className="my-20">
      <div className="mx-4 md:mx-12 py-8 md:py-12 grid place-content-center px-4 md:px-0">
        <div className="lg:flex justify-start lg:gap-28">
          <div >
            <h1 data-aos="fade-up" className="title">Newsletter</h1>
            <p className="pt-8 md:pt-4 subtitle">
              Sign up for our newsletter and get weekly updates. We only send
              emails about our latest products on the market once a week every
              Friday.
            </p>
            <form
              onSubmit={handleSubscribe}
              className="mt-8 md:flex justify-start md:gap-4"
            >
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                className=" w-full md:w-1/2 p-4 grid place-items-center bg-white border rounded-md focus:outline-none"
                required
              />
              <button data-tip="subscribe now" className="w-full md:w-auto bg-first text-white px-8 py-4 border rounded-md hover:bg-second tooltip  font-semibold mt-4 md:mt-0  ">
                Subscribe
              </button>
            </form>
            <p className="pt-4 text-xs text-gray-600">
              Read our privacy policy
              
            </p>
          </div>
          <div className="pt-8 lg:pt-0">
            <img
              src="https://i.ibb.co/4SzjWXT/pexels-andrea-piacquadio-3777566-1.png"
              alt="man in black suit holding brown paper"
              className="hidden lg:block"
            />
            <img
              src="https://i.ibb.co/W2q6bWQ/pexels-andrea-piacquadio-3777566-1-1.png"
              alt="man in black suit holding brown paper"
              className="hidden sm:block lg:hidden"
            />
            <img
              src="https://i.ibb.co/PMg7LjM/pexels-andrea-piacquadio-3777566-1sm.png"
              alt="man in black suit holding brown paper"
              className="sm:hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewsLetter;
