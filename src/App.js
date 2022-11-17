import { ToastContainer } from "react-toastify";
import AppRouter from "./app-router/AppRouter";
import "./App.css";
import Navbar from "./components/Navbar";
import AuthContextProvider from "./context/AuthContext";


function App() {
  return(
   <AuthContextProvider>
     <AppRouter/>
     <ToastContainer/>
   </AuthContextProvider>
  
    
  ) 
}

export default App;
