import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const cards = [
  {
    id: 1,
    title: 'Leave Settings',
  },
  {
    id: 2,
    title: 'Leave Recall',
  },
  {
    id: 3,
    title: 'Leave History',
  },
  {
    id: 3,
    title: 'Relief Officers',
  },
];
const LeaveDashboard = () => {
  
  const [selectedCard, setSelectedCard] = React.useState(0);
  return (
    <div>
      <h2 className='text-4xl font-medium'>Leave Management</h2>
      <Box
      sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 2,
        marginTop:'25px',
      }}
    >
      {cards.map((card, index) => (
          <Card
            onClick={() => setSelectedCard(index)}
            data-active={selectedCard === index ? '' : undefined}
            sx={{
              backgroundColor: " #131c3e",
              color: " #fff",
              height: '100%',
              borderRadius:'20px',
              cursor:"pointer",
              '&[data-active]': {
                backgroundColor:  '#fff023',
                color:'#000',
                '&:hover': {
                  backgroundColor: 'action.selectedHover',
                },
              },
            }}
          >
            <CardContent sx={{ height: '100%'}}>
              <Typography variant="h5" component="div" sx={{fontWeight:'600' , textAlign:"center"}}>
                {card.title}
              </Typography>
            </CardContent>
          </Card>
      ))}
    </Box>
    </div>
  )
}

export default LeaveDashboard