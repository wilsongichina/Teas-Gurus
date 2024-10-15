import React, { useMemo, useCallback } from "react";
import faqdata from "../../../constants/home/faq/faqdata.json";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

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

const FaqItem = React.memo(({ item, index, expanded, handleChange }) => (
  <Accordion
    className="!py-[10px] !bg-white !font-bold"
    expanded={expanded.includes(`panel${index}`)}
    onChange={handleChange(`panel${index}`)}
  >
    <AccordionSummary
      aria-controls={`panel${index}-content`}
      id={`panel${index}-header`}
    >
      <Typography className="!font-bold">{item.title}</Typography>
    </AccordionSummary>
    <AccordionDetails className="!mx-[25px]">
      <Typography className="!text-[#77777B]">{item.Description}</Typography>
    </AccordionDetails>
  </Accordion>
));

const Faq = () => {
  const [expanded, setExpanded] = React.useState(
    faqdata.map((_, index) => `panel${index}`)
  );

  const handleChange = useCallback((panel) => (event, isExpanded) => {
    setExpanded((prevExpanded) =>
      isExpanded
        ? [...prevExpanded, panel]
        : prevExpanded.filter((p) => p !== panel)
    );
  }, []);

  const memoizedFaqItems = useMemo(() => 
    faqdata.map((item, index) => (
      <FaqItem 
        key={index} 
        item={item} 
        index={index} 
        expanded={expanded} 
        handleChange={handleChange} 
      />
    )),
    [expanded, handleChange]
  );

  return (
    <>
      <div className="w-[100%] flex justify-center item-center ">
        <div className="w-[100%] bg-[#E4F0FD] my-5  rounded-2xl   ">
          <h1 className="font-bold text-center mb-6  mt-[100px] text-3xl   ">
          FAQS
          </h1>
          <div className="flex justify-center items-center">
            <div className="w-[90%] bg-white my-5   rounded-lg   border-b-2">
              {memoizedFaqItems}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(Faq);