import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { RiRestartFill } from "react-icons/ri";

export default function BackgroundImage() {
  const [imageData, setImageData] = useState({
    imgUrl: "",
    artist: "",
    location: "",
  });
  const [isArtist, setIsArtist] = useState(false);
  const [changeBackground, setChangeBackground] = useState(false);

  const sourceUrl = `https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature`;

  const getImage = async () => {
    try {
      const response = await fetch(sourceUrl);
      const jsonData = await response.json();
      setImageData((prev) => ({
        ...prev,
        imgUrl: jsonData.urls.full,
        artist: jsonData.user.first_name + " " + jsonData.user.last_name,
        location: jsonData.location.name,
      }));
    } catch (error) {
      console.log(error);
      setImageData((prev) => ({
        ...prev,
        imgUrl: process.env.PUBLIC_URL + "images/default_image.jpg",
        artist: "Andreas Gücklhorn",
        location: "Lake Brienz, Switzerland",
      }));
    }
  };

  useEffect(() => {
    getImage();
  }, [changeBackground]);

  return (
    <div>
      <Helmet>
        <style>{`body {background-image: url(${imageData.imgUrl})}`}</style>
      </Helmet>
      <p
        className="image-location"
        onMouseOver={() => setIsArtist(true)}
        onMouseLeave={() => setIsArtist(false)}
      >
        {imageData.location}
      </p>
      <RiRestartFill
        title="change background"
        className="new-image"
        style={{ fontSize: 20, color: "#ffffff" }}
        onClick={() => setChangeBackground((prev) => !prev)}
      />
      {isArtist && <p className="image-artist">{imageData.artist}</p>}
    </div>
  );
}
