import React from "react";
import { Box, Container, Stack } from "@mui/system";
import { Paper } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function NumberOneAlbum() {
  return (
    <Stack
      sx={{ backgroundColor: "#F2F2F2", padding: "1rem" }}
      direction="column"
      //   justifyContent="space-around"
      alignItems="center"
      spacing={2}
    >
      <Box sx={{ height: "600px", width: "600px", backgroundColor: "yellow" }}>
        AAA
      </Box>
      <Box sx={{ width: "100%" }}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              variant="h1"
              color="text.secondary"
              //   gutterBottom
            >
              radiohead
            </Typography>
            <Typography
              variant="h7"
              // component="div"
            >
              OK COMPUTER
            </Typography>
            <Typography variant="h1">1995</Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Box>
    </Stack>
  );
}

export default NumberOneAlbum;
