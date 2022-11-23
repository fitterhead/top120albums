import { Box } from "@mui/material";
import { Container, Stack } from "@mui/system";
import React from "react";
import TopImageList from "../item/ImageList";

function AlbumRanking() {
  return (
    <Container sx={{ bgcolor: "primary.main", height: "100%" }}>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="stretch"
        spacing={2}
        sx={{ padding: "0.5rem" }}
      >
        <Container
          sx={{
            padding: "1em",
          }}
        >
          <TopImageList />
        </Container>
        <Box sx={{ height: "50px", backgroundColor: "red" }}>BBB</Box>
      </Stack>
    </Container>
  );
}

export default AlbumRanking;
