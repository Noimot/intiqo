import React from "react";

const ContactUs = () => {
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
      <div className="w-1/2 pt-10">
        <form>
          <div className="flex flex-col gap-y-5 ">
            <div className="flex flex-col gap-y-1">
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter your Fullname"
                className="w-full p-2 border border-[#ccc] text-[#555] rounded"
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-full p-2 border border-[#ccc] text-[#555] rounded"
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <label>Phone Number</label>
              <input
                type="number"
                placeholder="Enter your Phone Number"
                className="w-full p-2 border border-[#ccc] text-[#555] rounded"
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <label>Business Name</label>
              <input
                type="text"
                placeholder="Enter your Business Name"
                className="w-full p-2 border border-[#ccc] text-[#555] rounded"
              />
            </div>

            <div className="flex flex-col gap-y-1">
              <label>Message</label>
              <textarea
                placeholder="Enter your message"
                className="w-full p-2 border border-[#ccc] text-[#555] rounded"
              />
            </div>
          </div>
          <button className="bg-[#26ade4] border border-transparent text-white py-2 px-5 text-lg rounded-md mt-10">
            Submit Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
