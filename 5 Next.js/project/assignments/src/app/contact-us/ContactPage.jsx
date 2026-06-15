import Link from "next/link";

export default function ContactPage() {
    return (
        <section className="max-w-7xl mx-auto  px-4 py-6">
            {/* Heading */}
            <div className="text-center  mb-5">
                <h1 className="text-4xl font-serif font-bold">
                    Contact Us
                </h1>

                <p className="text-sm text-gray-500 mt-2">

                    <Link href={'/'}>  Home  </Link> <span className=" ml-3 text-[#bf9477] " > &gt; Contact Us </span>
                </p>
            </div>

            {/* Map */}
            <div className="border-t border-[#ebebeb] pt-6 mb-12 ">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.6255114907312!2d73.0306057!3d26.2738149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c5b1dfafdd7%3A0xf992fd41c21a238e!2sLaxmi%20Dairy%20%26%20Provision%20Store!5e0!3m2!1sen!2sin!4v1780948745602!5m2!1sen!2sin"
                    className="w-full h-100"
                    loading="lazy"
                ></iframe>



            </div>

            {/* Contact + Form */}
            <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div>
                    <h2 className="text-3xl font-serif font-bold mb-8">
                        Contact Us
                    </h2>

                    <div className="space-y-5">
                        <div className="border-b border-[#ebebeb]  pb-4">
                            <p className="text-gray-600">
                                📍 Address: Claritas est etiam
                                processus dynamicus
                            </p>
                        </div>

                        <div className="border-b  border-[#ebebeb]   pb-4">
                            <p className="text-gray-600">
                                📞 98745612330
                            </p>
                        </div>

                        <div className="border-b  border-[#ebebeb]   pb-4">
                            <p className="text-gray-600">
                                ✉️ furniture@gmail.com
                            </p>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div>
                    <h2 className="text-3xl font-serif font-bold mb-8">
                        Tell Us Your Question
                    </h2>

                    <form className="space-y-5">
                        <div>
                            <label className="block mb-2 font-medium">
                                Your Name (required)
                            </label>

                            <input
                                type="text"
                                placeholder="Name *"
                                className="w-full border  border-[#ebebeb]   px-4 py-3 outline-none focus:border-black"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 font-medium">
                                Your Email (required)
                            </label>

                            <input
                                type="email"
                                placeholder="Email *"
                                className="w-full  border-[#ebebeb]   border px-4 py-3 outline-none focus:border-black"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 font-medium">
                                Your Mobile Number (required)
                            </label>

                            <input
                                type="tel"
                                placeholder="Mobile Number *"
                                className="w-full  border-[#ebebeb]   border px-4 py-3 outline-none focus:border-black"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 font-medium">
                                Subject
                            </label>

                            <input
                                type="text"
                                placeholder="Subject *"
                                className="w-full      border-[#ebebeb]   border px-4 py-3 outline-none focus:border-black"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 font-medium">
                                Your Message
                            </label>

                            <textarea
                                rows="6"
                                placeholder="Message *"
                                className="w-full border  border-[#ebebeb]   px-4 py-3 outline-none focus:border-black resize-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="bg-black cursor-pointer rounded text-white px-8 py-3 hover:bg-gray-800 transition"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}