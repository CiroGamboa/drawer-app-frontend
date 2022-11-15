import { useLocation } from 'react-router-dom';
import DrawingCanvas from './DrawingCanvas';

const EditDraw = () => {

    const location = useLocation();
    const { savedDraw } = location.state;
    
//   state = {
//     title: "New distribution",
//     color: "#154c79",
//     width: 800,
//     height: 400,
//     brushRadius: 5,
//     lazyRadius: 12
//   };

    console.log(savedDraw);


    return (
        <div>
          <DrawingCanvas draw="jeje" mode="edit"/>
        </div>
    );
}

export default EditDraw;