import React, { Component } from "react";
import CanvasDraw from "react-canvas-draw";


class DrawingCanvas extends Component {
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
        return (
        <div>
            {this.props.mode === "new" ?
            (<CanvasDraw
                ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
                brushColor={this.state.color}
                brushRadius={this.state.brushRadius}
                lazyRadius={this.state.lazyRadius}
                canvasWidth={this.state.width}
                canvasHeight={this.state.height}
            />) :   
            (<CanvasDraw
                ref={canvasDraw => (this.loadableCanvas = canvasDraw)}
                saveData={this.props.draw}
                brushColor={this.props.draw.color}
                brushRadius={this.props.draw.brushRadius}
                lazyRadius={this.props.draw.lazyRadius}
                canvasWidth={this.props.draw.width}
                canvasHeight={this.props.draw.height}
            />)
            }
        </div>
        )
    }
}

export default DrawingCanvas;