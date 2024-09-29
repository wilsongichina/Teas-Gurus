import * as Yup from "yup";

export const QuotPageSchema = Yup.object({
  name: Yup.string().required("please enter your name"),
  email: Yup.string().required("please enter your email"),
  number: Yup.string().required("please enter your number"),
  course: Yup.string().required("please enter your service type"),
  budget: Yup.string().required("please enter your budget"),
  message: Yup.string().required("please enter your message"),
});
