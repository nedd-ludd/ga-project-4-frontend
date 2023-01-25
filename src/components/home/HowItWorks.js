import * as React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "./common/Button";
import Typography from "./common/Typography";

const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

const number = {
  fontSize: 24,
  fontFamily: "default",
  color: "secondary.main",
  fontWeight: "medium",
  marginBottom: 3,
};

const image = {
  height: 300,
  // my: 4,
  borderRadius: 75,
};

export default function HowItWorks() {
  return (
    <Box
      component="section"
      sx={{ display: "flex", bgcolor: "secondary.light", overflow: "hidden" }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          // src="/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{
            pointerEvents: "none",
            position: "absolute",
            top: -180,
            opacity: 0.7,
            backgroundColor: "grey",
          }}
        />
        <Typography variant="h4" marked="center" component="h2" sx={{ mb: 10 }}>
          How it works
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>1.</Box>
                <Box
                  component="img"
                  src="https://i.imgur.com/4B8jeE0.jpg"
                  alt="find your friends and make new friends"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  Find your friends/ make new friends.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>2.</Box>
                <Box
                  component="img"
                  src="https://i.imgur.com/haN0Gpc.jpg"
                  alt="list your items"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  List your items for loan, lend when needed.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>3.</Box>
                <Box
                  component="img"
                  src="https://i.imgur.com/Q2LTaR3.jpg"
                  alt="peopl using borrowed items"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  {" Borrow, use, and return other peoples items."}
                  {"Remember to thank them"}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
        <Button
          color="secondary"
          size="large"
          variant="contained"
          component="a"
          href="/register/"
          sx={{ mt: 8 }}
        >
          Get started
        </Button>
      </Container>
    </Box>
  );
}
