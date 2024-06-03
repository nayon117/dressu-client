import { Dialog, Transition } from "@headlessui/react";
import { Elements } from "@stripe/react-stripe-js";
import { Fragment, useState } from "react";
import CheckoutForm from "../Form/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const DetailModal = ({ closeModal, isOpen, itemInfo }) => {
  const [address, setAddress] = useState("");
  const [district, setDistrict] = useState("");
  const [division, setDivision] = useState("");
  const [isAddressValid, setIsAddressValid] = useState(true);

  const validateAddress = () => {
    if (!address || !district || !division) {
      setIsAddressValid(false);
      return false;
    }
    setIsAddressValid(true);
    return true;
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium text-center leading-6 text-gray-900"
                >
                  Order Summary
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Product: {itemInfo?.name}
                  </p>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Size: {itemInfo.selectedSize}
                  </p>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Brand: {itemInfo?.brand}
                  </p>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    details: {itemInfo.short_details}
                  </p>
                </div>

                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    price: $ {itemInfo.price.toFixed(2)}
                  </p>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Quantity: {itemInfo?.selectedQuantity}
                  </p>
                </div>


                 <div className="mt-2">
                    <label className="text-sm text-gray-500">Shipping Address: </label>
                    <input
                      type="text"
                      className="bg-third p-2 outline-none border-none"
                      placeholder="Address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mt-2">
                    <label className="text-sm text-gray-500">District: </label>
                    <input
                      type="text"
                      className="bg-third p-2 outline-none border-none"
                      placeholder="District"
                      value={district}
                      onChange={(e) => setDistrict(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mt-2">
                    <label className="text-sm text-gray-500">Division: </label>
                    <input
                      type="text"
                      className="bg-third p-2 outline-none border-none"
                      placeholder="Division"
                      value={division}
                      onChange={(e) => setDivision(e.target.value)}
                      required
                    />
                  </div>


                <div className="mt-2">
                  <p className="text-sm text-gray-500">Country: Bangladesh</p>
                </div>
                {!isAddressValid && (
                  <p className="text-red-600 mt-2">
                    Please fill in all address fields.
                  </p>
                )}
                <hr className="mt-8 " />
                {/* Card data form */}
                <Elements stripe={stripePromise}>
                  <CheckoutForm closeModal={closeModal} 
                   itemInfo={{ ...itemInfo, address, district, division}}
                   validateAddress={validateAddress}
                   />
                </Elements>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default DetailModal;
