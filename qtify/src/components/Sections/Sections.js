import React, { useEffect, useState } from "react";
import "./Sections.css";
import CustomTabs from "../CustomTabs/CustomTabs";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";

const Sections = ({ title, endpoint, tab = false }) => {
  const [albums, setAlbums] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [value, setValue] = useState(0);

  useEffect(() => {
    fetch(`https://qtify-backend.labs.crio.do/${endpoint}`)
      .then((res) => res.json())
      .then((data) => setAlbums(data))
      .catch((err) => console.error(err));
  }, [endpoint]);
 
  const data = [
  { key: "all", label: "All" },
  { key: "jazz", label: "Jazz" },
  { key: "rock", label: "Rock" },
  { key: "pop", label: "Pop" },
  { key: "blues", label: "Blues" },
];

const filteredData =
  tab && data[value].key !== "all"
    ? albums.filter((item) => item.genre?.key === data[value].key)
    : albums;
// console.log('filteredAlbums',filteredAlbums);
  return (
    <div className="albums-section">
      
      {/* Header (ONLY when tab = false) */}
      {!tab && (
        <div className="albums-header">
          <h4>{title}</h4>
          <button
            className="show-all-btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Collapse" : "Show All"}
          </button>
        </div>
      )}

      {/* 🔥 TAB MODE */}
      {tab ? (
        <>
          <div className="albums-header">
            <h4>{title}</h4>
          </div>

          <CustomTabs value={value} onChange={setValue} tabs={data} />

          <Carousel data={filteredData} tab={tab} />
        </>
      ) : (
        /* 🔥 NORMAL MODE */
        <>
          {showAll ? (
            <div className="albums-grid">
              {albums.map((album) => (
                <Card key={album.id} album={album} tab={tab} />
              ))}
            </div>
          ) : (
            <Carousel data={albums} />
          )}
        </>
      )}
    </div>
  );
};

export default Sections;