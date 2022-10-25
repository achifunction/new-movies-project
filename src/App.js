import { Route, Routes, redirect, Navigate } from "react-router-dom";
import Login from "./login";
import Mobilehome from "./MobileHome";
import Singup from "./singup";
import Movies from "./movies";
import TVseries from "./tvseries";






function App() {



  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/tvseries" element={<TVseries/>} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/home" element={<Mobilehome />} />
        <Route path="/singup" element={<Singup />} />
        <Route path="/login" element={<Login />} />


      </Routes>
    </div>

  );

}

export default App;
