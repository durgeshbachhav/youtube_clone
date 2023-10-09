import React from "react";

const PlaylistDetails = () => {
  return (
    <div className="container mx-auto mt-20 p-4">
      <h2 className="text-2xl font-bold mb-4 text-white">Playlist Details</h2>

      {/* If there are no videos in the playlist */}
      <div className="bg-gray-200 p-4 rounded-md">
        <p className="text-gray-800">This playlist is currently empty. Add videos to the playlist to see details.</p>
      </div>

      {/* You can add additional content or styling based on your requirements */}
    </div>
  );
};

export default PlaylistDetails;
