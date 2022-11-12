import DrawingList from "./DrawingList";
import Typography from '@mui/material/Typography';

const Home = () => {
    return (
        <div>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                List of all the drawn probability distributions
            </Typography>
          <DrawingList/>
        </div>
    );
}

export default Home;