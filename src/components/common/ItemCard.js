import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { useNavigate } from "react-router-dom";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function ItemCard({ name, image, description, id }) {
  const navigate = useNavigate();
  const navigateToItem = (id) => navigate(`/items/${id}`);
  return (
    <Paper
      sx={{
        p: 2,
        margin: "auto",
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
    >
      <Grid container spacing={2}>
        <Grid
          item
          onClick={() => {
            navigateToItem(id);
          }}
        >
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt={name} src={image} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {name}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {description}
              </Typography>
            </Grid>
            <Grid container spacing={1}>
              <Grid item>
                <Typography
                  onClick={() => {
                    navigateToItem(id);
                  }}
                  sx={{ cursor: "pointer" }}
                  variant="body2"
                >
                  View Details
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ cursor: "pointer" }} variant="body2">
                  Save for later
                </Typography>
                {/* TODO: toastify and backend saved list */}
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography
              variant="subtitle1"
              component="div"
              style={{ color: "green" }}
            >
              Available
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
