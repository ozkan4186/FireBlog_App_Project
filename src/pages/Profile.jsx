import  React, { useContext } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { AuthContext } from '../context/AuthContext';

export default function ActionAreaCard() {
    const { currentUser } = useContext(AuthContext);
  return (
    <Card sx={{ maxWidth: 345,marginTop:"10rem",mx:"auto"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={currentUser?.photoURL}
          alt="green iguana"
     
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {currentUser?.email}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           
            {currentUser?.displayName}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}