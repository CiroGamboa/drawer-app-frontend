import React, { Component } from "react";
import CanvasDraw from "react-canvas-draw";
import classNames from "../index.css";
import { useLocation } from 'react-router-dom';


//const location = useLocation();
//const { savedDraw, mode } = location.state;

const DrawCanvas = props => {
    const location = useLocation()
  
    return <DrawComponent location={location} {...props} />
}

class DrawComponent extends Component {
    state = {
        title: "New distribution jeje",
        color: "#154c79",
        width: 800,
        height: 400,
        brushRadius:5,
        lazyRadius: 12
      };

  componentDidMount() {
    console.log(this.props);
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <p>Try it out! Draw something, hit "Save" and then "Load".</p>
        <div className={classNames.tools}>
          <button
            onClick={() => {
              localStorage.setItem(
                "savedDrawing",
                this.saveableCanvas.getSaveData()
              );
            }}
          >
            Save
          </button>
          <button
            onClick={() => {
              this.saveableCanvas.eraseAll();
            }}
          >
            Erase
          </button>
          <button
            onClick={() => {
              this.saveableCanvas.undo();
              this.loadableCanvas.undo();
            }}
          >
            Undo
          </button>
          <div>
            <label>Width:</label>
            <input
              type="number"
              value={this.state.width}
              onChange={e =>
                this.setState({ width: parseInt(e.target.value, 10) })
              }
            />
          </div>
          <div>
            <label>Height:</label>
            <input
              type="number"
              value={this.state.height}
              onChange={e =>
                this.setState({ height: parseInt(e.target.value, 10) })
              }
            />
          </div>
          <div>
            <label>Brush-Radius:</label>
            <input
              type="number"
              value={this.state.brushRadius}
              onChange={e =>
                this.setState({ brushRadius: parseInt(e.target.value, 10) })
              }
            />
          </div>
          <div>
            <label>Lazy-Radius:</label>
            <input
              type="number"
              value={this.state.lazyRadius}
              onChange={e =>
                this.setState({ lazyRadius: parseInt(e.target.value, 10) })
              }
            />
          </div>
        </div>
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
                ref={canvasDraw => (this.loadableCanvas = canvasDraw)}
                saveData={JSON.stringify(this.props.location.state.savedDraw.draw_payload)}
                brushColor={this.state.color}
                brushRadius={this.state.brushRadius}
                lazyRadius={this.state.lazyRadius}
                canvasWidth={this.state.width}
                canvasHeight={this.state.height}
            />)
            }
        </div>
    )
  }
}

export default DrawCanvas;