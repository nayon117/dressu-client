const Stats = () => {
    return (
      <div className="mt-12 px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Statscape & Visuals</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 md:mr-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-medium mb-4">Total Users: 12</h2>
              <h2 className="text-2xl font-medium mb-4">Total Classes: 55</h2>
              <h2 className="text-2xl font-medium">Total Enrollments: 42</h2>
            </div>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
          
            <img
              src="https://i.ibb.co/XkrwVyD/priscilla-du-preez-Xk-KCui44i-M0-unsplash.jpg"
              alt="Educational Image"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default Stats;
  