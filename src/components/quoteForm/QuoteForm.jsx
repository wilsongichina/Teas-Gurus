import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { useState } from "react";
import { useForm } from "@formspree/react";
import { useNavigate } from "react-router-dom";

const QuoteForm = ({ handleClose }) => {
  const navigate = useNavigate();
  const [state, handleSubmit] = useForm("mnnaewpy");
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    budget: "",
    services: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  if (state.succeeded) {
    handleClose();
    navigate("/thanks");
    return <p>Thanks for your submission!</p>;
  }

  console.log('formData',formData);
  return (
    <div className="flex flex-col-reverse md:flex-row h-auto">
      <div className="bg-[#fef2e4] flex-1 flex flex-col justify-between p-8 md:p-16">
        <div>
          <h1 className="text-xl text-center md:text-2xl font-bold text-black mb-4">
            Get Your Free Quote. Fast And Easy.
          </h1>
          <p className="text-center text-gray-600 mb-6">
            Pop in your details and we’ll get back to you asap with a quote at a
            discounted price.
          </p>
        </div>
        <div className="text-center">
          <blockquote className="text-yellow-700 flex justify-center text-4xl">
            <FaQuoteLeft />
          </blockquote>
          <blockquote className="text-gray-700 italic mb-2">
            Life is too short to stress on classes you barely have interest in.
            You now have a chance to focus on what is important in your bucket
            list!
          </blockquote>
          <p className="text-lg font-semibold">ADAM JOHNSON KARTER</p>
          <p className="text-md text-gray-500">Chief Operating Manager</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="bg-white flex-1 p-4 relative">
        {/* Close button */}
        <button
          className="absolute top-1 right-4 text-2xl text-gray-400 hover:text-black"
          onClick={handleClose}
        >
          ✖
        </button>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 my-2 focus:outline-none focus:border-indigo-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              name="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 my-2 focus:outline-none focus:border-indigo-500"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="phone">Phone:</label>
            <input
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 my-2 focus:outline-none focus:border-indigo-500"
              required
            />
          </div>

          <div>
            <label htmlFor="budget">Budget:</label>
            <input
              id="budget"
              type="text"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500  my-2 focus:outline-none focus:border-indigo-500"
            />
          </div>

          {/* Services Dropdown */}
          <div className="">
            <label className="block text-sm font-medium text-gray-700">
              Services
            </label>
            <select
              id="services"
              type="text"
              name="services"
              value={formData.services}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            >
              <option value="" className="w-full overflow-hidden">
                Select Service
              </option>
              <option className="w-full overflow-hidden" value="Teas Exam Help">
                Teas Exam Help
              </option>
              <option
                className="w-full overflow-hidden"
                value="Teas Practice Materials"
              >
                Teas Practice Materials
              </option>
            </select>
          </div>

          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500  my-2 focus:outline-none focus:border-indigo-500"
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="my-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-full text-white button-bg hover:bg-indigo-700 focus:button-hover element3"
          >
            Submit
          </button>

          {/* Display error messages */}
          {state.errors && (
            <div className=" text-red-600">
              <p>Error:</p>
              <ul>
                {Object.entries(state.errors).map(([key, error]) => (
                  <li key={key}>{error.message}</li>
                ))}
              </ul>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default QuoteForm;
