import Login from "./components/Login";
import Netflix from "./components/Netflix";
import Signup from "./components/Signup";

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Player from "./components/Player";
import Movies from "./components/Movies";
import TVShow from "./components/TVShow";
import MyList from "./components/MyList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/" element={<Netflix />} />
        <Route exact path="/player" element={<Player />} />
        <Route exact path="/movies" element={<Movies />} />
        <Route exact path="/tv" element={<TVShow />} />
        <Route exact path="/mylist" element={<MyList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
