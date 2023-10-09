import React, { useContext } from "react";
import { userContext } from "../context/userContext";

const Channel = () => {
  const { channelData } = useContext(userContext);

  if (!channelData) {
    return <div>Loading...</div>;
  }

  const { brandingSettings, statistics, snippet } = channelData;

  return (
    <div className="w-5/6 rounded-sm px-4 py-4 flex flex-col bg-black mt-20">
      <div className="flex items-center space-x-4">
        <div>
          <img
            className="rounded-full w-14"
            src={snippet?.thumbnails?.high?.url}
            alt="profile image"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-white">
                {brandingSettings?.channel.title}
              </h2>
              <p className="text-gray-400">{snippet?.customUrl}</p>
            </div>
            <button className="px-8 py-2 bg-red-600 text-white rounded-xl">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <hr className="mt-4"/>
      <div className="mt-4">
        <p className="text-gray-400">
          <span className="font-bold">Description:</span>{" "}
          <br />
          {brandingSettings?.channel?.description}
        </p>
        <hr className="mt-4 pb-4"/>
        <p className="text-gray-400">
          <span className="font-semibold">Total Videos:</span>{" "}
          {statistics?.videoCount}
        </p>
        <p className="text-gray-400">
          <span className="font-semibold">Total Subscribers:</span>{" "}
          {statistics?.subscriberCount}
        </p>
        <p className="text-gray-400">
          <span className="font-semibold">Total Views:</span>{" "}
          {statistics?.viewCount}
        </p>
      </div>
    </div>
  );
};

export default Channel;
