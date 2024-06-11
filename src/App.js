import './App.css';
import CustomizedRating from '../src/component/slider';
import Box from '@mui/material/Box';
import {Button} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import RecipeReviewCard from './component/cardp';
import HorizontalLinearStepper from './component/stepper';


function App() {
  return (
    <Box>
    <Card sx={{ maxWidth: 430 }}>
    <RecipeReviewCard/>
    </Card>
    </Box>
     
  );
}

export default App;
