import React, { useCallback, useMemo } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { useFormik } from "formik";
import { QuotPageSchema } from "../../schema/quoteschema";
import { useNavigate } from "react-router-dom";

const initialValues = {
  name: "",
  email: "",
  number: "",
  course: "",
  budget: "",
  message: "",
};

const QuoteForm = ({ handleClose }) => {
  const navigate = useNavigate()
  const onSubmit = useCallback(async (values, action) => {
    console.log('values', values);
    
    try {
      const response = await fetch(`${process.env.REACT_APP_HOST}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      });
     
      if (response.status === 200) {
        const result = await response.json();
        // alert(result.message);
        navigate("/thanks")
        handleClose();
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Error sending email. Please try again.");
    }
  }, [handleClose]);

  const formik = useFormik({
    initialValues,
    validationSchema: QuotPageSchema,
    onSubmit,
  });

  const renderInput = useCallback((name, label, placeholder, type = "text") => (
    <div key={name}>
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        placeholder={placeholder}
        required
      />
      {formik.errors[name] && formik.touched[name] && (
        <p className="form-error text-red-500">{formik.errors[name]}</p>
      )}
    </div>
  ), [formik]);

  const formFields = useMemo(() => [
    { name: "name", label: "Full Name", placeholder: "Jack" },
    { name: "email", label: "Email", placeholder: "example@domain.io", type: "email" },
    { name: "number", label: "Phone Number", placeholder: "Phone Number" },
    { name: "budget", label: "Budget", placeholder: "$100" },
  ], []);
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
          Life is too short to stress over TEAS exam prep that feels overwhelming. Now, you can focus on what truly matters and let us handle the heavy lifting for your exam success!
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

        <form onSubmit={formik.handleSubmit} className="space-y-6">
          {formFields.map(field => renderInput(field.name, field.label, field.placeholder, field.type))}

         
          {/* Services Dropdown */}
          <div className="">
            <label className="block text-sm font-medium text-gray-700">
              Services
            </label>
            <select
              name="course"
              value={formik.values.course}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            >
              <option value="" className="w-full overflow-hidden" >Select Service</option>
              <option className="w-full overflow-hidden" value="Teas Exam Help">Teas Exam Help</option>
              <option className="w-full overflow-hidden" value="Teas Practice Materials">Teas Practice Materials</option>
            </select>
            {formik.errors.course && formik.touched.course && (
              <p className="form-error text-red-500">{formik.errors.course}</p>
            )}
          </div>


          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Message"
              required
            />
            {formik.errors.message && formik.touched.message && (
              <p className="form-error text-red-500">{formik.errors.message}</p>
            )}
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-full text-white button-bg hover:bg-indigo-700 focus:button-hover element3"
            >
              Get a Quote
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuoteForm;
