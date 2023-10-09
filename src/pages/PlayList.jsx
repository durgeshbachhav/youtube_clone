import React, { useContext } from "react";
import { userContext } from "../context/userContext";
import { Link } from "react-router-dom";

const PlayList = () => {
  const { playlists, setPlaylistId } = useContext(userContext);
  console.log("playlist", playlists);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 px-4 mt-20">
      {playlists.map((item, index) => (
        <Link
          key={index}
          onClick={() => setPlaylistId(item.id)}
          to={`/playlist/${item.id}`}
          className="max-w-xs mx-auto overflow-hidden rounded-lg shadow-lg bg-black text-white"
        >
          <img
            src={item.snippet.thumbnails.medium.url}
            alt={item.snippet.title}
            className="w-full "
          />
          <div className="p-2">
            <h2 className="text-xl font-semibold mb-1">{item.snippet.title}</h2>
            <p className="text-gray-300">{item.snippet.channelTitle}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PlayList;
