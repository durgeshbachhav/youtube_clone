import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Video from "./Video";
import Comment from "../components/Comment";

const SingleVideo = () => {
  const { videoId } = useParams();
  const [video, setVideo] = useState();
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [comments, setComments]=useState([])
  // console.log('video id ',videoId);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/v1/public/youtube/videos/${videoId}`, {
        headers: {
          Accept: "application/json",
        },
      })
      .then((response) => setVideo(response.data.data))
      .catch((err) => {
        console.log(err);
      });
  }, [videoId]);

  // console.log("single video ", video);

  // related videos

  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/api/v1/public/youtube/related/${videoId}?page=1&limit=5`,
        {
          headers: {
            Accept: "application/json",
          },
        }
      )
      .then((response) => {
        setRelatedVideos(response.data.data.data);
      });
  }, [videoId]);

  // get comment

  useEffect(()=>{
    axios.get(`http://localhost:8080/api/v1/public/youtube/comments/${videoId}`,{
      headers:{
        'Accept':'application/json'
      }
    })
    .then((response)=>{
      setComments(response.data.data);
    })
  },[])

  console.log('comments',comments);
  return (
    <div className="flex h-screen overflow-hidden w-5/6 bg-black mt-20">
      <div className="w-4/6  overflow-y-auto scrollbar-hidden">
        {video && (
          <div className="container mx-auto p-4">
            {/* Main Video Section (70%) */}
            <div className="mb-6 border-white border-2 px-2 py-2 rounded-md">
              <iframe
                title="YouTube Video"
                width="100%"
                height="500"
                src={`https://www.youtube.com/embed/${videoId}`}
                allowFullScreen
                className="rounded-lg shadow-md"
              ></iframe>
              <h2 className="text-xl font-bold text-white">
                {video.video.items.snippet.title}
              </h2>
            </div>
            <div className="flex">
            <div className="flex items-center mb-4">
              <img
                className="rounded-full mr-4"
                src={video.channel.info.thumbnails.medium.url}
                alt="Channel Thumbnail"
                width="60"
                height="60"
              />
            </div>
            <div className=" flex gap-24">
              <div className="">
                <p className=" text-white">
                  {video.video.items.snippet.channelTitle}
                </p>
                <span className="mx-2">•</span>
                <p className=" text-white">
                  {(video.channel.statistics.subscriberCount / 1000).toFixed(1)}
                  k subscribers
                </p>
              </div>
              <button className="bg-red-500 text-white  px-4 rounded-lg my-3">
                Subscribe
              </button>
            </div>
            </div>
            <hr className="mt-4 mb-4" />
            <div className="mt-6">
              <div className="text-white">
                <span>{video.video.items.statistics.viewCount} views</span>
                <span className="mx-2 text-white">•</span>
                <span>{video.video.items.snippet.publishedAt}</span>
              </div>
              
              <div className="mt-4">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Description
                </h3>
                
                <p className="text-white">
                  {video.video.items.snippet.description}
                </p>
              </div>
            </div>
            <div>
              <hr className="mt-4" />
              <h2 className="text-white mt-3">{comments.length} Comments</h2>
              {
                comments.map((comment , index)=>(

                  <div >
                    <Comment key={index} comment = {comment}/>
                  </div>
                ))
              }
            </div>
          </div>
        )}
      </div>
      {/* Related Videos Section (30%) */}
      <div className="mt-3 w-2/6 flex flex-col gap-2 px-2 py-1 overflow-y-auto scrollbar-hidden bg-black">
        <h2 className="text-white px-2 py-1 rounded-lg bg-slate-700">
          Related Videos
        </h2>
        {relatedVideos.map((item, index) => {
          const { items } = item;

          return (
            <Link
              to={`/videos/${items.id}`}
              key={index}
              className="flex flex-col  px-2 py-2 bg-gray-600 rounded-md "
            >
              <img
                className="rounded-md text-white"
                src={items.snippet.thumbnails.medium.url}
                alt=""
              />
              <div className="flex flex-col gap-2">
                <h2 className="text-white">{items.snippet.localized.title}</h2>
                <p className="text-white">{items.snippet.channelTitle}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SingleVideo;
