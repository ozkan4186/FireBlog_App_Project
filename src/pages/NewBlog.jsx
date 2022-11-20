import { Box, Button, TextareaAutosize } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { AddUser } from "../helpers/function";

const NewBlog = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  const initialValue = {
    title: "",
    photoUrl: "",
    content: "",
    email: currentUser.email,
  };
  const [newData, setNewData] = useState(initialValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setNewData({ ...newData, [name]: value });
  };
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    AddUser(newData);
    navigate("/");
  };

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
        marginTop: "10rem",
      }}
      noValidate
      autoComplete="off"
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
        name="title"
        value={newData.title}
        onChange={handleChange}
        sx={{ width: "400px" }}
      />
      <TextField
        id="outlined-basic"
        label="Image URL *"
        variant="outlined"
        margin="normal"
        name="photoUrl"
        value={newData.photoUrl}
        onChange={handleChange}
        sx={{ width: "400px" }}
      />
      <TextField
        id="outlined-basic"
        label="Content *"
        variant="outlined"
        margin="normal"
        name="content"
        value={newData.content}
        onChange={handleChange}
        sx={{
          width: "400px",
          "& .MuiInputBase-root": {
            height: "200px",
          },
        }}
      />
      <Button onClick={handleClick} sx={{ width: "400px" }} variant="contained">
        Submit
      </Button>
    </Box>
  );
};
export default NewBlog;
