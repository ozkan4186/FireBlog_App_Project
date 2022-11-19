import { ToastContainer } from "react-toastify";
import AppRouter from "./app-router/AppRouter";
import "./App.css";

import AuthContextProvider from "./context/AuthContext";


function App() {
  return(
      <div className="App">
   <AuthContextProvider>
     <AppRouter/>
     <ToastContainer/>
   </AuthContextProvider>
      </div>
    
  ) 
}

export default App;
