import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { AuthContext } from "../context/AuthContext";
import { DeleteUser, GetUser } from "../helpers/function";
import { useParams } from "react-router";

export default function Dashboard() {
  const{currentUser}=useContext(AuthContext)
  const { contactList } = GetUser();
  const { id } = useParams();
  console.log(id);
  console.log(contactList);
  return (
    <Card sx={{ maxWidth: 600, maxHeight:1000,    display: 'inline-flex',
          m: "2rem",
           mx: 'auto' ,
         
        

          p: 3,flexWrap: 'wrap' , justifyContent: 'space-evenly', alignItems: 'center',
    }}>
      {contactList?.map((item,id) => {
        return (
          <div key={id} sx={{
            m:2
          }} >
            <CardMedia
              component="img"
              height="140"
              image={item.photoUrl}
              alt="green iguana"
        
          
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              {item.content}
                 {item.email}
              </Typography>
            </CardContent>
            <CardActions>
               <Button size="small">update</Button>
              <Button  onClick={()=> currentUser==item.email && DeleteUser(item.id)} size="small">delete</Button>
            </CardActions>
          </div>
        );
      })}
    </Card>
  );
}
