import  React, { useContext } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { AuthContext } from '../context/AuthContext';
import icon from "../assets/icones.jpeg"

export default function ActionAreaCard() {
    const { currentUser } = useContext(AuthContext);
  return (
    <Card sx={{ maxWidth: 345,marginTop:"10rem",mx:"auto"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={icon}
          alt="green iguana"
          sx={{
            height:""
          }}
     
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