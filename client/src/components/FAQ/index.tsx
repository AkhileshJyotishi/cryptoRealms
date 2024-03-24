"use client";
import React from "react";
import { Disclosure } from "@headlessui/react";
import { IoIosArrowUp } from "react-icons/io";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is Lorem Ipsum?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    question: "Why do we use it?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    question: "Where does it come from?",
    answer:
      "Contrary to popular belief, Lorem Ipsum is not simply random text.",
  },
  {
    question: "What are the origins of Lorem Ipsum?",
    answer:
      "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
  {
    question: "Is Lorem Ipsum readable text?",
    answer:
      "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.",
  },
];

const FAQ = () => {
  return (
    <div className="w-full flex flex-col gap-4 mx-4 my-10">
      <div className="w-[90%] mx-auto text-3xl font-[600]">
        <span className="px-4">-</span> FAQ's
      </div>
      <div className="w-full px-4">
        <div className="min-w-[90%] max-w-[840px] mx-auto">
          {faqData.map((faq, ind) => {
            return (
              <Disclosure as="div" key={ind} className={"w-full m-2  "}>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full border-l-4 border-[#F24405]  justify-between bg-[#121212] px-6 py-4 text-left text-sm font-medium text-white  ">
                      <span>{faq.question}</span>
                      <IoIosArrowUp
                        className={`${
                          open ? "" : "rotate-180 transform"
                        } h-5 w-5 text-[#F24405]`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-6 py-3 w-full text-sm text-gray-200">
                      {faq.answer}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
