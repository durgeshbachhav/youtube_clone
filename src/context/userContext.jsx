import { createContext, useEffect, useState } from "react";
import axios, { Axios } from "axios";

export const userContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [channelData, setChannelData] = useState([]);
  const [channelVideos, setChannelVideos] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [playlistDetails, setPlaylistDetails] = useState([]);
  const [playlistId, setPlaylistId] = useState("");

  // get channel details
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/v1/public/youtube/channel`, {
        headers: {
          Accept: "application/json",
        },
      })
      .then((response) => setChannelData(response.data.data.info))
      .catch((err) => console.log(err));
  }, []);

  // get channel videos
  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/api/v1/public/youtube/videos?page=1&limit=10&query=javascript&sortBy=keep%20one%3A%20mostLiked%20%7C%20mostViewed%20%7C%20latest%20%7C%20oldest`,
        {
          headers: {
            Accept: "application/json",
          },
        }
      )
      .then((response) => setChannelVideos(response.data.data.data))
      .catch((er) => {
        console.log(er);
      });
  }, []);
  // console.log("channel videos ", channelData);

  // get playlist
  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/api/v1/public/youtube/playlists?page=1&limit=5`,
        {
          headers: {
            Accept: "application/json",
          },
        }
      )
      .then((response) => {
        setPlaylists(response.data.data.data);
      })
      .catch((er) => {
        console.log(er);
      });
  }, []);

  // get playlist details

  useEffect(() => {
    if (playlistId) {
      axios
        .get(
          `http://localhost:8080/api/v1/public/youtube/playlists/${playlistId}
    `,
          {
            headers: {
              Accept: "application/json",
            },
          }
        )
        .then((response) => {
          setPlaylistDetails(response.data);
        })
        .catch((er) => {
          console.log(er);
        });
    }
  }, []);
  console.log("id", playlistId);
  console.log("details", playlistDetails);

  return (
    <userContext.Provider
      value={{
        channelData,
        channelVideos,
        playlists,
        setPlaylistId,
        playlistDetails,
      }}
    >
      {children}
    </userContext.Provider>
  );
};
