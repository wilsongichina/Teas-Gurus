import React, { useMemo } from 'react';
import ChooseCardsComp from '../../components/choosecards/ChooseCardsComp';
import ChooseCardsConst from '../../constants/home/ChooseCardsConst.json';
import { Button } from '@mui/material';

const ChooseCards = React.memo(() => {
    const memoizedCards = useMemo(() => ChooseCardsConst.map((item, index) => (
        <React.Fragment key={index}>
            {/* Single Card */}
            <div className='flex gap-5'>
                <ChooseCardsComp item={item.card1[0]} />
            </div>

            {/* Two Cards */}
            <div className='grid grid-cols-1 gap-5'>
                <div className='flex justify-center flex-col gap-5' >
                    <ChooseCardsComp item={item.card2[0]} />
                    <ChooseCardsComp item={item.card2[1]} />
                </div>
            </div>

            {/* Three Cards */}
            <div className='grid grid-cols-1 gap-6'>
                {item.card3.map((cardItem, cardIndex) => (
                    <ChooseCardsComp key={cardIndex} item={cardItem} />
                ))}
            </div>
        </React.Fragment>
    )), []);

    return (
        <div className="md:h-[150vh] h-full mt-20 ">
            <div className='bg-[#fff4ce] md:py-10 py-4 md:h-[70vh] md:px-[60px] px-3 rounded-[20px] h-full relative'>
                {/* Header */}
                <div className="mb-20 py-5 mx-5">
                    <h1 className="text-3xl text-[38px] font-black">Why Choose Us?</h1>
                    <p className="mt-2 text-[#6e9240] py-3 fonts-para md:w-[65%] w-full ">
                        If you're looking for writers who'll impressively run with your vision, we've got your back. <br />
                        Here are some of the reasons why you should consider us to handle your projects.
                    </p>
                    <Button variant="contained" sx={{borderRadius:"20px",marginTop:"30px" }} >View Sample Grades</Button>
                </div>

                {/* Cards Section */}
                <div className='grid md:grid-cols-3 gap-5 justify-items-center grid-cols-1 md:absolute static w-[95%] top-10 '>
                    {memoizedCards}
                </div>
            </div>
        </div>
    );
});

ChooseCards.displayName = 'ChooseCards';

export default ChooseCards;