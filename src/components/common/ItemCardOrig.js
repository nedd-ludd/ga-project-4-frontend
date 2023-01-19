import { useNavigate } from "react-router-dom";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";

export default function ItemCard({ name, image, description, id }) {
  // const navigate = useNavigate();
  // const navigateToBeer = () => navigate(`/crafty-beers/${id}`);

  return (
    <Card sx={{ maxWidth: 345, height: 450 }}>
      {/* <CardActionArea onClick={navigateToBeer}> */}
      <CardActionArea>
        <CardMedia
          component="img"
          image={image}
          alt={name}
          sx={{ maxHeight: 345, objectFit: "contain" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
