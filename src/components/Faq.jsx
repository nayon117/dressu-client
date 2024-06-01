const Faq = () => {
  return (
    <div className="mt-16">
      <h2 className="text-center text-4xl font-bold">
        Frequently asked questions
      </h2>
      <div className="collapse collapse-arrow  mt-12">
        <input type="radio" name="my-accordion-2" defaultChecked="checked" />
        <div className="collapse-title text-xl font-medium">
          What subjects or courses are available on your platform?
        </div>
        <div className="collapse-content">
          <p>
            Our platform offers a diverse range of courses covering subjects
            such as technology, business, arts, language, and more. You can
            explore our catalog to find courses suited to your interests and
            learning goals.
          </p>
        </div>
      </div>
      <div className="collapse my-6 collapse-arrow ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          How can I enroll in a course?
        </div>
        <div className="collapse-content">
          <p>
            Enrolling in a course is easy! Simply create an account on our
            platform, browse the available courses, and select the one you are
            interested in. Click on the Enroll or button to get started.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Are there any prerequisites for taking courses on your platform?
        </div>
        <div className="collapse-content ">
          <p>
          
            Most of our courses are designed to accommodate learners with
            varying levels of expertise
          </p>
        </div>
      </div>
    </div>
  );
};
export default Faq;
