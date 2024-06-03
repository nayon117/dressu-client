import { useEffect, useState } from "react";
import Card from "../../components/Shared/Card";
import useAxiosPublic from "../../api/useAxiosPublic";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [category, setCategory] = useState("");
  const [sortPrice, setSortPrice] = useState("");
  const [count, setCount] = useState(0);
  const axiosPublic = useAxiosPublic();

  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];

  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        page: currentPage,
        size: itemsPerPage,
        category: category || "",
        sort: sortPrice || "",
      };
    
      try {
        const { data } = await axiosPublic.get(`/products?${new URLSearchParams(params).toString()}`);
        setProducts(data.products);
        setCount(data.count);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [axiosPublic, currentPage, itemsPerPage, category, sortPrice]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleItemsPerPage = (e) => {
    const val = parseInt(e.target.value);
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

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setCurrentPage(0);
  };

  const handleSortPriceChange = (e) => {
    setSortPrice(e.target.value);
    setCurrentPage(0);
  };

  const filteredApproved = products.filter((approves) =>
    approves.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="mt-12">
      <div>
        <input
          type="text"
          placeholder="search here ..."
          className="outline-none p-3 rounded-md border-none bg-third block mx-auto w-full max-w-md"
          onChange={handleSearchChange}
          value={searchQuery}
        />
      </div>
      <div className="flex items-center justify-between mt-12">
        <div>
          <select
            onChange={handleCategoryChange}
            value={category}
            className="btn mx-2 btn-sm bg-second text-white outline-none border-none hover:bg-white hover:text-second"
          >
            <option value="">All Categories</option>
            <option value="Shirt">Shirt</option>
            <option value="Pant">Pant</option>
            <option value="Outerwear">Outerwear</option>
            <option value="Activewear">Activewear</option>
          </select>
        </div>
        <div>
          <select
            onChange={handleSortPriceChange}
            value={sortPrice}
            className="btn mx-2 btn-sm bg-second text-white outline-none border-none hover:bg-white hover:text-second"
          >
            <option value="">Sort by Price</option>
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High to Low</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredApproved?.map((item) => (
          <Card key={item._id} item={item}></Card>
        ))}
      </div>
      <div className="flex mt-12 items-center justify-center">
        <button
          onClick={handlePrevPage}
          className="btn mx-2 btn-sm bg-first hover:bg-white hover:text-first text-white"
        >
          Prev
        </button>
        {pages?.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`btn mr-2 btn-sm ${
              page === currentPage
                ? "bg-red-500"
                : "bg-second hover:bg-white hover:text-second"
            } text-white`}
          >
            {page + 1}
          </button>
        ))}
        <button
          onClick={handleNextPage}
          className="btn mx-2 btn-sm bg-first hover:bg-white hover:text-first text-white"
        >
          Next
        </button>
        <select
          onChange={handleItemsPerPage}
          value={itemsPerPage}
          className="btn mr-2 btn-sm bg-second text-white outline-none hover:bg-white hover:text-second"
        >
          <option value="5">5</option>
          <option value="10">10</option>
        </select>
      </div>
    </div>
  );
};

export default Shop;
