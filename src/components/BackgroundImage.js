import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

export default function BackgroundImage() {
  const [imageData, setImageData] = useState({
    imgUrl: "",
    artist: "",
    location: "",
  });
  const [isArtist, setIsArtist] = useState(false);

  const sourceUrl = `https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature`;

  const getImage = async () => {
    const response = await fetch(sourceUrl);
    const jsonData = await response.json();
    setImageData((prev) => ({
      ...prev,
      imgUrl: jsonData.urls.full,
      artist: jsonData.user.first_name + " " + jsonData.user.last_name,
      location: jsonData.location.name,
    }));
  };

  useEffect(() => {
    getImage();
  }, [isArtist]);

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
      {isArtist && <p className="image-artist">{imageData.artist}</p>}
    </div>
  );
}
