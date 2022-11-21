import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Container } from "@mui/system";
import { AddUser, GetUser } from "../helpers/function";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);
  const navigate=useNavigate()

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const { contactList } = GetUser();

  const handleClick=(data)=>{
    AddUser(data)
    console.log(data)
   
   


  }
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: "3rem",
        flexWrap: "wrap",
      }}
    >
      {contactList?.map((item,id) => {
        return (
          <Card key={id} sx={{ maxWidth: 345, marginTop: "10rem", cursor: "pointer" }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  ö
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={item.title}
            />
            <CardMedia
              component="img"
              height="194"
              image={item.photoUrl}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {item.email}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon onClick={()=>handleClick(item.data)} sx={{
                  color:"red"
                }} />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <Button onClick={()=> navigate(`details/${item.id}`,{state:item})} variant="contained" color="warning" sx={{
                marginLeft:"3rem"
              }}>
                Details
              </Button>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Content:</Typography>
                <Typography paragraph>{item.content}</Typography>
              </CardContent>
            </Collapse>
          </Card>
        );
      })}
    </Container>
  );
}
