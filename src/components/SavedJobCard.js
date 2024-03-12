import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import "../styles/globals.css";
import { useState, useEffect } from "react";
import {
  addToFavorite,
  removeFromFavorite,
  isJobSaved,
} from "../utils/FavoriteJobs";
import { useContext } from "react";
import { DialogContext } from "../pages/_app";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));


export default function SavedJobCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [isSaved, setIsSaved] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  const { updateBadgeCount } = useContext(DialogContext);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // check if window is defined
      setIsSaved(isJobSaved(props.id));
    }
    setHasMounted(true); // after the first render
  }, [props.id]);

  if (!hasMounted) {
    return null;
  }
  const handleFavoriteClick = () => {
    if (isSaved) {
      removeFromFavorite(props.id, updateBadgeCount);
    } else {
      addToFavorite(props.id, updateBadgeCount);
    }
    setIsSaved(!isSaved);
  };

  return (
    <Card
      sx={{ maxWidth: 700, border: "1px solid lightgrey", boxShadow: "none" }}
    >
      <CardHeader
        sx={{ paddingBottom: "0px" }}
        action={
          <IconButton
            aria-label="add to favorites"
            onClick={handleFavoriteClick}
            style={{ color: isSaved ? "red" : "gray" }}
          >
            {isSaved ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        }
        title={props.title}
        subheader={
          <Typography sx={{ color: "black" }}>
            {"Worksite Name: " + props.name}
          </Typography>
        }
      />
      <CardActions disableSpacing>
        <CardContent sx={{ padding: "0 15px 15px 5px" }}>
          <Typography variant="body2" color="text.primary">
            <LocationOnOutlinedIcon
              color="secondary"
              sx={{
                fontSize: 16,
                strokeWidth: 2,
                marginBottom: -0.3,
              }}
            />
            {props.zipcode}, {props.address},{props.city}, {props.state}
          </Typography>

          <Typography variant="body2" color="text.primary">
            <CategoryOutlinedIcon
              color="secondary"
              sx={{
                fontSize: 16,
                strokeWidth: 2,
                marginBottom: -0.3,
              }}
            />
            {" " + props.industry}
          </Typography>

          <Typography variant="body2" color="text.primary">
            <BusinessOutlinedIcon
              color="secondary"
              sx={{
                fontSize: 16,
                strokeWidth: 2,
                marginBottom: -0.3,
              }}
            />
            {" " + props.siteImplementation}
          </Typography>
        </CardContent>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          sx={{ backgroundColor: "#f0f0f0" }}
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph style={{ fontWeight: "bold" }}>
            Duties:
          </Typography>
          <Typography paragraph>{props.duties}</Typography>
          <Typography paragraph style={{ fontWeight: "bold" }}>
            Requirements:
          </Typography>
          <Typography paragraph>{props.requirements}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
