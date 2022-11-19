import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { AuthContext } from "../context/AuthContext";
import { DeleteUser, GetUser } from "../helpers/function";
import { useNavigate, useParams } from "react-router";
import { Container } from "@mui/system";

export default function Dashboard() {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const { contactList } = GetUser();

  console.log(contactList);
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/details");
  };
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        flexWrap: "wrap",
        marginTop: "20rem",
        padding:"2rem",
     
        margin:"auto"
      }}
    >
      {contactList?.map((item) => {
        return (
          <Card sx={{
            marginTop:"10rem"
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
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.email}
              </Typography>
            </CardContent>
            <CardActions></CardActions>
          </Card>
        );
      })}
    </Container>
  );
}
