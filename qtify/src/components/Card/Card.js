import React from "react";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import "./Card.css";
import Typography from "@mui/material/Typography";

const Card = ({ album ,tab}) => {
  return (
    <div className="card">
      <img src={album.image} alt={album.title} />

      <Stack  className="card-bottom">
        <Chip
          className="badge"
          label={`${!tab?album.follows:album.likes} ${tab ? "Likes" : "Follows"}`}
        />
      </Stack>

      <Typography className="card-title">{album.title}</Typography>
    </div>
  );
};

export default Card;