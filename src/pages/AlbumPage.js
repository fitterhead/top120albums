import { Button, Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import "./styles.css";
import ArtistAvatar from "../components/item/ArtistAvatar";
import ArtistBio from "../components/item/ArtistBio";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getContent } from "../features/content/contentSlice";

function AlbumPage() {
  const param = useParams();
  const albumId = param.id;
  const dispatch = useDispatch();
  const listAlbum = useSelector((state) => state.content.contents);

  useEffect(() => {
    dispatch(getContent());
  }, [dispatch]);

  return (
    <Container
      maxWidth="false"
      sx={{
        flexGrow: 1,
        maxWidth: "1344px",
        padding: "2rem",
        "@media screen and (max-width: 820px)": { padding: "0rem" },
      }}
    >
      {listAlbum &&
        listAlbum[0]?.map((singleAlbum) => {
          if (singleAlbum.ranking === albumId) {
            return (
              <Grid key={Math.random()} container sx={{ height: "100%" }}>
                <Grid item xs={12} md={4}>
                  <ArtistAvatar bio={singleAlbum} type="album" />
                </Grid>
                <Grid item xs={12} md={8}>
                  <ArtistBio bio={singleAlbum} />
                </Grid>
              </Grid>
            );
          }
        })}
    </Container>
  );
}

export default AlbumPage;
