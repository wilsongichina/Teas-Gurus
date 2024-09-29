import React, { lazy, Suspense } from "react";
import Navbar1 from "../../layouts/navbar1";
import Loading from "../../components/loading";
import { Helmet } from "react-helmet";
// Lazy load components
const Timeline = lazy(() => import("../../contents/home/timeline/TimeLine"));
const Grade = lazy(() => import("../../contents/home/grade/grade"));
const Pay = lazy(() => import("../../contents/home/pay/pay"));
const Settle = lazy(() => import("../../contents/home/settle/settle"));
const Online = lazy(() => import("../../contents/home/online/online"));
const Class = lazy(() => import("../../contents/home/class/class"));
const Doer = lazy(() => import("../../contents/home/doer/doer"));
const Faq = lazy(() => import("../../contents/home/faq/faq"));

const MemoizedNavbar1 = React.memo(Navbar1);
const Home = () => {
  return (
    <>
      <Helmet>
        <title>Pay Someone to Do My Online TEAS Exam - Take My Online TEAS Exam
        </title>
        <meta name="description" content="Need help with your TEAS exam? Hire TEAS Gurus to take the exam for you and ensure a 90+ score with professional assistance." />
      </Helmet>
    <div className="w-[100%] justify-center flex md:mt-20 mt-3">
      <div className="md:w-[90%] w-[95%]">
        <MemoizedNavbar1/>
        <Suspense fallback={<div><Loading/></div>}>
          <Timeline />
          <Grade />
          <Pay />
          <Settle />
          <Online />
          <Class />
          <Doer />
          <Faq />
        </Suspense>
      </div>
    </div>
    </>
  );
};

export default React.memo(Home);
