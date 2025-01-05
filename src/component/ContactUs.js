import React from "react";
import { useState } from "react";

const ContactUs = () => {

  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    message: "",
    phone_number: "",
    business_name: "",
  });

  const handleChange = (event) => {
    setContactInfo({
      ...contactInfo,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://formspree.io/f/mqazzvob", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contactInfo,
      }),
    });

    if (response.ok) {
      //   toast.success("Form submission successful!");
      // setStatus("Form submission successful!");
      setContactInfo({
        ...contactInfo,
        email: "",
        name: "",
        message: "",
        phone_number: "",
        business_name: "",
      });
    } else {
      //   toast.error("Form submission failed. Please try again.");
      // setStatus("Form submission failed. Please try again.");
    }
  };

  return (
    <section
      className="p-20 flex flex-col justify-center items-center"
      id="contact"
    >
      <div className="text-center text-[#4e4e4e]">
        {" "}
        <h1 className="text-4xl font-semibold pb-5">Contact Us</h1>
        <p>Do you have any message for us? Please drop your message here</p>
      </div>
      <div className="w-full sm:w-3/5 lg:w-1/2 pt-10">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-y-5 ">
            <div className="flex flex-col gap-y-1">
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter your Fullname"
                className="w-full p-2 border border-[#ccc] text-[#555] rounded"
                name="name"
                value={contactInfo.name}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-full p-2 border border-[#ccc] text-[#555] rounded"
                name="email"
                value={contactInfo.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <label>Phone Number</label>
              <input
                type="number"
                placeholder="Enter your Phone Number"
                className="w-full p-2 border border-[#ccc] text-[#555] rounded"
                name="phone_number"
                value={contactInfo.phone_number}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <label>Business Name</label>
              <input
                type="text"
                placeholder="Enter your Business Name"
                className="w-full p-2 border border-[#ccc] text-[#555] rounded"
                name="business_name"
                value={contactInfo.business_name}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col gap-y-1">
              <label>Message</label>
              <textarea
                placeholder="Enter your message"
                className="w-full p-2 border border-[#ccc] text-[#555] rounded"
                name="message"
                value={contactInfo.message}
                onChange={handleChange}
              />
            </div>
          </div>
          <button
            className="bg-[#26ade4] border border-transparent text-white py-2 px-5 text-lg rounded-md mt-10"
            type="submit"
          >
            Submit Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
