//   Asosiy sahfa

import { useState, useEffect } from "react";
import { Stack, Box, Container, Typography } from "@mui/material";
import { colors } from "../../constants/colors";
import { Category, Videos } from "../";
import { ApiService } from "../../service/api.service";

const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  const selectedCategoryHandle = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const responsePromise = ApiService.fetching(
          `search?part=snippet&q=${selectedCategory}`
        );
        responsePromise.then((content) => {
          setVideos(content.items);
          // console.log(content.items);
        });
        
      } catch (error) {
        console.log(error);
      }
    }
    getData()

    // Promise orqali
    // ApiService.fetching(`search?part=snippet&q=${selectedCategory}`).then(
    //   (data) => setVideos(data.items)
    // );
  }, []);

  // console.log(process.env.REACT_APP_PABLIC_API_KEY);
  // console.log(videos);

  return (
    <Stack>
      <Category
        selectedCategoryHandle={selectedCategoryHandle}
        selectedCategory={selectedCategory}
      />
      <Box p={2} sx={{ height: "90vh" }}>
        <Container maxWidth={"90%"}>
          {/* Typography - bu paragraf 'p;-' tegi */}
          <Typography variant="h4" fontWeight={"bold"} mb={2}>
            {selectedCategory}{" "}
            <span style={{ color: colors.secondary }}>videos</span>
          </Typography>
          <Videos videos = {videos} />
          {/* {videos.items && videos.items.map((c) => c.kind)} */}
        </Container>
      </Box>
    </Stack>
  );
};

export default Main;
