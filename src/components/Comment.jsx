import React from "react";
import { AiFillLike, AiFillDislike } from "react-icons/ai";

const Comment = ({ comment }) => {
  return (
    <div className="flex gap-3 mt-4 p-4 bg-gray-800 rounded-md">
      <div>
        <img
          src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl}
          alt="profile"
          className="rounded-full w-12 h-12"
        />
      </div>
      <div className="flex flex-col">
        <h3 className="text-white font-bold cursor-pointer">
          @{comment.snippet.topLevelComment.snippet.authorDisplayName}
        </h3>
        <p className="text-white font-thin">
          {comment.snippet.topLevelComment.snippet.textDisplay}
        </p>
        <div className="flex items-center gap-3 text-white mt-2">
          <span className="flex items-center">
            <AiFillLike color="#3498db" className="mr-1" />
            <span>{comment.snippet.topLevelComment.snippet.likeCount}</span>
          </span>
          <span className="flex items-center">
            <AiFillDislike color="#e74c3c" className="mr-1" />
            <span>{comment.snippet.topLevelComment.snippet.dislikeCount}</span>
          </span>
          <span>Reply</span>
        </div>
      </div>
    </div>
  );
};

export default Comment;
