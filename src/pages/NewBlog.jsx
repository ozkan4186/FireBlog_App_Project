import { Box, Button, TextareaAutosize } from "@mui/material";
import TextField from "@mui/material/TextField";
const NewPost = () => {
 return (
   <Box
     sx={{
       display: "flex",
       flexDirection: "column",
       width: "500px",
       height: "760px",
       boxShadow: 12,
       borderRadius: "20px",
       margin: "auto",
       alignItems: "center",
       marginTop: "3rem",
     }}
   >
     <img
       width="300px"
       src="https://img.freepik.com/free-vector/add-files-concept-illustration_114360-341.jpg?w=740&t=st=1668774252~exp=1668774852~hmac=5bc77556396d41bb1ca82647cb8dc512c1ed81633eef2c808c35de2e42e679b8"
       alt=""
     />
     <TextField
       id="outlined-basic"
       label="New Post Title *"
       variant="outlined"
       margin="normal"
       sx={{ width: "400px" }}
     />
     <TextField
       id="outlined-basic"
       label="Image URL *"
       variant="outlined"
       margin="normal"
       sx={{ width: "400px" }}
     />
     <TextField
       id="outlined-basic"
       label="Content *"
       variant="outlined"
       margin="normal"
       sx={{
         width: "400px",
         "& .MuiInputBase-root": {
           height: "200px",
         },
       }}
     />
     <Button sx={{ width: "400px" }} variant="contained">Submit</Button>
   </Box>
 );
};
export default NewPost;

