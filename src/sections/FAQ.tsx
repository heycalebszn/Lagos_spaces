import React, {useState} from 'react';
import { Faq } from "../constants";
import { ArrowDown } from "lucide-react";

const FAQ = () => {
    const [openFaq, setOpenFaq] = useState<boolean>(false);

    const handleOpenFaq = () => {
        setOpenFaq(!openFaq);
    }
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {Faq.map((item, index) => (
                <div className="p-6" key={index}>
                    <div className="flex justify-between">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">{item.title}</h3>
                {openFaq ? (
                    <ArrowDown className="w-[20px] cursor-pointer rotate-[180deg] transition-all duration-300" onClick={handleOpenFaq} />
                ) : (
                    <ArrowDown className="w-[20px] cursor-pointer" onClick={handleOpenFaq} />
                )}
                </div>
                <p className={`text-gray-600 ${openFaq ? "flex transition-all duration-300" : "hidden"}`}>{item.desc}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
