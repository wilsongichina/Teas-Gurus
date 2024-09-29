import React, { useMemo, useCallback } from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import deltadata  from "../../constants/faq/delta/deltadata.json";
import Navbar1 from "../../layouts/navbar1/index";
import Navbar2 from "../../layouts/navbar2";
import { Helmet } from "react-helmet";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "1.5rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, 0)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles("dark", {
    backgroundColor: "rgba(255, 255, 255, .05)",
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, 0)",
}));

const Faq = () => {
  const [expanded, setExpanded] = React.useState(deltadata.map((_, index) => `panel${index}`));

  const handleChange = useCallback((panel) => (event, isExpanded) => {
    setExpanded((prevExpanded) =>
      isExpanded
        ? [...prevExpanded, panel]
        : prevExpanded.filter((p) => p !== panel)
    );
  }, []);

  const memoizedAccordions = useMemo(() => deltadata.map((item, index) => (
    <Accordion
      key={index}
      className="!py-[10px] !bg-white !font-bold"
      expanded={expanded.includes(`panel${index}`)}
      onChange={handleChange(`panel${index}`)}
    >
      <AccordionSummary
        aria-controls={`panel${index}-content`}
        id={`panel${index}-header`}
      >
        <Typography className="!font-bold !text-xl">{item.title}</Typography>
      </AccordionSummary>
      <AccordionDetails className="!mx-[25px]">
        <Typography>{item.Description}</Typography>
      </AccordionDetails>
    </Accordion>
  )), [expanded, handleChange]);

  return (
    <>
    <Helmet>
        <title>FAQS – TEAS Gurus</title>
        <meta name="description" content="Frequently Asked Questions - TEAS Gurus" />
      </Helmet>
      <div className="w-[100%] flex justify-center item-center">
        <div className="w-[90%] my-10 rounded-2xl">
          <Navbar2 />
          <h1 className="font-bold text-center mb-6 mt-[100px] text-[#6E9240]">
          We Are Teas Gurus
          </h1>
          <h1 className="font-bold text-center mb-6 mt-[10px] text-4xl">
            Frequently Asked Questions
          </h1>
          <div className="flex justify-center items-center">
            <div className="w-[90%] bg-white my-10 rounded-lg border-b-2">
              {memoizedAccordions}
            </div>
          </div>
          <h2 className="font-bold text-center mb-6 mt-[10px] text-2xl">With this in mind, we confidently assure you: 'Absolutely! You're investing in us to help you achieve at least a 90—nothing less!'"</h2>
        </div>
      </div>
    </>
  );
};

export default React.memo(Faq);
