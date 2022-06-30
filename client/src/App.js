import Login from "./components/Login";
import Netflix from "./components/Netflix";
import Signup from "./components/Signup";

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Player from "./components/Player";
import Movies from "./components/Movies";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/" element={<Netflix />} />
        <Route exact path="/player" element={<Player />} />
        <Route exact path="/movies" element={<Movies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
