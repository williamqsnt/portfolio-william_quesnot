import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



const data = [
  {
    avatarImage: "/react.png",
    title: "Web Development",
    description: "I specialize in web development, with a strong focus on crafting elegant and responsive user interfaces using React and the power of Tailwind CSS. ",
  },
  {
    avatarImage: "/aws.png",
    title: "Cloud AWS ",
    description: "As an experienced cloud engineer, I excel in Infrastructure as Code (IaaC) solutions. Leveraging my expertise, I architect and automate cloud infrastructure using tools like Terraform and AWS CloudFormation.",
  },
  
];

export default function RecipeReviewCard() {


  return (
    <div className='flex flex-wrap justify-center'>
      {data.map((item, index) => (
        <Card key={index} sx={{ maxWidth: 345, marginBottom: 5, margin : 4, backgroundColor : 'transparent', color : 'white' }}>
          <CardHeader
            avatar={
              <img src={item.avatarImage} alt="Avatar" style={{ width: 60, height: 60, objectFit : 'cover', borderRadius : '100%' }} />
            }
            title={
              <Typography variant="h6" component="div" className='font-bold text-lightblue-custom'>
                {item.title}
              </Typography>
            }
          />
          <CardContent>
            <Typography variant="body1" color="white">
              {item.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
