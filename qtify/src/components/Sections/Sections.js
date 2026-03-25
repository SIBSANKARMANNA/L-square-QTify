import React, { useEffect, useState } from "react";
import "./Sections.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import Card from "../Card/Card";

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
        <Swiper
          modules={[Navigation]}
          spaceBetween={3}
          navigation
          breakpoints={{
            320: { slidesPerView: 2 },
            635: { slidesPerView: 3 },
            768: { slidesPerView: 5 },
            1024: { slidesPerView: 6 },
          }}
        >
          {albums.map((album) => (
            <SwiperSlide key={album.id}>
              <Card album={album} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default Sections;