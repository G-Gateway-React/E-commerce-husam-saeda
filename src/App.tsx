import React from "react";
import Home from "./Screens/Home/Home";
import SignUp from "./Components/Signup";
import { Routes,BrowserRouter, Route  } from "react-router-dom";
import Login from "./Components/Login/Login";
function App() {
  return (
      // <Home/>
      <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={ <Home />} />

          <Route path="/signup" element={  <SignUp/>} />
          <Route path="/login" element={  <Login/>} />
         
        </Routes>
     

      </div>
      </BrowserRouter>
  );
}

export default App;
