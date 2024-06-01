
const Contact = () => {
    return (
        <section
        className="light py-14 md:py-24 overflow-hidden"
      >
        <div className="container px-4">
          <div className="grid grid-cols-12 py-6 lg:gap-8">
            <div className="col-span-12 lg:col-span-5 mb-12 lg:mb-0">
              <h2 className="text-2xl leading-none md:text-[45px] font-bold mb-6">How can we help you?</h2>
              <p className="text-lg">
                It’s easier to reach your savings goals when you have the right savings account. Take a look and find the
                right one for you!
              </p>
      
              <div className="mt-12 md:pt-6">
                <div className="shadow max-w-[350px] mt-6 flex items-center rounded-xl p-5">
                  <i className="fas fa-envelope-open-text text-3xl px-2"></i>
                  <a className="text-lg font-medium ml-4" href="mailto:email@dressU.com">email@dressU.com</a>
                </div>
                <div className="shadow max-w-[350px] mt-6 flex items-center rounded-xl p-5">
                  <i className="fas fa-phone-alt text-3xl px-2"></i>
                  <a className="text-lg font-medium ml-4" href="callto:123**56">+880 1942-0****0</a>
                </div>
                <div className=" shadow  max-w-[350px] mt-6 flex items-center rounded-xl p-5">
                  <i className="fas fa-hdd text-3xl px-2"></i>
                  <a className="text-lg font-medium ml-4" href="mailto:email@dressu.com">dressu.com</a>
                </div>
              </div>
            </div>
      
            <div className="col-span-12 lg:col-span-5 lg:col-start-8">
              <div className=" shadow-xl rounded-2xl p-6 md:p-12">
                <h2 className="text-2xl md:text-[45px] leading-none font-bold mb-4">Contact Us</h2>
                <p className="text-lg mb-12">We list your menu online, help you process orders.</p>
      
                <form className="">
                  <div className="mb-4">
                    <input
                      type="text"
                      className="p-3 rounded-md bg-third outline-none border-none  w-full"
                      placeholder="Enter Name"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="email"
                      className="p-3 rounded-md bg-third outline-none border-none  w-full"
                      placeholder="Enter Email"
                    />
                  </div>
                  <div className="mb-4">
                    <textarea
                      name="message"
                      className="p-3 rounded-md bg-third outline-none border-none  w-full"
                      placeholder="Enter Message"
                      rows="4"
                    ></textarea>
                  </div>
                  <div className="text-start">
                    <button type="submit" className="bg-first hover:bg-opacity-90 text-white px-8 py-3 rounded mb-4">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    )
}
export default Contact;