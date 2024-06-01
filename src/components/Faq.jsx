import { useState } from "react";

const Faq = () => {
  const [isOpen, setIsOpen] = useState(null);
  const faqData = [
    {
      title: "How do I track my order?",
      description:
        "Once your order has been shipped, you will receive a tracking number via email. You can use this tracking number to track the status of your delivery on our website or through the courier's website.",
    },
    {
      title: "What is your sizing guide?",
      description:
        "We provide a detailed sizing guide for each product to help you choose the right size. You can find the sizing guide on the product page under the 'Size Chart' section.",
    },
    {
      title: "Do you offer international shipping?",
      description:
        "Yes, we offer international shipping to most countries. Shipping rates and delivery times may vary depending on your location. Please refer to our shipping policy for more information.",
    },
    {
      title: "How can I return or exchange an item?",
      description:
        "If you're not satisfied with your purchase, you can return or exchange it within 30 days of delivery. Please visit our returns page for detailed instructions and to initiate a return or exchange.",
    },
  ];

  const toggle = (idx) => {
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
  };

  return (
    <div className="mt-12 rounded-lg">
      <div>
        <h1 className="title text-center">Frequently Asked Questions</h1>
      </div>
      <div className="mt-12">
        {faqData.map((faq, idx) => (
          <div key={idx} className="border-b border-gray-500 last-of-type:border-none">
            <button onClick={() => toggle(idx)} className="flex h-full w-full items-center justify-between py-4 font-medium text-white dark:text-black">
              <span className="sm:text-lg md:text-xl">{faq.title}</span>
              <span className="rounded-full p-2">
                <svg className="ml-8 mr-7 shrink-0 fill-[#fff]" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                  <rect y="7" width="16" height="2" rx="1" className={`origin-center transform transition duration-200 ease-out ${isOpen === idx && '!rotate-180'}`} />
                  <rect y="7" width="16" height="2" rx="1" className={`origin-center rotate-90 transform transition duration-200 ease-out ${isOpen === idx && '!rotate-180'}`} />
                </svg>
              </span>
            </button>
            <div className={`grid overflow-hidden text-gray-400 transition-all duration-300 ease-in-out ${isOpen === idx ? 'grid-rows-[1fr] pb-3 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
              <div className="overflow-hidden">{faq.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
