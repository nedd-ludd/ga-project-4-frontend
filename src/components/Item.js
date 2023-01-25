import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API } from "../lib/api";
import { AUTH } from "../lib/auth";
import "../styles/item.scss";

import {
  Container,
  Box,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";

const Item = () => {
  const { id } = useParams();
  const [singleItem, setSingleItem] = useState(null);
  const [isOwn, setIsOwn] = useState(false);
  const navigate = useNavigate();

  const navTo = (e) => {
    if (e.target.value === "owner") {
      navigate(`/edit-item/${id}`);
    } else {
      navigate(`/people/${singleItem.categories[0].name}`);
    }
  };

  useEffect(() => {
    if (AUTH.isOwner()) {
      setIsOwn(true);
    }
  }, [singleItem]);

  useEffect(() => {
    API.GET(API.ENDPOINTS.singleItem(id))
      .then(({ data }) => {
        setSingleItem(data);
        setIsOwn(data.owner === AUTH.getPayload().sub);
      })
      .catch(({ message, response }) => {
        console.error(message, response);
      });
  }, [id]);

  return (
    <>
      <Container maxWidth="lg" sx={{ display: "flex" }} className="Item">
        <Box>
          {singleItem?.img ? (
            <img src={"https://i.imgur.com/s4t97Ec.jpg"} alt={"item"} />
          ) : (
            <img src={singleItem?.image} alt={singleItem?.name} />
          )}
        </Box>
        <Box>
          <CardContent>
            <Typography gutterBottom variant="h5" component="p">
              {singleItem?.name}
            </Typography>
            <Typography gutterBottom color="text.secondary">
              From our "{singleItem?.categories[0].name}" section.
            </Typography>
            <Typography color="text.primary" sx={{ fontSize: 18 }} gutterBottom>
              {singleItem?.description}
            </Typography>
          </CardContent>
          <CardActions>
            {isOwn ? (
              <>
                <Typography gutterBottom variant="h7" component="p">
                  You own this item.
                </Typography>
                <Button value={"owner"} onClick={navTo}>
                  EDIT ITEM
                </Button>
              </>
            ) : (
              <Button onClick={navTo}>VIEW OWNER</Button>
            )}
          </CardActions>
        </Box>
      </Container>
    </>
  );
};

export default Item;
