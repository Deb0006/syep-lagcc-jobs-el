import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HealthAndSafetyOutlinedIcon from "@mui/icons-material/HealthAndSafetyTwoTone";
import CampaignTwoToneIcon from "@mui/icons-material/CampaignTwoTone";
import StorefrontTwoToneIcon from "@mui/icons-material/StorefrontTwoTone";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";

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

  return (
    <Card
      sx={{ maxWidth: 345, border: "1px solid lightgrey", boxShadow: "none" }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#8A9EFF" }} aria-label="avatar">
            {Icon && <Icon />}
          </Avatar>
        }
        action={
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        }
        title={props.title}
        subheader={props.company}
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
            {props.zipcode}
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
            {props.jobCategory}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {props.backgroundCheck === true && (
              <>
                <PersonSearchOutlinedIcon
                  color="secondary"
                  sx={{
                    fontSize: 16, // Adjust the size as needed
                    strokeWidth: 2, // Adjust the thickness of the lines
                    marginBottom: -0.4, // Add space between the job category and icon
                  }}
                />
                {"Background Check Required"}
              </>
            )}
          </Typography>
        </CardContent>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Description:</Typography>
          <Typography paragraph>{props.description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
