import { useEffect, useState } from "react";
import DetailModal from "../../components/Modal/DetailModal";
import useAuth from "../../hooks/useAuth";
import Loader from "../../components/Shared/Loader";

const DetailsCard = ({ detailInfo }) => {
  const { title, image, price, details, name, email } = detailInfo || {};
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  const closeModal = () => {
    setIsOpen(false);
  };

  const [itemInfo, setItemInfo] = useState(null);

  useEffect(() => {
    if (user && detailInfo) {
      const newInfo = {
        stName: user.displayName || "",
        stEmail: user.email || "",
        stImage: user.photoURL || "",
        title: detailInfo?.title,
        name:detailInfo?.name,
        price: detailInfo?.price,
        image: detailInfo?.image,
        details: detailInfo?.details,
        email: detailInfo?.email,
        classId: detailInfo?._id,
      };
      setItemInfo(newInfo);
    }
  }, [user, detailInfo]);

  if (!itemInfo) {
    return <div>
      <Loader/>
    </div>;  
  }
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
            <p className="text-xl font-medium py-4">{details}</p>
            <div className="flex justify-between mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
              <h2 className="font-medium">Instractor:{name}</h2>
              <h2 className="font-medium">Email:{email}</h2>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                $ { price}
              </span>
              <button
                onClick={() => setIsOpen(true)}
                className="flex ml-auto text-white bg-[#332883] border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded"
              >
                Pay now!
              </button>
              <DetailModal
                isOpen={isOpen}
                itemInfo={itemInfo}
                closeModal={closeModal}
              ></DetailModal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default DetailsCard;
