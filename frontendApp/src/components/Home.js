import DrawingList from "./DrawingList";
import Typography from '@mui/material/Typography';
import classNames from "../index.css";

const Home = () => {
    return (
        <div className="layout">
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                List of all the drawn probability distributions
            </Typography>
          <DrawingList/>
        </div>
    );
}

export default Home;