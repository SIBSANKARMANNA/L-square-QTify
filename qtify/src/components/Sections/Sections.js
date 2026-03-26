import React, { useEffect, useState } from "react";
import "./Sections.css";

import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";

const Sections = ({ title, endpoint }) => {
  const [albums, setAlbums] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch(`https://qtify-backend.labs.crio.do/albums/${endpoint}`)
      .then((res) => res.json())
      .then((data) => setAlbums(data))
      .catch((err) => console.error(err));
  }, [endpoint]);

  return (
    <div className="albums-section">
      {/* Header */}
      <div className="albums-header">
        <h4>{title}</h4>
        <button
          className="show-all-btn"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Collapse" : "Show All"}
        </button>
      </div>

      {/* Content */}
      {showAll ? (
        <div className="albums-grid">
          {albums.map((album) => (
            <Card key={album.id} album={album} />
          ))}
        </div>
      ) : (
        <Carousel data={albums} />
      )}
    </div>
  );
};

export default Sections;