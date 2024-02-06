import React from "react";
import { Box, Stack, Card, CardContent, CardMedia, Typography, Avatar, CardActions } from "@mui/material";
// import {VideoCard} from '../'
import { colors } from "../../constants/colors";
import moment from "moment";



const Videos = ({ videos }) => {
  console.log(videos);
  return (
    <Stack
      width={"100%"}
      direction={"row"}
      flexWrap={"wrap"}
      position={"relative"}
      justifyContent={"start"}
      alignItems={"center"}
    >
      {videos.map((videoItem) => (
        <Box key={videoItem.id.videoId} m={"10px"}>
          {/* {videoItem.id.videoId && <VideoCard video={videoItem} />} */}
          <Card sx={{ width: "320px", boxShadow: "none", borderRadius: "0" }}>
            <CardMedia
              component="img"
              image={videoItem.snippet.thumbnails.high.url}
              alt={videoItem.snippet.title}
              sx={{ width: "310px", height: "180px" }}
            />

            <>
              <CardContent
                direction={"row"}
                sx={{
                  background: colors.primary,
                  height: "200px",
                  position: "relative",
                }}
              >
                <CardActions>
                  <Avatar src={videoItem.snippet.thumbnails.medium?.url} />
                  <Typography
                    variant="subtitle1"
                    fontWeight={"bold"}
                    // display={"block"}
                  >
                    {videoItem.snippet.channelTitle}
                  </Typography>
                </CardActions>
                <Typography my={"2px"}>
                  {moment(videoItem.snippet.publishedAt).fromNow()}
                </Typography>

                <Typography
                  variant="subtitle2"
                  fontWeight={""}
                  sx={{ opacity: ".6" }}
                >
                  {videoItem.snippet.description}
                </Typography>
              </CardContent>
            </>

            <>
              {/* <Stack
                direction={"row"}
                // position={"absolute"}
                // bottom={"10px"}
                gap={"5px"}
                alignItems={"center"}
              >
                <Avatar src={videoItem.snippet.thumbnails.medium?.url} />
              </Stack> */}
            </>
          </Card>
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
