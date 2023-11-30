import { useEffect, useState } from "react";
import ApprovedCard from "./ApprovedCard";
import { useLoaderData } from "react-router-dom";

const AllClasses = () => {
  const [approvedClasses, setApprovedClasses] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const { count } = useLoaderData();

  const numberOfPages = Math.ceil(count / itemsPerPage);

  const pages = [...Array(numberOfPages).keys()];

  useEffect(() => {
    fetch(
      `https://skillify-server-nine.vercel.app/class-add/approved?page=${currentPage}&size=${itemsPerPage}`
    )
      .then((res) => res.json())
      .then((data) => setApprovedClasses(data));
  }, [currentPage, itemsPerPage]);
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter  approved class based on the search query
  const filteredApproved = approvedClasses.filter((approves) =>
    approves.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleItemsPerPage = (e) => {
    const val = parseInt(e.target.value);
    console.log(val);
    setItemsPerPage(val);
    setCurrentPage(0);
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="mt-12">
      <div>
        <input
          type="text"
          placeholder="search here ..."
          className="input input-bordered   block mx-auto
        w-full max-w-xs"
          onChange={handleSearchChange}
          value={searchQuery}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredApproved?.map((approved) => (
          <ApprovedCard key={approved._id} approved={approved}></ApprovedCard>
        ))}
      </div>

      <div className="flex mt-12 items-center justify-center">
        <button
          onClick={handlePrevPage}
          className="btn mx-2 btn-sm bg-[#332883] hover:bg-white hover:text-[#332883] text-white"
        >
          Prev
        </button>
        {pages?.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className="btn mr-2 btn-sm bg-[#332883] hover:bg-white hover:text-[#332883] text-white focus:bg-red-500"
          >
            {page}
          </button>
        ))}
        <button
          onClick={handleNextPage}
          className="btn mx-2 btn-sm bg-[#332883] hover:bg-white hover:text-[#332883] text-white"
        >
          Next
        </button>
        <select
          onChange={handleItemsPerPage}
          value={itemsPerPage}
          className="btn mr-2 btn-sm bg-[#332883] text-white outline-none hover:bg-white hover:text-[#332883]"
        >
          <option value="5">5</option>
          <option value="10">10</option>
        </select>
      </div>
    </div>
  );
};
export default AllClasses;
