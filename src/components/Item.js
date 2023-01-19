import { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { API } from "../lib/api";
// import BeerRatings from "./common/BeerRatings";
// import ReviewCard from "./common/ReviewCard";
// import { useAuthenticated } from "../hooks/useAuthenticated";
// import { AUTH } from "../lib/auth";

// import {
//   Container,
//   Box,
//   CardActions,
//   CardContent,
//   Button,
//   Typography,
// } from "@mui/material";

const Item = () => {
  // // const [isLoggedIn] = useAuthenticated();
  // // const navigate = useNavigate();
  const { id } = useParams();
  const [singleItem, setSingleItem] = useState(null);
  // const [isUpdated, setIsUpdated] = useState(false);
  // console.log(id);

  useEffect(() => {
    API.GET(API.ENDPOINTS.singleItem(id))
      .then(({ data }) => {
        setSingleItem(data);
        console.log(data);
      })
      .catch(({ message, response }) => {
        console.error(message, response);
      });
    // setIsUpdated(false);
  }, []);
  // }, [id, isUpdated]);

  return <h1>this is a single item</h1>;
};

export default Item;
