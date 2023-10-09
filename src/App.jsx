import { Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Channel from "./pages/Channel";
import Video from "./pages/Video";
import SingleVideo from "./pages/SingleVideo";
import PlayList from "./pages/PlayList";
import PlaylistDetails from "./pages/PlaylistDetails";
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-black overflow-hidden">
      <Navbar />
      <div className="flex ">
        <Sidebar />
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/channel" element={<Channel />} />
          <Route path="/videos" element={<Video />} />
          <Route path="/videos/:videoId" element={<SingleVideo />}/>
          <Route path="/playlist" element={<PlayList />}/>
          <Route path='/playlist/:playlistId' element={<PlaylistDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
