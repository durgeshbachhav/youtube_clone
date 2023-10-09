import React, { useContext } from "react";
import { userContext } from "../context/userContext";
import { Link } from "react-router-dom";

const Video = () => {
  const { channelVideos } = useContext(userContext);

  return (
    <div className="grid grid-cols-3 gap-2 px-2 py-4 mt-20 bg-black">
      {channelVideos.map((item, index) => {
        const { items } = item;

        return (
          <Link
            to={`/videos/${items.id}`}
            key={index}
            className="flex flex-col bg-gray-900 rounded-md p-2"
          >
            <img
              className="rounded-md mb-2"
              src={items.snippet.thumbnails.medium.url}
              alt=""
            />
            <div className="flex flex-col gap-2">
              <h2 className="text-white font-bold">{items.snippet.localized.title}</h2>
              <p className="text-white">{items.snippet.channelTitle}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Video;
