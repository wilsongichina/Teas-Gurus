import React from 'react'
import { Card, CardContent } from '@mui/material'
import { FaFileSignature, FaSignature, FaBullhorn } from "react-icons/fa6";

const cardData = [
  {
    icon: FaFileSignature,
    color: '#4262ff',
    title: 'Boost Your Nursing Entrance Grades 742',
    content: 'Boost your nursing entrance grades with us. Our team provides personalized assistance tailored to your needs to ensure you are conversant with key concepts and strategies. With our support, you are assured the best grade that will leave you feeling confident and pave the way for a successful and easy time in your nursing education.'
  },
  {
    icon: FaSignature,
    color: '#6e9240',
    title: '100% Privacy',
    content: 'We value your privacy. Any information you share with us is concealed and remains confidential. TEAS Gurus has a strict privacy policy, so rest assured that no third party will have access to your material. Your safety is our priority.'
  },
  {
    icon: FaBullhorn,
    color: '#ed6f78',
    title: 'We guarantee At least a 90',
    content: 'With education, no one wants to play games with their money (I know I don’t). So, why don’t you invest in our services, where you get your money’s worth and more? Our review section speaks for us with a 90% average score. Describing our team as “perfect” would be an understatement. They have and continue to show professionalism and commitment to ensuring you get the score they promise.'
  }
];

const CardItem = React.memo(({ icon: Icon, color, title, content }) => (
  <Card sx={{
    width: {xs: '95%', md: '400px'},
    height: 'auto',
    borderRadius: '20px',
    background: 'white',
    boxShadow: '0 15px 50px 10px rgba(0, 0, 0, 5%)'
  }}>
    <CardContent sx={{padding: {xs: '20px', md: '50px'}}}>
      <div className='mt-5'>
        <div className='h-[80px] w-[80px] rounded-[50px] flex justify-center items-center' style={{backgroundColor: color}}>
          <Icon style={{fontSize: '30px', color: 'white'}}/>
        </div>
        <div className='md:text-[28px] text-[22px] font-[800] mt-5'>{title}</div>
        <p className='mt-5 mb-4'>{content}</p>
      </div>
    </CardContent>
  </Card>
));

const Cards = () => {
  return (
    <div className='flex justify-center gap-7 md:mt-[80px] items-start flex-wrap mt-[60px]'>
      {cardData.map((card, index) => (
        <CardItem key={index} {...card} />
      ))}
    </div>
  )
}

export default Cards