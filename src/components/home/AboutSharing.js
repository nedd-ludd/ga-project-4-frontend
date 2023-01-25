import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../common/Typography";
import TextField from "./common/TextField";
import Snackbar from "./common/SnackBar";
import Button from "./common/Button";

export default function AboutSharing() {
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container component="section" sx={{ mt: 10, display: "flex" }}>
      <Grid container>
        <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              bgcolor: "warning.main",
              py: 8,
              px: 3,
            }}
          >
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ maxWidth: 400 }}
            >
              <Typography variant="h4" component="h4" gutterBottom>
                More information about the sharing economy.
              </Typography>
              <Typography gutterBottom variant="h6">
                Sharing is nothing new... we've all been helped by, or helped
                friends whenever they have needed.
              </Typography>
              <Typography gutterBottom variant="h6">
                But intentially not owning things, or owning parts of things, is
                a novell new way to live an enriched life at a fraction of the
                cost of "going it alone".
              </Typography>
              <iframe
                // height="%"
                width="80%"
                src="https://www.youtube.com/embed/yy7MH9TyZck"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <TextField
                noBorder
                placeholder="Your email"
                variant="standard"
                sx={{ width: "100%", mt: 3, mb: 2 }}
              />
              <Button
                type="submit"
                color="primary"
                variant="contained"
                sx={{ width: "100%" }}
              >
                Find out more
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { md: "block", xs: "none" }, position: "relative" }}
        >
          <Box
            sx={{
              position: "absolute",
              top: -67,
              left: -67,
              right: 0,
              bottom: 0,
              width: "100%",
              // background:
              //   "url(/static/themes/onepirate/productCTAImageDots.png)",
            }}
          />

          <Box
            component="img"
            src="https://i.imgur.com/Rgmu0sb.jpg"
            alt="call to action"
            sx={{
              position: "absolute",
              top: -28,
              left: -28,
              right: 0,
              bottom: 0,
              width: "100%",
              maxWidth: 600,
            }}
          />
        </Grid>
      </Grid>
      <Snackbar
        open={open}
        closeFunc={handleClose}
        message="We will send you our best offers, once a week."
      />
    </Container>
  );
}
