import { Card, CardContent, CardMedia } from "@mui/material";
import { colors } from "../../constants/colors";
import React from "react";

const VideoCard = ({ video }) => {
  console.log(video);
  return (
    <Card sx={{ width: "320px", boxShadow: "none", borderRadius: "0" }}>
      <CardMedia
        image={video?.snippet?.thumbnails?.high?.url}
        alt={video?.snippet?.title}
          />
    
       <CardContent sx={{background: colors.primary, height: '200px', position: 'relative'}}></CardContent>
    </Card>
  );
};

export default VideoCard;
