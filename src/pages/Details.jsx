import  React, { useContext } from "react";
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
import { useLocation, useParams } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { Button } from "@mui/material";
import { Container } from "@mui/system";

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
  const{currentUser}=useContext(AuthContext)
  const { id } = useParams();
  console.log(id);
  const { state } = useLocation();
  console.log(state);

  const handleExpandClick = (e) => {
    setExpanded(!expanded);
    e.preventDefault();
  };

  return (
    <Card
      sx={{ maxWidth: 1000, maxHeight: 1000, marginTop: "10rem", mx: "auto" }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={state.title}
      />
      <CardMedia
        component="img"
        height="194"
        image={state.photoUrl}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        
        {state.email}
        
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
          
       
       
       
       
       
       

        {currentUser.email===state.email && (
        
          <Container>

        
               <Button  sx={{
       margin:"2rem"
     }} variant="contained">Update</Button>
     <Button  color="error" variant="contained">
       Delete
     </Button>
       </Container>
          
        )} 
     
     
     
     
     
     
     
        
      
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

          <Typography paragraph>{state.content}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
