import React, { Component } from "react";
import CanvasDraw from "react-canvas-draw";
import classNames from "../index.css";
import { useLocation } from 'react-router-dom';
import { Button, Typography, TextField } from "@mui/material";
import Stack from '@mui/material/Stack';


const DrawCanvas = props => {
    const location = useLocation()
    return <DrawComponent location={location} {...props} />
}

class DrawComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "New distribution",
            color: "#154c79",
            width: 800,
            height: 400,
            brushRadius:5,
            lazyRadius: 12
          };

        this.handleUndo = this.handleUndo.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
      }
      componentDidMount() {
       document.addEventListener("keydown", this.handleKeyPress)
    
      }
      componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyPress)
    
      }
      handleUndo() {
        this.saveableCanvas.undo();
      }
      handleSave(){
        console.log("Save");
      }
      handleKeyPress(event) {
        // if the user hits delete, undo the last change
        if (event.keyCode === 8 || event.keyCode === 46) {
          this.handleUndo();
        
        // If the user hits Enter, save the draw
        } else if (event.keyCode === 13) {
            this.handleSave();
        }
      }

    // state = {
    //     title: "New distribution",
    //     color: "#154c79",
    //     width: 800,
    //     height: 400,
    //     brushRadius:5,
    //     lazyRadius: 12
    //   };

  render() {
    console.log(this.props);
    return (
        <div className="layout">
            <Stack direction="row" spacing={4}>
                <Stack direction="column" spacing={2}>
                <div>
                    <TextField 
                        id="outlined-basic" 
                        label="Distribution Title"
                        variant="outlined" 
                        fullWidth="true"
                        value={this.state.title}
                        onChange={e =>
                            this.setState({ title: e.target.value })
                        }
                        />
                        
                </div>
                <div>
                    <Typography>Width</Typography>
                    <input
                        type="range"
                        value={this.state.width}
                        min="100"
                        max="1000"
                        onChange={e =>
                            this.setState({ width: parseInt(e.target.value, 10) })
                        }
                    />
                </div>
                <div>
                <Typography>Height</Typography>
                    <input
                        type="range"
                        min="100"
                        max="1000"
                        value={this.state.height}
                        onChange={e =>
                            this.setState({ height: parseInt(e.target.value, 10) })
                        }

                    />
                </div>
                <div>
                <Typography>Brush-Radius</Typography>
                    <input
                        type="range"
                        min="1"
                        max="30"
                        value={this.state.brushRadius}
                        onChange={e =>
                            this.setState({ brushRadius: parseInt(e.target.value, 10) })
                        }
                    />
                </div>
                <div>
                <Typography>Lazy-Radius</Typography>
                    <input
                        type="range"
                        value={this.state.lazyRadius}
                        onChange={e =>
                            this.setState({ lazyRadius: parseInt(e.target.value, 10) })
                        }
                        />
                </div>
                

                <Stack direction="row" spacing={2}>
                    <Button
                    variant="contained"
                        onClick={() => {
                            localStorage.setItem(
                                "savedDrawing",
                                this.saveableCanvas.getSaveData()
                            );
                        }}
                    >
                        Save
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => {
                            this.saveableCanvas.eraseAll();
                        }}
                    >
                        Erase
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => {
                            this.saveableCanvas.undo();
                        }}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                               console.log("Yea");
                            } else {
                                alert("sdfsg")
                            }
                         }}                           
                    >
                        Undo
                    </Button>
                    <Button
                        color="error"
                        variant="contained"
                        onClick={() => {
                            this.saveableCanvas.undo();
                        }}
                    >
                        Delete
                    </Button>
                </Stack>
            </Stack>
            
            <div className="canvas">
            {this.props.location.state.mode === "new" ?
                (<CanvasDraw
                    ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
                    brushColor={this.state.color}
                    brushRadius={this.state.brushRadius}
                    lazyRadius={this.state.lazyRadius}
                    canvasWidth={this.state.width}
                    canvasHeight={this.state.height}
                />) :  //Upload previous draw for viewing and editing
                (<CanvasDraw
                    ref={canvasDraw => 
                        (this.loadableCanvas = canvasDraw,
                        this.saveableCanvas = canvasDraw)
                    }
                    saveData={JSON.stringify(this.props.location.state.savedDraw.draw_payload)}
                    brushColor={this.state.color}
                    brushRadius={this.state.brushRadius}
                    lazyRadius={this.state.lazyRadius}
                    canvasWidth={this.state.width}
                    canvasHeight={this.state.height}
                />)
                }
                </div>
            </Stack>
        </div>
    )
  }
}

export default DrawCanvas;