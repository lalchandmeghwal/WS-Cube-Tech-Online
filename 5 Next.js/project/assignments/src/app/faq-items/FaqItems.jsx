"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FaqItems = ()=> {
    const [openItems, setOpenItems] = useState([]);

    const faqItems = [
        {
            id: 1,
            question: "Morbi gravida, nisi id fringilla ultricies, elit lorem ipsum?",
            answer: "Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem",
        },
        {
            id: 2,
            question: "Aenean elit orci, efficitur quis nisl at, accumsan?",
            answer: "Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem",
        },
        {
            id: 3,
            question: "Aenean elit orci, efficitur quis nisl at, accumsan?",
            answer: "Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem",
        },
        {
            id: 4,
            question: "Pellentesque habitant morbi tristique senectus et netus?",
            answer: "Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem",
        },
        {
            id: 5,
            question: "Nam pellentesque aliquam metus?",
            answer: "Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem",
        },
        {
            id: 6,
            question: "Aenean elit orci, efficitur quis nisl at?",
            answer: "Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem",
        },
        
    ];

    const toggleFAQ = (id) => {
        if (openItems.includes(id)) {
            setOpenItems(openItems.filter((item) => item !== id));
        } else {
            setOpenItems([...openItems, id]);
        }
    };

    return (
        
            faqItems.map((item) => (
                <div
                    key={item.id}
                    className="  mb-4"
                >


                    <button
                        onClick={() => toggleFAQ(item.id)}
                        className={`w-full flex justify-between cursor-pointer   rounded-lg bg-[#f2f2f2]  items-center px-5 py-4  ${openItems.includes(item.id)
                            ? " border text-[#c7894d] "
                            : ""
                            } `}>
                        <span>{item.question}</span>

                        {openItems.includes(item.id) ? (
                            <Minus size={20} />
                        ) : (
                            <Plus size={20} />
                        )}
                    </button>

                    <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${openItems.includes(item.id)
                                ? "max-h-40 opacity-100"
                                : "max-h-0 opacity-0"
                            }`}
                    >
                        <div className={`p-5  border-[#c7894d] border  ${openItems.includes(item.id)
                            ? "border border-t-0 "
                            : ""
                            } `}>
                            <p>{item.answer}</p>
                        </div>
                    </div>
                </div>
            ))
        
    );
}

export default FaqItems 
