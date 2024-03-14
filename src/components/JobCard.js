import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HealthAndSafetyOutlinedIcon from "@mui/icons-material/HealthAndSafetyTwoTone";
import CampaignTwoToneIcon from "@mui/icons-material/CampaignTwoTone";
import StorefrontTwoToneIcon from "@mui/icons-material/StorefrontTwoTone";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import "../styles/globals.css";
import { useState, useEffect } from "react";
import {
  addToFavorite,
  removeFromFavorite,
  isJobSaved,
  getSavedJobs,
} from "../utils/FavoriteJobs";
import ScheduleTable from "./ScheduleTable";
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

const icons = {
  HealthAndSafetyOutlinedIcon: HealthAndSafetyOutlinedIcon,
  CampaignTwoToneIcon: CampaignTwoToneIcon,
  StorefrontTwoToneIcon: StorefrontTwoToneIcon,
  //...other icons
};
export default function JobCard(props) {
  const [expanded, setExpanded] = React.useState(false);
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const Icon = icons[props.iconName] || null;

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
        avatar={
          <Avatar className="primary" aria-label="avatar">
            {Icon ? <Icon /> : <BusinessCenterOutlinedIcon />}
          </Avatar>
        }
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
        subheader={props.name}
      />
      <CardActions disableSpacing>
        <CardContent sx={{ padding: "0 15px 15px 15px" }}>
          <Typography variant="body2" color="text.secondary">
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

          <Typography variant="body2" color="text.secondary">
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

          <Typography variant="body2" color="text.secondary">
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
          sx={{ backgroundColor: "#F2F2F2" }}
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph style={{ fontWeight: "bold" }}>
            Schedule:
          </Typography>
          <ScheduleTable schedule={props.schedule} />
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
