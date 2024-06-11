import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Grid from '@mui/material/Grid';
import OrderIcon from '@mui/icons-material/ShoppingCart';
import SettingsIcon from '@mui/icons-material/Settings';
import MembershipIcon from '@mui/icons-material/Group';
import PointsIcon from '@mui/icons-material/Star';

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(2), // Adjusts margin around each button
  padding: theme.spacing(2), // Adjusts padding inside each button
  minWidth: '150px', // Ensures button has a minimum width
  minHeight: '20px', // Ensures button has a minimum height
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}));


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const OverlayButton = styled(Button)(({ theme }) => ({
  position: 'absolute',
  top: '40px',
  right: '10px',
  backgroundColor: 'black',
  color: 'white',
  width: '150px',  // Adjust width as needed
  height: '50px',  // Adjust height as needed
  textTransform: 'none',
}));

const OverlayCard = styled(Card)(({ theme }) => ({
  position: 'absolute',
  top: '200px',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'rgba(255, 255, 255, 1)', // Semi-transparent white background
  padding: theme.spacing(2),
  width: '80%', // Adjust width as needed
  textAlign: 'center',
}));


const MediaContainer = styled('div')({
  position: 'relative',
});



const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 50,
    label: "50",
  },
  {
    value: 100,
    label: "",
  },
];

function valuetext(value) {
  return `${value}°C`;
}


export default function RecipeReviewCard() {
  const theme = useTheme();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 430 }}>
      {/* <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      /> */}
      <MediaContainer>
        <CardMedia
          component="img"
          height="300"
          image="https://st.mngbcn.com/rcs/pics/static/T4/fotos/S20/47055853_99_D6.jpg?ts=1678974079281&imwidth=360&imdensity=2"
          alt="Paella dish"
        />
        <OverlayButton>
        View Member ID
        </OverlayButton>
        <OverlayCard>
          <Typography variant="h6" sx={{color:"#FF0000", fontWeight: 'bold'}}>Hello Prateek</Typography>
          <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
          <Box sx={{ width: 300 }}>
          <Slider
             aria-label="Always visible"
             defaultValue={24}
             getAriaValueText={valuetext}
             marks={marks}
             valueLabelDisplay="on"
             disabled
             sx={{
              color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
             }}
              />
          </Box>
           
          </Box>
          <Typography variant="body1" sx={{}}>You are 76 points away from your next vocuher!</Typography>
        </OverlayCard>
      </MediaContainer>
    <Box sx={{ flexGrow: 1, padding: 1 }}>
      <Grid container spacing={1} justifyContent="center">
        <Grid item>
          <StyledButton variant="contained" color="primary" startIcon={<OrderIcon />}>
            Order
          </StyledButton>
        </Grid>
        <Grid item>
          <StyledButton variant="contained" color="secondary" startIcon={<SettingsIcon />}>
            Settings
          </StyledButton>
        </Grid>
        <Grid item>
          <StyledButton variant="contained" color="success" startIcon={<MembershipIcon />}>
            Membership
          </StyledButton>
        </Grid>
        <Grid item>
          <StyledButton variant="contained" color="warning" startIcon={<PointsIcon />}>
            Points
          </StyledButton>
        </Grid>
      </Grid>

      <Typography variant="h5" sx={{color:"#000000",marginTop:'10px'}}>My Offers</Typography>
      <Card sx={{ maxWidth: 350,marginTop:'20px',padding:'20 20 20 20' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo_-7xs3WxZznfOCVpCK6zJo5ziXxQExAUNQ&s"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Flat 50% off on Purchase of 2000 and above
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          View
        </Button>
      </CardActions>
    </Card>




    </Box>
     
    </Card>
  );
}
