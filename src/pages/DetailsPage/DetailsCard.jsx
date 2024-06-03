import { useEffect, useState } from "react";
import DetailModal from "../../components/Modal/DetailModal";
import useAuth from "../../hooks/useAuth";
import Loader from "../../components/Shared/Loader";
import Swal from "sweetalert2";
import useAxiosPublic from "../../api/useAxiosPublic";
import useCart from "../../hooks/useCart";
import { useNavigate } from "react-router-dom";

const DetailsCard = ({ detailInfo }) => {
  const {
    _id,
    name,
    image,
    price,
    long_details,
    brand,
    category,
    short_details,
    size,
  } = detailInfo || {};
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState("L");
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const closeModal = () => {
    setIsOpen(false);
  };

  const [itemInfo, setItemInfo] = useState(null);

  useEffect(() => {
    if (user && detailInfo) {
      const newInfo = {
        userName: user.displayName || "",
        userEmail: user.email || "",
        userImage: user.photoURL || "",
        title: detailInfo?.title,
        name: detailInfo?.name,
        price: detailInfo?.price * selectedQuantity,
        image: detailInfo?.image,
        long_details: detailInfo?.long_details,
        productId: detailInfo?._id,
        brand: detailInfo?.brand,
        category: detailInfo?.category,
        short_details: detailInfo?.short_details,
      };
      setItemInfo(newInfo);
    }
  }, [user, detailInfo,selectedQuantity]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!itemInfo) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  const handleAddToCart = () => {
    if (user && user.email) {
      // send to database
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
        size,
        brand,
        category,
      };
      axiosPublic.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your successfully`,
            showConfirmButton: false,
            timer: 1500,
          });
          // refetch cart to update the cart items count
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not logged in?",
        text: "Please log in to add to the cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, log In!",
      }).then((result) => {
        if (result.isConfirmed) {
          // send the user to login page
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  const handleIncrementQuantity = () => {
    setSelectedQuantity(selectedQuantity + 1);
  };

  const handleDecrementQuantity = () => {
    if (selectedQuantity > 1) {
      setSelectedQuantity(selectedQuantity - 1);
    }
  };

  return (
    <div className="font-sans bg-white">
      <div className="p-6 lg:max-w-7xl max-w-4xl mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
          <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
            <div className="px-4 py-10 rounded-xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative">
              <img
                src={image}
                alt="Product"
                className="w-4/5 rounded object-cover"
              />
              <button type="button" className="absolute top-4 right-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  fill="#ccc"
                  className="mr-1 hover:fill-[#333]"
                  viewBox="0 0 64 64"
                >
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-2xl font-extrabold text-[#333]">{name}</h2>
            <div className="flex flex-wrap gap-4 mt-4">
              <p className="text-[#333] text-3xl font-bold">${(price * selectedQuantity).toFixed(2)}</p>
              <p className="text-gray-400 text-lg">
                <strike>$99</strike>
                <span className="text-sm ml-1">Tax included</span>
              </p>
            </div>

            <div className="flex space-x-2 mt-4">
              <svg
                className="w-5 fill-[#333]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-5 fill-[#333]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-5 fill-[#333]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-5 fill-[#333]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-5 fill-[#CED5D8]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <h4 className="text-[#333] text-base">500 Reviews</h4>
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-bold text-gray-800">Choose a Size</h3>
              <div className="flex flex-wrap gap-3 mt-4">
                {size.map((sizeOption) => (
                  <button
                    key={sizeOption}
                    type="button"
                    className={`w-10 h-10 border-2 rounded-full shrink-0 ${
                      selectedSize === sizeOption
                        ? "bg-[#333] text-white"
                        : "bg-gray-100 text-[#333]"
                    }`}
                    onClick={() => setSelectedSize(sizeOption)}
                  >
                    {sizeOption}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4 mt-4">
              <span className="text-[#333] font-bold">Quantity:</span>
              <div className="flex items-center border border-gray-300 rounded-md">
                <button
                  onClick={handleDecrementQuantity}
                  className="px-3 py-1 bg-gray-200 hover:bg-gray-300 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 12H4"
                    />
                  </svg>
                </button>
                <span className="px-3 py-1">{selectedQuantity}</span>
                <button
                  onClick={handleIncrementQuantity}
                  className="px-3 py-1 bg-gray-200 hover:bg-gray-300 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-10">
              <button
                onClick={() => setIsOpen(true)}
                type="button"
                className="min-w-[200px] px-4 py-3 bg-[#333] hover:bg-[#111] text-white text-sm font-semibold rounded"
              >
                Buy now
              </button>
              <DetailModal
                isOpen={isOpen}
                itemInfo={{ ...itemInfo, selectedSize,selectedQuantity }}
                closeModal={closeModal}
              />
              <button
                onClick={handleAddToCart}
                type="button"
                className="min-w-[200px] px-4 py-2.5 border border-[#333] bg-transparent hover:bg-gray-50 text-[#333] text-sm font-semibold rounded"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>

        {/* product information */}
        <div className="mt-16 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
          <h3 className="text-lg font-bold text-[#333]">Product information</h3>
          <ul className="mt-6 space-y-6 text-[#333]">
            <li className="text-sm">
              Name <span className="ml-4 float-right">{name}</span>
            </li>
            <li className="text-sm">
              Details <span className="ml-4 float-right">{short_details}</span>
            </li>
            <li className="text-sm">
              Additional Details{" "}
              <span className="ml-4 float-right">{long_details}</span>
            </li>
            <li className="text-sm">
              Category
              <span className="ml-4 float-right">{category}</span>
            </li>
            <li className="text-sm">
              Brand
              <span className="ml-4 float-right">{brand}</span>
            </li>
            <li className="text-sm">
              Size <span className="ml-4 float-right">{size.join(" , ")}</span>
            </li>
          </ul>
        </div>

        {/* review */}
        <div className="mt-16 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
          <h3 className="text-lg font-bold text-[#333]">Reviews(10)</h3>
          <div className="grid md:grid-cols-2 gap-12 mt-6">
            <div>
              <div className="space-y-3">
                <div className="flex items-center">
                  <p className="text-sm text-[#333] font-bold">5.0</p>
                  <svg
                    className="w-5 fill-[#333] ml-1"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <div className="bg-gray-400 rounded w-full h-2 ml-3">
                    <div className="w-2/3 h-full rounded bg-[#333]"></div>
                  </div>
                  <p className="text-sm text-[#333] font-bold ml-3">66%</p>
                </div>

                <div className="flex items-center">
                  <p className="text-sm text-[#333] font-bold">4.0</p>
                  <svg
                    className="w-5 fill-[#333] ml-1"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <div className="bg-gray-400 rounded w-full h-2 ml-3">
                    <div className="w-1/3 h-full rounded bg-[#333]"></div>
                  </div>
                  <p className="text-sm text-[#333] font-bold ml-3">33%</p>
                </div>

                <div className="flex items-center">
                  <p className="text-sm text-[#333] font-bold">3.0</p>
                  <svg
                    className="w-5 fill-[#333] ml-1"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <div className="bg-gray-400 rounded w-full h-2 ml-3">
                    <div className="w-1/6 h-full rounded bg-[#333]"></div>
                  </div>
                  <p className="text-sm text-[#333] font-bold ml-3">16%</p>
                </div>

                <div className="flex items-center">
                  <p className="text-sm text-[#333] font-bold">2.0</p>
                  <svg
                    className="w-5 fill-[#333] ml-1"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <div className="bg-gray-400 rounded w-full h-2 ml-3">
                    <div className="w-1/12 h-full rounded bg-[#333]"></div>
                  </div>
                  <p className="text-sm text-[#333] font-bold ml-3">8%</p>
                </div>

                <div className="flex items-center">
                  <p className="text-sm text-[#333] font-bold">1.0</p>
                  <svg
                    className="w-5 fill-[#333] ml-1"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <div className="bg-gray-400 rounded w-full h-2 ml-3">
                    <div className="w-[6%] h-full rounded bg-[#333]"></div>
                  </div>
                  <p className="text-sm text-[#333] font-bold ml-3">6%</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start">
                <img
                  src="https://readymadeui.com/team-2.webp"
                  className="w-12 h-12 rounded-full border-2 border-white"
                />
                <div className="ml-3">
                  <h4 className="text-sm font-bold text-[#333]">John Doe</h4>
                  <div className="flex space-x-1 mt-1">
                    <svg
                      className="w-4 fill-[#333]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg
                      className="w-4 fill-[#333]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg
                      className="w-4 fill-[#333]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg
                      className="w-4 fill-[#CED5D8]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg
                      className="w-4 fill-[#CED5D8]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <p className="text-xs !ml-2 font-semibold text-[#333]">
                      2 mins ago
                    </p>
                  </div>
                  <p className="text-sm mt-4 text-[#333]">
                    Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                    eiusmod tempor incidunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="w-full mt-10 px-4 py-2.5 bg-transparent hover:bg-gray-50 border border-[#333] text-[#333] font-bold rounded"
              >
                Read all reviews
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailsCard;
