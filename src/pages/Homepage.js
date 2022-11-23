import { Box, Grid, Paper } from "@mui/material";
import { Container, Stack } from "@mui/system";
import React from "react";
import AlbumRanking from "../components/form/AlbumRanking";
import NumberOneAlbum from "../components/form/NumberOneAlbum";

function Homepage() {
  return (
    <Container
      maxWidth="false"
      sx={{ flexGrow: 1, maxWidth: "1344px", padding: "2rem" }}
    >
      <Grid container>
        <Grid item xs={12} md={6}>
          <NumberOneAlbum />
        </Grid>
        <Grid item xs={12} md={6}>
          <AlbumRanking />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Homepage;
