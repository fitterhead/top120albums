import React from "react";
import { Box, Grid, Paper } from "@mui/material";
import { Stack } from "@mui/system";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
function SingleAlbum({ album }) {
  const navigate = useNavigate();

  // tao handle click function
  const handleArtistBio = (artistId) => {
    navigate(`/artist/${artistId}`);
  };

  const handleALbumInfo = (artistId) => {
    navigate(`/album/${artistId}`);
  };
  return (
    <Grid item xs={6} md={4} padding={1}>
      <Box
        sx={{
          minHeight: "35vh",
          "@media screen and (max-width: 1400px)": { minHeight: "32vh" },
        }}
      >
        <Stack sx={{ height: "100%" }}>
          <Box
            sx={{
              width: "100%",
              aspectRatio: "1/1",
              flexGrow: 1,
              backgroundColor: "gray",
            }}
          >
            aaa
          </Box>
          <Box sx={{ width: "100%" }}>
            <Stack spacing={0.1} sx={{ padding: "0.5rem" }}>
              <Typography variant="body1">{album.ranking}</Typography>
              <Typography
                onClick={() => handleArtistBio(`${album.artist}`)}
                variant="body2"
              >
                {album.artist}
              </Typography>
              <Typography
                // sx ={{padding:"2rem"}}
                onClick={() => handleALbumInfo(`${album.ranking}`)}
                variant="button"
              >
                {album.album}
              </Typography>
              {/* <Typography variant="body1">{album.ranking}</Typography> */}
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Grid>
  );
}

export default SingleAlbum;
