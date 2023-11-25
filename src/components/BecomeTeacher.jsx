import { Link } from "react-router-dom";

const BecomeTeacher = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between mt-16 px-4">
      <div className="md:w-1/2 mb-6 md:mb-0">
        <img
          src="https://i.ibb.co/HF8Wjmv/airfocus-K-Veav-YEfd-A-unsplash.jpg"
          alt="Teacher Image"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
      <div className="md:w-1/2 md:ml-8">
        <h2 className="text-4xl font-bold mb-4">Become a Teacher</h2>
        <p className="text-lg mb-6">
          Join our platform as a teacher and share your knowledge with students
          around the world.
        </p>
        <Link to='/teach'>
          <button className="bg-[#332885] hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
            Start Teaching Today
          </button>
        </Link>
      </div>
    </section>
  );
};

export default BecomeTeacher;
