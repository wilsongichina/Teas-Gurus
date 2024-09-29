import React from "react";
import { Resend } from "resend";
import ContactFormEmail from "./contactForm";

const resend = new Resend('re_3rd6j4B5_GxBTQ8uYaVG2sWHW38XZNt2k');

export const sendEmail = async (formData) => {

    for (const pair of formData.entries()) {
        console.log(pair[0], pair[1]); 
    }
    // console.log("data",data)
  const senderEmail = formData.get("email"); 
  const message = formData.get("message");
  const name = formData.get("name");
  const number = formData.get("number");
  const course = formData.get("course");
  const budget = formData.get("budget");

  console.log('data',senderEmail,message,name,number,course,budget)

  // Simple server-side validation for email and message
  if (!senderEmail) {
    return {
      error: "Invalid sender email",
    };
  }

  if (!message) {
    return {
      error: "Invalid message",
    };
  }

  let result;
  try {
    result = await resend.emails.send({
      from: "onboarding@resend.dev", 
      to: "arjunsingh0528159@gmail.com", 
      subject: "Quote Request from Contact Form",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
        name: name,
        number: number,
        course: course,
        budget: budget,
      }),
      mode: 'no-cors'
    });
  } catch (error) {
    return {
      error
    };
  }

//   return {
//     data: result,
//   };
};

// Simple email validation function
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
